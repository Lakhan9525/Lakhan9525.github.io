import React from 'react'
import { Slide } from "react-awesome-reveal";
import skillsLight from '../media/sam.png';
// import skillsDark from '../media/skills-dark.svg';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = ({darkMode}) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
            <Container>
                <Row>
                <Col lg={4} xs={8}>
                    <h1 className="display-3 skill-h">I can work <p className="with">with</p> </h1>
                    {/* <img src="https://camo.githubusercontent.com/992babdffd8c74a1502de375fbdf7e4d54773242/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e676966" alt="skills" className="skills-img img-fluid animated"/> */}
                     <img src="https://sagarmude.netlify.app/static/media/avatar.711110cc.svg" alt="skills" className="skills-img img-fluid animated"/>
                </Col>
                <Col lg={2} xs={4}>
                    <br></br>
                    <Card className="nbcard">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faHtml5}/>
                    </Button>
                    <br />

                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faCss3Alt}/>
                    </Button>
                    <br />
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faJs}/>
                    </Button>
                    <br />
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faReact}/>
                    </Button> 
                    <br />

                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faNodeJs}/>
                    </Button>

                   
                     

                    {/* <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faNodeJs}/>
                    </Button>

                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faGithub}/>
                    </Button> */}


                    

                    {/* <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <p align="center" className="skill-txt">C</p>
                    </Button> */}


                    </Card>

                </Col>
                <Col lg={6} xs={12}>
                    <br></br>
                    <Card className="skill-nbcard">
                        <Card.Body>
                            <Card.Title>Front End</Card.Title>
                            <Card.Text>HTML, CSS, JavaScript, React.Js,ReactNative, Redux, ChakraUI,TailwindCss.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Backend</Card.Title>
                            <Card.Text>ExpressJS,Java,Python, NodeJS, Mongoose, Socket.IO, Lodash, 
                                Puppeteer,Multer,
                              Dotenv.        
                              </Card.Text>
                        </Card.Body>
                    </Card>
                      <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>DBMS</Card.Title>
                            <Card.Text>MongoDB,MySQL,Microsoft SQL Server,PostgreSQL,GraphQL</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Tools</Card.Title>
                            <Card.Text>Git & Github, PostMan, MongoDB Atlas, AWS</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                <br></br>
                <hr></hr>
            </Container>
            </Slide>
        </div>
    )
}

export default Skills
