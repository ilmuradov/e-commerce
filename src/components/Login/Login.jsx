import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators"
import classes from "./Login.module.css"

const Login = () => {
    const onSubmit = (value) => {
        console.log(value)
    }
    return (
        <div className={classes.container}>
            <div> <h1> Login </h1> </div>
            <div className={classes.formContainer}>
                <ReduxLoginForm onSubmit={onSubmit} required={required} />
            </div>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="username"> Your username </label>
                <Field name="username" type="text" component="input" validate={props.required} />
            </div>
            <div>
                <label htmlFor="password"> Your password </label>
                <Field name="password" type="password" component="input" />
            </div>
            <button type="submit" > Submit </button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: "login"
})(LoginForm)

export default Login