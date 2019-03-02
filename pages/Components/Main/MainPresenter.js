import Link from "next/link";
import Layout from "../Layout";

const list = [
  {
    id: 1,
    category: "react",
    title: "Test",
    content: "",
    date: "2018-10-10"
  },
  {
    id: 2,
    category: "react",
    title: "React",
    content: "",
    date: "2018-10-10"
  },
  {
    id: 3,
    category: "etc",
    title: "GraphQL",
    content: "",
    date: "2018-10-10"
  },
  {
    id: 4,
    category: "javascript",
    title: "ASDASD",
    content: "",
    date: "2018-10-10"
  },
  {
    id: 5,
    category: "javascript",
    title: "ASDASD",
    content: "",
    date: "2018-10-10"
  }
];

export default () => (
  <Layout>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </Layout>
);
