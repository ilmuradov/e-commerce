import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { compose } from "redux"
import { getCategoryProducts } from "../../reducers/products-reducer"

const Categories = ({ category, id }) => {
    const navigate = useNavigate()
        
    return (
        <p onClick={() => navigate(`/products/categories/${id}`)}> {category} </p>
    )
}

export default compose(
    connect(null, {getCategoryProducts})
)(Categories)