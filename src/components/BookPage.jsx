"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAnchor,
  faBook,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import PNLPbook from "../assets/images/PNLPbook.jpg";
import pnlpchinese from "../assets/images/pnlpchinese.jpg";
import pnlppolish from "../assets/images/pnlppolish.jpg";
import pnlpjapanese from "../assets/images/pnlpjapanese.jpg";
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaGithub, FaGlobe, FaUserTie, FaBook, FaHandshake } from 'react-icons/fa';
// Placeholder book covers with consistent aspect ratios
const bookCovers = [
  { id: 1, src: PNLPbook, alt: "PNLP Book Cover" },
  { id: 2, src: pnlpjapanese, alt: "Japanese simplified translation" },
  { id: 3, src: pnlpchinese, alt: "Chinese Complex Translation" },
  { id: 4, src: pnlppolish, alt: "Polish simplified translation" },
  
];

function BookPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
    // const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval;
    // if (isAutoPlaying) {
    interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === bookCovers.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    // }
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bookCovers.length - 1 ? 0 : prev + 1));
    // setIsAutoPlaying(false)
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bookCovers.length - 1 : prev - 1));
    // setIsAutoPlaying(false)
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // setIsAutoPlaying(false)
  };

  const NameLink = ({ href, children }) => (
    <a
      href={href}
      className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline decoration-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

  const companies = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      url: "https://www.google.com/",
      brandColor: "#4285F4",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png?20210729021049",
      url: "https://www.microsoft.com/",
      brandColor: "#00A4EF",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      url: "https://www.amazon.com/",
      brandColor: "#FF9900",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      url: "https://about.meta.com/",
      brandColor: "#1877F2",
    },
    {
      name: "Walmart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png",
      url: "https://www.walmart.com/",
      brandColor: "#0071CE",
    },
    {
      name: "Arm",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ARM_Logo.svg/920px-ARM_Logo.svg.png?20110319160354",
      url: "https://www.arm.com/",
      brandColor: "#0091BD",
    },
    {
      name: "KPMG",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg",
      url: "https://home.kpmg/",
      brandColor: "#00338D",
    },
    {
      name: "Medium",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg",
      url: "https://medium.com/",
      brandColor: "#00AB6C",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      url: "https://www.spotify.com/",
      brandColor: "#1DB954",
    },
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg",
      url: "https://www.intel.com/",
      brandColor: "#0071C5",
    },
    {
      name: "Oracle",
      logo: "https://cdn.worldvectorlogo.com/logos/oracle-logo-1.svg",
      url: "https://www.oracle.com/",
      brandColor: "#F80000",
    },
    {
      name: "American Express",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
      url: "https://www.americanexpress.com/",
      brandColor: "#006FCF",
    },
    {
      name: "Jio",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/768px-Reliance_Jio_Logo.svg.png",
      brandColor: "#003F7F",
    },
    {
      name: "Google AI",
      logo: "https://wp.logos-download.com/wp-content/uploads/2024/09/Google_AI_Logo.png?dl",
      url: "https://ai.google/",
      brandColor: "#4285F4",
    },
    {
      name: "Microsoft Research",
      logo: "https://www.auai.org/uai2012/MS.png",
      url: "https://www.microsoft.com/en-us/research/about-microsoft-research/",
      brandColor: "#1a0dab"
    },
    {
      name: "TRUST YOU",
      logo: "https://www.hospitalitytechhub.com/wp-content/uploads/2021/04/TrustYou.png",
      url: "https://www.hospitalitytechhub.com/partners/trustyou/",
      brandColor: "1a0dab"
    },
    {
      name: "MetaMetrics",
      logo: "https://metametricsinc.com/wp-content/uploads/2019/01/MetaMetrics_Logo_Horizontal-1-768x227.png",
      url: "https://metametricsinc.com/",
      brandColor: "#1a0dab"
    },
    {
      name: "Wingify",
      logo: "https://wingify.com/wp-content/themes/wingify/images/media-kit/color/wingify-logo-color.svg",
      url: "https://wingify.com/",
      brandColor: "#1a0dab"
    },
    {
      name: "Meta AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      brandColor: "#1a0dab"
    },
    {
      name: "Paloalto",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/PaloAltoNetworks_2020_Logo.svg/768px-PaloAltoNetworks_2020_Logo.svg.png?20210503173224",
      url: "https://www.paloaltonetworks.com/company/brand",
      brandColor: "#1a0dab"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br to-blue-50 from-slate-50">
      <div className="max-w-5xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            Practical Natural Language Processing
          </h1>
          <p className="max-w-3xl mx-auto text-xl italic font-light text-gray-600">
            A Comprehensive Guide to Building Real-World NLP Systems
          </p>
        </div>

        {/* Main Content Card */}
        <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
          <div className="lg:flex">
            {/* Book Carousel Section */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 lg:w-2/5 xl:w-1/3">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <div className="absolute inset-0 overflow-hidden bg-white rounded-lg shadow-lg">
                  {bookCovers.map((book, index) => (
                    <div
                      key={book.id}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                        index === currentSlide
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-95 z-0"
                      }`}
                    >
                      <img
                        src={book.src}
                        alt={book.alt}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute z-20 p-2 text-gray-700 transition-all duration-200 transform -translate-y-1/2 border border-blue-100 rounded-full shadow-md left-3 top-1/2 backdrop-blur-sm bg-white/90 hover:bg-blue-100 hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute z-20 p-2 text-gray-700 transition-all duration-200 transform -translate-y-1/2 border border-blue-100 rounded-full shadow-md right-3 top-1/2 backdrop-blur-sm bg-white/90 hover:bg-blue-100 hover:scale-110"
                    aria-label="Next slide"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-sm"
                    />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute left-0 right-0 z-20 flex justify-center space-x-2 bottom-4">
                    {bookCovers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-blue-600 scale-125"
                            : "bg-blue-300 hover:bg-blue-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Social Handles Below Carousel */}
              <div className="flex flex-col items-center mt-6 space-y-2">
                <div className="flex flex-wrap justify-center gap-3">
                <a href="https://www.linkedin.com/company/practical-nlp/"
               className="text-[#0077B5] hover:text-[#005582] transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn"
            >
                <FaLinkedin className="w-6 h-6" />
            </a>
                  <a href="https://x.com/practicalnlproc"
               className="text-black hover:text-gray-800 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="X (Twitter)"
            >
                <FaXTwitter className="w-6 h-6" />
            </a>
            <a href="https://www.practicalnlp.ai/"
               className="text-[#6e45e2] hover:text-[#4d2bb8] transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Gradient Advisors"
            >
                <FaGlobe className="w-6 h-6" />
            </a>
                  <a href="https://github.com/practical-nlp"
               className="text-[#333] hover:text-black transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="GitHub"
            >
                <FaGithub className="w-6 h-6" />
            </a>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:w-3/5 xl:w-2/3 lg:p-12">
              <div className="space-y-6">
                {/* Book Description */}
                <div>
                  <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2">
                    <span className="font-bold block mb-2">The Book:</span>
                    <li>
                      Brings a practical lens to building AI models & systems in startups and product teams as opposed to academia or research labs.
                    </li>
                    <li>
                      Translated into multiple languages including English, Polish, Chinese, and Japanese.
                    </li>
                    <li> 
                      Cited 300+ times; starred 1350+ times on GitHub.
                    </li>
                    <li>
                      Adopted by 50+ Universities worldwide as part of their AI curriculum.
                    </li>
                  </ul>
                </div>

                {/* Endorsements */}
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">
                      Endorsed by the topmost AI leaders globally:
                    </span>{" "}
                    <NameLink href="https://www.acmilab.org/people/zachary-lipton/">
                      Zachary Lipton
                    </NameLink> (Professor, CS, Carnegie Mellon University; Director, Amazon Science),{" "}
                    <NameLink href="https://ruder.io/">
                      Sebastian Ruder
                    </NameLink> (Lead, Multilingual Team, Cohere),{" "}
                    <NameLink href="http://marc.najork.org/">
                      Marc Najork
                    </NameLink> (Director, DeepMind),{" "}
                    <NameLink href="https://www.microsoft.com/en-us/research/people/monojitc/">
                      Monojit Choudhury
                    </NameLink> (Professor, MBZUAI; Ex Principal Scientist, Microsoft Research),{" "}
                    <NameLink href="https://www.linkedin.com/in/vinayakh/">
                      Vinayak Hegde
                    </NameLink> (CTO, Microsoft for Startups),{" "}
                    <NameLink href="https://mengtingwan.github.io/">
                      Mengting Wan
                    </NameLink> (Principal Scientist, Airbnb),{" "}
                    <NameLink href="https://www.linkedin.com/in/siddharth-sharma-31140210/">
                      Siddharth Sharma
                    </NameLink> (Lead Applied Scientist, Amazon),{" "}
                    <NameLink href="https://www.linkedin.com/in/e10is/">
                      Edouard Harris
                    </NameLink> (Co-founder @Gladstone AI, YC’18)
                    .
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Forward by</span>{" "}
                    <NameLink href="https://cseweb.ucsd.edu/~jmcauley/">
                      Julian McAuley
                    </NameLink>
                  </p>
                  <p className="font-medium text-gray-600">
                    Published by O'Reilly Media, US in June, 2020
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4 pt-4"> {/* Center align */}
                  <a
                    title="O'Reilly"
                    target="_blank"
                    href="https://www.oreilly.com/library/view/practical-natural-language/9781492054047/"
                    className="group inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faBook}
                      className="mr-2 transition-transform duration-200 group-hover:rotate-12"
                    />
                    O'Reilly
                  </a>
                  <a
                    title="Amazon"
                    target="_blank"
                    href="https://www.amazon.in/Practical-Natural-Language-Processing-Gupta/dp/1492054054"
                    className="group inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faAnchor}
                      className="mr-2 transition-transform duration-200 group-hover:rotate-12"
                    />
                    Amazon
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Companies Section */}
          <div className="p-8 border-t border-gray-100 bg-gradient-to-br from-gray-50 to-slate-100 lg:p-12">
            <h3 className="mb-8 text-2xl font-bold text-center text-gray-900">
              Trusted by Professionals at Leading Companies
            </h3>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
              {companies.map((company, index) => (
                <div key={index} className="relative group">
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block overflow-hidden"
                  >
                    <div className="flex items-center justify-center h-24 px-4 py-3 transition-all duration-300 bg-transparent rounded-xl group-hover:-translate-y-1">
                      <div 
                        className="flex items-center justify-center" 
                        style={{
                          width: "140px",
                          height: "50px",
                          position: "relative"
                        }}
                      >
                        <img
                          src={company.logo}
                          title={company.name}
                          alt={`${company.name} logo`}
                          style={{
                            transition: "all 0.3s ease",
                            backgroundColor: "transparent",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            objectFit: "contain"
                          }}
                          className="transition-all duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Additional Professional Touch */}
            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-gray-600">
                Join thousands of professionals who trust our expertise
              </p>
            </div>
          </div>

          {/* Upcoming Book Section */}
          {/* Upcoming Book Section */}
          <div className="border-t-2">
            <div className="w-full p-6 border-l-4 border-indigo-600 rounded-lg shadow-sm bg-gradient-to-br from-gray-100 to-indigo-100">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                📘 Coming Soon
              </h3>
              <p className="mb-2 text-base text-gray-800">
                I’m currently writing my second book titled{" "}
                <strong className="text-indigo-700">
                  "AI First by Design"
                </strong>
                .
              </p>
              <p className="mb-4 text-sm text-gray-700">
                A practical guide to accelerating AI maturity and leading
                high-performance AI-driven initiatives and organizations.
              </p>
              <a
                href="https://github.com/Gradient-Advisors/AI-First-by-Design-Book"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="mr-2 transition-transform duration-200 group-hover:rotate-12"
                />
                View on GitHub
              </a>
              <p className="mt-2 text-xs italic text-gray-500">
                This book is open-source and freely available to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
