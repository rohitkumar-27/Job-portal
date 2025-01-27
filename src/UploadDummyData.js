    import { Timestamp } from "firebase/firestore";

// Dummy data to upload
const dummyData = [
    {
      
        postedOn: Timestamp.now(),
        title: "Frontend Developer",
        company: "Meta",
        type: "Contract",
        experience: "Mid Level",
        location: "Hybrid",
        skills: ["React", "JavaScript", "CSS", "HTML"],
        job_link: "https://www.meta.com/careers/"
    },
    {
       
        postedOn: Timestamp.now(),
        title: "Backend Developer",
        company: "Microsoft",
        type: "Full Time",
        experience: "Senior Level",
        location: "Remote",
        skills: ["Python", "Machine Learning", "SQL", "Azure"],
        job_link: "https://careers.microsoft.com/us/en"
    },
    {
       
        postedOn: Timestamp.now(),
        title: "Mobile Developer",
        company: "Amazon",
        type: "Full Time",
        experience: "Mid Level",
        location: "Remote",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        job_link: "https://www.amazon.jobs/en/"
    },
    {
      
        postedOn: Timestamp.now(),
        title: "Frontend Developer",
        company: "Tesla",
        type: "Part Time",
        experience: "Entry Level",
        location: "In-Office",
        skills: ["Figma", "Sketch", "Adobe XD", "Wireframing"],
        job_link: "https://www.tesla.com/careers"
    },
    {
      
        postedOn: Timestamp.now(),
        title: "Backend Developer",
        company: "IBM",
        type: "Full Time",
        experience: "Mid Level",
        location: "In-Office",
        skills: ["AWS", "Azure", "Terraform", "Ansible"],
        job_link: "https://www.ibm.com/employment/"
    },
    {
       
        postedOn: Timestamp.now(),
        title: "Android Developer",
        company: "OpenAI",
        type: "Full Time",
        experience: "Senior Level",
        location: "Hybrid",
        skills: ["Python", "Deep Learning", "PyTorch", "NLP"],
        job_link: "https://openai.com/careers/"
    },
    {
       
        postedOn: Timestamp.now(),
        title: "Android Developer",
        company: "Unity",
        type: "Contract",
        experience: "Mid Level",
        location: "Hybrid",
        skills: ["Unity", "C#", "Game Physics", "3D Modeling"],
        job_link: "https://careers.unity.com/"
    },
    {
        
        postedOn: Timestamp.now(),
        title: "iOS Developer",
        company: "Netflix",
        type: "Full Time",
        experience: "Entry Level",
        location: "In-Office",
        skills: ["JavaScript", "Node.js", "React", "GraphQL"],
        job_link: "https://jobs.netflix.com/"
    }
  // Add more objects as needed
];

export default dummyData