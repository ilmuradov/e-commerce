import Products from "../Products/Products"

const Home = (props) => {
    return (
        <div>
            <Products products={props.products} />
        </div>
    )
}

export default Home