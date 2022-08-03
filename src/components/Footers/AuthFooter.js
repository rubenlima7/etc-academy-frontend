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
/*eslint-disable*/

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function AuthFooter() {
  return (
    <>
      <footer className="py-5" id="footer-main"> {/* className="py-5" // rmal */}
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="#" // rmal
                  //target="_blank" // rmal
                >
                  ETC Academy
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href="#" // rmal
                    //target="_blank" // rmal
                  >
                    ETC Academy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#" // rmal
                    //target="_blank" // rmal
                  >
                    Aseful Links
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#" // rmal
                    //target="_blank" // rmal
                  >
                    Category
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#" // rmal
                    //target="_blank" // rmal
                  >
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AuthFooter;
