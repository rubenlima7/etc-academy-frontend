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
// nodejs library to set properties for components
import PropTypes from "prop-types";

// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Progress,
  Row,
  Col,
} from "reactstrap";

function CardsHeader({ name, parentName }) {
  return (
    <>
      <div className="header bg-info pb-6">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="h2 text-white d-inline-block mb-0">{name}</h6>{" "}
                <Breadcrumb
                  className="d-none d-md-inline-block ml-md-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {parentName}
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    {name}
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>

            </Row>
            <Row>

              {/* Lilia - inserção e personalização do cartão, textos e botão */}

              <Col md="12" xl="0">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="h2 font-weight-bold mb-0"
                        >
                          Get personalized course recommendations for you.
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">

                        </span>
                      </div>
                      <Col className="col-auto">
                        {/* <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                          <i className="ni ni-active-40" />
                        </div> */}
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "} */}
                      <span className="text-wrap">The course recommendation algorithms employed by most online learning applications rely upon user activity from existing users in order to make high-quality recommendations.</span>
                    </p>
                    <br></br>
                    <Button
                      className="btn-purple"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>


              </Col>

              {/* Lilia - Inserção de titulo */}
              <Col className="text-left" md="12" xl="0">
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="h2 font-weight-bold text-white mb-3"
                    >My Courses
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">

                    </span>
                  </div>


                  <Col className="text-right">
                    {/* <Button
                  className="btn-neutral"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  New
                </Button> */}


                    {/* Lilia - inserção e edição do botão */}

                    <Button
                      className="btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm">
                      View All
                    </Button>
                  </Col>
                </Row>
              </Col>


              <Col md="12" xl="4">

                {/* Lilia - Introdução de imagem, barra de progresso, textos e títulos */}

                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col mt-2">
                        <img alt="..."
                          className="img-fluid rounded"
                          src={require("assets/img/theme/ux_ui.jpg").default}
                        />
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-muted mb-0"><br></br>
                          UX / UI Full Course
                        </CardTitle>

                        <span className="h2 font-weight-bold mb-0"></span>
                      </div>

                      {/* <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                          <i className="ni ni-chart-pie-35" />
                        </div>
                        
                      </Col> */}
                    </Row>
                    {/* <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p> */}

                    <div>
                      <br></br>

                      <Progress
                        className="progress-md my-2"
                        max="100"
                        value="60"
                        color="purple"
                      />
                      <small className="text-bold">60% of 100 Lessons</small>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="12" xl="4">

                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col mt-2">
                        <img
                          alt="..."
                          className="img-fluid rounded"
                          src={require("assets/img/theme/web3.jpg").default}
                        />
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-muted mb-0"><br></br>
                          Web3 Fundamentals
                        </CardTitle>

                        <span className="h2 font-weight-bold mb-0"></span>
                      </div>

                      {/* <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                          <i className="ni ni-chart-pie-35" />
                        </div>
                        
                      </Col> */}
                    </Row>
                    {/* <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p> */}

                    <div>
                      <br></br>

                      <Progress
                        className="progress-md my-2"
                        max="200"
                        value="10"
                        color="purple"
                      />
                      <small className="text-bold">10% of 200 Lessons</small>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="12" xl="4">

                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col mt-2">
                        <img
                          alt="..."
                          className="img-fluid rounded"
                          src={require("assets/img/theme/web_usab.jpg").default}
                        />
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-muted mb-0"><br></br>
                          Web Usability Essentials
                        </CardTitle>

                        <span className="h2 font-weight-bold mb-0"></span>
                      </div>

                      {/* <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                          <i className="ni ni-chart-pie-35" />
                        </div>
                        
                      </Col> */}
                    </Row>
                    {/* <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p> */}

                    <div>
                      <br></br>

                      <Progress
                        className="progress-md my-2"
                        max="100"
                        value="90"
                        color="purple"
                      />
                      <small className="text-bold">90% of 100 Lessons</small>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

          </div>
        </Container>
      </div>
    </>
  );
}

CardsHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default CardsHeader;
