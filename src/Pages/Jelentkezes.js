import React, { Component } from "react";
import * as emailjs from "emailjs-com";
///import Layout from "../components/layout";
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { AlignCenter, TextCenter } from "react-bootstrap-icons";
class Jelentkezes extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: name,
      subject: subject,
      message_html: message,
    };
    emailjs.send(
      "gmail",
      "template_hjm9g5r",
      templateParams,
      "user_xASgueF2Vew3uFx2S9FpR"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div style={{ backgroundColor: 363636 }}>
        <div class="container" style={{ paddingTop: 200, paddingBottom: 250 }}>
          <div class="column">
            <div className=".col-sm-4 .col-xs-5">
              <h1 style={{ textAlign: "center" }}>
                Regisztrálj Komposzt Hosztnak
              </h1>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formBasicEmail">
                  <Label className="text-muted">Email címed</Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, "email")}
                    placeholder="E-mail"
                  />
                </FormGroup>
                <FormGroup controlId="formBasicName">
                  <Label className="text-muted">Név</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, "name")}
                    placeholder="Név"
                  />
                </FormGroup>
                <FormGroup controlId="formBasicSubject">
                  <Label className="text-muted">Cím</Label>
                  <Input
                    type="text"
                    name="subject"
                    className="text-primary"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, "subject")}
                    placeholder="Irányítószám, Város, Utca, házszám"
                  />
                </FormGroup>
                <FormGroup controlId="formBasicMessage">
                  <Label className="text-muted">Leírás</Label>
                  <Input
                    type="textarea"
                    name="message"
                    className="text-primary"
                    placeholder="Információk melyet fontosnak tartasz"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, "message")}
                  />
                </FormGroup>
                <Button variant="primary" type="submit">
                  Mehet
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Jelentkezes;
