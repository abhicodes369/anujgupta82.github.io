import React from "react"; // Remove useState since we're using modal now

function BlogPostCard({ title, date, excerpt, onClick }) {
  // Added onClick prop for modal opening
  return (
    <div
      className="blog-post-card bg-white rounded-lg border border-gray-200 shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer mb-4 sm:mb-6" // Made responsive
      onClick={onClick} // Use onClick prop for modal opening
    >
      <article
        className="archive__item"
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <h2
          className="archive__item-title text-lg sm:text-xl font-semibold text-gray-800 mb-2"
          itemProp="headline"
        >
          <a href="#" rel="" className="no-underline hover:underline">
            {title}
          </a>{" "}
          {/* Title from props */}
        </h2>
        <p className="page__date text-gray-500 text-xs sm:text-sm mb-2">
          <strong>
            <i className="fa fa-fw fa-calendar mr-1" aria-hidden="true"></i>
            Published:
          </strong>
          <time dateTime="2199-01-01T00:00:00-08:00"> {date}</time>{" "}
          {/* Date from props */}
        </p>
        <div
          className="archive__item-excerpt text-sm sm:text-base text-gray-700 leading-relaxed overflow-hidden"
          itemProp="description"
        >
          {" "}
          {/* Made responsive */}
          {excerpt} {/* Excerpt from props */}
        </div>
      </article>
    </div>
  );
}

export default BlogPostCard;
