import React from "react";
import classnames from "classnames";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <>
        <h3 className="h4 text-success font-weight-bold mb-4">What you will learn in this course</h3>
        <Row className="justify-content-center">
          <Col lg="6">
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-cloud-upload-96 mr-2" />
                    Platform
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2" />
                    Paid Search
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                    SEO
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <p className="description">
                      This course will explain the benefits of open-source vs
                      custom platforms, and how users can gain a competitive
                      advantage using Magento. The building of a site, including
                      page creation and category management and how to process
                      transactions provide the foundation for course material.
                      In addition, implementing content marketing, promotions
                      and shopping cart recovery techniques will be outlined.
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <p className="description">
                      This course builds on the introduction to Magento course
                      to add in how each of the digital marketing disciplines
                      can be incorporated into a Magento e-commerce site.
                      Performing initial research and campaign set-up
                      activities, this course will then give professionals the
                      tools to utilize remarketing, Facebook ads, display ads
                      and a host of other tools within their Magento site.
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                    <p className="description">
                      Once that foundation is in place, SEO for Magento sites
                      will be outlined. The SEO component includes everything
                      from internal site optimization, Google requirements and
                      how to custom configure your site for the ultimate SEO
                      experience. Furthermore, running a successful blog on the
                      site and building organic growth will be touched upon. The
                      importance of content that works in conjunction with
                      product offerings and other pages will be stressed.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="mt-5 mt-lg-0" lg="6">
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    Analytics
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    Social Media Marketing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    Marketing Automation
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description">
                      Data is the driving force behind expanding any business.
                      The aim of this course is to provide an understanding of
                      the foundations, theory and application of digital
                      analytics in everyday digital marketing. Starting with
                      digital infrastructure many businesses already have in
                      place, this course will help you establish the platforms
                      to use to be able to capture relevant data regarding
                      digital marketing activities.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <p className="description">
                      Our content marketing course will educate participants on
                      various content marketing methods that can work in
                      conjunction with digital properties to truly achieve
                      measurable marketing objectives. Beginning with
                      understanding the importance of market positioning and
                      competitive analysis, the course will delve into the
                      importance of truly understanding who to direct content to
                      and when. Additionally, understanding which distribution
                      channels to utilize for content will be a highlight.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description">
                      Marketing Automation is one of the most important
                      components of an eCommerce website. Our marketing
                      automation professionals have created a module for this
                      course that will help you learn automation practices EVERY
                      eCommerce Manager should know. Does ‘analyzing userflow &
                      consumer behaviour to set triggers to user actions and
                      personalize the user experience’ make sense to you? No?
                      Perfect! We’ll make sure it does!
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
