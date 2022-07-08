import { Form, Field } from "react-final-form"
import { compose } from "redux"
import { connect } from "react-redux"
import classes from "./Login.module.css"
import { getUserData } from "../../reducers/auth-reducer"
import FormField from "../../utils/component-helper"

const Login = ({ getUserData }) => {
    const onSubmit = async (e) => {
        const { username, password } = e
        await getUserData({username, password})
    }

    const required = (value) => (value ? undefined : "This field is required!")
    const minValue = (min) => (value) => {
        if(value && value.length < min) {
            return `Min value is ${min}`
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <Form 
                    onSubmit={onSubmit}
                    render = {({ handleSubmit }) => 
                    <form onSubmit={handleSubmit} className={classes.fields}>
                        <h1> Login </h1>
                        <FormField placeholder="Username" fieldName="username" type="text" classes={classes}/>
                        <FormField placeholder="Password" fieldName="password" type="password" classes={classes}/>
                        <button className={classes.btn} type="submit" > Submit </button>
                    </form>
                    }
                />
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({

})

export default compose(
    connect(mapStateToProps, {getUserData})
)(Login)