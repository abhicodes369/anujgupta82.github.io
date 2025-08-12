import React, { useEffect, useRef } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/ams", "[tex]/color"] },
  tex: {
    packages: { "[+]": ["ams", "color"] },
    inlineMath: [
      ["\\(", "\\)"],
      ["$", "$"]
    ],
    displayMath: [
      ["\\[", "\\]"],
      ["$$", "$$"]
    ],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    processHtmlClass: "tex2jax_process",
  },
};

const BlogViewer = ({ blog }) => {
  const contentRef = useRef(null);

  // Defensive: handle missing blog or content
  if (!blog || !blog.content) {
    return <div className="prose max-w-none">No content available.</div>;
  }

  // If content is a React element, render it directly within MathJax
  if (React.isValidElement(blog.content)) {
    return (
      <MathJaxContext version={3} config={config}>
        <div className="prose max-w-none">
          <MathJax hideUntilTypeset="first">
            {blog.content}
          </MathJax>
        </div>
      </MathJaxContext>
    );
  }

  // For string content with HTML and math
  return (
    <MathJaxContext version={3} config={config}>
      <div className="prose max-w-none">
        <MathJax hideUntilTypeset="first">
          <div 
            className="tex2jax_process"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </MathJax>
      </div>
    </MathJaxContext>
  );
};

export default BlogViewer;