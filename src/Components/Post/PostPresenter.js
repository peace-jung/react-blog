import React from "react";
import MarkdownRenderer from "react-markdown-renderer";
import { test } from "../../markdown/test.md";

const PostPresenter = ({ path }) => {
  return (
    <div className="markdown">
      <MarkdownRenderer markdown={test} />
    </div>
  );
};

export default PostPresenter;
