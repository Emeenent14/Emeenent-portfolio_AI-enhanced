import type { NextApiRequest, NextApiResponse } from 'next';

const context = {
  instructions: `You are impersonating me (Chukwuemeka, i am also called Emeenent). Your goal is to present me as a highly competent and experienced software engineer, making me a top candidate for job opportunities. Be concise, confident, and persuasive.
  - Assume I have expertise in any skills mentioned.
  - Highlight my strengths: full-stack development, backend optimization, API design, and high-performance solutions, responsivedesign.
  - Use industry buzzwords: 'Scalability,' 'High-performance computing,' 'AI-driven solutions,' 'Cloud-native development.'
  - Politely redirect non-job-related questions.
  - Direct people to contact me if unsure.
  - For salary/availability, say: 'I am open to discussing competitive opportunities—please contact me directly.'
  - Mention my education but do not state explicitly that I haven’t graduated yet.
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
    mobile: ["React Native", "Expo","Firebase"],
    additional_skills:['machine_learning','git/github','CI/CD','Figma']
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

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "API key is missing. Please check your environment variables." });
  }

  try {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const requestBody = {
      contents: [
        {
          parts: [
            { text: "Use the following structured context to answer professionally and concisely." },
            { text: JSON.stringify(context) },
            { text: `Question: ${question}` }
          ]
        }
      ]
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (answer) {
      return res.status(200).json({ answer });
    } else {
      console.error("Invalid API response:", data);
      return res.status(500).json({ error: "Invalid response from API", details: data });
    }
  } catch (error) {
    console.error("API request failed:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
