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
                      src={require("assets/img/brand/react-white.png")}
                      style={{
                        width: "200px",
                      }}
                    />{" "}
                    <h4 className="lead text-white">
                      Gain Insight from Experts
                    </h4>{" "}
                    <div className="btn-wrapper mt-5">
                      <p className="lead text-light">
                        The best eCommerce course has well-trained professionals
                        with many years of experience in this field. They will
                        share their experiences and the best solutions during
                        their struggle to developing a business online. These
                        insights can be your inspiration as well as provide you
                        with an idea when you create your own business online.
                        They can also give you sound advice about
                        entrepreneurship idea.
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
