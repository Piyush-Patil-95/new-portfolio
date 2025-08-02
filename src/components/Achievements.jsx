import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // optional icons
import aboutImg from "../assets/aboutme.png";

const achievements = [
  {
    image: aboutImg,
    description: 'Won Hackathon 2024 at IIT Delhi',
  },
  {
    image: '/images/achievement2.jpg',
    description: 'Published Research Paper on AI Resume Builder',
  },
  {
    image: '/images/achievement3.jpg',
    description: 'Secured 1st in University Coding Championship',
  },
];

export default function Achievements() {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 1 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % achievements.length);
  };

  return (
    <div className="my-20 text-center px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl mb-10"
      >
        My Achievements
      </motion.h1>

      <div className="relative w-full max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <img
              src={achievements[index].image}
              alt={`achievement-${index}`}
              className="rounded-xl w-full h-64 object-cover"
            />
            <p className="mt-4 text-lg font-medium">
              {achievements[index].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Left/Right Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
