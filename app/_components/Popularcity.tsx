"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";

export function Popularcity() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <section className="relative w-full py-10 px-6 overflow-hidden bg-gradient-to-br from-orange-100 via-pink-100 to-white">
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

      <h2 className="max-w-7xl mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans relative z-10">
        Let's Explore...
      </h2>
      <div className="relative z-10 mt-6">
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "",
    title: "Tokyo",
    src: "https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Chicago",
    src: "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Germany",
    src: "https://images.pexels.com/photos/358203/pexels-photo-358203.jpeg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Dubai",
    src: "https://images.pexels.com/photos/37848/burj-khalifa-dubai-skyscraper-u-a-e-37848.jpeg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Andaman & Nicobar Island.",
    src: "https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Egypt",
    src: "https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg",
    content: <DummyContent />,
  },
];
