import { React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import GitHub from './Github/GitHub'
import Statistic from './Statistic/Statistic'




const Experience = ({ darkMode }) => {

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>- Projects -</b></h2>
                    <br></br>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center style={{height: '336px'}}>
                                        <div className="flip-card" class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src="https://user-images.githubusercontent.com/102020617/190048012-0f85c954-b5bb-411d-8ab0-b98325d0cb4f.png" />
                                                    <Card.Body>
                                                        <Card.Title align="center">-Clone Of Hometo Go-</Card.Title>
                                                        <Card.Text>
                                                            <td style={{fontSize:"14px"}}>
                                                            <p align="center">Features</p>
                                                            <tr>Posting tweet with upload image from files.</tr>
                                                            <tr>Real time chat using websocket.</tr>
                                                            <tr>Added emoji for post and also like functionality.</tr>
                                                            <tr>Various filter functionalities for explore page.</tr>
                                                            <br/>
                                                            <tr>Tech_Stack:HTML,CSS,javascript,React.js</tr>
                                                        
                                            
                                                            </td>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">


                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />



                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />



                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />



                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />
                                                
                                                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <br />
                                    <div>
                                        <a href=" https://voluble-trifle-1a6e8e.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/Lakhan9525/hometogo" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center >
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src="https://user-images.githubusercontent.com/102020617/190049043-92d02721-4552-4784-a5bb-1876d5921a9d.png"/>
                                                    <Card.Body>
                                                        <Card.Title align="center">-Clone Of Mentimeter-</Card.Title>
                                                        <Card.Text>
                                                            <td style={{fontSize:"14px"}}>
                                                            <p align="center">Features</p>
                                                            <tr>Sign-in/Sign-up page with OTP verification</tr>
                                                            <tr>Categorization of products with carousel effect</tr>
                                                            <tr>Various filter functionalities.</tr>
                                                            <tr>Product page with Pincode verification.</tr>
                            
                                                            <br/>
                                                            
                                                            <tr>Tech_Stack:HTML,ChakraUI,javascript,React.js</tr>
                                            
                                                            </td>

                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />

                                                    <br />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />

                                                   





                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />


                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        {/* <Modal show={show} onHide={handleClose} className="modal">
                                <Modal.Body></Modal.Body>
                                <Modal.Footer>
                                <Button variant="outline-dark" onClick={handleClose}>
                                    Close
                                </Button>
                                <a href="" target="_blank" rel="noreferrer noopener">
                                    <Button variant="outline-dark">View Github Repo</Button>
                                </a>
                                </Modal.Footer>
                            </Modal> */}

                                        {/* <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button> */}

                                        <a href="https://eloquent-shaw-3ecec1.netlify.app" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>

                                        <a href="https://github.com/Lakhan9525/-lawful-robin-2026#mentimeter-clone" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src="https://user-images.githubusercontent.com/102020617/190052256-e8ca2da7-9504-4486-a7b1-e11a343a1fb2.png" />
                                                    <Card.Body>
                                                        <Card.Title align="center">-Clone of OUTNET.com-</Card.Title>
                                                        <Card.Text>
                                                        <td style={{fontSize:"14px"}}>
                                                            <p align="center">Features</p>
                                                            <tr>Landing page with CSS effects and much more.</tr>
                                                            <tr>Product page with sorting.</tr>
                                                            <tr>Add to the cart page and checkout page.</tr>
                                                            <tr>contact-us and review page..</tr>
                                                            <br/>
                                                            <tr>Tech_Stack:HTML,mongodb,ChakraUI,JS,React.js</tr>
                            
                                                            </td>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />



                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />


                                                    

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />


                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://gorgeous-sopapillas-340399.netlify.app/index.html" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/satyamkumarjha2002/The_OutNet_Clone" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                        </Row>
                    </Zoom>
                    <br></br>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>

                            </Col>
                            <Col lg={4} sm={12}>

                            </Col>
                            <Col lg={4} sm={12}>

                            </Col>
                        </Row>
                    </Zoom>
                </Container>
            </Fade>
            <br></br>
            <br/>
            <GitHub/>
            <br/>
            <br/>
            <Statistic/>
    
          
        </div>

    )
}

export default Experience
