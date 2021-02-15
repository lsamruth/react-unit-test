import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from "./Home";
import Steps from './Components/Steps'
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Header login={toggle}/>
      <Home/>
      <Login buttonLabel="Login" modal={modal} toggle={toggle}/>
      {/* <Steps/> */}
       
    </>
  );
}

export default App;
