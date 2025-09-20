"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, MapPin, Plane } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full px-[8%] py-20 scroll-mt-20 bg-gradient-to-br from-orange-50 via-white to-pink-50"
    >
      {/* Floating travel icons */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 left-10 text-orange-400 opacity-40"
      >
        <Plane size={50} />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-12 text-pink-400 opacity-40"
      >
        <MapPin size={50} />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-800"
      >
        Let’s <span className="text-orange-500">Plan Together</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-4 mb-12 text-gray-600"
      >
        Have a question, suggestion, or collaboration idea?  
        Reach out and let’s make your <span className="text-pink-500 font-semibold">dream trips</span> happen.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        action="https://formsubmit.co/shawnyash2005@gmail.com"
        method="POST"
        className="max-w-2xl mx-auto bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-pink-100"
      >
        {/* Hidden settings */}
        <input type="hidden" name="_subject" value="New Trip Planner Contact!" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <textarea
          rows={6}
          name="message"
          placeholder="Tell us about your travel idea..."
          required
          className="w-full p-4 mt-6 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-md hover:shadow-lg hover:from-orange-600 hover:to-pink-600 transition-all"
        >
          Send Message <Send size={18} />
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
