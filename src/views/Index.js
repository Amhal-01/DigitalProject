import React from "react";
import { Container } from "reactstrap";
import Navbar from "components/Navbar.jsx";
import CardsFooter from "components/CardsFooter.jsx";
import Hero from "./IndexSections/Hero.jsx";
import Tabs from "./IndexSections/Tabs.jsx";
import Modals from "./IndexSections/Modals.jsx";
import Carousel from "./IndexSections/Carousel.jsx";
import Icons from "./IndexSections/Icons.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <Hero />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Modals />
            </Container>
          </section>
          <Carousel />
          <Icons />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
