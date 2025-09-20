"use client"
import React from 'react';

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '💰',
    color: 'text-green-600 border-green-300',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep cost on the average side',
    icon: '💸',
    color: 'text-yellow-600 border-yellow-300',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'Don\'t worry about cost',
    icon: '👑',
    color: 'text-purple-600 border-purple-300',
  }
];

interface BudgetUiProps {
  onSelectOptions: (text: string) => void;
}

function BudgetUi({ onSelectOptions }: BudgetUiProps) {
  return (
    <div className="flex justify-between items-center gap-2 mt-4">
      {SelectBudgetOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelectOptions(`${option.title}:${option.desc}`)}
          className={`flex flex-col items-center justify-center p-1 border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-3xl text-center flex-1 aspect-square bg-white ${option.color}`}
        >
          <span className="text-4xl">{option.icon}</span>
          <span className="text-sm font-bold mt-2">{option.title}</span>
        </button>
      ))}
    </div>
  );
}

export default BudgetUi;