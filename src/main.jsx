import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import MainRouter from "./Routes/MainRouter"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    </React.StrictMode>
)
