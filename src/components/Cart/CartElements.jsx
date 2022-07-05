import classes from "./CartElements.module.css"

const CartElements = ({ id, title, image, price }) => {

    return (
        <div className={classes.container} key={id}>
            <div className={classes.info}>
                <div>
                    <img src={image} alt=" " />
                    <h3> {title} </h3>
                </div>
                <span> {price}$ </span>
            </div>
            <div className={classes.btn}>
                <button className={classes.delete} > Delete </button>
                <button className={classes.buy}> Buy </button>
            </div>
        </div>
    )
}

export default CartElements