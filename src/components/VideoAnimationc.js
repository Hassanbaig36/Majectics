import React, { useEffect } from 'react';
import headerData from "@/data/header";
import { Image } from "react-bootstrap";
import Link from 'next/link';
import NavItem from './Header/NavItem';
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import Footerc from "./Footerc";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import { seo } from "@/data/sidebarPageContainer";



const { navItems, logo7  } = headerData;

function VideoAnimationc() {
    const { logo7 } = headerData;
    useEffect(() => {
        const paperMenu = {
            $window: document.querySelector('#paper-window'),
            $paperFront: document.querySelector('#paper-front'),
            $hamburger: document.querySelector('.hamburger'),
            offset: 1800,
            pageHeight: document.querySelector('#paper-front').offsetHeight,

            open: function () {
                this.$window.classList.add('tilt');
                this.$hamburger.removeEventListener('click', this.open.bind(this));
                document.querySelector('#container').addEventListener('click', this.close.bind(this));
                this.hamburgerFix(true);
                console.log('opening...');
            },
            close: function () {
                this.$window.classList.remove('tilt');
                document.querySelector('#container').removeEventListener('click', this.close.bind(this));
                this.$hamburger.addEventListener('click', this.open.bind(this));
                this.hamburgerFix(false);
                console.log('closing...');
            },
            updateTransformOrigin: function () {
                const scrollTop = this.$window.scrollTop || document.documentElement.scrollTop;
                const equation = (scrollTop + this.offset) / this.pageHeight * 100;
                this.$paperFront.style.transformOrigin = `left ${equation}%`;
            },
            //hamburger icon fix to keep its position
            hamburgerFix: function (opening) {
                if (opening) {
                    this.$hamburger.style.position = 'absolute';
                    this.$hamburger.style.top = this.$window.scrollTop + 30 + 'px';
                } else {
                    setTimeout(() => {
                        this.$hamburger.style.position = 'fixed';
                        this.$hamburger.style.top = '30px';
                    }, 300);
                }
            },
            bindEvents: function () {
                this.$hamburger.addEventListener('click', this.open.bind(this));
                document.querySelector('.close').addEventListener('click', this.close.bind(this));
                this.$window.addEventListener('scroll', this.updateTransformOrigin.bind(this));
            },
            init: function () {
                this.bindEvents();
                this.updateTransformOrigin();
            },
        };

        paperMenu.init();
    }, []);

    return (
        <>

            <div id="paper-back">


         
           
                    <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="close" />
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                {navItems.map((navItem) => (
                  <NavItem navItem={navItem} key={navItem.id} />
                ))}
              </ul>
            </div>
          </nav>
             
            </div>
            <div id="paper-window">
                <div id="paper-front">
                    <Link href="/" className='nav-logoa' passHref>

                    <Image className="nav-logo1" src={logo7.src} alt="" />

                    </Link>
                    <div className="hamburger">
                        <span />
                    </div>
                    <div id="container">

                        <section >
 <PageBanner
        title="Video Animation"
        parent="Services"
        parentHref="/services"
      />
     
  
                    
                        </section>

    <SidebarPageContainer service={seo} />
   
                        <section />
   <CallToSectionTwo className="alternate" />
                      <Footerc />
                        <section />
                        <section />
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoAnimationc;
