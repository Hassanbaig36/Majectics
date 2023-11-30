import bg from "@/images/background/image-Port.jpg";
import Link from "next/link";
import React from "react";
import Bounce from 'react-reveal/Bounce';
const PageBanner6 = ({
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
   
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
          <Bounce top>
            <h1>{title}</h1></Bounce>
            <div className="page-nav">
            <Bounce top delay={200}>
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
              </Bounce>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default PageBanner6;
