import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.name}> <h1> SHOP </h1> </div>
            <p> All right resolved &copy; </p>
            <p> <span> SHOP</span> 2020-2022 </p> 
        </div>
    )
}

export default Footer