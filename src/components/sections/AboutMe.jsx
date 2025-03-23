import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import { Database } from "lucide-react";
import about2 from "../../assets/images/about2.webp";

export default function AboutMe() {
  return (
    <div className=" ">
      <motion.div
        className="min-h-screen flex flex-col md: p-8 pt-16 md:pt-20  md:flex-row items-center gap-8 md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-7">
            Hello World! 👋 <span className="font-semibold">SteveNene</span>{" "}
            here! An Engineer who is always frustrated by almost everything in
            the world. 🤔 Trying to solve the world's problems that seem either
            too obvious to be noticed or too big to tackle. 🌍
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">What Drives Me? 🚀</h2>
              <p>
                Tech intrigues me due to its endless boundaries and the constant
                learning journey. 💡 Connecting the nuts and bolts, building
                things from scratch motivates me to keep pushing forward despite
                the challenges.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Outside Tech 🌳</h2>
              <p>
                I'm not always behind my screen developing complex solutions. I
                enjoy reconnecting with nature 🏃‍♂️ and meeting new people 🤝.
                Life is about balance! 🎭
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Parting Shot 🎯</h2>
              <p className="mb-3">
                The tech journey hasn't been easy, but it's rewarding. Those
                sleepless nights debugging semicolons and CORS errors... 😅
              </p>
              <p>
                A wise man once said, you can only connect the dots looking back
                ⏳. Still hopeful that the future holds a lot, and everything
                happening now will make sense someday. ✨
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="hidden md:block md:w-1/2 mt-8 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={about2}
            alt="About Me"
            className="rounded-lg shadow-lg object-cover w-full h-auto max-w-md mx-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
