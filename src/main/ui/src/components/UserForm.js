import React from 'react';
import { useState } from 'react';
import { Button, Modal, FormControl, FormGroup } from 'react-bootstrap';

const UserForm = () => {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({});

    const handleClose = (e) => {
      setShow(false);
    };

    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary m-2" onClick={handleShow}>
          Add user
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleClose}>
          <FormGroup>
          <Modal.Header closeButton>
            <Modal.Title variant="text-dark"> Add User </Modal.Title>
          </Modal.Header>
          <Modal.Body>  
            <FormControl
              variant="m-1"
              placeholder="Enter first name"
              aria-label="First Name"
              name="firstName"
            />
            <FormControl
              variant="m-1"
              placeholder="Enter last name"
              aria-label="Last Name"
              name="lastName"
            />
            <FormControl
              variant="m-1"
              placeholder="Enter age"
              aria-label="Age"
              name="age"
            />
            <FormControl
              variant="m-1"
              placeholder="Enter pincode"
              aria-label="pincode"
              name="pinCode"
            />
            <FormControl
              variant="m-1"
              type="email"
              placeholder="Enter email"
              aria-label="email"
              name="email"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"  type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
          </FormGroup>
          </form>
        </Modal>
      </>
    );
};

export default UserForm;