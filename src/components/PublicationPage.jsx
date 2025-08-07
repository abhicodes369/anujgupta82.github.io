import React, { useState } from "react";
import {
  CheckCircle,
  FileText,
  Book,
  Archive,
  Link2,
  Award,
  Calendar,
  Search,
  FileCheck,
  
} from "lucide-react";
import thesis_pdf_file from "../assets/docs/ABG_thesis.pdf";

function PublicationPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Publications in reverse chronological order (most recent first)
  const publications = [
    {
      id: 100,
      type: "article",
      title: "What Sam Altman's Role in OpenAI's Rise Teaches Us",
      year: "2025",
      month: "May",
      url: "https://pragmaticai1.substack.com/p/what-sam-altmans-role-in-openais",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "The New Blueprint for Building Leadership at Deep Tech Labs",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/what-sam-altmans-role-in-openais",
          icon: FileText,
        },
      ],
    },
    {
      id: 101,
      type: "article",
      title: "A special session to learn \"How We Conceived the AI system that Won Over Sam Altman (OpenAI) & Vinod Khosla (Khosla Ventures)\"",
      year: "2025",
      month: "May",
      url: "https://pragmaticai1.substack.com/p/a-special-session-to-learn-how-we",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Special session on AI system development",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/a-special-session-to-learn-how-we",
          icon: FileText,
        },
      ],
    },
    {
      id: 102,
      type: "article",
      title: "10x Game in Business",
      year: "2025",
      month: "May",
      url: "https://pragmaticai1.substack.com/p/10x-game-in-business",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "15 Years In Startups: Key Learnings",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/10x-game-in-business",
          icon: FileText,
        },
      ],
    },
    {
      id: 103,
      type: "article",
      title: "AI Adoption & Human Expertise",
      year: "2025",
      month: "May",
      url: "https://pragmaticai1.substack.com/p/ai-adoption-and-human-expertise",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Exploring the intersection of AI and human expertise",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/ai-adoption-and-human-expertise",
          icon: FileText,
        },
      ],
    },
    {
      id: 104,
      type: "article",
      title: "Founder/CEO's Playbook: How to Ride the AI Wave",
      year: "2025",
      month: "Apr",
      url: "https://pragmaticai1.substack.com/p/founderceos-guide-to-making-the-most",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Guide for leaders on AI transformation",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/founderceos-guide-to-making-the-most",
          icon: FileText,
        },
      ],
    },
    {
      id: 105,
      type: "article",
      title: "The Art (& Science) of finding the most important AI Use Cases - Part 3",
      year: "2025",
      month: "Apr",
      url: "https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the-257",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Part 3 of the series on AI use cases",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the-257",
          icon: FileText,
        },
      ],
    },
    {
      id: 106,
      type: "article",
      title: "The Art (& Science) of finding the most important AI Use Cases - Part 2",
      year: "2025",
      month: "Apr",
      url: "https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Part 2 of the series on AI use cases",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/the-art-and-science-of-finding-the",
          icon: FileText,
        },
      ],
    },
    {
      id: 107,
      type: "article",
      title: "The Art (& Science) of finding the most important AI Use Cases - Part 1",
      year: "2025",
      month: "Apr",
      url: "https://pragmaticai1.substack.com/p/why-your-ai-roadmap-looks-like-everyone",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Part 1 of the series on AI use cases",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/why-your-ai-roadmap-looks-like-everyone",
          icon: FileText,
        },
      ],
    },
    {
      id: 108,
      type: "article",
      title: "Why the AI rush?",
      year: "2025",
      month: "Apr",
      url: "https://pragmaticai1.substack.com/p/why-the-ai-rush",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Understanding the current AI revolution",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/why-the-ai-rush",
          icon: FileText,
        },
      ],
    },
    {
      id: 109,
      type: "article",
      title: "Why Founders/CEOs must personally own AI transformation",
      year: "2025",
      month: "Apr",
      url: "https://pragmaticai1.substack.com/p/why-foundersceos-must-personally",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "The importance of leadership in AI transformation",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/why-foundersceos-must-personally",
          icon: FileText,
        },
      ],
    },
    {
      id: 110,
      type: "article",
      title: "AI Déjà Vu: Learning from the Internet Era",
      year: "2025",
      month: "Apr",
      url: "https://pragmaticai1.substack.com/p/ai-deja-vu-learning-from-the-internet",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Drawing parallels between AI and Internet revolutions",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/ai-deja-vu-learning-from-the-internet",
          icon: FileText,
        },
      ],
    },
    {
      id: 111,
      type: "article",
      title: "Unknowingly, CXO's are often the biggest bottleneck in AI adoption",
      year: "2025",
      month: "Apr",
      url: "https://pragmaticai1.substack.com/p/unknowingly-cxos-are-the-biggest",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Addressing leadership challenges in AI adoption",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/unknowingly-cxos-are-the-biggest",
          icon: FileText,
        },
      ],
    },
    {
      id: 112,
      type: "article",
      title: "AI ≠ IT",
      year: "2025",
      month: "Mar",
      url: "https://pragmaticai1.substack.com/p/ai-vs-it",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Understanding the fundamental differences between AI and IT",
      links: [
        {
          type: "article",
          label: "Read Article",
          url: "https://pragmaticai1.substack.com/p/ai-vs-it",
          icon: FileText,
        },
      ],
    },
    {
      id: 113,
      type: "article",
      title: "Podcast #1 | Somnath Biswas - Head of Product | Conversational AI",
      year: "2025",
      month: "Feb",
      url: "https://pragmaticai1.substack.com/p/podcast-1-somnath-biswas-head-of",
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description: "Conversation about Conversational AI with Somnath Biswas",
      links: [
        {
          type: "article",
          label: "Listen to Podcast",
          url: "https://pragmaticai1.substack.com/p/podcast-1-somnath-biswas-head-of",
          icon: FileText,
        },
      ],
    },
    {
      id: 1,
      type: "paper",
      title:
        "Noisy Text Data: Achilles' Heel of popular transformer based NLP models",
      year: "2021",
      url: "https://arxiv.org/abs/2110.03353",
      authors: [
        {
          name: "Kartikay Bagla",
          url: "http://linkedin.com/in/kartikay-bagla-60638a167",
        },
        { name: "Ankit Kumar", url: "http://linkedin.com/in/ankit-ahlawat" },
        { name: "Shivam Gupta", url: "https://www.linkedin.com/in/shmgupta/" },
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
      ],
      description:
        "Investigates the impact of noisy text on transformer models performance across multiple NLP tasks.",
      links: [
        {
          type: "pdf",
          label: "PDF",
          url: "https://arxiv.org/pdf/2110.03353.pdf",
          icon: FileText,
        },
        {
          type: "bibtex",
          label: "BibTeX",
          url: "https://arxiv2bibtex.org/?q=2110.03353",
          icon: Book,
        },
        {
          type: "arxiv",
          label: "arXiv:2110.03353",
          url: "https://arxiv.org/abs/2110.03353",
          icon: Archive,
        },
      ],
    },
    {
      id: 2,
      type: "book",
      title:
        "Practical Natural Language Processing: A Comprehensive Guide to Building Real-World NLP Systems",
      year: "2020",
      url: "https://www.oreilly.com/library/view/practical-natural-language/9781492054047/",
      authors: [
        { name: "Sowmya Vajjala", url: null },
        { name: "Bodhisattwa Majumder", url: null },
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        { name: "Harshit Surana", url: null },
      ],
      description:
        "Book on practical aspects of implementing NLP systems, published by O'Reilly Media.",
      links: [
        {
          type: "bibtex",
          label: "BibTeX",
          url: "https://www.doi2bib.org/bib/10/gjzgqh",
          icon: Book,
        },
      ],
    },
    {
      id: 3,
      type: "paper",
      title:
        "hinglishNorm - A Corpus of Hindi-English Code Mixed Sentences for Text Normalization",
      year: "2020",
      url: "#",
      venue: "COLING in Online 2020",
      authors: [
        { name: "Piyush Makhija", url: null },
        { name: "Ankit Kumar", url: null },
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
      ],
      description:
        "Presents a corpus for text normalization of Hindi-English code-mixed text.",
      links: [
        { type: "bibtex", label: "BibTeX", url: "https://www.doi2bib.org/bib/10.18653/v1/2020.coling-main.1", icon: Book },
        {
          type: "doi",
          label: "DOI: 10.18653/v1/2020.coling-main.1",
          url: "https://doi.org/10.18653/v1/2020.coling-main.1",
          icon: Link2,
        },
        {
          type: "conference",
          label: "COLING 2020",
          url: "https://coling2020.org/",
          icon: Calendar,
        },
      ],
    },
    {
      id: 4,
      type: "paper",
      title: "Noisy Text Data: Achilles' Heel of BERT",
      year: "2020",
      url: "#",
      venue: "W-NUT@EMNLP in Online 2020",
      authors: [
        { name: "Ankit Kumar", url: null },
        { name: "Piyush Makhija", url: null },
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
      ],
      description: "Examines how noisy text affects BERT performance.",
      links: [
        { type: "bibtex", label: "BibTeX", url: "https://www.doi2bib.org/bib/10.18653/v1/2020.wnut-1.1", icon: Book },
        {
          type: "doi",
          label: "DOI: 10.18653/v1/2020.wnut-1.1",
          url: "https://doi.org/10.18653/v1/2020.wnut-1.1",
          icon: Link2,
        },
        {
          type: "conference",
          label: "W-NUT@EMNLP 2020",
          url: "https://noisy-text.github.io/2020/",
          icon: Calendar,
        },
      ],
    },
    {
      id: 5,
      type: "patent",
      title:
        "Noise Reduction And Smart Ticketing For Social Media-based Communication Systems",
      year: "2019",
      url: "#",
      authors: [
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        { name: "Saurabh Arora", url: null },
        { name: "Satyam Saxena", url: null },
        { name: "Navaneethan Santhanam", url: null },
      ],
      description: "Patent for noise reduction in social media communications.",
      organization: "Freshworks Inc",
      links: [
        { type: "pdf", label: "PDF", url: "#", icon: FileText },
        { type: "article", label: "Article", url: "#", icon: FileCheck },
      ],
    },
    {
      id: 6,
      type: "patent",
      title: "Named entity recognition from short unstructured text",
      year: "2019",
      url: "#",
      authors: [
        { name: "Navaneethan Santhanam", url: null },
        { name: "Saurabh Arora", url: null },
        { name: "Satyam Saxena", url: null },
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
      ],
      description: "Patent for named entity recognition in short texts.",
      organization: "Freshworks Inc",
      links: [
        { type: "pdf", label: "PDF", url: "#", icon: FileText },
        { type: "article", label: "Article", url: "#", icon: FileCheck },
      ],
    },
    {
      id: 7,
      type: "patent",
      title:
        "Automatic annotation of social media communications for noise cancellation",
      year: "2019",
      url: "#",
      authors: [
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        { name: "Saurabh Arora", url: null },
        { name: "Satyam Saxena", url: null },
        { name: "Navaneethan Santhanam", url: null },
      ],
      description:
        "Patent for automatic annotation of social media communications.",
      organization: "Freshworks Inc",
      links: [
        { type: "pdf", label: "PDF", url: "#", icon: FileText },
        { type: "article", label: "Article", url: "#", icon: FileCheck },
      ],
    },
    {
      id: 8,
      type: "paper",
      title: "A New Look at Composition of Authenticated Byzantine Generals",
      year: "2013",
      url: "https://arxiv.org/abs/1203.1463",
      authors: [
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        { name: "Prasant Gopal", url: null },
        { name: "Piyush Bansal", url: null },
        { name: "Kannan Srinathan", url: null },
      ],
      description:
        "New perspective on authentication in Byzantine agreement protocols.",
      links: [
        {
          type: "pdf",
          label: "PDF",
          url: "https://arxiv.org/pdf/1203.1463.pdf",
          icon: FileText,
        },
        {
          type: "bibtex",
          label: "BibTeX",
          url: "https://arxiv2bibtex.org/?q=1203.1463",
          icon: Book,
        },
        {
          type: "arxiv",
          label: "arXiv: 1203.1463",
          url: "https://arxiv.org/abs/1203.1463",
          icon: Archive,
        },
      ],
    },
    {
      id: 9,
      type: "paper",
      title: "Byzantine Agreement Using Partial Authentication",
      year: "2011",
      url: "https://link.springer.com/chapter/10.1007/978-3-642-24100-0_38",
      venue:
        "25th International Symposium on DIStributed Computing (DISC) in Roma, Italy 2011",
      authors: [
        { name: "Piyush Bansal", url: null },
        { name: "Prasant Gopal", url: null },
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        { name: "Kannan Srinathan", url: null },
        { name: "Pranav Kumar Vasishta", url: null },
      ],
      description: "Explores Byzantine agreement with partial authentication.",
      links: [
        {
          type: "bibtex",
          label: "BibTeX",
          url: "https://www.doi2bib.org/bib/10.1007/978-3-642-24100-0_38",
          icon: Book,
        },
        {
          type: "doi",
          label: "DOI: 10.1007/978-3-642-24100-0_38",
          url: "https://doi.org/10.1007/978-3-642-24100-0_38",
          icon: Link2,
        },
        {
          type: "conference",
          label: "DISC 2011",
          url: "https://www.disc-conference.org/wp/past-conferences/",
          icon: Calendar,
        },
      ],
    },
    {
      id: 10,
      type: "paper",
      title: "On Composability of Reliable Unicast and Broadcast",
      year: "2010",
      url: "https://link.springer.com/chapter/10.1007/978-3-642-11322-2_10",
      venue:
        "International Conference on Distributed Computing and Networking (ICDCN) in Kolkata, India 2010",
      authors: [
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        { name: "Sandeep Hans", url: null },
        { name: "Kannan Srinathan", url: null },
        { name: "C. Pandu Rangan", url: null },
      ],
      description:
        "Analysis of composability in reliable communication protocols.",
      links: [
        {
          type: "bibtex",
          label: "BibTeX",
          url: "https://www.doi2bib.org/bib/10.1007/978-3-642-11322-2_10",
          icon: Book,
        },
        {
          type: "doi",
          label: "DOI: 10.1007/978-3-642-11322-2_10",
          url: "https://doi.org/10.1007/978-3-642-11322-2_10",
          icon: Link2,
        },
        {
          type: "conference",
          label: "ICDCN 2010",
          url: "https://www.cucse.org/ICDCN2010.htm",
          icon: Calendar,
        },
      ],
    },
    {
      id: 11,
      type: "paper",
      title: "Authenticated Byzantine Generals in Dual Failure Model",
      year: "2010",
      url: "https://link.springer.com/chapter/10.1007/978-3-642-11322-2_12",
      venue:
        "International Conference on Distributed Computing and Networking (ICDCN) in Kolkata, India 2010",
      authors: [
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        { name: "Prasant Gopal", url: null },
        { name: "Piyush Bansal", url: null },
        { name: "Kannan Srinathan", url: null },
      ],
      description: "Byzantine agreement protocol for dual failure scenarios.",
      links: [
        {
          type: "bibtex",
          label: "BibTeX",
          url: "https://www.doi2bib.org/bib/10.1007/978-3-642-11322-2_12",
          icon: Book,
        },
        {
          type: "doi",
          label: "DOI: 10.1007/978-3-642-11322-2_12",
          url: "https://doi.org/10.1007/978-3-642-11322-2_12",
          icon: Link2,
        },
        {
          type: "conference",
          label: "ICDCN 2010",
          url: "https://www.cucse.org/ICDCN2010.htm",
          icon: Calendar,
        },
      ],
    },
    {
      id: 12,
      type: "thesis",
      title: "Authenticated Byzantine Generals",
      year: "2009",
      url: thesis_pdf_file,
      authors: [{ name: "Anuj Gupta", url: "https://anujgupta82.github.io/" }],
      description:
        "MS thesis - Authentication in Byzantine agreement protocols.",
      organization: "IIIT Hyderabad",
      links: [
        { type: "pdf", label: "PDF", url: thesis_pdf_file, icon: FileText },
      ],
    },
    {
      id: 13,
      type: "paper",
      title: "Topology Knowledge Affects Probabilistic Reliable Communication",
      year: "2009",
      url: "https://dl.acm.org/doi/10.1145/1582716.1582784",
      venue:
        "ACM Symposium on Principles of Distributed Computing (PODC) in Calgary, Alberta, Canada 2009",
      authors: [
        { name: "Pranav K. Vasishta", url: null },
        { name: "Prasant Gopal", url: null },
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        { name: "Piyush Bansal", url: null },
        { name: "Kannan Srinathan", url: null },
      ],
      description: "Effects of topology knowledge on reliable communication.",
      links: [
        {
          type: "bibtex",
          label: "BibTeX",
          url: "https://www.doi2bib.org/bib/10.1145/1582716.1582784",
          icon: Book,
        },
        {
          type: "doi",
          label: "DOI: 10.1145/1582716.1582784",
          url: "https://doi.org/10.1145/1582716.1582784",
          icon: Link2,
        },
        {
          type: "conference",
          label: "PODC 2009",
          url: "https://www.podc.org/podc2009/",
          icon: Calendar,
        },
      ],
    },
    {
      id: 14,
      type: "paper",
      title:
        "Global Consistency can be Easier than Point-to-Point Communication",
      year: "2009",
      url: "https://dl.acm.org/doi/10.1145/1582716.1582782",
      venue:
        "ACM Symposium on Principles of Distributed Computing (PODC) in Calgary, Alberta, Canada 2009",
      authors: [
        { name: "Prasant Gopal", url: "https://prasantgopal.com/" },
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        { name: "Pranav K. Vasishta", url: null },
        { name: "Piyush Bansal", url: null },
        { name: "Kannan Srinathan", url: null },
      ],
      description:
        "Comparing global consistency and point-to-point communication.",
      links: [
        {
          type: "bibtex",
          label: "BibTeX",
          url: "https://www.doi2bib.org/bib/10.1145/1582716.1582782",
          icon: Book,
        },
        {
          type: "doi",
          label: "DOI: 10.1145/1582716.1582782",
          url: "https://doi.org/10.1145/1582716.1582782",
          icon: Link2,
        },
        {
          type: "conference",
          label: "PODC 2009",
          url: "https://www.podc.org/podc2009/",
          icon: Calendar,
        },
      ],
    },
    {
      id: 15,
      type: "paper",
      title: "On Privacy Preserving Convex Hull",
      year: "2009",
      url: "https://ieeexplore.ieee.org/document/5066472",
      venue:
        "IEEE International Conference on Availability, Reliability and Security (ARES) in Fukuoka, Japan 2009",
      authors: [
        {
          name: "Sandeep Hans",
          url: "https://research.ibm.com/people/sandeep-hans",
        },
        { name: "Sarat C. Addepalli", url: null },
        { name: "Anuj Gupta", url: "https://anujgupta82.github.io/" },
        {
          name: "Kannan Srinathan",
          url: "https://www.iiit.ac.in/faculty/kannan-srinathan/",
        },
      ],
      description: "Privacy-preserving algorithms for convex hull computation.",
      links: [
        {
          type: "bibtex",
          label: "BibTeX",
          url: "https://www.doi2bib.org/bib/10.1109/ARES.2009.159",
          icon: Book,
        },
        {
          type: "doi",
          label: "DOI: 10.1109/ARES.2009.159",
          url: "https://doi.org/10.1109/ARES.2009.159",
          icon: Link2,
        },
        {
          type: "conference",
          label: "ARES 2009",
          url: "https://2009.ares-conference.eu/www.ares-conference.eu/conf/index.html",
          icon: Calendar,
        },
      ],
    },
  ];

  const getPublicationIcon = (type) => {
    switch (type) {
      case "paper":
        return FileText;
      case "book":
        return Book;
      case "patent":
        return FileCheck;
      case "thesis":
        return Archive;
      case "article":
        return FileText;
      default:
        return FileText;
    }
  };

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((author) =>
        author.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilter = activeFilter === "all" || pub.type === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
  };

  const filterTypes = [
    { id: "all", label: "All Publications" },
    { id: "paper", label: "Research Papers" },
    { id: "book", label: "Books" },
    { id: "patent", label: "Patents" },
    { id: "thesis", label: "Thesis" },
    { id: "article", label: "Articles" },
  ];

  // Count publications by type
  const pubCounts = {
    papers: publications.filter((p) => p.type === "paper").length,
    books: publications.filter((p) => p.type === "book").length,
    patents: publications.filter((p) => p.type === "patent").length,
    thesis: publications.filter((p) => p.type === "thesis").length,
    Articles: publications.filter((p) => p.type === "article").length,
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto py-5 px-4 max-w-5xl">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-blue-900 mb-2">
            Publications
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Research papers, patents, books, and thesis in Natural Language
            Processing, Distributed Computing, and Security.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filterTypes.map((filter) => (
              <button
                key={filter.id}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-blue-700 text-white shadow-md scale-105"
                    : "bg-white text-blue-800 border border-blue-200 hover:bg-blue-50"
                }`}
                onClick={() => handleFilterClick(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>


          <div className="mt-10 grid grid-cols-6 gap-2 mb-10">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {publications.length}
              </div>
              <div className="text-xs text-gray-600">Publications</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {pubCounts.papers}
              </div>
              <div className="text-xs text-gray-600">Papers</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {pubCounts.books}
              </div>
              <div className="text-xs text-gray-600">Books</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {pubCounts.patents}
              </div>
              <div className="text-xs text-gray-600">Patents</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {pubCounts.thesis}
              </div>
              <div className="text-xs text-gray-600">Thesis</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm hover:shadow transition-all duration-300">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {pubCounts.Articles}
              </div>
              <div className="text-xs text-gray-600">Articles</div>
            </div>
          </div>

        </div>

        <div className="space-y-8">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((publication) => {
              const Icon = getPublicationIcon(publication.type);
              return (
                <div
                  key={publication.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-l-blue-500 border-t border-r border-b border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-lg mr-4 hidden md:flex items-center justify-center border border-blue-300 h-16 w-16 flex-shrink-0">
                        <Icon size={28} className="text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start flex-wrap md:flex-nowrap gap-2 mb-2">
                          <h2 className="text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors flex-grow">
                            {publication.url !== "#" ? (
                              <a
                                href={publication.url}
                                className="hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {publication.title}
                              </a>
                            ) : (
                              publication.title
                            )}
                          </h2>
                          <span className="text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full px-3 py-1 font-medium shadow-sm flex-shrink-0">
                            {publication.year}
                          </span>
                        </div>
                        {publication.type !== "article" && (
                          <p className="text-gray-700 mb-2">
                            <span className="font-semibold">Authors:</span>{" "}
                            {publication.authors.map((author, idx) => (
                              <span key={idx}>
                                {author.url ? (
                                  <a
                                    href={author.url}
                                    className="text-gray-600 hover:text-blue-700 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {author.name}
                                  </a>
                                ) : (
                                  <span className="text-gray-600">
                                    {author.name}
                                  </span>
                                )}
                                {idx < publication.authors.length - 1 && (
                                  <span className="text-gray-600">, </span>
                                )}
                              </span>
                            ))}
                          </p>
                        )}
                        {publication.venue && (
                          <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Venue:</span>{" "}
                            {publication.venue}
                          </p>
                        )}
                        {publication.organization && (
                          <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Organization:</span>{" "}
                            {publication.organization}
                          </p>
                        )}
                        <p className="text-gray-600 mb-4">
                          {publication.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          {publication.links &&
                            publication.links.map((link, idx) => (
                              <a
                                key={idx}
                                className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <link.icon size={16} className="mr-1" />{" "}
                                {link.label}
                              </a>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">
                No publications found matching your search criteria.
              </p>
            </div>
          )}
        </div>

        
        <div className="mt-16 text-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">Last updated: April 2025</p>
        </div>
      </div>
    </div>
  );
}

export default PublicationPage;
