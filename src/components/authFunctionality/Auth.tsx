import React from 'react';
import Login from './Login';
import SignUp from './Signup';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default class Auth extends React.Component {
    render() {
        return(
            <Container className='auth-container'>
                <Row>
                    <Col md='6'>
                        <SignUp />
                    </Col>
                    <Col md='6' className='login-col'>
                        <Login />
                    </Col>
                </Row>
            </Container>
        )
    }
}