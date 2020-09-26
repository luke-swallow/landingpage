import React from 'react';
import {Image, Row, Container,Button, Col, Figure, Jumbotron}  from 'react-bootstrap'
import "./Homepage.css";

function Homepage(){
    
    return(
    
       
           <div className="homeContainer">
                <h1 className = "h1tag"> Revision</h1>
                <p className = "ptag">Empowerment through UI/UX</p>
                <Button className="btag" variant="success"size="lg">Request a demo</Button>{''}
            </div>
    );
}

export default Homepage