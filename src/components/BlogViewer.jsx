import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/ams"] },
  tex: {
    packages: { "[+]": ["ams"] },
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
  },
};

const BlogViewer = ({ blog }) => {
  return (
    <MathJaxContext version={3} config={config}>
      <MathJax hideUntilTypeset="first">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </MathJax>
    </MathJaxContext>
  );
};

export default BlogViewer;
