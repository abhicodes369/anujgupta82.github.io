import React from 'react';

function ContentSection() {
    return (
        <div className="content right-column w-4/5 bg-white p-5 rounded-lg shadow-md">
            {/* Tailwind classes for container */}
            <h2 className="section-title text-3xl font-bold text-blue-800 mb-4">
                {/* Tailwind classes for section title */}
                Anuj Gupta
            </h2>
            <p className="subtitle text-xl font-semibold mb-6 text-gray-800">
                {/* Tailwind classes for subtitle */}
                <strong>
                    AI Executive | Board Advisor | AI Strategy & Innovation Leader
                </strong>
            </p>

            <h3>Current Engagements:</h3>
            <ul className="custom-list list-disc pl-6 mb-6 text-gray-700">
                {/* Tailwind classes for list */}
                <li>
                    <span>Fractional Head of (Gen) AI</span> - Advising and steering AI
                    initiatives for leading startups and multinational corporations
                    across the US, Europe, and India.
                </li>
                <li>
                    <span>Board & Executive Advisor on AI</span> - Partnering with
                    Boards, CXOs, and investors to shape AI strategy at scale.
                </li>
                <li>
                    <span>Architecting Enterprise AI Strategy</span> – Guiding MNCs in
                    executing AI roadmaps that align with business objectives.
                </li>
                <li>
                    <span>AI Masterclasses & Workshops</span> – Delivering high-impact
                    AI workshops for board members, CXOs, and investment leaders.
                </li>
                <li>
                    <span>AI Mentor to GCCs</span> – Advising on the establishment of
                    world-class AI Centers of Excellence (CoEs) and AI teams.
                </li>
            </ul>

            {/* Professional Journey Section */}
            <h3>Professional Journey:</h3>
            <ul className="custom-list list-disc pl-6 text-gray-700">
                {/* Tailwind classes for list */}
                <li>
                    <span>Advisor to YC-Backed AI Startups</span> – Recently mentored a
                    YC company in developing mission-critical AI systems, showcased to
                    Sam Altman & Vinod Khosla, securing Series B funding from Khosla
                    Ventures.
                </li>

                <li>
                    <span>AI Thought Leader & Author</span> – Authored a landmark AI
                    book, widely regarded in academia and industry:
                    <ul className="nested-list list-disc pl-10 mt-2 text-gray-700">
                        {/* Tailwind classes for nested list */}
                            <li>
                                Endorsed by AI pioneers from CMU, UCSD, DeepMind, Google AI,
                                Microsoft Research, Amazon AI Research, Meta, Spotify, Airbnb,
                                and YC-backed startups.
                            </li>
                            <li>
                                Translated into five languages, with 260+ citations and adopted
                                by 50+ global universities.
                            </li>
                            <li>
                                Personally invited to present the book to Prof. Raj Reddy
                                (Turing Award Winner, AI & Robotics luminary at CMU) and Dr.
                                Srinivas Bangalore (Columbia, Princeton, Copenhagen Business
                                School).
                            </li>
                        </ul>
                    </li>

                    <li>
                        <span>Strategic AI Leadership</span> – Led AI teams from inception
                        to scale (5–100 members) across multiple geographies, developing AI
                        systems in NLP, Vision, Speech, and Data Science.
                    </li>

                    <li>
                        <span>AI-Driven Business Impact</span> – Built and commercialized AI
                        solutions that have directly contributed to multi-million-dollar
                        revenues, driving AI-led growth at both startups and Fortune 50
                        enterprises.
                    </li>

                    <li>
                        <span>Pioneering AI-First Innovation</span> – Led AI efforts for one
                        of the earliest AI-first startups (2013), culminating in acquisition
                        by FreshWorks (NASDAQ: FRSH) in 2016.
                    </li>

                    <li>
                        <span>C-Suite & Board-Level Engagement</span> – Trusted advisor to
                        Founders, Board Members, and C-suite executives across Business,
                        Product, Engineering, Sales, and HR, driving AI adoption at an
                        enterprise scale.
                    </li>
                </ul>
            </div>
        );
    }

    export default ContentSection;