from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fullstack.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CORS_HEADERS'] = 'Content-Type'

db = SQLAlchemy(app)
ma = Marshmallow(app)
cors = CORS(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    categories_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    image = db.Column(db.String(260), nullable=False)

    
    def __repr__(self):
        return '<Product {}>'.format(self.title)


class Categories(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(300), nullable=False)
    products = db.relationship('Product', backref='product', lazy='dynamic')

    def __repr__(self):
        return '<Categories {}>'.format(self.category)

db.create_all()


class ProductsSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'price', 'categories_id', 'description', 'image')

class CategoriesSchema(ma.Schema):
    class Meta:
        fields = ('id', 'category')

product_schema = ProductsSchema()
products_schema = ProductsSchema(many=True)

categories_schema = CategoriesSchema(many=True)


@app.route('/products', methods=['GET'])
@cross_origin()
def get_products():
    all_products = Product.query.all()
    results = products_schema.dump(all_products)
    return jsonify(results)


@app.route('/products/<int:id>', methods=['GET'])
@cross_origin()
def get_product(id):
    product = Product.query.get(id)
    result = product_schema.dump(product)
    return jsonify(result)


@app.route('/products/categories', methods=['GET'])
@cross_origin()
def get_categories():
    all_categories = Categories.query.all()
    result = categories_schema.dump(all_categories)
    return jsonify(result)


if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0', port=8080)