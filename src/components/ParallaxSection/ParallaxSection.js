import parallaxSection from "@/data/parallaxSection";
import dynamic from "next/dynamic";
import React from "react";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, icon, title, title2 } = parallaxSection;

const ParallaxSection = () => {
  return (
    <Jarallax speed={0.3} imgPosition="50% 80%" className="parallax-section">
      <JarallaxImage src={bg.src} />
      <div className="auto-container">
        <div className="content-box">
          <div className="icon-box">
          <Bounce delay={800}>
            <span className={icon}></span>
            </Bounce>
          </div>
        
      
          <h2>
          <Bounce delay={500}>    {title}    </Bounce>  <Zoom right cascade delay={600}>  <span>{title2}</span></Zoom>
           
          </h2>
       
        </div>
      </div>
    </Jarallax>
  );
};

export default ParallaxSection;
