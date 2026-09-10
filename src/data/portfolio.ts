import { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  profile: {
    name: "HAMENYIMANA Vincent",
    professionalTitle: "Software Developer",
    tagline: "Building practical digital solutions with modern web technologies.",
    location: "Rwanda",
    email: "vincenthamenyimana1@gmail.com",
    phone: "+250 791 222 274",
    whatsapp: "+250 791 222 274",
    github: "https://github.com/vincenthamenyimana1-ux",
    linkedin: "https://linkedin.com/in/vincent",
    profileImage: "/me.png",
  },

  about: {
    introduction:
      "I am a software developer from Rwanda with experience building web applications, APIs, database-driven systems, and responsive websites. I work with both frontend and backend technologies and am continuously improving my skills across the full development stack.",
    items: [
      {
        icon: "Target",
        title: "Career Goal",
        description:
          "Growing as a software developer by building real-world applications and contributing to meaningful projects that solve practical problems.",
      },
      {
        icon: "Code",
        title: "What I Enjoy Building",
        description:
          "Web applications, APIs, database-driven systems, and responsive websites that deliver real value to users and organizations.",
      },
      {
        icon: "BookOpen",
        title: "Currently Learning",
        description:
          "Advancing skills in software development, deployment, Linux, Git/GitHub, DevOps, UI/UX design, and modern web technologies.",
      },
      {
        icon: "Search",
        title: "What I Am Looking For",
        description:
          "Opportunities to grow professionally through job roles, internships, freelance projects, and collaborative development work.",
      },
      {
        icon: "Lightbulb",
        title: "What Makes Me Different",
        description:
          "I learn by building. Every project I work on is an opportunity to solve real problems and develop practical engineering skills.",
      },
    ],
  },

  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React.js" },
        { name: "Tailwind CSS" },
        { name: "Responsive Design" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Django" },
        { name: "Express.js" },
        { name: "PHP" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
      ],
    },
    {
      category: "DevOps & Deployment",
      skills: [
        { name: "Linux / Ubuntu" },
        { name: "Git" },
        { name: "GitHub" },
      ],
    },
    {
      category: "Design",
      skills: [
        { name: "Figma" },
      ],
    },
  ],

  projects: [
    {
      id: "attendance-management-system",
      title: "Attendance Management System",
      description:
        "A web-based attendance management system designed to help organizations manage member attendance efficiently while allowing members to access their own attendance information.",
      problem:
        "Organizations need a reliable way to track member attendance and provide members with visibility into their own participation records.",
      features: [
        "Attendance management",
        "Member management",
        "Member login",
        "Attendance records",
        "Personal attendance viewing",
      ],
      technologies: ["Web Application", "Database", "Authentication"],
      liveUrl: "https://attendancecontrol.kesug.com",
      featured: true,
    },
    {
      id: "itsinda",
      title: "Itsinda",
      description:
        "A saving and lending system designed to support saving and lending activities for groups and organizations.",
      problem:
        "Groups and organizations need a digital platform to manage their saving and lending operations efficiently.",
      features: [
        "Savings management",
        "Lending tracking",
        "Member accounts",
        "Transaction history",
      ],
      technologies: ["Web Application", "Database"],
      liveUrl: "https://itsinda.netlify.app/",
      featured: true,
    },
  ],

  experience: [],

  education: [],

  certifications: [],

  services: [
    {
      id: "website-development",
      title: "Website Development",
      description:
        "Building responsive, modern websites tailored to your business needs using the latest web technologies.",
      icon: "Globe",
    },
    {
      id: "frontend-development",
      title: "Frontend Development",
      description:
        "Creating interactive, pixel-perfect user interfaces with React, TypeScript, and modern CSS frameworks.",
      icon: "Layout",
    },
    {
      id: "backend-development",
      title: "Backend Development",
      description:
        "Developing robust server-side applications and APIs with Node.js, Express, and Django.",
      icon: "Server",
    },
    {
      id: "full-stack-development",
      title: "Full-Stack Development",
      description:
        "End-to-end web application development from database design to deployment.",
      icon: "Layers",
    },
    {
      id: "database-development",
      title: "Database Development",
      description:
        "Designing and managing efficient database systems with MySQL and PostgreSQL.",
      icon: "Database",
    },
    {
      id: "website-deployment",
      title: "Website Deployment",
      description:
        "Deploying and configuring web applications on cloud platforms and hosting services.",
      icon: "Cloud",
    },
    {
      id: "devops",
      title: "DevOps",
      description:
        "Setting up development workflows, version control, and deployment pipelines.",
      icon: "Terminal",
    },
  ],

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/vincenthamenyimana1-ux",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/vincent",
      icon: "Linkedin",
    },
  ],

  settings: {
    siteName: "HAMENYIMANA Vincent",
    siteDescription:
      "Software Developer from Rwanda building practical digital solutions with modern web technologies.",
    cvPath: "/cv/vincent-hamenyimana-cv.pdf",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
};
