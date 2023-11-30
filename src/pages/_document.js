import Document, { Head, Html, Main, NextScript } from "next/document";


class MyDocument extends Document {
static async getInitialProps(ctx) {
const originalRenderPage = ctx.renderPage;

// Run the React rendering logic synchronously
ctx.renderPage = () =>
originalRenderPage({
// Useful for wrapping the whole react tree
enhanceApp: (App) => App,
// Useful for wrapping in a per-page basis
enhanceComponent: (Component) => Component,
});

// Run the parent `getInitialProps`, it now includes the custom `renderPage`
const initialProps = await Document.getInitialProps(ctx);

return initialProps;
}

render() {


    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="favicon.ico" id="fav-shortcut" type="image/x-icon" />
          <link rel="icon" href="favicon.ico" id="fav-icon" type="image/x-icon" />

          <meta
            name="description"
            content="Majectics is a multipurpose and powerful Digital Services Agency NextJS Template. The template is highly suitable for companies that offer web design, web development, internet services, digital marketing, SEO services, and all other internet marketing and services related agencies and businesses."
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          /> 
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Teko:wght@300;400;500;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          {/* Add your other font stylesheet links here */}
          {/* ... (other font stylesheet links) */}

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/crf4rue.css"
          />
           <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
     <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.usebootstrap.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@663d232/css/all.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"
        />
          <script
           async
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.1/imagesloaded.pkgd.min.js"
          ></script>
          <script
            defer
            src="https://www.mikrotax.org/maps/js/charming.min.js"
          ></script>
          <script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.1/TweenMax.min.js"
          ></script>
          <script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/draggabilly/2.2.0/draggabilly.pkgd.min.js"
          ></script>
          <script
            defer
            src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          ></script>
          <script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
          ></script>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        {/* Include Magnific Popup */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

          <script async src="https://cdn.usebootstrap.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
       
          
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" type="text/javascript"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument








