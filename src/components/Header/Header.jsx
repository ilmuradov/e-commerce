import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { compose } from "redux"
import classes from "./Header.module.css"
import { getCategoryProducts } from "../../reducers/products-reducer"
import { logout } from "../../reducers/auth-reducer"

const Header = ({ categories, getCategoryProducts, userData }) => {
    const navigate = useNavigate()

    const sendApiCall = async (category) => {
        navigate(`products/categories/${category}`)
        await getCategoryProducts(category)
    }

    const logoutOnClick = () => {
        logout()
        navigate("/")
    }

    if (!categories) {
        return null
    }
    return (
        <div className={classes.header}>
            <div className={classes.favicon}>
                <h1 onClick={() => navigate("/")}> SHOP </h1>
                <img src="favicon.png" alt="SHOP" />
            </div>
            <input type="text" placeholder="Search" />
            <div className={classes.dropdown}>
                <p className={classes.dropbtn}> Categories</p> 
                <div className={classes.dropdown_menu}>
                    <p onClick={() => sendApiCall(categories[0])}> {categories[0]} </p>
                    <p onClick={() => sendApiCall(categories[1])}> {categories[1]} </p>
                    <p onClick={() => sendApiCall(categories[2])}> {categories[2]} </p>
                    <p onClick={() => sendApiCall(categories[3])}> {categories[3]} </p>
                </div>
            </div>
            <div className={classes.cart}> 
                <p onClick={() => navigate("/cart")} > Cart </p>
            </div>
            {!userData ? 
                <div className={classes.cart}>
                    <p onClick={() => { navigate("/login") }}> Login </p>
                </div>
                :
                <div className={classes.cart}>
                    <p onClick={() => logoutOnClick()}> Log out </p>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    fetching: state.products.fetching,
    categories: state.products.categories,
    userData: state.auth.userData
})

export default compose(
    connect(mapStateToProps, {getCategoryProducts, logout})
)(Header)