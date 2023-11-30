import { sidebar } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Bounce from 'react-reveal/Bounce';
const { categories, tags, comments, posts } = sidebar;

const SidebarSide = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <aside className="sidebar blog-sidebar">
      <div className="sidebar-widget search-box">
        <div className="widget-inner">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="search"
                name="search"
                placeholder="Search"
                required
              />
              <button type="submit">
                <span className="icon flaticon-magnifying-glass-1"></span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="sidebar-widget recent-posts">
        <div className="widget-inner">
        <Bounce right duration={1500} delay={400}>     <h4>Latest Posts</h4>
          <div className="sidebar-title">
          
          </div>

          {posts.map(({ id, title, image }) => (
            <div key={id} className="post">
              <figure className="post-thumb">
                <Image
                  src={require(`@/images/resource/${image}`).default.src}
                  alt=""
                />
              </figure>
              <h5 className="text">
                <a href="#">{title}</a>
              </h5>
              
            </div>
           
          ))}
           </Bounce>
        </div>
      </div>

      <div className="sidebar-widget archives">
      <Bounce right duration={1700} delay={600}>  
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Categories</h4>
          </div>
          <ul>
            {categories.map(({ id, title, href }) => (
              <li key={id}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        </Bounce>
      </div>

      <div className="sidebar-widget popular-tags">
      <Bounce right duration={1900} delay={800}>  
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Tags</h4>
          </div>
          <div className="tags-list clearfix">
            {tags.map(({ id, title, href }) => (
              <Fragment key={id}>
                <a href={href}>{title}</a>
                {tags.length !== id && ", "}
              </Fragment>
            ))}
          </div>
        </div>
        </Bounce>
      </div>

      <div className="sidebar-widget recent-comments">
     
        <div className="widget-inner">
          <div className="sidebar-title">
          <Bounce right duration={1900} delay={800}>        <h4>Comments</h4></Bounce>
          </div>
          {comments.map(({ id, text }) => (
            <div key={id} className="comment">
                <Bounce right duration={1900} delay={800}>  
              <div className="icon">
                <span className="flaticon-speech-bubble-2"></span>
              </div>
              <h5 className="text">
                <a href="#">
                  <TextSplit text={text} />
                </a>
              </h5>
              </Bounce>
            </div>
          ))}
        </div>
      
      </div>
    </aside>
  );
};

export default SidebarSide;
