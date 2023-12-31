import funFacts from "@/data/funFacts";
import React from "react";
import { Col, Row } from "react-bootstrap";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";
import Zoom from 'react-reveal/Zoom';
const FunFacts = () => {
  return (
  
    <section className="facts-section alternate">
      
      <div className="auto-container">
        <div className="inner-container">
          <div className="fact-counter">
          <Zoom bottom  delay={1000}>
            <Row className="clearfix">
            
              {funFacts.map(({ id, title, count }) => (
                <Col
                  key={id}
                  lg={3}
                  md={6}
                  sm={12}
                  className="column counter-column"
                >
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <VisibilityCountUp count={count} />
                      </div>
                      <div className="counter-title">{title}</div>
                    </div>
                  </div>
                </Col>
              ))}
          
            </Row>
            </Zoom>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default FunFacts;
