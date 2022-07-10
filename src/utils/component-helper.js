import { Field } from "react-final-form"

export const mapper = (object, Component) => { 
    return object.map(m => <Component {...m} key={m.id} />) 
}

 const FormField = ({placeholder, fieldName, type, validators, classes}) => (
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

export default FormField