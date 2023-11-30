import Link from "next/link";
import React from "react";
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
const CallToSectionTwo = ({
  className = "",
  btnClassName = "btn-style-two",
}) => {
  return (
    <section className={`call-to-section-two ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">
        <Rotate bottom left delay={500}>
          <h2>
            We’re Ready to Bring Bigger <br />& Stronger Projects
          </h2>
          </Rotate>
          <div className="link-box">
          <Zoom left delay={600}>
            <Link href="/contact">
              <a className={`theme-btn ${btnClassName}`}>
                <i className="btn-curve"></i>
                <span className="btn-title">Contact with us</span>
              </a>
            </Link>
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSectionTwo;
