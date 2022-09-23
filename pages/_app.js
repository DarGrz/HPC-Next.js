import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="main">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
