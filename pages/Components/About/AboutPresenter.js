import Link from "next/link";
import Layout from "../Layout";

export default () => (
  <Layout>
    <p>This page is About page.</p>

    <Link href="/about/secondparam">
      <a>Go Home</a>
    </Link>
  </Layout>
);
