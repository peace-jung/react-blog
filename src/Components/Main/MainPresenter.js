import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-gap: 10px;
  border-top: solid 2px #efefef;
  margin: 0;
  padding: 4em 0;
`;

const StyledLink = styled(Link)`
  grid-column: 1;
  grid-row: 1;
  font-size: 1.5em;
  line-height: 1.5em;
  color: #787878;
  font-weight: 400;
  line-height: 1em;
  border-bottom: 0;
`;

const StyleSpan = styled.span`
  font-size: 0.7em;
  grid-column: 2;
  grid-row: 1;
  text-align: right;
`;

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

const MainPresenter = () => {
  return (
    <React.Fragment>
      {list.map(post => (
        <Section className="post" key={post.id}>
          <StyledLink to={`/post/${post.category}/${post.id}`}>
            {post.title}
          </StyledLink>
          <StyleSpan>{post.date}</StyleSpan>
        </Section>
      ))}
    </React.Fragment>
  );
};

export default MainPresenter;
