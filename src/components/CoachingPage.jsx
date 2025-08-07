import React from 'react';

function CoachingPage() {
    return (
        <div className="content container mx-auto py-10">
            <h1 className="page__title text-4xl font-bold text-gray-900 mb-6 text-center">Coaching</h1> {/* Main title styling */}

            <div className="archive px-4 md:px-0"> {/* Container for buttons - optional padding */}
                <div className="button-column flex flex-col items-center"> {/* Flex column layout to center buttons */}
                    <button className="button-column-button"> {/* Apply shared button styles via className */}
                        Join my AI PM Bootcamp (Best AI Course)
                    </button>
                    <button className="button-column-button">
                        My live AI Advanced AI Product Management Course on Maven
                    </button>
                    <a
                        href="https://www.youtube.com/channel/UCN18Upb0gXm6EbNzHlHk_DQ"
                        target="_blank"
                        className="button-column-button" // Apply shared button styles via className
                    >
                        My Youtube Channel about Product Management
                    </a>
                    {/* Add more buttons here using the same button-column-button className */}
                </div>
            </div>
        </div>
    );
}

export default CoachingPage;