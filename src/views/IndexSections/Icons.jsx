import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">Our best customers</h2>
                <p className="lead">
                  We helped more than 30 customers and they are very happy to
                  use our service!
                </p>
                <div className="btn-wrapper">
                  <Button color="primary" href="#">
                    View our demo
                  </Button>
                  <Button
                    className="mt-3 mt-md-0"
                    color="default"
                    href="#"
                    target="_blank"
                  >
                    View all our customers
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="blur--hover">
              <div className="icons-container blur-item mt-5 on-screen">
                <i className="icon ni ni-diamond" />
                <i className="icon icon-sm ni ni-vector" />
                <i className="icon icon-sm ni ni-app" />
                <i className="icon icon-sm ni ni-atom" />
                <i className="icon ni ni-bag-17" />
                <i className="icon ni ni-bell-55" />
                <i className="icon ni ni-credit-card" />
                <i className="icon icon-sm ni ni-briefcase-24" />
                <i className="icon icon-sm ni ni-building" />
                <i className="icon icon-sm ni ni-button-play" />
                <i className="icon ni ni-calendar-grid-58" />
                <i className="icon ni ni-camera-compact" />
                <i className="icon ni ni-chart-bar-32" />
              </div>
              <span className="blur-hidden h5 text-success">
                <i>
                  Almost 30 regular customers, their icons are just symbolics.
                </i>
              </span>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
