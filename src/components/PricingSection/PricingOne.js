import { pricingOne } from "@/data/pricingSection";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
const { allFeatures, pricing } = pricingOne;

const PricingOne = () => {
  return (
    <section className="pricing-one">
      <div className="auto-container">
        <Row>
          {pricing.map(({ id, name, icon, amount, features }) => (
            <Col key={id} sm={12} md={12} lg={4}>
              <div className="pricing-card">
                <div className="pricing-card__icon">
                <Slide right delay={150}>
                  <i className={icon}></i>
                  </Slide>
                </div>
                <Slide right delay={200}>   <p className="pricing-card__name">{name}</p>   </Slide>
                <Slide right delay={250}>     <h3 className="pricing-card__amount">${amount}</h3>  </Slide>
                <div className="pricing-card__bottom">
                  <ul className="list-unstyled pricing-card__list">
                  <Slide right delay={250}>      {allFeatures.map((feature, i) => (
                   <li key={i}>
                        <i
                          className={
                            features.includes(feature)
                              ? "flaticon-check"
                              : "flaticon-delete unavailable"
                          }
                        ></i>
                        {feature}
                      </li> 
                    ))}
                    </Slide>
                  </ul>
                  <Roll right delay={300}>
                  <Link href="/contact">
                    <a className="theme-btn btn-style-one">
                      <i className="btn-curve"></i>
                      <span className="btn-title">Choose a plan</span>
                    </a>
                  </Link>
                  </Roll>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PricingOne;
