import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Headd from './Headd.js';
import Language from './Language.js';
import logo from './logo.png';
import Input from './Input.js';
import Option1 from './Option1.js';
import Response from './response.jsx';

function App() {
  const [showResponse, setShowResponse] = useState(false);

  function clear() {
    let text = document.getElementsByClassName('txt');
    for (let i = 0; i < text.length; i++) {
      text[i].innerHTML = '';
    }
    let pic = document.getElementsByClassName('logo');
    if (pic.length > 0) pic[0].src = '';

    let optionElements = document.getElementsByClassName('options');
    for (let i = 0; i < optionElements.length; i++) {
      optionElements[i].style.display = 'none';
    }

    const inputGrp = document.querySelector('.input-grp');
    if (inputGrp) {
      inputGrp.style.position = 'fixed';
      inputGrp.style.bottom = '50px'; // 50px padding from the bottom
      inputGrp.style.left = '100px'; // 100px padding from the left edge
      inputGrp.style.right = '100px'; // 100px padding from the right edge
      inputGrp.style.padding = '0'; // No additional padding inside the input-grp
      inputGrp.style.backgroundColor = '#DCDFCE'; // Optional background color
      inputGrp.style.border = 'none'; // Remove the border
      inputGrp.style.boxShadow = 'none'; // Remove the shadow
      inputGrp.style.maxWidth = 'calc(100% - 200px)';
    }

    // Set the state to show the Response component
    setShowResponse(true);
  }

  function autofill(text) {
    let elements = document.getElementsByClassName('input');
    if (elements.length > 0) {
      let inputElement = elements[0]; // Assuming there is only one element with this class
      inputElement.value = text; // Set the value of the first element
      clear();
    }
  }

  let text1 = 'What Services does the Department of Justice offer?';
  let text2 = 'How do I report a crime to the DOJ?';
  let text3 = 'What is the DOJ doing to combat human trafficking?';

  return (
    <React.StrictMode>
      <Container fluid>
        <Row className="roww">
          <Col><Headd /></Col>
          <Col className='drop'><Language /></Col>
        </Row>
        {showResponse && <Response query={text1} />}
        <Row className='name_logo'>
          <Col>
            <div><img src={logo} className='logo' /></div>
          </Col>
          <Col>
            <Row className='txt' id="txt1">INFINITE</Row>
            <Row className='txt' id="txt2">AURA</Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Input className='input-grp' id="inp" clear={clear} />
        </Row>
        <Row>
          <Col><Option1 autofill={autofill} text={text1} /></Col>
          <Col><Option1 autofill={autofill} text={text2} /></Col>
          <Col><Option1 autofill={autofill} text={text3} /></Col>
        </Row>
      </Container>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
