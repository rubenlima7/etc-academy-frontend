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
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Classroom() {
  const [focused, setFocused] = React.useState(false);
  const [firstName, setfirstName] = React.useState("Mark");
  const [firstNameState, setfirstNameState] = React.useState(null);
  const [lastName, setlastName] = React.useState("Otto");
  const [lastNameState, setlastNameState] = React.useState(null);
  const [username, setusername] = React.useState("");
  const [usernameState, setusernameState] = React.useState(null);
  const [city, setcity] = React.useState("");
  const [cityState, setcityState] = React.useState(null);
  const [state, setstate] = React.useState("");
  const [stateState, setstateState] = React.useState(null);
  const [zip, setzip] = React.useState("");
  const [zipState, setzipState] = React.useState(null);
  const [checkbox, setcheckbox] = React.useState(false);
  const [checkboxState, setcheckboxState] = React.useState(null);

  const handleWhatsapp = () => {
  };
  return (
    <>
      <SimpleHeader name="Classroom" parentName="Classroom" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">ETC Academy Video Chat Platform</h3>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg="8">
                      <p className="mb-0">
                        Classroom
                        <a
                          href="https://stark-ravine-75758.herokuapp.com/709d7098-dd28-4726-83c2-4f9ed57a71ce" // rmal
                          target="_blank"
                          rel="noreferrer"
                          title
                        >
                          {" "}
                          link{" "}
                        </a>
                        .
                      </p>
                      <br></br>
                      <p className="mb-0">
                        Share link to classmates{" "}
                        {/* <i className="fa fa-mobile-alt fa-2x" aria-hidden="true" /> . */}
                        <Button
                          color="primary"
                          type="button"
                          onClick={handleWhatsapp}
                        >
                          <i
                            className="fa fa-mobile-alt fa-2x"
                            aria-hidden="true"
                          />
                        </Button>
                      </p>
                    </Col>
                  </Row>
                  <hr />
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="mb-0">Session History</h3>
                </CardHeader>

                <CardBody>
                  <Row>
                    <Col lg="8"></Col>
                  </Row>
                  <hr />
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="mb-0">Miscellaneous</h3>
                </CardHeader>

                <CardBody>
                  <Row>
                    <Col lg="8"></Col>
                  </Row>
                  <hr />
                </CardBody>
              </Card>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Classroom;
