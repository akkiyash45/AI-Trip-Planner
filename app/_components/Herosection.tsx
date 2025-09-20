"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Suggestion array for EmptyBoxState
export const suggestion = [
  { title: "Beach Getaway", icon: "🏖️" },
  { title: "Mountain Adventure", icon: "⛰️" },
  { title: "City Trip", icon: "🏙️" },
  { title: "Cultural Tour", icon: "🏛️" },
  { title: "Romantic Escape", icon: "💖" },
];

function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-pink-100 to-white px-6">
      {/* Floating Gradient Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-10 w-56 h-56 rounded-full bg-gradient-to-r from-orange-300 to-pink-400 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-5 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 blur-3xl"
      />

      {/* Hero Content */}
   <motion.h1
  initial={{ y: 50, opacity: 0, scale: 0.95 }}
  animate={{ y: 0, opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
  className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center leading-tight tracking-tight"
>
  Plan Your{" "}
  <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
    Dream Trip
  </span>{" "}
  <br />
  with{" "}
  <motion.span
    initial={{ rotate: -10 }}
    animate={{ rotate: 0 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
  >
    AI ✨
  </motion.span>
</motion.h1>

<motion.p
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
  className="mt-6 text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed"
>
  🚀 Let AI craft <span className="font-semibold text-pink-500">personalized itineraries</span>,  
  find the <span className="font-semibold text-orange-500">best hotels</span>,  
  and suggest <span className="font-semibold text-purple-500">must-visit attractions</span>  
  for your perfect journey.
</motion.p>


      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-6"
      >
        <Link href="/create-new-trip">
          <span className="text-4xl md:text-6xl inline-block">✈️</span>
        </Link>
      </motion.div>

      {/* Animated Travel Illustration */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 md:bottom-4"
      >
        <Image
          src="/travel-hero.png"
          alt="Travel Illustration"
          width={380}
          height={280}
          className="drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
