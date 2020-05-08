import React from "react";
import { Button, Modal, Row, Col } from "reactstrap";

class Modals extends React.Component {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    return (
      <>
        <h2 className="mt-lg mb-5">
          <span>Subscription</span>
        </h2>
        <small>
          <b>Only Paypal is accepted</b>
        </small>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="AZU8EMRST9VSW" />
          <table>
            <tr>
              <td>
                <input type="hidden" name="on0" value="" />
              </td>
            </tr>
            <tr>
              <td>
                <select name="os0">
                  <option value="Fast learn">
                    Fast learn : $35.00 USD - hebdomadaire
                  </option>
                  <option value="Business">
                    Business : $30.00 USD - hebdomadaire
                  </option>
                  <option value="Premium">
                    Premium : $20.00 USD - hebdomadaire
                  </option>
                </select>{" "}
              </td>
            </tr>
          </table>
          <input type="hidden" name="currency_code" value="USD" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>

        <Row>
          <Col md="4">
            <Button
              block
              className="mb-3"
              color="success"
              type="button"
              onClick={() => this.toggleModal("defaultModal")}
            >
              Fast learn
            </Button>
            <h4 className="text-center">35$/Week</h4>
            <h6 className="text-center">Total amount: 280$</h6>
            <Modal
              className="modal-dialog-centered  modal-success"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                  Fast career only 4 weeks training
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  <ul>
                    <li>Over The Shoulder Store Setup Training.</li>
                    <li>Full Product Research Training Using My Methods.</li>
                    <li>Complete Facebook & Instagram Traffic Training. </li>
                    <li>Complete Email Marketing Setup & Training.</li>
                  </ul>
                </p>
              </div>
            </Modal>
          </Col>
          <Col md="4">
            <Button
              block
              className="mb-3"
              color="primary"
              type="button"
              onClick={() => this.toggleModal("defaultModal_business")}
            >
              Business
            </Button>
            <h4 className="text-center">30.00$/Week</h4>
            <h6 className="text-center">Total amount: 420.00$</h6>
            <Modal
              className="modal-dialog-centered modal-info"
              isOpen={this.state.defaultModal_business}
              toggle={() => this.toggleModal("defaultModal_business")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                  Business Career
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal_business")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <ul>
                  <li>Over The Shoulder Store Setup Training.</li>
                  <li>Full Product Research Training Using My Methods. </li>
                  <li>Complete Facebook & Instagram Traffic Training. </li>
                  <li>Complete Email Marketing Setup & Training.</li>
                  <li>Google SEO Traffic Mastery Training.</li>
                  <li>ChatBot Academy To Explode Your Online Sales. </li>
                  <li>Weekly Videos Including Q&A Sessions</li>
                  <li>Module With My Super Secret Videos Inside.</li>
                  <li>Private Inner Circle With Me & Other Members.</li>
                  <li>Instant Access & Lifetime Updates</li>
                </ul>
              </div>
            </Modal>
          </Col>

          <Col md="4">
            <Button
              block
              className="mb-3"
              color="warning"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              Premium
            </Button>
            <h4 className="text-center">20.00$/Week</h4>
            <h6 className="text-center">Total amount: 1000.00$</h6>
            <Modal
              className="modal-dialog-centered modal-danger"
              contentClassName="bg-gradient-danger"
              isOpen={this.state.notificationModal}
              toggle={() => this.toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Your attention is required
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("notificationModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-3 text">
                  <i className="ni ni-bell-55 ni-3x" />
                  <h4 className="heading mt-4">You should read this!</h4>
                  <ul>
                    <li>Over The Shoulder Store Setup Training. </li>
                    <li>Full Product Research Training Using My Methods.</li>
                    <li>Complete Facebook & Instagram Traffic Training. </li>
                    <li>Complete Email Marketing Setup & Training.</li>
                    <li>Google SEO Traffic Mastery Training. </li>
                    <li>ChatBot Academy To Explode Your Online Sales. </li>
                    <li>
                      Weekly Videos Including Q&A Sessions Module With My Super
                      Secret Videos Inside.
                    </li>
                    <li>Private Inner Circle With Me & Other Members.</li>
                    <li>Instant Access & Lifetime Updates </li>
                    <li>
                      <b>
                        <i>Ultimate Pack Includes These Extras!</i>
                      </b>
                    </li>
                    <li>Complete Step By Step Sales Funnel Academy!</li>
                    <li>Complete Google Shopping Ads Academy!</li>
                    <li>Done For You Complete 7 Figure Funnel!</li>
                    <li>BOOK: My Top Selling 6 Figure Products!</li>
                    <li>BOOK: My Top Selling Niches Of All Time!</li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button">
                  Go for it !
                </Button>
                <Button
                  className="text-white ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("notificationModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
        </Row>
      </>
    );
  }
}

export default Modals;
