import { Form } from "react-final-form"
import { compose } from "redux"
import { connect } from "react-redux"
import classes from "./Register.module.css"
import { getUserData } from "../../reducers/auth-reducer"
import FormField from "../../utils/component-helper"

const Register = ({ getUserData }) => {
    const onSubmit = async (e) => {
        const { username, lastname, password } = e
        await getUserData({username, lastname, password})
    }

    const required = (value) => (value ? undefined : "This field is required!")
    const minValue = (min) => (value) => {
        if(value && value.length < min) {
            return `Min value is ${min}`
        }
    }

    return (
        <div className={classes.container}>
            <Shop />
            <div className={classes.form}>
                <Form 
                    onSubmit={onSubmit}
                    render = {({ handleSubmit }) => 
                    <form onSubmit={handleSubmit} className={classes.fields}>
                        <h1> Register </h1>
                        <FormField placeholder="Username" fieldName="username" type="text" classes={classes}/>
                        <FormField placeholder="Lastname" fieldName="lastname" type="text" classes={classes}/>
                        <FormField placeholder="Password" fieldName="password" type="password" classes={classes}/>
                        <button className={classes.btn} type="submit" > Submit </button>
                    </form>
                    }
                />
            </div>
        </div>
    )
}

const Shop = () => ( <div className={classes.shop}> <h1> shop </h1> </div> )

const mapStateToProps = (state) => ({

})

export default compose(
    connect(mapStateToProps, {getUserData})
)(Register)