import React from "react";

import { Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-hero section-shaped">
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>{" "}
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/argon-react-white.png")}
                      style={{
                        width: "200px",
                      }}
                    />{" "}
                    <p className="lead text-white">
                      دورة ايباي، لبيع المنتجات رقمية{" "}
                    </p>{" "}
                    <div className="btn-wrapper mt-5">
                      <p className="lead text-light">
                        Fed My Ebay is here for you.{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="mt-5"></div>{" "}
                  </Col>{" "}
                </Row>{" "}
              </div>{" "}
            </Container>{" "}
            {/* SVG separator */}{" "}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </>
    );
  }
}

export default Hero;