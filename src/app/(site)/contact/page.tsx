// "use client";

// import { useState } from "react";

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     project: "",
//     budget: "",
//     message: "",
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const whatsappNumber = "916374452131";

//   const generateMessage = () => {
//     return `
// 🚀 New Project Inquiry

// Name: ${form.name}
// Email: ${form.email}
// Project: ${form.project}
// Budget: ${form.budget}

// Message:
// ${form.message}
//     `;
//   };

//   const sendWhatsApp = () => {
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       generateMessage()
//     )}`;
//     window.open(url, "_blank");
//   };

//   // REAL EMAIL SEND (NO BACKEND)
//   const sendEmail = async () => {
//     const formData = new FormData();
//     formData.append("name", form.name);
//     formData.append("email", form.email);
//     formData.append("project", form.project);
//     formData.append("budget", form.budget);
//     formData.append("message", form.message);

//     formData.append("_captcha", "false");

//     await fetch("https://formsubmit.co/aswinkumar@anchortechnosoft.com", {
//       method: "POST",
//       body: formData,
//     });

//     alert("Message sent successfully! We will contact you soon.");
//   };

//   return (
//     <main className="bg-white dark:bg-[#171F2E]">

//       {/* HERO */}
//       <section className="py-24">
//         <div className="max-w-[900px] mx-auto text-center px-6">

//           <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
//             Let’s Build Something Real
//           </h1>

//           <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-8">
//             Share your idea. We respond with architecture, timeline, and execution plan — not generic replies.
//           </p>

//         </div>
//       </section>

//       {/* FORM */}
//       <section className="pb-28">
//         <div className="max-w-[800px] mx-auto px-6">

//           {/* TRUST STRIP */}
//           <div className="mb-10 text-center text-sm text-gray-500 dark:text-gray-400">
//             ⚡ Response within 24 hours • ⚙️ Product-first engineering team • 🚀 Startup-friendly execution
//           </div>

//           <div className="grid gap-6">

//             <input
//               name="name"
//               placeholder="Your Name"
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white"
//             />

//             <input
//               name="email"
//               placeholder="Your Email"
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white"
//             />

//             <input
//               name="project"
//               placeholder="Project Type (SaaS, App, AI, Website)"
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white"
//             />

//             <input
//               name="budget"
//               placeholder="Budget (Optional)"
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white"
//             />

//             <textarea
//               name="message"
//               placeholder="Tell us about your idea"
//               rows={5}
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white"
//             />

//           </div>

//           {/* CTA BUTTONS */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4">

//             <button
//               onClick={sendWhatsApp}
//               className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-full transition"
//             >
//               Send via WhatsApp
//             </button>

//             <button
//               onClick={sendEmail}
//               className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 rounded-full transition"
//             >
//               Send to Email
//             </button>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }

import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact | Anchor Techno Soft",
  description:
    "Let's discuss your next software product. Contact Anchor Techno Soft for web development, mobile apps, AI solutions, cloud services and digital transformation.",
};

export default function ContactPage() {
  return <ContactSection />;
}