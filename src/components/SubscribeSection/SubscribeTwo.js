import React from "react";
import { Col, Row } from "react-bootstrap";
import Slide from 'react-reveal/Slide';
const SubscribeTwo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <section className="subscribe-two">
      <div className="subscribe-two__shape"></div>
      <div className="auto-container">
      <Slide left>
        <Row>
          <Col md={12} lg={6}>
            <h3 className="subscribe-two__title">
             Have a
              <span> Project </span>in mind ?
            </h3>
    <a className="Let" href="contact">Lets Discuss</a>
          </Col>
        </Row>
        </Slide>
      </div>
    </section>
  );
};

export default SubscribeTwo;
