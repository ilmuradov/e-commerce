import { useEffect } from "react"
import { connect } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { compose } from "redux"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import CategoryProducts from "./components/Products-by-category/CategoryProducts"
import Product from "./components/Products/Product"
import Cart from "./components/Cart/Cart"
import { getProducts, getSingleProduct, getCategoryProducts, 
    getCategories, getCarts } from "./reducers/products-reducer"
import Login from "./components/Login/Login"

const App = (props) => {
    useEffect(() => {
        props.getCategories()
        props.getProducts()
        props.getCarts()
    }, [])


    if (props.products === null) {
        return ( <p> Loading... </p> )
    }

    return (
        <div className="app-wrapper">
            <Header />
            <Routes>
                <Route path="/" element={<Home products={props.products} />} />
                <Route path="/products" element={<Home />} />
                <Route path="/products/:productId" 
                    element={<Product getProduct={props.getSingleProduct} product={props.product} />} />
                <Route path="/products/categories/:categoryName"
                    element={<CategoryProducts getProducts={props.getCategoryProducts} products={props.categoryProducts } />} />
                <Route path="/cart"
                    element={<Cart />} />
                <Route path="/login"
                    element={<Login />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.products,
    product: state.products.product,
    categoryProducts: state.products.categoryProducts,
    categories: state.products.categories,
    carts: state.products.carts
})

export default compose(
    connect(mapStateToProps, 
        { getProducts, getSingleProduct, getCategoryProducts, 
            getCategories, getCarts
        }
    )
)(App)