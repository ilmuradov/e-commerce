import { mapper } from "../../utils/component-helper"
import ProductItem from "./ProductItem"
import classes from "./Products.module.css"

const Products = (props) => {
    return (
        <div className={classes.container}>
            {mapper(props.products, ProductItem)}
        </div>
    )   
}

export default Products