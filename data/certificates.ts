export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  organization: string;
  issueDate: string;
  badge: string;
  category: string;
  credentialId?: string;
  pdfUrl: string;
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
    pdfUrl: "/certificates/Python_Certiport_Certificate.pdf",
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
    pdfUrl: "/certificates/Databases_Certiport_Certificate.pdf",
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
    pdfUrl: "/certificates/EAST-WEST-CISDP.pdf",
    skills: ["Systems Analysis", "IT Infrastructure", "Professional Development"],
  },
];

