import "../css/index.css";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Cloudboard</title>
        <meta
          name="Cloudboard"
          content="A Dashboard to host all your Services and more!"
        />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;display=swap" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
