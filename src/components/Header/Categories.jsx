const Categories = ({ categories }) => {
    for(let i = 0; i < categories.length; i++) {
        const element = <p> {categories[i]} </p>  
        return (
            <div> {element} </div>
        )     
    }
}

export default Categories