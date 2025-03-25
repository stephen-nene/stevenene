import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { MessageCircle, Terminal, Code2, Braces } from "lucide-react";
import { Button, Input, Form, Tooltip } from "antd";

const DevContact = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const codeSnippet = `const sendMessage = async (data) => {
  try {
    const response = await axios.post('/contact', data);
    return { success: true, data: response.data };
  } catch (err) {
    console.error('Transmission Error:', err);
    return { success: false, error: err };
  }
};`;

  const onFinish = async (values) => {
    setIsSubmitting(true);
    try {
      // Simulated API call
      console.log("Submitting form data:", values);
      // TODO: Replace with actual API integration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      form.resetFields();
      // Add success notification
    } catch (error) {
      // Add error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 flex justify-center items-center  transition-colors duration-300">
      <div className="w-full max-w-7xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-mono font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <Terminal className="inline" size={24} />
              Contact.jsx
            </h2>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="space-y-6 max-w-2xl mx-auto"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                prefix={<FaUser className="text-gray-500 dark:text-gray-100" />}
                placeholder="const userName = ''"
                className="py-2 px-4 dark:bg-gray-700 focus:bg-gray-800 dark:text-gray-100"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Invalid email format" },
              ]}
            >
              <Input
                prefix={
                  <FaEnvelope className="text-gray-500 dark:text-gray-400" />
                }
                type="email"
                placeholder="email@domain.tsx"
                className="py-2 px-4 dark:bg-gray-700 dark:text-gray-200"
              />
            </Form.Item>

            <Form.Item name="subject">
              <Input
                prefix={<Code2 className="text-gray-500 dark:text-gray-400" />}
                placeholder="subject.js"
                className="py-2 px-4 dark:bg-gray-700 dark:text-gray-200"
              />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, message: "Message is required" }]}
            >
              <Input.TextArea
                placeholder="/** Your message here */"
                rows={5}
                className="py-2 px-4 dark:bg-gray-700 dark:text-gray-200 font-mono"
              />
            </Form.Item>


            <Form.Item
              rules={[
                {
                  pattern: /^(\+\d{1,3}\s?)?((07\d{8})|(\d{9}))$/,
                  message:
                    "Please enter a valid phone number. Example:  +1234567890 or 07XXXXXXXX",
                },
              ]}
              name="phone"
            >
              <Input
                prefix={
                  <FaPhone className="text-gray-500 dark:text-gray-400" />
                }
                type="tel"
                placeholder="// Optional: +1234567890 or 07XXXXXXXX"
                className="py-2 px-4 dark:bg-gray-700 dark:text-gray-200"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 border-none text-white font-mono transition-all duration-300"
              icon={<Braces className="inline mr-2" size={16} />}
            >
              {isSubmitting ? "Sending..." : "await submitForm()"}
            </Button>
          </Form>
        </div>

        {/* Right Section: Developer Info */}
        <div className="lg:flex hidden flex-col gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
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

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
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
