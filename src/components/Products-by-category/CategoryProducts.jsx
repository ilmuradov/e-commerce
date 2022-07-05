import { useState } from "react"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { compose } from "redux"
import { mapper } from "../../utils/component-helper"
import Loading from "../Common/Loading"
import ProductItem from "../Products/ProductItem"
import classes from "./CategoryProducts.module.css"

const CategoryProducts = ({ products, fetching }) => {
    const { categoryName } = useParams()

    if (fetching) {
        return <Loading />
    }

    return (
        <div className={classes.container}>
            <h1> {categoryName} </h1>
            <div className={classes.products}>
                {mapper(products, ProductItem)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    fetching: state.products.fetching,
    products: state.products.categoryProducts
})

export default compose(
    connect(mapStateToProps, {})
)(CategoryProducts)