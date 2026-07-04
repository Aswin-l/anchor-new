import {
  Activity,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Factory,
  Building2,
} from "lucide-react";

export const industries = [
  {
    id: "01",
    title: "Healthcare",
    icon: Activity,

    challenge:
      "Healthcare organizations operate in environments where every second matters. Disconnected systems, manual workflows, compliance requirements, and growing patient expectations create operational complexity that traditional software often fails to address.",

    perspective:
      "Our engineering approach begins by understanding how clinicians, administrators, and patients interact throughout the healthcare journey. Instead of digitizing existing problems, we redesign workflows to improve efficiency, security, and long-term scalability.",

    solutions: [
      "Hospital Management Systems",
      "Telemedicine Platforms",
      "Patient Portals",
      "Electronic Medical Records (EMR)",
      "Appointment & Scheduling Systems",
      "Healthcare Analytics Dashboards",
    ],

    outcomes: [
      "Reduced administrative workload",
      "Improved patient experience",
      "Compliance-ready infrastructure",
      "Scalable digital healthcare ecosystem",
    ],
  },

  {
    id: "02",
    title: "FinTech",
    icon: Landmark,

    challenge:
      "Financial platforms demand more than attractive interfaces. Every transaction must be secure, every process must be reliable, and every system must scale while maintaining regulatory compliance and customer trust.",

    perspective:
      "We design financial products with security, performance, and resilience at their core. Our engineering decisions focus on minimizing operational risk while enabling businesses to launch and grow with confidence.",

    solutions: [
      "Digital Banking Platforms",
      "Payment Gateway Integration",
      "Digital Wallet Applications",
      "Investment Platforms",
      "Financial Reporting Systems",
      "Fraud Monitoring Dashboards",
    ],

    outcomes: [
      "Highly secure transaction systems",
      "Faster financial operations",
      "Scalable cloud-native architecture",
      "Improved customer trust",
    ],
  },

  {
    id: "03",
    title: "E-Commerce",
    icon: ShoppingBag,

    challenge:
      "Modern commerce businesses compete on speed, customer experience, and operational efficiency. Slow platforms, disconnected inventory, and poor checkout experiences directly impact revenue growth.",

    perspective:
      "We engineer commerce platforms that prioritize performance, seamless customer journeys, and operational visibility while preparing businesses for increasing traffic and expansion.",

    solutions: [
      "Custom E-Commerce Platforms",
      "Marketplace Solutions",
      "Inventory Management Systems",
      "Order Processing Automation",
      "Payment Integrations",
      "Customer Loyalty Platforms",
    ],

    outcomes: [
      "Higher conversion rates",
      "Simplified business operations",
      "Improved customer retention",
      "Infrastructure built for scale",
    ],
  },

  {
    id: "04",
    title: "Education",
    icon: GraduationCap,

    challenge:
      "Educational institutions require technology that supports collaboration, accessibility, and continuous learning across students, educators, and administrators.",

    perspective:
      "We design digital learning ecosystems that enhance engagement while ensuring platforms remain reliable as institutions and user bases continue to grow.",

    solutions: [
      "Learning Management Systems",
      "Student Information Systems",
      "Online Examination Platforms",
      "Virtual Classroom Solutions",
      "Course Management Platforms",
      "Academic Analytics",
    ],

    outcomes: [
      "Improved student engagement",
      "Simplified academic administration",
      "Better learning accessibility",
      "Scalable education platforms",
    ],
  },

  {
    id: "05",
    title: "Manufacturing",
    icon: Factory,

    challenge:
      "Manufacturing organizations depend on operational visibility, process automation, and supply chain coordination. Legacy systems often create bottlenecks that reduce efficiency and decision-making speed.",

    perspective:
      "Our engineering process focuses on connecting operations through intelligent automation, real-time monitoring, and centralized business intelligence.",

    solutions: [
      "Manufacturing ERP Systems",
      "Production Monitoring Platforms",
      "Inventory Management",
      "Supply Chain Solutions",
      "Warehouse Automation",
      "Operations Analytics",
    ],

    outcomes: [
      "Greater operational visibility",
      "Reduced manual processes",
      "Improved production efficiency",
      "Data-driven decision making",
    ],
  },

  {
    id: "06",
    title: "Real Estate",
    icon: Building2,

    challenge:
      "Real estate businesses manage complex relationships between properties, clients, brokers, and transactions. Fragmented systems reduce visibility and slow business growth.",

    perspective:
      "We create centralized digital platforms that simplify property management, improve customer engagement, and streamline business operations from lead generation to transaction completion.",

    solutions: [
      "Property Management Platforms",
      "Real Estate CRM",
      "Property Listing Portals",
      "Lead Management Systems",
      "Booking & Scheduling",
      "Sales Analytics",
    ],

    outcomes: [
      "Improved sales efficiency",
      "Centralized property operations",
      "Better customer engagement",
      "Technology prepared for long-term growth",
    ],
  },
];