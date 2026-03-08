export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    title: "Freelance",
    company: "Morphize AI",
    period: "Jun 2025 - Present",
    description: "Provide AI automation and digital transformation solutions to UAE-based SMEs, helping businesses streamline workflows and cut costs. Designed and maintained AI-powered customer support systems, improving response times and customer engagement. Built and launched website: https://www.morphizeai.com/",
    tech: ["Make.com", "n8n", "Zapier", "Voiceflow"]
  },
  {
    title: "Operations Intern",
    company: "Decisive Zone",
    period: "Jun 2024 - Sep 2024",
    description: "Updated Zoho CRM database of 4,000+ clients, improving cross-department collaboration. Managed data entry, inventory, and 50+ daily inquiries, reducing response time. Assisted IT team in optimizing workflows between departments",
    tech: ["Zoho CRM", "MS Excel"]
  },
  {
    title: "Admin & Event Management Intern",
    company: "Qadri Intl. Consultancy",
    period: "Aug 2023 - Sept 2023",
    description: "Delivered high-quality customer service by resolving inquiries and assisting prospective students. Coordinated event logistics for 2,000+ visitors, ensuring smooth crowd management and successful execution. Managed Zoho CRM database for 100+ student applications, improving data accuracy and accessibility for counselors.",
    tech: ["Zoho CRM", "MS Excel", "Event Management"]
  }
];