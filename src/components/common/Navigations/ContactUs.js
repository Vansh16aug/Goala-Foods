import React, { useState } from "react";
import { MessageSquare, Phone, Mail, Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get in touch
            </h2>

            {/* Contact Options */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setActiveTab("message")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "message"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message</span>
              </button>
              <button
                onClick={() => setActiveTab("phone")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "phone"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </button>
              <button
                onClick={() => setActiveTab("email")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "email"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Message
                </label>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              {success && (
                <p className="text-green-500 text-sm">
                  Email sent successfully!
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                <span>{isLoading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>

          {/* Illustration Section */}
          <div className="hidden lg:flex w-1/2 bg-blue-500 items-center justify-center p-12">
            <img
              src="https://res.cloudinary.com/vanshstorage/image/upload/v1730295924/virtual-assistant_3_edrxrq.svg"
              alt="Contact illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
