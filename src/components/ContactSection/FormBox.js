import React from "react";
import { Col, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';


const FormBox = ({ inputs = [] }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);
  };

  return (
    <div className="form-box">
      <div className="sec-title">
      <Zoom top delay={400}>     <h2>
          Write Us a Message<span className="dot">.</span>
        </h2>
        </Zoom>
      </div>
  
      <div className="default-form">
        <form onSubmit={handleSubmit} id="contact-form">
          <Row className="clearfix">
            {inputs.map(({ name, type, placeholder, required }) => (
             
           <Col
                key={name}
                lg={type ? 6 : 12}
                md={type ? 6 : 12}
                sm={12}
                className="form-group"
              >  <Fade bottom delay={500}>
                <div className="field-inner">
                  {type ? (
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    />
                  ) : (
                    <textarea
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    ></textarea>
                  )}
                </div>
                </Fade>
              </Col>
            
            ))}
            <Col lg={12} md={12} sm={12} className="form-group">
            <Rotate bottom right delay={600}>
              <button className="theme-btn btn-style-one">
                <i className="btn-curve"></i>
                <span className="btn-title">Send message</span>
              </button>
              </Rotate>
            </Col>
          </Row>
        </form>
      </div>
     
    </div>
  );
};

export default FormBox;
