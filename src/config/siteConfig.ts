export const siteConfig = {
  name: "IQRA BIBI",
  role: "SOFTWARE ENGINEER",
  roles: [
    "SOFTWARE ENGINEER",
    "FLUTTER DEVELOPER",
    "WEB DEVELOPER",
    "SOFTWARE ENGINEERING STUDENT"
  ],
  location: "ATT0CK, PAKISTAN → BUILDING GLOBALLY",
  email: "bibiiqra930@gmail.com",
  phone: "03278643682",
  socials: {
    github: "https://github.com/Iqrabibi804",
    linkedin: "https://linkedin.com/in/iqra-bibi-906993312",
    portfolio: "https://lnkd.in/e9p5dw-d",
  },
  education: {
    degree: "B.S. SOFTWARE ENGINEERING",
    institution: "PAF-IAST",
    timeline: "2023 — 2027 Expected",
    details: "Semester 7",
    gpa: "3.18 / 4.00"
  },
  certifications: [
    { title: "IT Center Internship Certificate", issuer: "Pakistan Aeronautical Complex (PAC), Kamra" },
    { title: "Flutter Developer Internship Certificate", issuer: "Quantum Hashlink" },
    { title: "Web Developer Certificate", issuer: "Waiz Software House" },
    { title: "Frontend Developer Certificate", issuer: "Technik Nest" },
    { title: "Python Bootcamp", issuer: "Devtown — Microsoft & Google Collaboration" },
    { title: "AI Chatbot Workshop", issuer: "Devtown" },
  ],
  skills: {
    languages: ["Dart", "Python", "JavaScript", "PHP", "HTML5", "CSS3", "SQL", "TypeScript"],
    mobile: ["Flutter", "Dart", "Provider", "setState", "Responsive UI"],
    web: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Next.js", "Tailwind CSS", "REST API Integration"],
    backend: ["PHP", "Node.js", "Express.js", "Spring Boot"],
    ai: ["Python Basics", "pandas", "NumPy", "Claude AI Integration"],
    devops: ["Git", "GitHub", "GitHub Actions", "Docker", "CI/CD Pipelines", "Vercel", "Railway"],
    databases: ["MySQL", "Firebase Firestore", "PostgreSQL", "Prisma ORM"],
    tools: ["VS Code", "Android Studio", "Postman", "Figma"]
  },
  projects: [
    {
      id: "01",
      title: "NEXUSAGENT",
      category: "AI / WEB3 SECURITY",
      subtitle: "AI-POWERED WEB3 SECURITY INTELLIGENCE PLATFORM",
      description: "NexusAgent is a full-stack AI-powered Web3 security intelligence platform built during a competitive hackathon. The platform connects to any Ethereum-compatible blockchain wallet and performs deep-scan analysis of transaction history, token approvals, and contract interactions to calculate a comprehensive security risk score. It leverages Claude AI to translate complex blockchain security threats — such as phishing attacks, rug pull patterns, malicious token approvals, and suspicious wallet clustering — into plain-language explanations that non-technical users can understand. The frontend is built with Next.js 14 and TypeScript with a real-time analytics dashboard, while the backend runs on Node.js/Express with PostgreSQL and Prisma ORM for persistent threat intelligence storage. Key features include one-click Emergency Revoke for dangerous approvals, wallet-based authentication using Sign-In With Ethereum (SIWE), and an interactive risk analytics dashboard with historical trend visualization.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "Solidity", "Claude AI", "Alchemy SDK"],
      features: ["phishing attack detection", "rug pull detection", "malicious approval detection", "suspicious wallet activity detection", "one-click Emergency Revoke", "interactive risk analytics dashboard", "wallet-based authentication using SIWE"],
      liveUrl: "https://hackathon-namespace.vercel.app",
      sourceUrl: "#",
    },
    {
      id: "02",
      title: "CAMPUS LMS",
      category: "FULL-STACK SYSTEM",
      subtitle: "INSTITUTIONAL LEARNING MANAGEMENT SYSTEM",
      description: "Campus LMS is a comprehensive full-stack learning management system that was designed, developed, and deployed for real-world use across PAF-IAST (Pakistan Air Force Institute of Applied Sciences and Technology). The system provides eight role-based dashboards — Student Portal, Teacher Dashboard, Admin Panel, HR Module, Accountant Interface, Attendance Tracker, Grading System, and Finance Manager — each with tailored permissions and workflows. Built entirely with PHP and MySQL on the backend with Bootstrap and JavaScript on the frontend, the platform handles everything from course enrollment and assignment submission to fee management and transcript generation. The attendance module supports real-time marking with automated absence alerts, while the grading system calculates GPA/CGPA with configurable weightage schemes. This was built during the Waiz Software House internship and represents one of the most complex full-stack systems in the portfolio, serving hundreds of active users.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      features: ["Student Portal", "Teacher Dashboard", "Admin Panel", "HR", "Accountant", "Attendance", "Grading", "Finance"],
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      id: "03",
      title: "OFFLINE MULTI-CALCULATOR SUITE",
      category: "MOBILE",
      subtitle: "15+ SPECIALIZED CALCULATORS IN ONE DART APP",
      description: "The Offline Multi-Calculator Suite is a feature-rich mobile application built entirely in Dart using the Flutter framework, containing 15–16 specialized calculators within a single unified app. Each calculator has its own custom-designed UI optimized for its specific use case — from a full scientific calculator with trigonometric and logarithmic functions, to a BMI calculator with visual health indicators, a comprehensive unit converter supporting 20+ unit categories, and financial calculators for loan amortization, compound interest, and tip splitting. The app is designed to work completely offline with zero external dependencies or network calls, making it reliable in any environment. The architecture follows clean separation of concerns with dedicated calculation engines for each module, shared theming system, and smooth page transitions built with Flutter's animation framework. This project was developed during the Quantum Hashlink internship and demonstrates deep proficiency in Dart language fundamentals and Flutter's widget composition system.",
      tech: ["Flutter", "Dart"],
      features: ["Scientific Calculator", "Unit Converter", "BMI Calculator", "Financial Calculators", "Offline-First", "Custom UI per Calculator"],
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      id: "04",
      title: "DEVOPS BUILD & MONITOR PIPELINE",
      category: "DEVOPS",
      subtitle: "AUTOMATED CI/CD WITH HEALTH MONITORING",
      description: "This DevOps pipeline project implements a complete end-to-end continuous integration and continuous deployment (CI/CD) system using GitHub Actions as the orchestration layer and Docker for containerized builds. The pipeline automatically triggers on every push to main, running a multi-stage workflow that includes code linting, unit test execution, Docker image building, and automated deployment to the target environment. Beyond basic CI/CD, the system includes a custom health monitoring module that periodically checks deployed service endpoints and triggers configurable failure alerts via webhooks when services go down or response times exceed thresholds. The entire pipeline configuration is written in YAML with reusable workflow templates, and shell scripts handle environment-specific deployment logic. This project demonstrates practical DevOps engineering skills including infrastructure-as-code principles, container orchestration, and production monitoring strategies.",
      tech: ["GitHub Actions", "Docker", "Shell", "YAML"],
      features: ["Automated Build & Test", "Docker Containerization", "Health Monitoring", "Failure Alerts", "Multi-stage Pipeline"],
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      id: "05",
      title: "HOSPITAL MANAGEMENT SYSTEM",
      category: "FULL-STACK",
      subtitle: "COMPREHENSIVE HEALTHCARE ADMINISTRATION PLATFORM",
      description: "The Hospital Management System is a full-stack web application built with PHP and MySQL that digitizes and streamlines the core operational workflows of a healthcare facility. The system manages the complete patient lifecycle — from initial registration and medical history intake through appointment scheduling, doctor assignment, treatment recording, and discharge processing. The doctor scheduling module handles shift management, availability calendars, and specialty-based appointment routing to ensure patients are matched with the right physicians. A built-in billing engine automatically generates itemized invoices based on consultations, procedures, medications, and room charges, with support for partial payments and payment history tracking. The appointment management system provides both patient-facing booking and admin-facing calendar views with conflict detection and automated reminder capabilities. The entire system follows a role-based access control model ensuring data privacy compliance across patient, doctor, nurse, and admin roles.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      features: ["Patient Records & History", "Doctor Scheduling & Shifts", "Billing & Invoicing", "Appointment Management", "Role-Based Access Control"],
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      id: "06",
      title: "DOCTORCONNECT",
      category: "MOBILE",
      subtitle: "DOCTOR-PATIENT COMMUNICATION APP IN DART",
      description: "DoctorConnect is a cross-platform mobile application built in Dart using the Flutter framework that facilitates seamless communication between doctors and patients. The app implements a complete role-based access control system where doctors and patients have entirely different interfaces, workflows, and permissions — doctors can manage their availability, view appointment requests, access patient histories, and send prescriptions, while patients can search for doctors by specialty, book appointments, and receive real-time updates on their booking status. The backend integration uses REST APIs for all data operations including user authentication, appointment CRUD operations, and push notification delivery. The UI is fully responsive across different screen sizes and follows Material Design principles with custom theming for a healthcare-appropriate color palette. This was one of the flagship projects built during the Quantum Hashlink Flutter Developer internship, demonstrating proficiency in Dart's async patterns, Flutter state management with Provider, and production-grade mobile app architecture.",
      tech: ["Flutter", "Dart", "REST API", "Provider"],
      features: ["Role-Based Access (Doctor/Patient)", "Appointment Scheduling & Management", "Doctor Search by Specialty", "Real-time Booking Updates", "Prescription Management", "Responsive UI"],
      liveUrl: "#",
      sourceUrl: "#",
    }
  ],
  experience: [
    {
      year: "2026",
      role: "IT CENTER INTERN",
      company: "PAKISTAN AERONAUTICAL COMPLEX (PAC), KAMRA",
      duration: "June 15 – July 24, 2026",
      description: "Worked across the IT Center's infrastructure. Gained exposure to network, systems, and hardware support. Performed hardware testing and troubleshooting. Also built a real-world software solution as part of the internship."
    },
    {
      year: "2024",
      role: "FLUTTER DEVELOPER INTERN",
      company: "QUANTUM HASHLINK",
      duration: "2024",
      description: "Built DoctorConnect, Food Delivery, and Offline Multi-Calculator Suite apps. Assisted with testing, deployment, and release cycles.",
      tech: ["Flutter", "Dart", "Provider", "REST APIs", "Responsive UI"]
    },
    {
      year: "2024–2025",
      role: "WEB DEVELOPER",
      company: "WAIZ SOFTWARE HOUSE",
      duration: "2024–2025",
      description: "Built a full-stack LMS using PHP and MySQL with dashboards, course management, and student progress tracking. Developed and optimized client portfolio websites for performance and SEO."
    },
    {
      year: "2023–2024",
      role: "FRONTEND DEVELOPER",
      company: "TECHNIK NEST",
      duration: "2023–2024",
      description: "Built responsive web interfaces using HTML5, CSS3, and JavaScript. Developed reusable components and improved mobile UX across projects."
    }
  ],
  services: [
    "FLUTTER APPLICATIONS",
    "WEB APPLICATIONS",
    "FULL-STACK SYSTEMS",
    "AI-INTEGRATED APPLICATIONS",
    "SOFTWARE MANAGEMENT SYSTEMS",
    "DEVOPS / CI/CD SYSTEMS"
  ],
};
