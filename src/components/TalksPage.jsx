"use client"

import { useState } from "react"
import { Search, Calendar, ExternalLink, Video, Monitor } from "lucide-react"

export default function TalksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All Talks")

  const filters = ["All Talks", "Workshops", "Keynotes", "Panels"]

  const talks = [
    {
      year: "2021",
      title: "Practical AI: Is it all about building models?",
      venue: "In conversation with codebasics, Online Recording Website",
      description:
        "A discussion on the practical aspects of AI beyond model building, focusing on deployment, maintenance, and business value.",
      tags: ["Practical AI", "Industry Applications", "AI Implementation"],
      date: "Jul 2021",
      type: "Panels",
      
      website: "https://www.youtube.com/watch?v=example1",
      slides: "https://speakerdeck.com/example/practical-ai",
      recording: "https://www.youtube.com/watch?v=example1",
    },
    {
      year: "2020",
      title: "Practical Natural Language Processing Book | NLP, ML/AI in Industry| GPT-3 & more",
      venue: "Deep Neural Notebooks podcast, Online Recording Website",
      description:
        "Discussion about the Practical Natural Language Processing book, current state of NLP, and applications in industry.",
      tags: ["NLP", "Book Discussion", "GPT-3"],
      date: "Sep 2020",
      type: "Panels",
      website: "https://deepneuralnotebooks.com/example",
      slides: "https://speakerdeck.com/example/nlp-book",
      recording: "https://www.youtube.com/watch?v=example2",
    },
    {
      year: "2020",
      title: "Book Intro: Practical Natural Language Processing",
      venue: "Bay Area NLP meetup, Online Recording Website",
      description:
        "Introduction to the concepts and approaches presented in the Practical Natural Language Processing book.",
      tags: ["NLP", "Book Introduction", "Applied ML"],
      date: "Aug 2020",
      type: "Keynotes",
      website: "https://www.meetup.com/bay-area-nlp/",
      slides: "https://speakerdeck.com/example/book-intro-nlp",
      recording: "https://www.youtube.com/watch?v=example3",
    },
    {
      year: "2020",
      title: "The New Business of AI",
      venue: "IIM Calcutta, Online Recording Website",
      description:
        "A talk focusing on the business implications of AI technologies and how they are reshaping industries.",
      tags: ["Business of AI", "AI Strategy", "Digital Transformation"],
      date: "Aug 2020",
      type: "Keynotes",
      website: "https://www.iimcal.ac.in/events/example",
      slides: "https://speakerdeck.com/example/business-of-ai",
      recording: "https://www.youtube.com/watch?v=example4",
    },
    {
      year: "2018",
      title: "Sarcasm Detection : Achilles Heel of sentiment analysis",
      venue: "Open Data Science Conference (ODSC), Bengaluru, India Recording Website",
      description:
        "Exploring the challenges of detecting sarcasm in text and its impact on sentiment analysis accuracy.",
      tags: ["Sarcasm Detection", "Sentiment Analysis", "NLP Challenges"],
      date: "Sep 2018",
      type: "Workshops",
      website: "https://odsc.com/bengaluru/2018",
      slides: "https://speakerdeck.com/example/sarcasm-detection",
      recording: "https://www.youtube.com/watch?v=example5",
    },
    {
      year: "2018",
      title: "Hubs and Spokes of AI",
      venue: "Anthill Inside, 2018, Bengaluru, India Website",
      description: "A comprehensive overview of the AI ecosystem and how different technologies connect and interact.",
      tags: ["AI Ecosystem", "Technology Integration", "AI Architecture"],
      date: "Jul 2018",
      type: "Keynotes",
      website: "https://anthillinside.com/2018",
      slides: "https://speakerdeck.com/example/hubs-and-spokes",
      recording: "https://www.youtube.com/watch?v=example6",
    },
    {
      year: "2018",
      title: "Sarcasm Detection: Achilles Heel of sentiment analysis",
      venue: "Anthill Inside, Bengaluru, India Slides Recording Website",
      description:
        "Detailed exploration of techniques for detecting sarcasm in text and improving sentiment analysis systems.",
      tags: ["Sarcasm Detection", "Sentiment Analysis", "NLP"],
      date: "Jul 2018",
      type: "Workshops",
      website: "https://anthillinside.com/2018/workshops",
      slides: "https://speakerdeck.com/example/sarcasm-detection-detailed",
      recording: "https://www.youtube.com/watch?v=example7",
    },
    {
      year: "2017",
      title: "Synthetic Gradients",
      venue: "Anthill Inside, Bengaluru, India Website",
      description: "An exploration of synthetic gradient techniques for improving neural network training efficiency.",
      tags: ["Synthetic Gradients", "Neural Networks", "Deep Learning"],
      date: "Jul 2017",
      type: "Workshops",
      website: "https://anthillinside.com/2017",
      slides: "https://speakerdeck.com/example/synthetic-gradients",
      recording: "https://www.youtube.com/watch?v=example8",
    },
    {
      year: "2017",
      title: "CNNs for Text Classification",
      venue: "Nvidia Developer Conference, 2017, Chennai, India Website",
      description:
        "A technical deep dive into using Convolutional Neural Networks for effective text classification tasks.",
      tags: ["CNNs", "Text Classification", "Deep Learning"],
      date: "Nov 2017",
      type: "Workshops",
      website: "https://developer.nvidia.com/events/2017/chennai",
      slides: "https://speakerdeck.com/example/cnns-for-text",
      recording: "https://www.youtube.com/watch?v=example9",
    },
    {
      year: "2017",
      title: "Recent Advances in NLP",
      venue: "PyData Delhi 2017, Delhi, India Website",
      description:
        "Overview of cutting-edge advancements in Natural Language Processing technologies and methodologies.",
      tags: ["NLP", "Research Advances", "Language Models"],
      date: "Sep 2017",
      type: "Keynotes",
      website: "https://pydata.org/delhi2017",
      slides: "https://speakerdeck.com/example/recent-advances-nlp",
      recording: "https://www.youtube.com/watch?v=example10",
    },
    {
      year: "2017",
      title: "Products and AI",
      venue: "Anthill Inside, 2017, Bengaluru, India Website",
      description: "Exploring the integration of AI technologies into product development and enhancement.",
      tags: ["AI Products", "Product Development", "Applied AI"],
      date: "Jul 2017",
      type: "Panels",
      website: "https://anthillinside.com/2017/panels",
      slides: "https://speakerdeck.com/example/products-and-ai",
      recording: "https://www.youtube.com/watch?v=example11",
    },
    {
      year: "2017",
      title: "When – and when not – to use Deep Learning, Machine Learning and AI",
      venue: "Anthill Inside, 2017, Bengaluru, India Website",
      description: "A practical guide to choosing the right technology approach for different problem domains.",
      tags: ["Technology Selection", "Deep Learning", "AI Strategy"],
      date: "Jul 2017",
      type: "Panels",
      website: "https://anthillinside.com/2017/panels/tech-selection",
      slides: "https://speakerdeck.com/example/when-to-use-dl-ml-ai",
      recording: "https://www.youtube.com/watch?v=example12",
    },
    {
      year: "2016",
      title: "Building Continuous Learning Systems",
      venue: "PyData 2016, Washington, D.C. Slides Recording Website",
      description:
        "Strategies and architectures for creating AI systems that continuously learn and improve over time.",
      tags: ["Continuous Learning", "ML Systems", "AI Architecture"],
      date: "Oct 2016",
      type: "Workshops",
      website: "https://pydata.org/dc2016",
      slides: "https://speakerdeck.com/example/continuous-learning-systems",
      recording: "https://www.youtube.com/watch?v=example13",
    },
    {
      year: "2010",
      title: "Authenticated Byzantine Generals in Dual Failure Model",
      venue: "ICDCN 2010, Kolkata, India Website",
      description: "Research presentation on fault-tolerant distributed systems and consensus algorithms.",
      tags: ["Distributed Systems", "Byzantine Failures", "Authentication"],
      date: "Jan 2010",
      type: "Keynotes",
      website: "https://icdcn.org/2010",
      slides: "https://speakerdeck.com/example/byzantine-generals",
      recording: "https://www.youtube.com/watch?v=example14",
    },
    {
      year: "2010",
      title: "On Composability of Reliable Unicast and Broadcast",
      venue: "ICDCN 2010, Kolkata, India Website",
      description: "Technical discussion on composing reliable message passing protocols in distributed systems.",
      tags: ["Distributed Computing", "Reliability", "Protocol Design"],
      date: "Jan 2010",
      type: "Keynotes",
      website: "https://icdcn.org/2010/sessions",
      slides: "https://speakerdeck.com/example/reliable-unicast",
      recording: "https://www.youtube.com/watch?v=example15",
    },
  ]

  // Filter talks based on search query and active filter
  const filteredTalks = talks.filter((talk) => {
    const matchesSearch =
      talk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talk.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talk.venue.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = activeFilter === "All Talks" || talk.type === activeFilter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="bg-blue-50 container mx-auto py-8 px-4 rounded-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-blue-900 mb-2">Talks</h1>
        <div className="h-1 w-32 bg-blue-600 mx-auto mt-2 mb-4"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
          Workshops, keynotes, and talks on AI, NLP, and Machine Learning
        </p>
        
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="max-w-lg mx-auto relative">
          <input
            type="text"
            placeholder="Search talks..."
            className="w-full px-4 py-2 pl-10 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Talks List */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {filteredTalks.map((talk, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-blue-600 transition-all hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-grow">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                    {talk.year}
                  </div>
                  <h2 className="text-xl font-semibold text-blue-800 mb-2">{talk.title}</h2>
                  <p className="text-gray-700 mb-2">{talk.venue}</p>
                  <p className="text-gray-600">{talk.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {talk.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:ml-6 mt-4 md:mt-0 md:min-w-[180px] md:text-right">
                  <p className="flex items-center md:justify-end text-gray-500 text-sm mb-4">
                    <Calendar size={16} className="mr-1" />
                    {talk.date}
                  </p>

                  <div className="flex flex-col gap-2">
                    {talk.website && (
                      <a
                        href={talk.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Website
                      </a>
                    )}
                    {talk.slides && (
                      <a
                        href={talk.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm transition-colors"
                      >
                        <Monitor size={16} className="mr-2" />
                        Slides
                      </a>
                    )}
                    {talk.recording && (
                      <a
                        href={talk.recording}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm transition-colors"
                      >
                        <Video size={16} className="mr-2" />
                        Recording
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
