import { useState } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { compose } from "redux"
import { getSingleProduct, getProductsInCart } from "../../reducers/products-reducer"
import classes from "./ProductItem.module.css"

const ProductItem = (props) => {
    const navigate = useNavigate()
    const [productsIsInCart, toggle] = useState(false)

    const { id, title, image, price, getSingleProduct, getProductsInCart, inCart } = props

    const sendApiCall = async (id) => {
        navigate(`/products/${id}`)
        await getSingleProduct(id)
    }

    return (
        <div className={classes.container}>
            <h4> {title} </h4>
            <img src={image} alt={title} />
            <div className={classes.info}>
                <p className={classes.price}> Price: <span>{price}$</span> </p>
                <p className={classes.details} onClick={() => sendApiCall(id)}> Details </p>
            </div>
            <button onClick={() => getProductsInCart({ id, title, image, price })}> 
                {productsIsInCart ? "Remove" : "Add"}
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    inCart: state.products.productsInCart
})

export default compose(
    connect(mapStateToProps, { getSingleProduct, getProductsInCart })
)(ProductItem)