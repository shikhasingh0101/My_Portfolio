export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
  context: string;
  projects: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Languages", icon: "code", skills: ["Python", "C++", "Java", "JavaScript", "HTML", "CSS", "Dart", "SQL"], context: "Programming foundations, application logic, web development and data work.", projects: ["AI Customer Intelligence", "Library Management System", "Smart Chat Application"] },
  { title: "Web Development", icon: "layout", skills: ["React.js", "Next.js", "HTML5", "CSS3", "Responsive Web Development", "REST APIs"], context: "Responsive interfaces, API-driven applications and modern component-based development.", projects: ["LeapScholar", "RiseCapital", "Hatsoff Accessories", "SHIKHA.DEV Portfolio"] },
  { title: "Backend & Databases", icon: "server", skills: ["Node.js", "Express.js", "REST APIs", "SQL", "MongoDB", "Firebase"], context: "Server-side application logic, API integration and persistent application data.", projects: ["RiseCapital", "Hatsoff Accessories"] },
  { title: "Mobile Development", icon: "layout", skills: ["Flutter", "Dart"], context: "Mobile interfaces and structured workflows for student-focused applications.", projects: ["Student Job Tracker"] },
  { title: "Machine Learning", icon: "brain", skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "EDA", "Data Preprocessing", "Feature Engineering", "Classification", "Model Evaluation", "Model Explainability"], context: "Data preparation, exploratory analysis, feature engineering, classification and model evaluation.", projects: ["AI Customer Intelligence"] },
  { title: "AI & Tools", icon: "sparkles", skills: ["Artificial Intelligence", "Generative AI", "Ollama", "Git", "GitHub", "Streamlit", "Jupyter Notebook", "Figma", "Cisco Packet Tracer"], context: "AI experimentation, development workflow, prototyping and technical tooling.", projects: ["Weather AI", "AI Customer Intelligence", "SHIKHA.DEV Portfolio"] },
  { title: "Computer Science", icon: "code", skills: ["Data Structures and Algorithms", "Computer Networks", "Software Development Principles", "OOP", "CRUD"], context: "Core CS foundations applied through software and systems projects.", projects: ["Smart Chat Application", "Library Management System"] },
];
