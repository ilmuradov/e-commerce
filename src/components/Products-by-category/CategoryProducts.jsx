import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { compose } from "redux"
import { mapper } from "../../utils/component-helper"
import Loading from "../Common/Loading"
import ProductItem from "../Products/ProductItem"
import classes from "./CategoryProducts.module.css"
import { getCategoryProducts } from "../../reducers/products-reducer"
import productsApi from "../../API/products-api"

const CategoryProducts = ({ getCategoryProducts }) => {
    const { categoryId } = useParams()
    debugger

    const [products, setProducts] = useState(null)

    useEffect(() => async () => {
        const res = await productsApi.getCategoryProducts(categoryId)
        setProducts(res)
    }, [])

    if (!products) {
        return <Loading />
    }

    return (
        <div className={classes.container}>
            <h1> m </h1>
            <div className={classes.products}>
                {mapper(products, ProductItem)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    fetching: state.products.fetching,
    products: state.products.categoryProducts,
    categories: state.products.categories
})

export default compose(
    connect(mapStateToProps, {getCategoryProducts})
)(CategoryProducts)