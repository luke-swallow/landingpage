import React from 'react';
import "./How.css";

function How() {
    return (
        <div className="howContainer">
            <h1 id= "myh1">How does it work?</h1>
            <div className = "howChild">
                <img id = "imgTag" src= {require("../images/puppy.jpg")} />
                <p id= "ptag"> replace with description of technology + how it works and how to implement</p>
            </div>
        </div>
    );
}

export default How