import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const SingleBlogSeven = ({ blog = {} }) => {
  const { image, date, admin, comments, title } = blog;

  return (
    <Col md={12} lg={4}>
      <div className="blog-seven__item">
        <div className="blog-seven__image">
          <Image
            src={
              require(`@/images/update-01-10-2021/blog/${image}`).default.src
            }
            alt=""
          />
        </div>
        <div className="blog-seven__content">
        <Fade right big cascade>
          <div className="blog-seven__date">{date}</div>
          <div className="blog-seven__meta">
            <a href="#">
              <i className="far fa-user-circle"></i>by {admin}
            </a>
            <a href="#">
              <i className="far fa-comments"></i>
              {comments} Comments
            </a>
          </div>
          <h3 className="blog-seven__title">
          <Fade right big cascade> <Link href="/blog-single">{title}</Link> </Fade>
          </h3>
         </Fade>
        </div>
      </div>
    </Col>
  );
};

export default SingleBlogSeven;
