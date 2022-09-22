import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
// import helloLight from '../media/SushantPortfolio.png';
// import helloDark from '../media/hello-dark.png';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Home = ({ darkMode }) => {
    return (
        <div>
            <AttentionSeeker shakeX>
                <Row>
                    <Container align="center">
                        <Col lg={12} xs={12}>
                            <br />
                        
                            <div className="img">
                            <img  src="https://user-images.githubusercontent.com/102020617/190065345-29011bd9-32cd-44c1-a90d-318437a97c0a.jpg" alt=""/>
                            </div>
                        </Col>
                    </Container>
                </Row>
                <Row>
                    <Col lg={12} xs={12}>
                        <h1 className="display-3 hello" align="center"><code> Lakhan Yadav</code></h1>
                        <h2 className="lead" align="center">I
                            <span
                                class="txt-rotate"
                                data-period="500"
                                data-rotate='[ " am a Full-Stack Web Developer"]'>
                            </span>
                        </h2>
                    </Col>
                </Row>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home
