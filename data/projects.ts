export type Project = {
  slug: string;
  title: string;
  category: "Full Stack" | "ML / AI" | "Frontend" | "Mobile" | "Systems";
  label: string;
  status?: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  featured: boolean;
  github?: string;
  live?: string;
  accent: "violet" | "cyan" | "pink" | "blue";
  stages: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-customer-intelligence", title: "AI Customer Intelligence", category: "ML / AI", label: "Machine Learning", status: "In Progress",
    description: "A customer-intelligence ML workflow covering data preparation, feature engineering, classification and model evaluation.",
    overview: "A machine-learning project focused on turning customer data into structured, model-ready inputs and exploring patterns that can support data-driven analysis.",
    problem: "Raw customer data can contain missing values, categorical variables and inconsistent numerical features that need careful preparation before modeling.",
    solution: "Built a workflow covering exploratory analysis, cleaning, custom imputation, encoding, transformations, feature engineering, classification and evaluation.",
    role: "ML workflow design, data preprocessing, feature engineering and model experimentation.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "EDA", "Classification"], featured: true, accent: "pink",
    stages: ["Data", "Cleaning", "Custom Imputation", "Encoding", "Transformation", "Features", "Models", "Evaluation"]
  },
  {
    slug: "weather-ai", title: "Weather AI", category: "ML / AI", label: "AI-Powered Weather Application",
    description: "A Python weather application combining external weather APIs with Ollama-assisted conversational interaction.",
    overview: "A practical AI application that combines live weather retrieval with an interaction layer for conversational responses.",
    problem: "Weather information is useful, but users often want a simpler way to interpret retrieved conditions and ask questions about them.",
    solution: "Integrated external API retrieval with Python processing and Ollama to create an AI-assisted weather interaction workflow.",
    role: "Application development, API integration and AI interaction workflow.",
    technologies: ["Python", "External APIs", "Ollama", "AI"], featured: true, accent: "cyan",
    stages: ["Weather API", "Data Retrieval", "Processing", "Ollama", "Conversation"]
  },
  {
    slug: "rise-capital", title: "RiseCapital", category: "Full Stack", label: "Direct Market Access",
    description: "A Direct Market Access platform concept for farmers, built around a modern web application workflow.",
    overview: "A product concept focused on connecting farmers more directly with market opportunities through a modern digital experience.",
    problem: "Farmers can face fragmented digital experiences when trying to connect with market opportunities and buyers.",
    solution: "A web platform concept that brings the experience into one accessible interface with application and data workflows.",
    role: "Full-stack project development and product-focused web implementation.",
    technologies: ["React", "Node.js", "Express", "MongoDB"], featured: true, accent: "violet",
    stages: ["User Experience", "React UI", "API Layer", "Backend", "Database"]
  },
  {
    slug: "hatsoff-accessories", title: "Hatsoff Accessories", category: "Full Stack", label: "E-Commerce Application",
    description: "An e-commerce application for browsing products and moving through a digital shopping experience.",
    overview: "A commerce-focused web application designed around product discovery and an online shopping workflow.",
    problem: "An e-commerce experience needs clear product presentation, intuitive navigation and a responsive interface across devices.",
    solution: "Built a responsive e-commerce interface with product-focused layouts and a structured shopping experience.",
    role: "Web application development and responsive UI implementation.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"], featured: true, live: "https://hatsoff-accessories.vercel.app/", accent: "violet",
    stages: ["Product UI", "Catalog", "Responsive Layout", "Shopping Flow"]
  },
  {
    slug: "leapscholar", title: "LeapScholar", category: "Frontend", label: "Study Abroad Platform",
    description: "A study-abroad web experience connecting students with universities worldwide.",
    overview: "A student-oriented web experience designed around discovering study-abroad opportunities and university information.",
    problem: "Students need a clear digital journey for exploring international study opportunities.",
    solution: "A focused web experience that organizes the journey into discoverable, usable product flows.",
    role: "Web development and interface implementation.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"], featured: true, accent: "blue",
    stages: ["Information Architecture", "UI", "Responsive Layout", "Interaction"]
  },
  {
    slug: "student-job-tracker", title: "Student Job Tracker", category: "Mobile", label: "Flutter Mobile Application",
    description: "A mobile application for organizing and tracking student job opportunities.",
    overview: "A student-focused mobile workflow for keeping job opportunities organized in one structured application.",
    problem: "Students can benefit from a dedicated place to record, view and manage job-related opportunities during applications.",
    solution: "Created Flutter screens and workflows for entering, viewing and managing job-related information.",
    role: "Mobile UI development and application workflow implementation.",
    technologies: ["Flutter", "Dart"], featured: true, live: "https://student-job-tracker-frontend-kappa.vercel.app/", accent: "cyan",
    stages: ["Mobile UI", "Job Entry", "Tracking", "Management"]
  },
  {
    slug: "smart-chat-application", title: "Smart Chat Application", category: "Systems", label: "Data Structures & Algorithms",
    description: "A C++ chat application applying data structures, object-oriented programming and algorithmic logic.",
    overview: "A systems-oriented project exploring how data structures and algorithms can support chat-related application functionality.",
    problem: "Chat applications need structured ways to organize and process message-related information.",
    solution: "Programmed core chat functionality using C++, object-oriented programming, data organization and algorithm design concepts.",
    role: "Application logic, data organization and algorithm implementation.",
    technologies: ["C++", "OOP", "Data Structures", "Algorithms"], featured: true, live: "https://smart-chat-application-qna5yipuo-shikhasingh0101s-projects.vercel.app/", accent: "blue",
    stages: ["Data Model", "OOP", "Data Structures", "Algorithms", "Chat Logic"]
  },
  {
    slug: "library-management-system", title: "Library Management System", category: "Systems", label: "C++ Application",
    description: "A C++ application for organized library book-record management using OOP and CRUD operations.",
    overview: "A foundational systems project demonstrating object-oriented programming and structured application logic.",
    problem: "Manual record management becomes difficult as the number of books and operations increases.",
    solution: "A C++ application for organized book-record operations using programming fundamentals and structured data handling.",
    role: "Application logic, object-oriented design and data operations.",
    technologies: ["C++", "OOP", "Data Structures", "CRUD"], featured: false, accent: "blue",
    stages: ["Data Model", "OOP", "CRUD Operations", "Application Logic"]
  },
  {
    slug: "portfolio-website", title: "SHIKHA.DEV Portfolio", category: "Frontend", label: "Creative Web Engineering",
    description: "A developer portfolio engineered around full-stack development, ML/AI and creative interaction.",
    overview: "A product-style portfolio that communicates technical direction through project storytelling, structured data and interactive visuals.",
    problem: "A conventional portfolio does not fully communicate a growing full-stack + ML identity.",
    solution: "Built a Next.js architecture with dynamic case studies, motion, 3D visualization, skills-to-project relationships and API routes.",
    role: "Design, development, content architecture and creative direction.",
    technologies: ["Next.js", "React", "TypeScript", "Framer Motion", "Three.js"], featured: true, accent: "violet",
    stages: ["Design System", "Next.js", "Motion", "3D", "Case Studies"]
  },
];

export const categories = ["All", "Full Stack", "ML / AI", "Frontend", "Mobile", "Systems"] as const;
