import { Fragment, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/layout.css";
import "../styles/about-us-page.css";
import "../styles/ourarts-page.css";
import "../styles/products.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="page-layout">
        <br />
        <div className="container ">
          <Component {...pageProps} />
        </div>
        <br />
      </div>

      <Footer />
    </Fragment>
  );
}

export default MyApp;
