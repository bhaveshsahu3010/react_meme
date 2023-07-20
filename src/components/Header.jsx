import React from "react";
import "../CSS/Header.css"
import image from "../images/troll-face.png"

export default function Header()
{
    return (
        <header className="header">
            <img src={image} className="troll" />
            <h2 className="title">Meme Generator</h2>
            <h3 className="project3">React Course - Project 3</h3>
        </header>
    )
}
