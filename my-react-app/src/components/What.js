import React from 'react';
import {Image, Row, Container, Col, Figure}  from 'react-bootstrap'


function What() {
    return (
        <div className="whatContainer">
           <h1>What is Revision?</h1>
           <Container fluid>
           <Row>
                <Col >
                    <Figure> 
                        <Figure.Image src={require("../images/puppy.jpg")} width = "300" height= "300" roundedCircle className="puppy"/>
                        <Figure.Caption> <h2>Convenient</h2></Figure.Caption>
                    </Figure>
                </Col>
                <Col >
                    <Figure> 
                        <Figure.Image src={require("../images/puppy.jpg")} width = "300" height= "300" roundedCircle className="puppy"/>
                        <Figure.Caption> <h2>Relevant</h2></Figure.Caption>
                    </Figure>
                </Col>
                <Col >
                    <Figure> 
                        <Figure.Image src={require("../images/puppy.jpg")} width = "300" height= "300" roundedCircle className="puppy"/>
                        <Figure.Caption> <h2>Visual</h2></Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            </Container>
                <Row>
                <p>
                In an age of digital platforms, businesses spend thousands of dollars on designing the perfect UI for their platform, only to find that customers still find inconvenience in navigation and functions.

When users come across such inconvenience, however, not many have enough incentive to leave feedback. When feedback is incentivized, through monetary or premium benefits, it’s hard to tell whether or not the feedback is truly genuine.

And during the rare times when customer feedback is incentivized through inconvenience only, users often have trouble describing the exact parts of UI they have trouble with.

This is why companies implement Revision, a customer review tool that collects authentic visual feedback by allowing users to comment easily and directly onto a website’s UI.
                </p>

                </Row>
           
            
             
                
            

        </div>
    );
}

export default What
