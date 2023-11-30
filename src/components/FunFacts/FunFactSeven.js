import { funFactSeven } from "@/data/funFacts";
import React from "react";
import { Col, Row } from "react-bootstrap";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";
import Fade from 'react-reveal/Fade';
const FunFactSeven = () => {
  return (
    <section className="funfact-seven">
      <div className="auto-container">
      <Fade top big>
        <div className="sec-title-seven text-center">
          <h2 className="sec-title-seven__title">
            Over 2200 <span>Projects</span>
            <br />
            Completed
          </h2>
        </div>
        </Fade>
        <Row>
          {funFactSeven.map(({ id, count, text }) => (
            <Col key={id} md={6} lg={3}>
              <div className="funfact-seven__item">
              <Fade left big cascade duration={3000}>
                <h3 className="funfact-seven__title count-box">
                  <span className="count-text">
                    <VisibilityCountUp count={count} />
                  </span>
                </h3>
                <p className="funfact-seven__text">{text}</p>
                </Fade>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FunFactSeven;
