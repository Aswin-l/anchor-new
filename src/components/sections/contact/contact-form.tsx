"use client";

import { useState } from "react";
import {
  Loader2,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const whatsappNumber = "916374452131";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (success) setSuccess(false);
    if (error) setError("");
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";

    if (!form.email.trim()) return "Please enter your email.";

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(form.email))
      return "Please enter a valid email address.";

    if (!form.project)
      return "Please select a project type.";

    if (!form.message.trim())
      return "Please describe your project.";

    return "";
  };

  const generateMessage = () => `
🚀 New Project Inquiry

Name: ${form.name}

Company: ${form.company || "N/A"}

Email: ${form.email}

Project: ${form.project}

Budget: ${form.budget || "Not specified"}

Message:
${form.message}
`;

  const sendWhatsApp = () => {
    const validation = validate();

    if (validation) {
      setError(validation);
      return;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        generateMessage()
      )}`,
      "_blank"
    );

    setSuccess(true);

    setForm({
      name: "",
      company: "",
      email: "",
      project: "",
      budget: "",
      message: "",
    });
  };

  const sendEmail = async () => {
    const validation = validate();

    if (validation) {
      setError(validation);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("company", form.company);
      formData.append("email", form.email);
      formData.append("project", form.project);
      formData.append("budget", form.budget);
      formData.append("message", form.message);

      formData.append("_captcha", "false");
      formData.append("_template", "table");
      formData.append(
        "_subject",
        "🚀 New Project Inquiry | Anchor Techno Soft"
      );

      const response = await fetch(
        "https://formsubmit.co/aswinkumar@anchortechnosoft.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed");
      }

      setSuccess(true);

      setForm({
        name: "",
        company: "",
        email: "",
        project: "",
        budget: "",
        message: "",
      });
    } catch {
      setError(
        "Unable to send your inquiry. Please try again or contact us via WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact-form"
      className="rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#101828] p-8 lg:p-10 shadow-xl"
    >
      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tell us about your project
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-7">
          Fill in a few details and our team will get back to you
          with the right technical approach and execution plan.
        </p>

      </div>

      {success && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-300">
          <CheckCircle2 className="mt-0.5 h-5 w-5" />

          <div>
            <p className="font-semibold">
              Inquiry Sent Successfully
            </p>

            <p className="mt-1 text-sm">
              Thank you for contacting Anchor Techno Soft.
              We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
          <AlertCircle className="mt-0.5 h-5 w-5" />

          <p className="text-sm">
            {error}
          </p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name *
          </label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-primary-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Company
          </label>

          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-primary-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Business Email *
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-primary-500"
          />
        </div>
                <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Project Type *
          </label>

          <select
            name="project"
            value={form.project}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-primary-500"
          >
            <option value="">Select a service</option>
            <option value="Website Development">
              Website Development
            </option>
            <option value="Web Application">
              Web Application
            </option>
            <option value="Mobile App">
              Mobile App
            </option>
            <option value="Custom Software">
              Custom Software
            </option>
            <option value="UI/UX Design">
              UI / UX Design
            </option>
            <option value="AI Solution">
              AI Solution
            </option>
            <option value="Cloud & DevOps">
              Cloud & DevOps
            </option>
            <option value="Other">
              Other
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Estimated Budget
          </label>

          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-primary-500"
          >
            <option value="">Select Budget</option>
            <option value="Below $1,000">Below $1,000</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000+">$25,000+</option>
          </select>
        </div>

      </div>

      <div className="mt-6">

        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Project Details *
        </label>

        <textarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your project, business goals, preferred timeline, existing challenges, or any specific requirements..."
          className="w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-transparent px-4 py-4 outline-none transition focus:border-primary-500 resize-none"
        />

      </div>

      {/* TRUST STRIP */}

      <div className="mt-8 rounded-2xl border border-primary-200 dark:border-primary-500/20 bg-primary-50 dark:bg-primary-500/5 p-5">

        <div className="grid gap-4 md:grid-cols-3 text-center">

          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              24 Hours
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Average Response Time
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              100% Confidential
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              NDA Friendly Discussion
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              Free Consultation
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              No Commitment Required
            </p>
          </div>

        </div>

      </div>

      {/* BUTTONS */}

      <div className="mt-10 flex flex-col sm:flex-row gap-4">

        <button
          type="button"
          disabled={loading}
          onClick={sendEmail}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3 text-white font-medium transition-all hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Inquiry
            </>
          )}
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={sendWhatsApp}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-green-500 bg-green-500/10 px-7 py-3 font-medium text-green-600 transition-all hover:bg-green-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          <MessageCircle className="h-5 w-5" />

          Chat on WhatsApp
        </button>

      </div>

      <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 leading-7">
        By submitting this form, you agree that Anchor Techno Soft may
        contact you regarding your project inquiry. Your information
        remains private and is never shared with third parties.
      </p>

    </div>
  );
}