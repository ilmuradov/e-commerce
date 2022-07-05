import productsApi from "../API/products-api"

const SET_PRODUCTS = "SET_PRODUCTS"
const SET_PRODUCT = "SET_PRODUCT"
const SET_CATEGORY_PRODUCTS = "SET_CATEGORY_PRODUCTS"
const SET_CATEGORIES = "SET_CATEGORIES"
const SET_CARTS = "SET_CARTS"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const SET_PRODUCTS_IN_CART = "SET_PRODUCTS_IN_CART"
const DELETE_FROM_CART = "DELETE_FROM_CART"

const initialState = {
    products: null,
    product: null,
    categoryProducts: null,
    categories: null,
    productsInCart: [],
    fetching: false
}

const productsReaducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SET_PRODUCTS: return {
            ...state,
            products: [...action.products]
        }
        case SET_CATEGORY_PRODUCTS: return {
            ...state,
            categoryProducts: action.products
        }
        case SET_PRODUCT: return {
            ...state,
            product: action.product
        }
        case SET_CATEGORIES : return {
            ...state,
            categories: {...action.categories}
        }
        case SET_CARTS: return {
            ...state,
            carts: action.carts
        }
        case SET_PRODUCTS_IN_CART: return {
            ...state,
            productsInCart: [...state.productsInCart, action.product]
        }
        case DELETE_FROM_CART: return {
            ...state,
            productsInCart: [...state.productsInCart, state.productsInCart.splice(action.productIndex, 1)]
        }
        case TOGGLE_FETCHING: return {
            ...state,
            fetching: action.fetching
        }
        default: return state
    }
}

const setProducts = (products) => ({ type: SET_PRODUCTS, products })
const setCategories = (categories) => ({ type: SET_CATEGORIES, categories })
const setSingleProduct = (product) => ({ type: SET_PRODUCT, product })
const setCategoryProducts = (products) => ({ type: SET_CATEGORY_PRODUCTS, products })
const toggleFetching = (fetching) => ({ type: TOGGLE_FETCHING, fetching })
const setCarts = (carts) => ({ type: SET_CARTS, carts })
const setProductsInCart = (product) => ({ type: SET_PRODUCTS_IN_CART, product })
const removeProductFromCart = (productIndex) => ({ type: DELETE_FROM_CAR, productIndex })

export const getProducts = () => async (dispatch) => {
    dispatch(toggleFetching(true))
    const initial = await productsApi.getProducts()
    const products = initial.map(m => m)
    dispatch(setProducts(products))
    dispatch(toggleFetching(false))
}

export const getSingleProduct = (productId) => async (dispatch) => {
    dispatch(toggleFetching(true))
    const res = await productsApi.getSingleProduct(productId)
    dispatch(setSingleProduct(res))
    dispatch(toggleFetching(false))
}

export const getCategoryProducts = (categoryName) => async (dispatch) => {
    dispatch(toggleFetching(true))
    const res = await productsApi.getCategoryProducts(categoryName)
    dispatch(setCategoryProducts(res))
    dispatch(toggleFetching(false))
}

export const getCategories = () => async (dispatch) => {
    const res = await productsApi.getCategories()
    dispatch(setCategories(res))
}

export const getCarts = () => async (dispatch) => {
    const res = await productsApi.getCarts()
    dispatch(setCarts(res))
}

export const getProductsInCart = (product) => (dispatch) => {
    dispatch(setProductsInCart(product))
}

export const deleteProductFromCart = (productIndex) => (dispatch) => {
    dispatch(removeProductFromCart(productIndex))
}

export default productsReaducer