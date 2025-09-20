"use client"

import React from 'react';
import { suggestion } from '../_components/Herosection';

interface EmptyBoxStateProps {
  onSelectOptions: (title: string) => void;
}

function EmptyBoxState({ onSelectOptions }: EmptyBoxStateProps) {
  return (
    <div className="empty-box flex flex-col items-center justify-center p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Start Planning a new <span className="text-orange-500">Trip</span> using AI
      </h2>
      <p className="text-gray-600 mb-6 font-semibold">
        Discover personalized travel itineraries, find the best destinations, and plan your dream vacation effortlessly with the power of AI. Let our smart assistant do the hard work while you enjoy the journey.
      </p>

      <div className="flex flex-col gap-4 w-[20vw] max-w-xl mx-auto">
        {suggestion.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelectOptions(item.title)}
            className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-orange-500 hover:text-white transition w-full bg-white"
          >
            <span className="text-2xl">{item.icon}</span>
            <h2 className="text-lg font-semibold">{item.title}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default EmptyBoxState;
