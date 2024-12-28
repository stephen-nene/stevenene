import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa"; // React Icons
import { MessageCircle } from "lucide-react"; // Lucide Icons
import { Button, Input,Form } from "antd"; // Antd Components for better styling

export default function Contact() {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const onFinish = (values) => {
    console.log("User Info 0:", values);
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("User Info:", {
      name,
      email,
      message,
      subject,
      phone,
    });
  };

  return (
    <div className="min-h-screen py-12 flex justify-center items-center">
      <div className="w-full max-w-7xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Contact Me
          </h2>

          <Form
            // onFinish={onFinish}
             onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaUser className="text-xl text-gray-500 mr-4" />
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full focus:outline-none border-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaEnvelope className="text-xl text-gray-500 mr-4" />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full focus:outline-none border-none"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <MessageCircle className="text-xl text-gray-500 mr-4" />
              <Input
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full focus:outline-none border-none"
              />
            </div>

            {/* Message */}
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 focus:outline-none border-none rounded-lg h-32"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaPhone className="text-xl text-gray-500 mr-4" />
              <Input
                type="tel"
                placeholder="Phone (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full focus:outline-none border-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full py-3 text-white bg-[#007bff] rounded-lg hover:bg-transparent hover:text-[#007bff] border-2 border-[#007bff] transition-all ease-in-out duration-300"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>

        {/* Right Section: Instructions and Other Info */}
        <div className="lg:flex hidden flex-col gap-8">
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Form Instructions</h3>
            <p className="text-gray-700">
              Fill in your contact details and I'll get back to you as soon as
              possible!
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Other Info</h3>
            <p className="text-gray-700">
              Want to know more about me? Check out my portfolio or drop me a
              message with your query.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
