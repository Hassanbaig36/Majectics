import { projectSeven } from "@/data/projectSection";
import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import SingleProject from "./SingleProject";
import Flip from 'react-reveal/Flip';
import Flash from 'react-reveal/Flash';
SwiperCore.use([Autoplay]);

const options = {
  spaceBetween: 30,
  slidesPerView: 2,
  autoplay: { delay: 5000 },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
};

const ProjectSeven = () => {
  return (
    <section className="project-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
         <Flash>
          <h2 className="sec-title-seven__title">
            Our Recent <span>Projects</span>
            <br />
            List Below.
          </h2>
          </Flash>
        </div>
        <Swiper {...options} className="thm-swiper__slider">
        <Flip left duration={3000}>
          <div className="swiper-wrapper">
            {projectSeven.map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
          </div>
          </Flip>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSeven;
