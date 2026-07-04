import {
  Activity,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Factory,
  Building2,
} from "lucide-react";

export const caseStudies = [
  {
    id: "01",
    icon: Activity,
    industry: "Healthcare",
    title: "Digital Healthcare Platform",

    overview:
      "A healthcare organization needed a modern platform to improve patient engagement, appointment management, and secure communication between medical professionals and patients.",

    challenge:
      "The existing workflow relied on disconnected systems, manual scheduling, and limited digital interaction, resulting in operational inefficiencies and inconsistent patient experiences.",

    strategy:
      "We designed a cloud-native architecture focused on security, scalability, and seamless user experience. The platform was structured to support future integrations while maintaining regulatory compliance.",

    solution: [
      "Patient Portal",
      "Appointment Scheduling",
      "Electronic Health Records Integration",
      "Role-Based Access Control",
      "Real-time Notifications",
    ],

    outcomes: [
      "Improved operational efficiency",
      "Enhanced patient engagement",
      "Scalable digital healthcare infrastructure",
    ],

    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "AWS",
      "Docker",
    ],
  },

  {
    id: "02",
    icon: Landmark,
    industry: "FinTech",
    title: "Digital Financial Platform",

    overview:
      "A fintech startup required a secure and scalable platform to manage digital payments and financial operations while preparing for rapid user growth.",

    challenge:
      "Financial products demand high availability, strict security, and compliance. The platform needed to support future expansion without compromising performance.",

    strategy:
      "Our engineering focus was on modular architecture, secure authentication, API-first development, and cloud scalability to ensure long-term maintainability.",

    solution: [
      "Digital Wallet",
      "Payment Processing",
      "User Verification",
      "Financial Dashboard",
      "Transaction History",
    ],

    outcomes: [
      "Secure financial operations",
      "Scalable backend architecture",
      "Improved user trust and reliability",
    ],

    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
  },

  {
    id: "03",
    icon: ShoppingBag,
    industry: "E-Commerce",
    title: "Modern Commerce Platform",

    overview:
      "Designed a commerce platform capable of handling high traffic, streamlined inventory management, and an optimized customer purchasing journey.",

    challenge:
      "The business required a platform capable of supporting increasing product catalogs and seasonal traffic while maintaining fast performance.",

    strategy:
      "Performance optimization, scalable infrastructure, and customer-focused user experience became the foundation of the engineering approach.",

    solution: [
      "Product Catalog",
      "Order Management",
      "Inventory Control",
      "Customer Dashboard",
      "Analytics Integration",
    ],

    outcomes: [
      "Improved shopping experience",
      "Operational efficiency",
      "Architecture ready for business growth",
    ],

    technologies: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "AWS",
    ],
  },

  {
    id: "04",
    icon: GraduationCap,
    industry: "Education",
    title: "Learning Management Platform",

    overview:
      "Built a digital learning environment supporting institutions with online education, assessments, and collaborative learning.",

    challenge:
      "Educational institutions required a platform that remained intuitive for students while being scalable for administrators.",

    strategy:
      "Focused on accessibility, performance, and modular architecture to support continuous platform evolution.",

    solution: [
      "Course Management",
      "Online Assessments",
      "Student Portal",
      "Faculty Dashboard",
      "Learning Analytics",
    ],

    outcomes: [
      "Better learning experience",
      "Simplified administration",
      "Future-ready education platform",
    ],

    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
  },

  {
    id: "05",
    icon: Factory,
    industry: "Manufacturing",
    title: "Manufacturing Operations Platform",

    overview:
      "Developed software that provided operational visibility, production tracking, and workflow automation for manufacturing businesses.",

    challenge:
      "Disconnected operational data made planning and reporting inefficient across production teams.",

    strategy:
      "Designed centralized data architecture with real-time operational visibility and scalable reporting systems.",

    solution: [
      "Production Dashboard",
      "Inventory Tracking",
      "Supply Chain Monitoring",
      "Workflow Automation",
      "Reporting System",
    ],

    outcomes: [
      "Improved operational visibility",
      "Reduced manual processes",
      "Better production planning",
    ],

    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
  },

  {
    id: "06",
    icon: Building2,
    industry: "Real Estate",
    title: "Property Management Platform",

    overview:
      "Created a digital platform enabling property management, customer engagement, and lead tracking for real estate businesses.",

    challenge:
      "Managing properties, inquiries, and customer communication across disconnected systems limited operational efficiency.",

    strategy:
      "Implemented scalable architecture prioritizing user experience, centralized data management, and long-term maintainability.",

    solution: [
      "Property Listings",
      "Lead Management",
      "CRM Integration",
      "Booking Requests",
      "Customer Dashboard",
    ],

    outcomes: [
      "Improved customer engagement",
      "Centralized property management",
      "Scalable digital operations",
    ],

    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "AWS",
    ],
  },
];