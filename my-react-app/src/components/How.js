import React from 'react';
import "./How.css"

function How() {
    return (
        <div className="howContainer">
            <h1 id= "myh1">How does it work?</h1>
            <div className = "howChild">
                <div className= "flexchild">
                    <img id = "imgTag" src= {require("../images/puppy.jpg")} />
                </div>
                <div className= "flexchild">
                    <p id= "ptag"> replace with description of technology + how it works and how to implement</p>
                    <p id= "ptag"> replace with description of technology + how it works and how to implement</p>
                    <p id= "ptag"> replace with description of technology + how it works and how to implement</p>
                    <p id= "ptag"> replace with description of technology + how it works and how to implement</p>
                    <p id= "ptag"> replace with description of technology + how it works and how to implement</p>
                    <p id= "ptag"> replace with description of technology + how it works and how to implement</p>
                </div>
                
               
            </div>
        </div>
    );
}

export default How