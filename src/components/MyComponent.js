

import Head from 'next/head';
import { useEffect } from 'react';
import Script from 'next/script';

function MyComponent() {
  useEffect(() => {
 
    const script = document.createElement('script');
    script.innerHTML = `
      document.documentElement.className = "js";
      var supportsCssVars = function () {
        var e, t = document.createElement("style");
        t.innerHTML = "root: { --tmp-var: bold; }";
        document.head.appendChild(t);
        e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)"));
        t.parentNode.removeChild(t);
        return e;
      };
      supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");
    `;

    document.body.appendChild(script);

    return () => {
   
      document.body.removeChild(script);
    };
  }, []);

  return (

    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      


      </Head>
      <main>
        <div className="page page--preview">
          <div className="grid-wrap">
            <div className="grid grid--layout-1">
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/1.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/2.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/3.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/4.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/5.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/6.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/7.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/8.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/9.jpg)" }}
                />
              </div>
            </div>
            <div className="grid grid--layout-2">
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/10.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/11.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/12.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/13.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/14.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/15.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/16.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/17.jpg)" }}
                />
              </div>
            </div>
            <div className="grid grid--layout-3">
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/18.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/19.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/20.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/21.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/22.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/23.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/24.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/42.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/43.jpg)" }}
                />
              </div>
            </div>
            <div className="grid grid--layout-4">
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/25.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/26.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/27.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/28.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/29.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/30.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/31.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/32.jpg)" }}
                />
              </div>
            </div>
            <div className="grid grid--layout-5">
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/33.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/34.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/35.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/36.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/37.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/38.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/39.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/40.jpg)" }}
                />
              </div>
              <div className="grid__item-wrap">
                <div
                  className="grid__item"
                  style={{ backgroundImage: "url(img/41.jpg)" }}
                />
              </div>
            </div>
            <button className="gridback">
              <svg width="27px" height="15px" viewBox="0 0 27 15">
                <path
                  d="M1.469 6.75l-.719.719 7.938 6.937.718-.719L1.47 6.75zM8.594.531L.75 7.375l.688.688L9.28 1.218 8.594.53zM1.406 6.938v1h24.75v-1H1.406z"
                  fill="#000"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="menu-wrap">
          <div className="menu-draggable" />
          <nav className="menu">
            <div className="menu__item">
              <a className="menu__item-link">Mezcala</a>
              <a className="menu__item-explore">explore</a>
            </div>
            <div className="menu__item">
              <a className="menu__item-link">Caricia</a>
              <a className="menu__item-explore">explore</a>
            </div>
            <div className="menu__item">
              <a className="menu__item-link">Esquirla</a>
              <a className="menu__item-explore">explore</a>
            </div>
            <div className="menu__item">
              <a className="menu__item-link">Sangre</a>
              <a className="menu__item-explore">explore</a>
            </div>
            <div className="menu__item">
              <a className="menu__item-link">Petricor</a>
              <a className="menu__item-explore">explore</a>
            </div>
          </nav>
        </div>
      </main>
      <div className="cursor">
        <div className="cursor__inner cursor__inner--circle">
          <div className="cursor__side cursor__side--left" />
          <div className="cursor__side cursor__side--right" />
        </div>
      </div>


  
                       
      <Script src="js/demo.js"></Script>

    </>
  )



}

export default MyComponent;
