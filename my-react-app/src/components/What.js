import React from 'react';
import {Image, Row, Container, Col, Figure}  from 'react-bootstrap'
import "./What.css";


function What() {
    return (
           
    <Container fluid className="whatContainer">
        <h1 style={{fontSize:"4vw"}}>What is Revision?</h1>
        <Row style={{color: "red"}}>
            <Col >
                <Figure> 
                    <Figure.Image src={require("../images/puppy.jpg")}  roundedCircle className="puppy"/>
                    <Figure.Caption> <h2 style= {{fontSize: "3vw"}}>Convenient</h2></Figure.Caption>
                </Figure>
            </Col>
            <Col >
                <Figure> 
                    <Figure.Image src={require("../images/puppy.jpg")}   roundedCircle className="puppy"/>
                    <Figure.Caption> <h2 style= {{fontSize: "3vw", textAlign:"center"}}>Convenient</h2></Figure.Caption>
                </Figure>
            </Col>
            <Col >
                <Figure> 
                    <Figure.Image src={require("../images/puppy.jpg")}  roundedCircle className="puppy"/>
                    <Figure.Caption> <h2 style= {{fontSize: "3vw"}}>Convenient</h2></Figure.Caption>
                </Figure>
            </Col>
        </Row>
        <Row >
            <Col>
            <p>
            In an age of digital platforms, businesses spend thousands of dollars on 
            designing the perfect UI for their platform, only to find that customers still find inconvenience in navigation and functions.
When users come across such inconvenience, however, not many have enough incentive to leave feedback. 
When feedback is incentivized, through monetary or premium benefits, it’s hard to tell whether or not the feedback is truly genuine.
And during the rare times when customer feedback is incentivized through inconvenience only, 
users often have trouble describing the exact parts of UI they have trouble with.

This is why companies implement Revision, a customer review tool that collects authentic visual feedback by allowing users to comment easily and directly onto a website’s UI.
        </p>
        </Col>
        <Col >
        <Image src={require("../images/puppy.jpg")} style= {{width:"100%", height:"100%" }} />
        </Col>
    </Row>    
</Container>
    );
}

export default What
