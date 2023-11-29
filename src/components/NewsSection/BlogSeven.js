import { blogSeven } from "@/data/newsSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleBlogSeven from "./SingleBlogSeven";
import Rotate from 'react-reveal/Rotate';
const BlogSeven = () => {
  return (
    <section className="blog-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
        <Rotate top right>
          <h2 className="sec-title-seven__title">
            Latest News & <span>Articles</span>
            <br />
            from the Blog
          </h2>
          </Rotate>
        </div>
        <Rotate top right>
        <Row>
          {blogSeven.map((blog) => (
            <SingleBlogSeven blog={blog} key={blog.id} />
          ))}
        </Row>
        </Rotate>
      </div>
    </section>
  );
};

export default BlogSeven;
