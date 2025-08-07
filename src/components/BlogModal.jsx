import React, { useEffect } from "react";

function BlogModal({ isOpen, onClose, blog, onNext, onPrevious, hasNext, hasPrevious }) {
  // ENHANCEMENT: Added keyboard support for Escape key to close modal
  // ENHANCEMENT: Added body scroll lock to prevent background scrolling when modal is open
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Restore body scroll when modal is closed
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !blog) return null;

  return (
    // MAJOR CHANGE: Modal positioning changed from full screen (inset-0) to exclude navbar area (top-16)
    // ENHANCEMENT: Added backdrop blur effect and backdrop click to close functionality
    <div
      className="fixed top-16 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-50 backdrop-blur-sm transition-all duration-300 ease-out"
      onClick={onClose}
    >
      {/* ENHANCEMENT: Added shadow, animation, and overflow handling for modern look */}
      {/* ENHANCEMENT: Added click event prevention to stop modal from closing when clicking inside */}

      <div
        className={`bg-white w-full h-full flex flex-col shadow-2xl transform transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ENHANCEMENT: Header made responsive with gradient background and improved styling */}
        {/* ENHANCEMENT: Close button simplified (removed modern effects as per user request) */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50 backdrop-blur-lg shadow-sm">
          {/* ENHANCEMENT: Title with gradient text effect and responsive sizing */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 pr-4 leading-tight">
            {blog.title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 text-2xl sm:text-3xl font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  rounded-full transition-colors duration-200 leading-none flex-shrink-0"
            aria-label="Close modal"
            style={{ lineHeight: "1" }}
          >
            ×
          </button>
        </div>

        {/* MAJOR CHANGE: Content area redesigned foar full width usage and responsive design */}
        {/* ENHANCEMENT: Added gradient background with Tailwind CSS only */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 scroll-smooth">
          {/* MAJOR CHANGE: Removed max-width constraint, content now takes full modal width */}
          {/* ENHANCEMENT: Added responsive padding for all screen sizes */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 transition-all duration-300">
            {/* ENHANCEMENT: Publication date section with glassmorphism card effect and animated indicator */}
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 w-full">
              <p className="text-gray-600 text-xs sm:text-sm flex items-center flex-wrap">
                {/* ENHANCEMENT: Added animated pulse indicator for visual appeal */}
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                <strong className="mr-1">
                  <i
                    className="fa fa-fw fa-calendar mr-1"
                    aria-hidden="true"
                  ></i>
                  Published:
                </strong>
                <time className="font-medium">{blog.date}</time>
              </p>
            </div>

            {/* ENHANCEMENT: Content section with glassmorphism design and hover effects */}
            {/* ENHANCEMENT: Responsive typography with prose classes for different screen sizes */}
            {/* ENHANCEMENT: Added explicit list styling to ensure ordered and unordered lists display properly */}
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full prose-ol:list-decimal prose-ol:ml-6 prose-ol:pl-2 prose-li:mb-2 prose-li:text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>
        </div>

        {/* ENHANCEMENT: Navigation buttons for next/previous blog posts */}
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`flex items-center justify-center w-8 h-8 rounded-lg font-medium transition-all duration-200 ${
              hasNext
                ? "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            aria-label="Next blog"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-xs text-gray-500 font-medium">
            {blog.date}
          </span>

          <button
            onClick={onPrevious}
            disabled={!hasPrevious}
            className={`flex items-center justify-center w-8 h-8 rounded-lg font-medium transition-all duration-200 ${
              hasPrevious
                ? "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            aria-label="Previous blog"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
