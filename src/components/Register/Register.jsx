import { Form, Field } from "react-final-form"
import { compose } from "redux"
import { connect } from "react-redux"
import classes from "./Register.module.css"
import { getUserData } from "../../reducers/auth-reducer"
import { async } from "q"
import authApi from "../../API/auth-api"

const Register = ({ getUserData }) => {
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
            <Shop />
            <div className={classes.form}>
                <Form 
                    onSubmit={onSubmit}
                    render = {({ handleSubmit }) => 
                    <form onSubmit={handleSubmit} className={classes.fields}>
                        <h1> Register </h1>
                        <FormField placeholder="Username" fieldName="username" type="text"/>
                        <FormField placeholder="Firstname" fieldName="firstname" type="text"/>
                        <FormField placeholder="Lastname" fieldName="lastname" type="text"/>
                        <FormField placeholder="Password" fieldName="password" type="password"/>
                        <button className={classes.btn} type="submit" > Submit </button>
                    </form>
                    }
                />
            </div>
        </div>
    )
}

const Shop = () => ( <div className={classes.shop}> <h1> shop </h1> </div> )
const FormField = ({placeholder, fieldName, type, validators}) => (
    <div className={classes.field}>
        <Field name={fieldName} validate={validators}>
            {({ input, meta }) => (
                <div>
                    <input className={meta.touched && meta.error ? classes.input + " " + classes.error : classes.input}
                        type={type} {...input} 
                        placeholder={placeholder}
                    />
                    { meta.touched && meta.error ? <span> {meta.error} </span> : null}
                </div>
            )}
        </Field>
    </div>
)

const mapStateToProps = (state) => ({

})

export default compose(
    connect(mapStateToProps, {getUserData})
)(Register)