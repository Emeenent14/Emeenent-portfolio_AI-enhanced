import type { NextApiRequest, NextApiResponse } from 'next';

const context = {
  name: "Akinrotimi Daniel Feyisola",
  contact: {
    email: "dtenny95@gmail.com",
    phone: "+2348129741366",
    location: "Lagos, Nigeria",
    linkedin: "https://linkedin.com/in/daniel-akinrotimi-firebc",
    github: "https://github.com/firebreather-heart"
  },
  profile: "I am a results-oriented Software Engineer with over 4 years of experience in building high-performance web backend systems and AI applications. Skilled in teamwork, communication, and collaboration across diverse teams.",
  skills: {
    programming_languages: ["Python", "C", "HTML", "CSS", "JavaScript", "Golang", "PHP"],
    devops: ["System Admin", "Linux", "Configuration Management"],
    soft_skills: ["Teamwork", "Communication", "Problem Solving"],
    web_backend: ["Django", "Django REST Framework", "Flask", "Postgres", "MySQL", "Redis", "Laravel"],
    machine_learning: ["TensorFlow", "Keras", "SciPy", "Scikit-learn"]
  },
  professional_experience: [
    {
      role: "Backend Development Intern",
      company: "Glintplus",
      duration: "May 2024 - January 2025",
      responsibilities: [
        "Built the researchment app platform API and the researchment academy API",
        "Handled DevOps and configuration management of web servers and services"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Raoatech IT and ElectroMech Ltd",
      duration: "May 2024 - October 2024",
      responsibilities: ["Worked as a web backend developer on company projects"]
    },
    {
      role: "Software Engineer",
      company: "Raoatech IT and ElectroMech Ltd",
      duration: "October 2024",
      responsibilities: ["Built Schoolkia, a multi-tenant platform for schools to manage academic records"]
    }
  ],
  relevant_experience: [
    {
      role: "Team Lead",
      organization: "Nuesa Tech Community, FUNAAB",
      duration: "May 2023 - December 2024",
      achievements: [
        "Jointly founded the Nuesa Tech Community FUNAAB",
        "Spearheaded internship and learning opportunities",
        "Established internship forum and fostered tech collaborations"
      ]
    },
    {
      role: "Web Backend Development Instructor",
      organization: "NUTEC FUNAAB",
      duration: "May 2023 - December 2024",
      responsibilities: [
        "Mentored students in backend development",
        "Designed and delivered curriculum for web backend development",
        "Taught Python, Bash scripting, and version control systems"
      ]
    }
  ],
  certificates: [
    { title: "Software Engineering", issuer: "ALX Africa" },
    { title: "Computer Vision", issuer: "Kaggle" },
    { title: "Machine Learning Foundations", issuer: "AWS" }
  ],
  projects: [
    {
      name: "Swiftdeploy",
      tools: ["Flask", "HTML", "CSS", "JavaScript"],
      description: "A Python module that acts as a wrapper around a machine learning model and automatically creates a web application."
    },
    {
      name: "Firebmail",
      tools: ["Python"],
      description: "A Python-based email client that automates the sending of emails."
    },
    {
      name: "AutoAi",
      tools: ["Python", "TensorFlow", "Scikit-learn"],
      description: "A CLI-based Python module for automatic dataset cleaning, feature engineering, and model testing."
    },
    {
      name: "Orjah",
      tools: ["Django", "Postgres", "Braintree", "Celery", "Redis", "Django REST Framework"],
      description: "An e-commerce website with integrated payment processing."
    }
  ],
  education: [
    {
      degree: "Software Engineering",
      institution: "ALX Africa",
      duration: "January 2023 - March 2024"
    },
    {
      degree: "Mechatronics Engineering",
      institution: "Federal University of Agriculture Abeokuta",
      duration: "January 2021 - 2024"
    }
  ]
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { question } = req.body;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: `${JSON.stringify(context)} ${question}` }]
      }]
    }),
  });

  const data = await response.json();
  res.status(200).json({ answer: data.contents[0].parts[0].text });
}