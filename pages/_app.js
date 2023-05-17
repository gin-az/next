import Layout from "../components/Layout";
import React from "react";

import "../styles/globals.scss";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Merienda:wght@600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default App;
