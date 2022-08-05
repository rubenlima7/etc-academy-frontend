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

// react library for routing
import { Link } from "react-router-dom";

function Login() {
  const [focusedEmail, setfocusedEmail] = React.useState(false);
  const [focusedPassword, setfocusedPassword] = React.useState(false);
  return (
    <>
      <AuthHeader
        title="Log In to ETC Academy" 
        //lead="Use these awesome forms to login or create new account in your project for free."
      />
      <Container className="mt--9 pb-5">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary border-0">
             
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Log in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup
                    className={classnames("mb-3", {
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={() => setfocusedEmail(true)}
                        onBlur={() => setfocusedEmail(true)}
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
                        onBlur={() => setfocusedPassword(true)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-checkbox custom-checkbox-info">
                    <input
                      className="custom-control-input"
                      id="chk-todo-task-9"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label text-xs"
                      htmlFor="chk-todo-task-9"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    {/* <Button className="my-4" color="info" type="button">
                      Log in
                    </Button> */}
                    <Button
                      className="my-4 mb--1"
                      color="info"
                      to="/admin/dashboard"
                      // to="/auth/register" // rmal
                      tag={Link}
                    >
                      Log In
                    </Button>
                  </div>
                  <hr></hr>
                  <div className="text-center text-muted mt-0 mb-4">
                   <small>or log in with</small> 
                </div> 
                <div className="btn-wrapper text-center">
                  {/* <Button // rmal
                    className="btn-neutral btn-icon"
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
                    className="btn-neutral btn-icon"
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
                
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-2">
              <Col xs="6">
                <a
                  className="text-light"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <small>Forgot your password? </small>
                </a>
              </Col>
              <Col className="text-right" xs="6">
                <a
                  className="text-light"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  
                >
                  <small>Don’t have an account?</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
