import React from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "../components/Button";

export default function Register() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wzehppy",
        "template_hjm9g5r",
        e.target,
        "user_xASgueF2Vew3uFx2S9FpR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="center">
      <Form className="col-md-7 d-flex flex-column   " onSubmit={sendEmail}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{ color: "white" }} name="contact_number">
            Név
          </Form.Label>
          <Form.Control name="from_name" type="text" placeholder="Név" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ color: "white" }}>E-mail</Form.Label>
          <Form.Control name="user_email" type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ color: "white" }}>Cím és elérhetőség</Form.Label>
          <Form.Text className="text-muted">
            Komposzt leadás címe. Telefonszám és/vagy Facebook elérhetőség
          </Form.Text>
          <Form.Control
            name="message"
            as="textarea"
            rows={3}
            placeholder="Üzenet"
          />
        </Form.Group>

        <Button
          variant="primary"
          button="button submit"
          text="Mehet"
          type="submit"
          value="Send"
        >
          Mehet
        </Button>
      </Form>
    </div>
  );
}
