import Link from "next/link";
import Layout from "../Layout";

export default () => (
  <Layout>
    <div id="main">
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  </Layout>
);
