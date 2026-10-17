export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  organization: string;
  issueDate: string;
  badge: string;
  category: string;
  credentialId?: string;
  verificationUrl: string;
  pdfUrl?: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: "python-certiport",
    title: "Information Technology Specialist: Python",
    issuer: "Pearson VUE & Certiport",
    organization: "Certiport",
    issueDate: "June 2025",
    badge: "Pearson VUE Certified",
    category: "Software Engineering & Applied AI",
    credentialId: "wq4F5-2FvW",
    verificationUrl: "https://verify.certiport.com",
    skills: ["Python 3", "Data Structures", "Algorithms", "Applied ML"],
  },
  {
    id: "database-certiport",
    title: "Information Technology Specialist: Databases",
    issuer: "Pearson VUE & Certiport",
    organization: "Certiport",
    issueDate: "June 2025",
    badge: "Pearson VUE Certified",
    category: "Database Systems & Architecture",
    credentialId: "XsAs-XM3o",
    verificationUrl: "https://verify.certiport.com",
    skills: ["Relational Databases", "SQL", "Schema Design", "Query Optimization"],
  },
  {
    id: "east-west-cisdp",
    title: "East-West CISDP Program Certification",
    issuer: "East-West Information Systems",
    organization: "CISDP",
    issueDate: "June 2026",
    badge: "Professional Certification",
    category: "Information Systems & Development",
    credentialId: "3KAD8YI34VM33",
    verificationUrl: "https://east-west-iesi.trainercentralsite.com/credential-validation?credentialId=3KAD8YI34VM33",
    skills: ["Systems Analysis", "IT Infrastructure", "Professional Development"],
  },
];

