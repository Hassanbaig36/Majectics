import React from 'react'
import Link from 'next/link'
import Reveal from 'react-reveal/Reveal';
const Box = () => {
  return <>
   <Reveal effect="fadeInUp">
<section className="box">
<video src="./video.mp4" autoPlay muted loop />
 <h1>Yoga Center</h1>
 <h3>Find your own path in yoga</h3>
 <Link href="#" className="boxBtn" legacyBehavior>
   Contact Us
</Link>
</section>
</Reveal>
   <style jsx>{`
    
section {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 110px 100px;
}
@media (max-width: 1000px) {
   section {
       padding: 100px 50px;
   }
}
@media (max-width: 600px) {
   section {
       padding: 125px 30px;
   }
}

.box {
   position: relative;
   justify-content: center;
   min-height: 100vh;
   color: #fff!important;
   text-align: center;
}
.box video {
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   z-index: -1;
}
.box h1 {
   margin-bottom: 15px;
   font-size: 65px;
   text-transform: uppercase;
   text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
   color: #fff!important;
}
.box h3 {
   margin-bottom: 40px;
   font-size: 25px;
   color: #fff!important;
}
.box a.boxBtn {
   padding: 15px 35px;
   background: transparent;
   border-radius: 50px;
   color: #fff!important;
   text-transform: uppercase;
   border: 4px solid #fff;
   transition: all .5s;
}
.box a.boxBtn:hover {
   background: #fff;
   color: #000!important;
}
@media (max-width: 800px) {
   .box {
       min-height: 600px;
   }
   .box h1 {
       font-size: 32px;
   }
   .box h3 {
       font-size: 20px;
   }
   .box a.boxBtn {
       padding: 15px 40px;
       color: #fff!important;
   }
}

     
   `}</style>
  </>;
}

export default Box