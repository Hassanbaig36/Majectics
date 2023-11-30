import { weWorkSection } from "@/data/weWorkSection";
import React, { useState } from "react";
import SingleWeWork from "./SingleWeWork";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
const { title, tabBtns, tabsContents } = weWorkSection;

const WeWorkSection = () => {
  const [current, setCurrent] = useState("tab-1");

  return (
    <section className="we-work-section">
      <div className="auto-container">
        <div className="sec-title centered">
        <Zoom top delay={400}>
          <h2>
            {title}
            <span className="dot">.</span>
          </h2>
          </Zoom>

        </div>
        <div className="work-tabs tabs-box">
          <ul className="tab-btns tab-buttons clearfix">
            {tabBtns.map(({ id, title }) => (
              <li
                onClick={() => setCurrent(id)}
                key={id}
                className={`tab-btn${current === id ? " active-btn" : ""}`}
              >
            <Bounce right delay={500}>    <span>{title}</span></Bounce> 
              </li>
            ))}
          </ul>
          <div className="tabs-content">
            {tabsContents.map((work) => (
              <SingleWeWork key={work.id} work={work} current={current} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeWorkSection;
