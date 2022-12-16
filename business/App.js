import React from "react"
import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"

export default function App() {
    return (
        <div className="container">
            <Info />
            <About />
            <Footer />
        </div>
    )
}