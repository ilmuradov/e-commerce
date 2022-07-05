import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { compose } from "redux"
import Loading from "../Common/Loading"
import classes from "./Product.module.css"
import { getCategoryProducts, getProductsInCart } from "../../reducers/products-reducer"

const Product = ({ product, fetching, getCategoryProducts, getProductsInCart }) => {
    const navigate = useNavigate()
    const { id, title, image, price, category, description, rating } = product

    const sendApiCall = async (category) => {
        navigate(`/products/categories/${category}`)
        await getCategoryProducts(category)
    }

    if (fetching) {
        return <Loading />
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}> 
                <h1> {title} </h1> 
                <h3 onClick={() => sendApiCall(category)}> {category} </h3> 
            </div> 
            <div className={classes.info}>
                <div className={classes.img}>
                    <img src={image} alt={title} />
                </div>
                <div className={classes.dpr}>
                    <p className={classes.description}> {description} </p>
                    <div className={classes.price_rate}>
                        <p className={classes.price}> Price: <span> {price}$ </span> </p>
                        <p className={classes.rate}> 
                            Rating: <span> {rating.rate}</span> of 10 
                        </p>
                    </div>
                    <div className={classes.btn}> 
                        <button onClick={getProductsInCart({ id, title, image, price })}> Add to cart </button> 
                    </div>
                </div>
            </div> 
        </div>
    )
}

const mapStateToProps = (state) => ({
    fetching: state.products.fetching,
    product: state.products.product
})

export default compose(
    connect(mapStateToProps, {getCategoryProducts, getProductsInCart})
)(Product)