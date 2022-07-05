import loading from "./Loading.svg"
import classes from "./Loading.module.css"

const Loading = () => {
    return (
        <div className={classes.container}>
            <img src={loading} alt=" " />
        </div>
    )
}

export default Loading