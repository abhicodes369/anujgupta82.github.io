import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLink, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'; // Import icons

function WorkshopPage() {
    return (
        <div className="content container mx-auto py-10">
            <h1 className="page__title text-4xl font-bold text-gray-900 mb-6 text-center">Workshops & Bootcamps</h1> {/* Main title styling */}

            <div className="archive px-4 md:px-0"> {/* Container for workshops */}
                <div className="list__item mb-8"> {/* Spacing between workshop items */}
                    <article className="archive__item bg-white rounded-lg shadow-md p-6"> {/* Card styling for workshop item */}
                        <h2 className="archive__item-title text-xl font-semibold text-blue-800 mb-3" itemProp="headline"> {/* Workshop title styling */}
                            <a>Advanced NLP: From Essentials to Deep Transfer Learning</a>
                        </h2>
                        <div className="workshop-info flex flex-col md:flex-row justify-between items-start"> {/* Flex layout for workshop info */}
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Open Data Science Conference (ODSC) Europe, Zurich (Online) </p> {/* Workshop excerpt styling */}
                            <div className="vertical_side text-right md:text-left"> {/* Right-aligned text on small screens, left-aligned on larger */}
                                <p className="page__meta text-gray-500 text-sm"> {/* Meta info styling */}
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> JUN 2021
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2"> {/* Link styling */}
                                    <a href="https://odsc.com/europe/training/" className="text-blue-700 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a ><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                </p>
                            </div>
                         </div> 
                    </article>
                </div>

            </div> 

                 <div className="archive px-4 md:px-0"> {/* Container for workshops */}
                <div className="list__item mb-8"> {/* Spacing between workshop items */}
                    <article className="archive__item bg-white rounded-lg shadow-md p-6"> {/* Card styling for workshop item */}
                        <h2 className="archive__item-title text-xl font-semibold text-blue-800 mb-3" itemProp="headline"> {/* Workshop title styling */}
                            <a>Natural Language Processing Bootcamp</a>
                        </h2>
                        <div className="workshop-info flex flex-col md:flex-row justify-between items-start"> {/* Flex layout for workshop info */}
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Open Data Science Conference (ODSC), Bangalore </p> {/* Workshop excerpt styling */}
                            <div className="vertical_side text-right md:text-left"> {/* Right-aligned text on small screens, left-aligned on larger */}
                                <p className="page__meta text-gray-500 text-sm"> {/* Meta info styling */}
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> NOV 2019
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2"> {/* Link styling */}
                                    <a href="https://hasgeek.com/fifthelephant/2017/sub/learning-representations-of-text-for-nlp-KMNmLpf6pydMExBQQkn65t" className="text-blue-700 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                </p>
                            </div>
                         </div> 
                    </article>
                </div>

            </div> 

             <div className="archive px-4 md:px-0"> {/* Container for workshops */}
                <div className="list__item mb-8"> {/* Spacing between workshop items */}
                    <article className="archive__item bg-white rounded-lg shadow-md p-6"> {/* Card styling for workshop item */}
                        <h2 className="archive__item-title text-xl font-semibold text-blue-800 mb-3" itemProp="headline"> {/* Workshop title styling */}
                            <a>Natural Language Processing Bootcamp - Zero to Hero</a>
                        </h2>
                        <div className="workshop-info flex flex-col md:flex-row justify-between items-start"> {/* Flex layout for workshop info */}
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Open Data Science Conference (ODSC), Bangalore </p> {/* Workshop excerpt styling */}
                            <div className="vertical_side text-right md:text-left"> {/* Right-aligned text on small screens, left-aligned on larger */}
                                <p className="page__meta text-gray-500 text-sm"> {/* Meta info styling */}
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> AUG 2019
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2"> {/* Link styling */}
                                    <a href="https://confengine.com/conferences/odsc-india-2019/schedule" className="text-blue-700 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                </p>
                            </div>
                         </div> 
                    </article>
                </div>

            </div> 

            <div className="archive px-4 md:px-0"> {/* Container for workshops */}
                <div className="list__item mb-8"> {/* Spacing between workshop items */}
                    <article className="archive__item bg-white rounded-lg shadow-md p-6"> {/* Card styling for workshop item */}
                        <h2 className="archive__item-title text-xl font-semibold text-blue-800 mb-3" itemProp="headline"> {/* Workshop title styling */}
                            <a>Bootcamp for Natural Language Processing</a>
                        </h2>
                        
                        <div className="workshop-info flex flex-col md:flex-row justify-between items-start mt-4"> {/* Add margin-top for spacing between locations */}
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Hasgeek, Bangalore</p>
                            <div className="vertical_side text-right md:text-left">
                                <p className="page__meta text-gray-500 text-sm">
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> JUL 2019
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2">
                                    <a href="https://hasgeek.com/fifthelephant/2019-july-nlp-bootcamp/" className="text-blue-800 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a href="https://www.slideshare.net/anujgupta5095/nlp-bootcamp-2018-representation-learning-of-text-for-nlp" className="text-blue-800 hover:underline"><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                </p>
                            </div>
                        </div>
                        <div className="workshop-info flex flex-col md:flex-row justify-between items-start mt-4"></div>

                        <div className="workshop-info flex flex-col md:flex-row justify-between items-start"> {/* Flex layout for workshop info */}
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Anthill Inside, Bangalore</p> {/* Workshop excerpt styling */}
                            <div className="vertical_side text-right md:text-left"> {/* Right-aligned text on small screens, left-aligned on larger */}
                                <p className="page__meta text-gray-500 text-sm"> {/* Meta info styling */}
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> JUL 2018
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2"> {/* Link styling */}
                                    <a href="https://anthillinside.in/2018-july-nlp-bootcamp/" className="text-blue-700 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a href="https://www.slideshare.net/anujgupta5095/nlp-bootcamp-2018-representation-learning-of-text-for-nlp" className="text-blue-800 hover:underline"><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                </p>
                            </div>
                        </div>
                         {/* Repeat workshop-info block for additional locations/dates if needed */}
                         
                         <div className="workshop-info flex flex-col md:flex-row justify-between items-start mt-4"> {/* Add margin-top for spacing between locations */}
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Anthill Inside, Bangalore</p>
                            <div className="vertical_side text-right md:text-left">
                                <p className="page__meta text-gray-500 text-sm">
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> MAY 2018
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2">
                                    <a href="https://anthillinside.in/2018-nlp-bootcamp/" className="text-blue-800 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a href="#" className="text-blue-800 hover:underline"><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

        

                {/* Repeat list__item block for other workshops, adjust content accordingly */}

            </div>

            <div className="archive px-4 md:px-0"> {/* Container for workshops */}
                <div className="list__item mb-8"> {/* Spacing between workshop items */}
                    <article className="archive__item bg-white rounded-lg shadow-md p-6"> {/* Card styling for workshop item */}
                        <h2 className="archive__item-title text-xl font-semibold text-blue-800 mb-3" itemProp="headline"> {/* Workshop title styling */}
                            <a>Representations Learning of text for NLP</a>
                        </h2>
                        <div className="workshop-info flex flex-col md:flex-row justify-between items-start"> {/* Flex layout for workshop info */}
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Anthil Inside, Bangalore </p> {/* Workshop excerpt styling */}
                            <div className="vertical_side text-right md:text-left"> {/* Right-aligned text on small screens, left-aligned on larger */}
                                <p className="page__meta text-gray-500 text-sm"> {/* Meta info styling */}
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> JUL 2017
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2"> {/* Link styling */}
                                    <a href="https://anthillinside.in/2017/nlp-workshop/" className="text-blue-700 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a href="https://www.slideshare.net/anujgupta5095/nlp-bootcamp-2018-representation-learning-of-text-for-nlp" className="text-blue-800 hover:underline"><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                </p>
                            </div>
                        </div>
                         {/* Repeat workshop-info block for additional locations/dates if needed */}
                         <div className="workshop-info flex flex-col md:flex-row justify-between items-start mt-4"> {/* Add margin-top for spacing between locations */}
                            <p className="archive__item-excerpt text-gray-700 mb-2 md:mb-0">Hasgeek, Bangalore</p>
                            <div className="vertical_side text-right md:text-left">
                                <p className="page__meta text-gray-500 text-sm">
                                    <FontAwesomeIcon icon={faClock} className="mr-1" aria-hidden="true" /> APR 2017
                                </p>
                                <p className="archive__item-excerpt text-gray-700 text-sm mt-2">
                                    <a href="https://hasgeek.com/fifthelephant/2019-july-nlp-bootcamp/" className="text-blue-800 hover:underline mr-2"><FontAwesomeIcon icon={faLink} className="mr-1" aria-hidden="true" /> Website</a>
                                    <a href="https://hasgeek.com/fifthelephant/2017/sub/learning-representations-of-text-for-nlp-KMNmLpf6pydMExBQQkn65t" className="text-blue-800 hover:underline"><FontAwesomeIcon icon={faWindowMaximize} className="mr-1" aria-hidden="true" /> Slides</a>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

            </div> 


        

              


             {/* Repeat list__item block for other workshops, adjust content accordingly */}
        </div>
    );
}

export default WorkshopPage;