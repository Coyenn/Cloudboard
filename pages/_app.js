import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Cloudboard</title>
        <meta
          name="Cloudboard"
          content="A Dashboard to host all your Services and more!"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
