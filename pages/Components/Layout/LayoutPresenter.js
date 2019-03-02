import Head from "next/head";
import Header from "./Header";

export default ({ children }) => (
  <div className="body-container">
    <Head>
      <title>Peace Code</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>

    <Header />
    <div id="main">{children}</div>
  </div>
);
