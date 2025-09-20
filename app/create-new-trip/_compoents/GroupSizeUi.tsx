"use client";

import React, { useState } from "react";
import { Users, User, Heart, Building } from "lucide-react";

interface GroupSizeUiProps {
  onSelectOptions: (value: string) => void;
}

// Define a type for our options for better code clarity
type GroupOption = {
  value: string;
  label: string;
  icon: React.ElementType;
};

const options: GroupOption[] = [
  { value: "Just Me", label: "Solo", icon: User },
  { value: "A Couple", label: "Couple", icon: Heart },
  { value: "Family", label: "Family", icon: Building },
  { value: "Friends", label: "Friends", icon: Users },
];

export function GroupSizeUi({ onSelectOptions }: GroupSizeUiProps) {
  // State to track the selected option for visual feedback
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);

    // Give a brief moment for the user to see their selection
    // before the component disappears.
    setTimeout(() => {
      onSelectOptions(value);
    }, 300); // 300ms delay
  };

  return (
    <div className="p-2 transition-all duration-300 ease-in-out">
      <p className="mb-4 font-semibold text-gray-700">
        Who are you traveling with?
      </p>
      <div className="grid grid-cols-2 gap-4 w-full">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`
              group flex flex-col items-center justify-center p-4 
              border rounded-xl shadow-sm text-center 
              transition-all duration-300 ease-in-out
              transform hover:-translate-y-1 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
              ${
                selected === option.value
                  ? "bg-orange-500 border-orange-600 text-white shadow-orange-200"
                  : "bg-white border-gray-200 text-gray-700 hover:border-orange-300"
              }
            `}
          >
            <option.icon
              className={`
                w-8 h-8 mb-2 
                transition-colors duration-300
                ${
                  selected === option.value
                    ? "text-white"
                    : "text-orange-500 group-hover:text-orange-600"
                }
              `}
            />
            <span className="font-medium text-sm">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}