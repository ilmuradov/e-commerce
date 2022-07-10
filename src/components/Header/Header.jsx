import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { compose } from "redux"
import classes from "./Header.module.css"
import { getCategoryProducts } from "../../reducers/products-reducer"
import { logout, login } from "../../reducers/auth-reducer"
import FormField, { mapper } from "../../utils/component-helper"
import { Form } from "react-final-form"
import Categories from "./Categories"

const Header = ({ categories, getCategoryProducts, userData, login, status }) => {
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        const { username, password } = e
        login({ username, password })
    }

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
                    {mapper(categories, Categories)}
                </div>
            </div>
            {userData ? <div className={classes.cart}> 
                <p onClick={() => navigate("/cart")} > Cart </p>
            </div> : null}
            {!userData ? 
                <div className={classes.dropdown}>
                    <p className={classes.dropbtn}> Login </p>
                    <div className={classes.dropdown_menu}>
                        <Form onSubmit={onSubmit} render = {({ handleSubmit }) => 
                            <form onSubmit={handleSubmit} className={classes.fields}>
                                <h3> Login </h3>
                                <FormField placeholder="Username" fieldName="username" type="text" classes={classes}/>
                                <FormField placeholder="Password" fieldName="password" type="password" classes={classes}/>
                                {status && status === 401 ? <span className={classes.error}> Username or password incorrect </span> : null}
                                <button className={classes.btn} type="submit" > Submit </button>
                                <a onClick={() => navigate("/register")} className={classes.register_btn}> Do not have an account? </a>
                            </form>
                            }
                        />
                    </div>
                </div>
                :
                <div className={classes.dropdown}>
                    <p className={classes.dropbtn}> My account </p>
                    <div className={classes.dropdown_menu}>
                        <div className={classes.accountInfo}>
                            {userData.img ? <img src={userData.img} alt={userData.username} /> : <div className={classes.noPhoto}></div>}
                            <h3> {userData.username} </h3>
                        </div>
                        <p onClick={() => logoutOnClick()}> logout </p>
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    fetching: state.products.fetching,
    categories: state.products.categories,
    userData: state.auth.userData,
    status: state.auth.status
})

export default compose(
    connect(mapStateToProps, {getCategoryProducts, logout, login})
)(Header)