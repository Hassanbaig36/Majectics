"use clients"
import React, { useEffect } from 'react';
import Head from 'next/head';
import Rotate from 'react-reveal/Rotate';
import FooterSeven1 from "@/components/MainFooter/FooterSeven1";
import Zoom from 'react-reveal/Zoom';
const Footerc = () => {
  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const card1 = document.querySelector(".card");
      const card2 = document.querySelector(".card-2");
      if (card1 && card2) {
        card1.classList.add("hide");
        card2.classList.remove("hide");
      }
    };

    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   
      </Head>

      <main>
      <Rotate top left>
        <div className="con">
          <div className="card">
            <div className="right">
              <h1>Stay updated!</h1>
              <p className="p">
                Join 60,000+ product managers receiving monthly updates on:{' '}
              </p>
              <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
              </ul>
              <form>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email" 
                  placeholder="  email@company.com"
                />
                <button type="submit">Subscribe to Monthly Newsletter</button>
              </form>
            </div>
            <div className="left">
              <img src="images/illustration-sign-up-desktop.svg" alt="" />
            </div>
          </div>

          <div className="card-2 hide">
            <img src="images/icon-list.svg" className="icon-card-2" />
            <h1>Thanks for subscribing!</h1>
            <p className="pp">
              A confirmation email has been sent to ash@loremcompany.com.
              Please open it and click the button inside to confirm your
              subscription.
            </p>
            <button>Dismiss message</button>
          </div>

        
        </div>
        </Rotate>
      </main>
 <Zoom left>
      <footer>
     
      <FooterSeven1/>
    
  
      </footer>
        </Zoom>
      <style jsx>{`
     @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

     @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
     
     
     
     
     * {
       box-sizing: border-box;
     }
     
     body {
       margin: 0;
     }
     
     p {
       max-width: 600px;
       margin: 0 auto 1rem;
     }
     
     .pp{
      color: #000;
     }
     main {
       /* make sure to cover the screen */
       height: 100vh;
     
       /* need a solid bg to hide the footer */
       background: white;
     
       /* put on top */
       position: relative;
       z-index: 1;
     
       font: 16px/1.4 system-ui, sans-serif;
       padding: 2rem;
     }
     
     footer {
       /* place on the bottom */
       position: sticky;
       bottom: 0;
       left: 0;
       width: 100%;
       background: #000;
       display: grid;
       place-items: center;
       padding: 5px;
     }
     
  
     .wrapper {
       margin: auto;
       background: #fff;
       display: flex;
       flex-direction: column;
       width: 440px;
       text-align: center;
       border-radius: 5px;
       overflow: hidden;
       box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
     }
     
     .header {
       padding: 50px 50px 100px 50px;
       min-height: 150px;
       background: url("https://cdn0.iconfinder.com/data/icons/elpis/144/Newsletter-128.png") no-repeat center 130px;
     }
     
     .header h1 {
       color: #536a89;
       text-transform: uppercase;
       font-size: 30px;
       letter-spacing: 4px;
     }
     
     .header p {
       font-size: 13px;
       color: rgba(92, 118, 152, 0.8);
     }
     
     .footer {
       display: flex;
       justify-content: space-between;
     }
     .con {
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}
     
     
  
     
     .h1 {
       font-family: sans-serif;
       margin: 0px auto;
       text-align: center;
       font-size: 40px;
       max-width: 600px;
       position: relative;
     
     }
     
     .h1:before {
       content: "";
       display: block;
       width: 350px;
       height: 4px;
       background: rgb(0, 0, 0);
       position: absolute;
       right: 100%;
       top: 50%;
       z-index: -2;
     }
     
     .h1:after {
       content: "";
       display: block;
       width: 350px;
       height: 4px;
       background: rgb(0, 0, 0);
       position: absolute;
       left: 100%;
       top: 50%;
       z-index: -2;
     }
     
     .logo {
       width: 100%;
       height: 100px;
     }





.card {
  display: flex;
  width: 1000px;
  background-color: white;
  padding: 30px;
  border-radius: 50px !important;
  flex-direction: row !important;

}

.right {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px 0px 50px 10px;


}

.left {
  width: 40%;
}

.left img {
  width: 100%;
}

ul {
  list-style-image: url(./images/icon-success.svg);
  /* width: 30px; */
  /* list-style-position: ; */
}

li {
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
}

label {
  margin-bottom: 10px;
  color: black;
  font-weight: bold;
  font-size: small;
}

input {
  padding: 10px 20px;
  font-family: inherit;
  border-radius: 5px;
  outline: none;
  border: 1px solid hsl(231, 7%, 60%);
}

button {
  font-family: inherit;
  margin-top: 20px;
  padding: 15px 20px;
  border: none;
  outline: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  background-color: hsl(235, 18%, 26%);
}

button:hover {
  background-color: hsl(4, 100%, 67%);
  transition: all 1s;
}

h1 {
  font-size: 50px;
  color: hsl(234, 29%, 20%);
}

.hide {
  display: none;
}

.card-2 {
  background-color: white;
  width: 400px;
  padding: 40px;
  border-radius: 5px;
}

.card-2 h1 {
  font-size: 40px;
}

.icon-card-2 {
  width: 50px;
}

.p {
  margin: 0;
}

.card-2 button {
  width: 100%;
}

@media (max-width: 768px) {
  .card {
    flex-direction: column-reverse !important;
    width: 95%;
    padding: 0;
  }

  body {
    padding: 0;
    margin: 0;
  }

  .card h1 {
    font-size: 30px;
  }

  .right {
    width: 100%;
    padding: 20px;
  }

  .left {
    width: 100%;
  }

  .left img {
    content: url("./images/illustration-sign-up-mobile.svg");
  }

  form {
    width: 90%;
  }

  .card-2 {
    min-height: 100vh;
  }
  footer {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #000;
    display: grid;
    place-items: center;
    overflow-x: hidden;
    padding: 5px;
} 
}


      `}</style>
    </div>
  );
};

export default Footerc;
