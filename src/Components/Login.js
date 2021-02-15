/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = (props) => {
  const {
    buttonLabel,
    className,
    modal,
    toggle
  } = props;

  

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Log In</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
      <p for="examplePassword" sm={2}>New User ? <Button color="info" onClick={toggle}> {' '}Register</Button>{' '}</p>
    </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>Login</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;