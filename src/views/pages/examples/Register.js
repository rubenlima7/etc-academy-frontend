/*!

=========================================================
* Argon Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";

function Register() {
  const [focusedName, setfocusedName] = React.useState(false);
  const [focusedEmail, setfocusedEmail] = React.useState(false);
  const [focusedPassword, setfocusedPassword] = React.useState(false);
  return (
    <>
      <AuthHeader
        title="Join as a Student, Teacher or Institution"

      />
      <Container className="mt--9 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0">

              <CardHeader className="bg-transparent pb-3">
                {/* Inicio da adição // rmal */}
                <div className="text-center text-muted mb-4">
                  <small>Register with credentials</small>
                </div>
                <div className="text-muted mb-2">
                  <div className="custom-control custom-checkbox custom-checkbox-info ml-4">
                    <input
                      className="custom-control-input"
                      id="chk-todo-task-4"
                      type="checkbox" />
                    <label
                      className="custom-control-label text-md"
                      htmlFor="chk-todo-task-4">
                      <span className="text-muted">I'm a Student</span>
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox custom-checkbox-info ml-4">
                    <input
                      className="custom-control-input"
                      id="chk-todo-task-5"
                      type="checkbox" />
                    <label
                      className="custom-control-label text-md"
                      htmlFor="chk-todo-task-5">
                      <span className="text-muted">I'm a Teacher</span>
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox custom-checkbox-info ml-4">
                    <input
                      className="custom-control-input"
                      id="chk-todo-task-6"
                      type="checkbox" />
                    <label
                      className="custom-control-label text-md"
                      htmlFor="chk-todo-task-6">
                      <span className="text-muted">I'm an Institution</span>
                    </label>
                  </div>

                </div>
                {/* Fim da adição // rmal */}
              </CardHeader>


              <CardBody className="px-lg-5 py-lg-4">
                <Form role="form">
                  <FormGroup
                    className={classnames({
                      focused: focusedName,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Full Name"
                        type="text"
                        onFocus={() => setfocusedName(true)}
                        onBlur={() => setfocusedName(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedName,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-solid fa-globe" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Country"
                        type="text"
                        onFocus={() => setfocusedName(true)}
                        onBlur={() => setfocusedName(false)}
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup
                    className={classnames({
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        onFocus={() => setfocusedEmail(true)}
                        onBlur={() => setfocusedEmail(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={() => setfocusedPassword(true)}
                        onBlur={() => setfocusedPassword(false)}
                      />
                    </InputGroup>
                  </FormGroup>



                  {/* <div className="text-muted font-italic"> // rmal
                    <small>
                      password strength:{" "}
                      <span className="text-success font-weight-700">
                        strong
                      </span>
                    </small>
                  </div> */}
                  <Row className="my-4">
                    <Col xs="12">
                      <div className="custom-control custom-checkbox custom-checkbox-info">
                        <input
                          className="custom-control-input"
                          id="chk-todo-task-7"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label text-xs"
                          htmlFor="chk-todo-task-7"
                        >
                          <span className="text-muted">
                            Send me emails with news, discounts and courses that
                            fits my needs.
                          </span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <Row className="my-4">
                    <Col xs="12">
                      <div className="custom-control custom-checkbox custom-checkbox-info">
                        <input
                          className="custom-control-input"
                          id="chk-todo-task-8"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label text-xs"
                          htmlFor="chk-todo-task-8"
                        >
                          <span className="text-muted">
                            Yes, I understand and agree to the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              ETC academy Terms of Service
                            </a>
                            , including the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              User Agreement{" "}
                            </a>
                            and{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Privacy Policy
                            </a>
                            .
                          </span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button className="mt-4 mb--1" color="info" type="button">
                      Create my Account
                    </Button>
                  </div>
                </Form>

                <hr></hr>
                <div className="text-center text-muted mt--1 mb-4">
                  <small>or register with</small>
                </div>
                <div className="btn-wrapper text-center">
                  {/* <Button // rmal
                    className="btn-neutral btn-icon mr-4"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        alt="..."
                        src={
                          require("assets/img/icons/common/github.svg").default
                        }
                      />
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </Button> */}
                  <Button
                    className="btn-neutral btn-icon mb-3"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-2">
                      <img
                        alt="..."
                        src={
                          require("assets/img/icons/common/google.svg").default
                        }
                      />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardBody>
            </Card>
            <Row className="mt-2">
              <Col className="text-center xs-6">
                <a
                  className="text-light"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}

                >
                  <small>Already have an account? Log In</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
