import React from 'react';
import { FaBriefcase, FaHistory, FaGraduationCap, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

function ContentSection() {
    return (
        <div className="w-full bg-white p-8 rounded-lg shadow-lg">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
                    Anuj Gupta
                </h2>
                <p className="text-xl font-semibold mb-8 text-gray-800 border-l-4 border-blue-800 pl-4">
                    AI Executive | Board Advisor | AI Strategy & Innovation Leader
                </p>

                <div className="space-y-10">
                    {/* Current Engagements Section */}
                    <section>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <FaBriefcase className="mr-3 text-blue-800" />
                            Current Engagements
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">Fractional Head of (Gen) AI</span> - Advising and steering AI initiatives for leading startups and multinational corporations across the US, Europe, and India.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">Board & Executive Advisor on AI</span> - Partnering with Boards, CXOs, and investors to shape AI strategy at scale.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">Architecting Enterprise AI Strategy</span> – Guiding MNCs in executing AI roadmaps that align with business objectives.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">AI Masterclasses & Workshops</span> – Delivering high-impact AI workshops for board members, CXOs, and investment leaders.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">AI Mentor to GCCs</span> – Advising on the establishment of world-class AI Centers of Excellence (CoEs) and AI teams.
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Professional Journey Section */}
                    <section>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <FaHistory className="mr-3 text-blue-800" />
                            Professional Journey
                        </h3>
                        <ul className="space-y-8">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">Advisor to YC-Backed AI Startups</span> – Recently mentored a YC company in developing mission-critical AI systems, showcased to Sam Altman & Vinod Khosla, securing Series B funding from Khosla Ventures.
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">AI Thought Leader & Author</span> – Authored a landmark AI book, widely regarded in academia and industry:
                                    <ul className="mt-4 ml-6 space-y-3">
                                        <li className="flex items-start">
                                            <FaGraduationCap className="mt-1 mr-3 text-blue-800" />
                                            Endorsed by AI pioneers from CMU, UCSD, DeepMind, Google AI, Microsoft Research, Amazon AI Research, Meta, Spotify, Airbnb, and YC-backed startups.
                                        </li>
                                        <li className="flex items-start">
                                            <FaLightbulb className="mt-1 mr-3 text-blue-800" />
                                            Translated into five languages, with 260+ citations and adopted by 50+ global universities.
                                        </li>
                                        <li className="flex items-start">
                                            <FaUsers className="mt-1 mr-3 text-blue-800" />
                                            Personally invited to present the book to Prof. Raj Reddy (Turing Award Winner, AI & Robotics luminary at CMU) and Dr. Srinivas Bangalore (Columbia, Princeton, Copenhagen Business School).
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">Strategic AI Leadership</span> – Led AI teams from inception to scale (5–100 members) across multiple geographies, developing AI systems in NLP, Vision, Speech, and Data Science.
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">AI-Driven Business Impact</span> – Built and commercialized AI solutions that have directly contributed to multi-million-dollar revenues, driving AI-led growth at both startups and Fortune 50 enterprises.
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">Pioneering AI-First Innovation</span> – Led AI efforts for one of the earliest AI-first startups (2013), culminating in acquisition by FreshWorks (NASDAQ: FRSH) in 2016.
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-800 rounded-full mr-4"></span>
                                <div>
                                    <span className="font-semibold text-blue-800">C-Suite & Board-Level Engagement</span> – Trusted advisor to Founders, Board Members, and C-suite executives across Business, Product, Engineering, Sales, and HR, driving AI adoption at an enterprise scale.
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ContentSection;