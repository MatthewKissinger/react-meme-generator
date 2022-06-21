import React from "react"

export default function Header() {
    return (
        <nav>
            <div className="nav--left">
                <img className="nav--logo" src={require("../images/TrollFace.png")} alt="troll face"/>
                <h3 className="nav--left-title">MemeGenerator</h3>
            </div>
            <h5>React Course - Project 3</h5>
        </nav>
    )
}