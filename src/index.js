import React from "react"
import reactDom from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { store } from "./reducers/store"
import "./index.css"

const root = reactDom.createRoot(document.getElementById("root"))
root.render (
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)