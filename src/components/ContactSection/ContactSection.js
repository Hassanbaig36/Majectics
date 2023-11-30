import { contactSection } from "@/data/contactSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const MapBox = dynamic(() => import("../MapSection/MapBox"));
const FormBox = dynamic(() => import("./FormBox"));

const { title, contacts, inputs } = contactSection;

const ContactSection = ({ className = "", map = false, form = false }) => {
  const ref = useActive("#contact");

  return (
    <section ref={ref} className={`contact-section ${className}`} id="contact">
      <div className="auto-container">
      <Roll top cascade>  
        <div className="sec-title centered">
         <h2>
             {title} <span className="dot">.</span>
          </h2>
        </div>
        </Roll>
        <div className="upper-info">
          <Row className="clearfix">
            {contacts.map(({ id, name, address, email, phone }) => (
              <Col
                key={id}
                xl={3}
                lg={6}
                md={6}
                sm={12}
                className="info-block animated fadeInUp"
              >
                <div className="inner-box">
                <Roll top cascade delay={400}>          <h5>{name}</h5></Roll>
                  <div className="text">
                  <Fade left delay={1000}>
                    <ul className="info">
                      <li>{address}</li>
                      <li>
                        <a href={`mailto:${email}`}>{email}</a>
                      </li>
                      <li>
                        <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
                      </li>
                    </ul>
                    </Fade>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {map && <MapBox />}
        {form && <FormBox inputs={inputs} />}
      </div>
    </section>
  );
};

export default ContactSection;
