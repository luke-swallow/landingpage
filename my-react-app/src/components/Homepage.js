import React from 'react';
import {Image, Row, Container,Button, Col, Figure, Jumbotron}  from 'react-bootstrap'

function Homepage(){
    return(
    
       <div className  = "homeContainer">
           <div className ="bottom-mid">
             <h1> Revision</h1>
             <p>Empowerment through UI/UX</p>
             <Button variant="success"size="lg">Request a demo</Button>{''}
             </div>
       </div>
    );
}

export default Homepage