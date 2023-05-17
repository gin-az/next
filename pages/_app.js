import Layout from "../components/Layout";
import React from "react";

import "../styles/globals.scss";

const App = ({ Component, pageProps }) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default App;
