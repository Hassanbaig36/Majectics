import bg from "@/images/background/How.jpg";
import Link from "next/link";
import React from "react";
import Zoom from 'react-reveal/Zoom';
const PageBanner3 = ({
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
        <Zoom top cascade>
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
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default PageBanner3;
