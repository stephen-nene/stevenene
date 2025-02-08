import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { MessageCircle, Terminal, Code2, Braces } from "lucide-react";
import { Button, Input, Form, Tooltip } from "antd";

const DevContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    phone: "",
  });

  const codeSnippet = `const sendMessage = async (data) => {
  try {
    await api.post('/contact', data);
    return { success: true };
  } catch (err) {
    console.error('Error:', err);
    return { success: false };
  }
};`;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onFinish = async (values) => {
    console.log("// DEBUG: Submitting form data:", values);
    // TODO: Implement API integration
  };

  return (
    <div className="min-h-screen py-12 flex justify-center items-center bg-gra y-50 dark:bg -gray-900 transition-colors duration-300">
      <div className="w-full max-w-7xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Contact Form */}
        <div className="bg-emerald-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-mono font-semibold text-gray-800 dark:text-gray-200">
              <Terminal className="inline mr-2" size={24} />
              Contact.jsx
            </h2>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          <Form onFinish={onFinish} className="space-y-6">
            <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg py-2 px-4 group hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200">
              <FaUser className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
              <Input
                placeholder="const userName = ''"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none dark:text-gray-200 ml-4"
              />
            </div>

            <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg py-2 px-4 group hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200">
              <FaEnvelope className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
              <Input
                type="email"
                placeholder="email@domain.tsx"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none dark:text-gray-200 ml-4"
              />
            </div>

            <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg py-2 px-4 group hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200">
              <Code2 className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
              <Input
                placeholder="subject.js"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none dark:text-gray-200 ml-4"
              />
            </div>

            <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 group hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200">
              <textarea
                placeholder="/** Your message here */"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full bg-transparent focus:outline-none dark:text-gray-200 font-mono h-32 resize-none"
              />
            </div>

            <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg py-2 px-4 group hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200">
              <FaPhone className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
              <Input
                type="tel"
                placeholder="// Optional: +1234567890"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none dark:text-gray-200 ml-4"
              />
            </div>

            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 border-none text-white font-mono transition-all duration-300"
              icon={<Braces className="inline mr-2" size={16} />}
            >
              await submitForm()
            </Button>
          </Form>
        </div>

        {/* Right Section: Developer Info */}
        <div className="lg:flex hidden flex-col gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-mono font-semibold dark:text-gray-200 flex items-center gap-2">
              <Terminal size={20} />
              README.md
            </h3>
            <div className="mt-4 font-mono text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">// How to reach me:</p>
              <p className="mb-2">1. Fill out the contact form</p>
              <p className="mb-2">2. Add relevant project details</p>
              <p className="mb-2">3. Include your GitHub if applicable</p>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-mono font-semibold dark:text-gray-200 flex items-center gap-2">
              <FaGithub />
              contact.js
            </h3>
            <pre className="mt-4 p-4 bg-gray-900 text-gray-200 rounded-lg text-sm overflow-x-auto">
              {codeSnippet}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevContact;
