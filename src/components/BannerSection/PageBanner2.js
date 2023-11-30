import bg from "@/images/background/image-price.jpg";

import Bounce from 'react-reveal/Bounce';
import Link from "next/link";
import React from "react";

const PageBanner2 = ({
  title = "",
  page = "",
  parent = "",
  parentHref = "/",
}) => {
  return (
    <section className="page-banner">
      <div
        className="image-layer"
       style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="banner-inner">
        <div className="auto-container">
        <Bounce bottom delay={100}>
          <div className="inner-container clearfix">
            <h1>{title}</h1>
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {parent && (
                  <li>
                    <Link href={parentHref}>{parent}</Link>
                  </li>
                )}
                <li className="active">{page || title}</li>
              </ul>
            </div>
          </div>
          </Bounce>
        </div>
      </div>
    </section>
  );
};

export default PageBanner2;
