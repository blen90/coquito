import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Form, Container } from "reactstrap";

export default function Contact() {

  //Setting up emailjs to send email when user submits the form
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mxb2e23', 'template_twwgk7d', e.target, 'user_j4vKKqMNY4xCOIUz7layV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    alert("Your message has been sent!")
  }

  return (
    <Container className="container-fluid">
      <Col sm="6" md="6" className="form text-center">
        <h5 className="email"> Fill out the form for me to get in touch with you!</h5>
        <Form className="justify-content-center" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <li>
            <input type="text" className="form-name" name="user_name" placeholder="Name" />
          </li>
          <li>
            <input type="text" className="form-email" name="user_email" placeholder="Email" />
          </li>
          <li>
            <input type="text" className="form-message" name="message" placeholder="Message" />
          </li>
          <li>
            <button type="submit" className="submit-button">Send</button>
          </li>
          <br></br>
          <br></br>
          <h5 className="email"> Or if you prefer you can email me direcly at:</h5> <br></br>
          <strong><h4><a className="email" href="mailto:blen.or90@gmail.com" alt="Email me at:">blen.or90@gmail.com</a></h4> </strong>
        </Form>
      </Col>
    </Container>
  );
}