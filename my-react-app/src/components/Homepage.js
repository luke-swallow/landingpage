import React from 'react';
import {Image, Row, Container,Button, Col, Figure, Jumbotron}  from 'react-bootstrap'

function Homepage(){
    const styles = {
        
    }
    return(
    
       
           <Jumbotron fluid>
               <div className= "child">
                <Row><h1> Revision</h1></Row>
                <Row><p>Empowerment through UI/UX</p></Row>
                <Row><Button variant="success"size="lg">Request a demo</Button>{''}</Row>
               </div>
              
              
             </Jumbotron>
    );
}

export default Homepage