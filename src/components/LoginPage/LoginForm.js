import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {
    handleFormSubmit(e) {
        e.preventDefault();
        console.log("FORM SUBMIT!");
        return <Redirect to='/contacts' />
    }

    render() {
        return (
            <div style={divStyle}>
                <Panel style={panelStyle}>
                    <Form horizontal className="LoginForm" id="loginForm">
                        <FormGroup controlId="emailId">
                            <FormControl type="email" placeholder="Email Address" /> 
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormControl type="password" placeholder="Password" />
                        </FormGroup>
                        <FormGroup style={buttonStyle} controlId="submit">
                            <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                                Login
                            </Button>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        )
    }
}

export default LoginForm;