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
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";


function IndexHeader() {
  return (
    <>


      <div className="header bg-purple pt-5 pb-7">
        <Container>
          <div className="header-body">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="pr-5">
                  <h2 className="display-4 text-white font-weight-light">
                    Online Learning Platform
                  </h2>
                  <h1 className="display-2 text-white font-weight-bold mb-0">
                    Learn a new course from home.
                  </h1>
                  {/* <h3 className="display-4 text-white font-weight-light">
                    A beautiful premium dashboard for Bootstrap 4, React and
                    Reactstrap.
                  </h3> */}
                  <p className="text-white mt-4">
                    Find various courses to learn and improve your skills.
                  </p>
                  <p className="ni ni-check-bold text-white mt-4"> 100+ Online Courses</p> <br></br>
                  <p className="ni ni-check-bold text-white mt-4"> Experienced Teachers</p> <br></br>
                  <p className="ni ni-check-bold text-white mt-4"> Dedicated Forum</p>
                  <div className="mt-5">
                    <Button
                      className="btn-neutral my-2"
                      color="default"
                      // to="/admin/dashboard"
                      // to="/auth/register" // rmal
                      to="/auth/login"
                      
                      tag={Link}
                    >
                      Get Started
                    </Button>
                    {/* <Button
                      className="my-2"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-auth-navbar"
                    >
                      Purchase now
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <Row className="pt-5">
                  <Col md="6">
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-pink text-white rounded-circle shadow mb-4">
                          <i className="ni ni-hat-3" />
                        </div>
                        <h5 className="h3">Attend Classes</h5>
                        <p>Attending classes help you make connections between concepts.</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-pink text-white rounded-circle shadow mb-4">
                          <i className="ni ni-spaceship" />
                        </div>
                        <h5 className="h3">Learn New Skills</h5>
                        <p>Learning new skills is essential to advancing your career.</p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="pt-lg-5 pt-4" md="6">
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-pink text-white rounded-circle shadow mb-4">
                          <i className="ni ni-chat-round" />
                        </div>
                        <h5 className="h3">Find Peers</h5>
                        <p>Networking and sharing experiences amongst peers is critical.</p>
                      </CardBody>
                    </Card>
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-pink text-white rounded-circle shadow mb-4">
                          <i className="ni ni-laptop" />
                        </div>
                        <h5 className="h3">100% Remote</h5>
                        <p>Allowing students to learn where they are comfortable contributes to better learning.</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
