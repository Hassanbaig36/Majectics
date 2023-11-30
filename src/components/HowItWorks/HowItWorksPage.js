import { howItWorksPage } from "@/data/howItWorks";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
const HowItWorksPage = () => {
  return (
    <section className="how-it-works">
      <div className="auto-container">
        <Row>
          {howItWorksPage.map(({ id, icon, title, href, text }) => (
            <Col key={id} md={12} lg={4}>
              <div className="how-it-works-card text-center">
                <div className="how-it-works-card__inner">
                <Zoom bottom cascade delay={200}>             <i className={`how-it-works-card__icon ${icon}`}></i>
                  <h3 className="how-it-works-card__title">
                 <Link href={href}>{title}</Link>
                  </h3>
                  <p className="how-it-works-card__text">{text}</p>
                  <Link href={href}>
                    <a className="how-it-works-card__link">Read More</a>
                  </Link>
                  </Zoom>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default HowItWorksPage;
