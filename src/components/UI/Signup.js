import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

import '../../App.css';

function Signup() {
  return (
    <div className='sign_up'>

      <Form className='signup_form text-center bg-dark bg-opacity-75 rounded p-3'>
        <Form.Group>
          <Form.Label className='text-light fs-5 fw-normal p-3'>Don’t Just Watch, Be Part of It – Sign Up Now!</Form.Label>
          <Button className='w-100' variant='primary'> Sign Up</Button>
        </Form.Group>
        <hr  className='text-light my-4'/>
        <Form.Group>
          <Form.Label className='text-light fs-5 fw-normal pb-3'>No Signup? No Problem! Login as Guest</Form.Label>
          <Button className='w-100' variant='secondary'> Login</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Signup;
