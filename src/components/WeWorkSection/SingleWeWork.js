import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Bounce from 'react-reveal/Bounce';
const SingleWeWork = ({ work = {}, current }) => {
  const { id, image, text1, text2, lists } = work;

  return (
    <div
      className={`tab animated${current === id ? " active-tab fadeInUp" : ""}`}
      id={id}
    >
      <Row className="clearfix">
        <Col lg={5} md={6} sm={12} className="image-col">
          <div className="inner">
            <div className="image">
              <Image
                src={require(`@/images/resource/${image}`).default.src}
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col lg={7} md={6} sm={12} className="text-col">
          <div className="inner">
            <div className="content">
              <div className="text">
              <Bounce right delay={600}>        <p>{text1}</p></Bounce>
              <Bounce right delay={700}>      <p className="theme_color">{text2}</p></Bounce>
            
                <ul>
                <Bounce right delay={800}>     {lists.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                   </Bounce>  
                </ul>
                  
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SingleWeWork;
