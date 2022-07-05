import { connect } from "react-redux"
import { compose } from "redux"
import { mapper } from "../../utils/component-helper"
import CartElements from "./CartElements"
import classes from "./Cart.module.css"

const Cart = ({ inCart }) => {

    return (
        <div className={classes.container}>
            <h1> Your Cart </h1>
            <div className={classes.products}>
                {mapper(inCart, CartElements)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    inCart: state.products.productsInCart
})

export default compose(
    connect(mapStateToProps, {})
)(Cart)