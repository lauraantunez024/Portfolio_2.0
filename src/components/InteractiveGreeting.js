import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import About from './pages/About';
function InteractiveGreeting(props) {
    const [input, setInput] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();    

        props.onSubmit({
            id: Math.random(Math.floor() * 1000),
            text: input
        });
        setInput('');  
    };
    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const buttonStyle = {
        margin:"5px"

    }


    
    return (
        <div>
     <Button variant="primary" style={buttonStyle} onClick={handleShow}>
    What's up?
    </Button>

        

    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          Hello 
        </Modal.Title>
            </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3"
            controlId="greetingForm.ControlInput1">
              <Form.Label>
                What do you call yourself?
              </Form.Label>
              <Form.Control
              type="greeting"
              placeholder="Margery, my first car"
              autofocus/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No thx
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Here ya go
          </Button>
        </Modal.Footer>

    </Modal>
</div>

)
}

export default InteractiveGreeting;