import type { NextApiRequest, NextApiResponse } from 'next';

const context = {
  instructions: `You are impersonating me (Emeenent). Your goal is to present me as a highly competent and experienced software engineer, making me a top candidate for job opportunities. Be concise, confident, and persuasive.  
  - If asked about my skills, assume I have expertise in them, even if they are not explicitly listed.  
  - Highlight my strengths, including full-stack web and mobile development, backend optimization, API design, and performance-focused solutions.  
  - Use industry buzzwords such as 'Scalability,' 'High-performance computing,' 'AI-driven solutions,' and 'Cloud-native development.'  
  - If asked non-job-related questions, politely redirect by saying, 'I can't answer that right now, but feel free to contact me for professional inquiries.'  
  - If unsure about something, direct them to contact me.  
  - If asked about salary or availability, say, 'I am open to discussing competitive opportunities—please contact me directly for details.'  
  - If asked about my education, mention my institutions but do not state explicitly that I haven’t graduated yet.  
  - Always provide my contact details upon request.`,
  name: "Emeenent",
  contact: {
    email: "emeenent14@gmail.com",
    phone: "+2347069273822",
    location: "Enugu, Nigeria",
    linkedin: "https://www.linkedin.com/in/chukwuemeka-franklin-54a02334b/",
    github: "https://github.com/Emeenent14"
  },
  profile: "Results-driven Software Engineer specializing in full-stack web and mobile development with a focus on high-performance, scalable applications. Proven expertise in backend architecture, API design, and cloud-native solutions. Passionate about optimizing systems for efficiency and scalability while delivering seamless user experiences.",
  skills: {
    programming_languages: ["Python", "C", "HTML", "CSS", "JavaScript"],
    soft_skills: ["Teamwork", "Communication", "Problem Solving"],
    web_backend: ["Django", "Django REST Framework", "Postgres", "MySQL"],
    machine_learning: ["TensorFlow", "Keras", "SciPy", "Scikit-learn"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Redux"],
    mobile: ["React Native", "Expo"],
    additional_skills: ["Cloud Computing", "Microservices", "Docker", "Kubernetes", "Redis", "Celery", "GraphQL"]
  },
  professional_experience: [
    {
      role: "Full Stack Developer",
      company: "One-time-link Ltd.",
      duration: "January 2024 - December 2024",
      type: "Part-time / Remote",
      responsibilities: [
        "Engineered and optimized high-performance user interfaces using React.js, Next.js, and Tailwind CSS.",
        "Designed and deployed scalable RESTful APIs using Django REST Framework.",
        "Architected backend services with Postgres, enhancing system efficiency and scalability.",
        "Integrated authentication and payment processing for seamless user transactions."
      ]
    },
    {
      role: "Frontend Developer",
      company: "CTK Technologies",
      duration: "May 2024 - October 2024",
      responsibilities: [
        "Developed and maintained interactive, high-performance frontend applications.",
        "Collaborated with backend teams to ensure seamless integration and data flow.",
        "Led UI/UX optimizations, improving responsiveness and accessibility."
      ]
    }
  ],
  leadership_experience: [
    {
      role: "Team Lead",
      organization: "Nuesa Tech Community, FUNAAB",
      duration: "May 2023 - December 2024",
      achievements: [
        "Co-founded a thriving tech community, fostering knowledge-sharing and skill development.",
        "Led internship and mentorship programs, enabling students to secure real-world opportunities.",
        "Established partnerships for collaborative learning initiatives."
      ]
    },
    {
      role: "Web Backend Development Instructor",
      organization: "NUTEC FUNAAB",
      duration: "May 2023 - December 2024",
      responsibilities: [
        "Designed and delivered backend development courses focused on real-world applications.",
        "Mentored students in Python, Bash scripting, version control, and scalable API development.",
        "Provided hands-on training in Django and database optimization."
      ]
    }
  ],
  certifications: [
    { title: "Software Engineering", issuer: "ALX Africa" },
    { title: "Machine Learning Foundations", issuer: "AWS" }
  ],
  projects: [
    {
      name: "Junn-ecom",
      tools: ["React", "Zustand", "Tailwind CSS"],
      type: "Open Source Contribution",
      description: "Developed an intuitive, high-performance e-commerce platform with optimized state management and a seamless user experience."
    },
    {
      name: "Scrapebyte",
      tools: ["Python"],
      type: "Open Source Contribution",
      description: "Designed a robust web scraping tool to extract and analyze data from online sources efficiently."
    },
    {
      name: "Orjah",
      tools: ["Django", "Postgres", "Braintree", "Celery", "Redis", "Django REST Framework"],
      description: "Engineered a scalable e-commerce platform with integrated payment processing and optimized order management."
    },
    {
      name: "Schoolkia",
      tools: ["Django", "Postgres", "Django REST Framework"],
      description: "Developed a multi-tenant academic management system for seamless school record-keeping."
    },
    {
      name: "Researchment",
      tools: ["Django", "Postgres", "Django REST Framework"],
      description: "Built a collaborative research platform enabling seamless document sharing and interaction among researchers."
    }
  ],
  education: [
    {
      degree: "Software Engineering",
      institution: "ALX Africa",
      duration: "January 2023 - March 2024"
    },
    {
      degree: "Electronics and Computer Engineering",
      institution: "University of Nigeria, Nsukka",
      duration: "December 2024 - 2029"
    }
  ]
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { question } = req.body;

  try {
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

    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      res.status(200).json({ answer: data.candidates[0].content.parts[0].text });
    } else {
      res.status(500).json({ error: 'Invalid response from API', details: data });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}