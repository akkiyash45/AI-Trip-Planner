import React, { useState } from 'react';

// Define the props interface for type safety
interface DaysuiProps {
  onSelectOptions: (text: string) => void;
}

function Daysui({ onSelectOptions }: DaysuiProps) {
  const [days, setDays] = useState(2); // Set initial state to 2, as shown in the image

  const handleDecrease = () => {
    // Prevents the number of days from going below 1
    setDays((prevDays) => (prevDays > 1 ? prevDays - 1 : 1));
  };

  const handleIncrease = () => {
    setDays((prevDays) => prevDays + 1);
  };

  const handleConfirm = () => {
    // Passes the selected days back to the parent component
    onSelectOptions(`${days} Days`);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm w-96 max-w-full mx-auto">
      <h2 className="text-xl font-semibold mb-4">How many days do you want to travel?</h2>
      
      <div className="flex items-center justify-center gap-4 text-2xl font-bold p-3 border rounded-lg bg-gray-100">
        <button
          onClick={handleDecrease}
          className="w-10 h-10 flex items-center justify-center text-gray-500 rounded-full hover:bg-gray-200 transition"
        >
          -
        </button>
        <span className="min-w-[60px] text-center">{days} Days</span>
        <button
          onClick={handleIncrease}
          className="w-10 h-10 flex items-center justify-center text-gray-500 rounded-full hover:bg-gray-200 transition"
        >
          +
        </button>
      </div>

      <button 
        onClick={handleConfirm}
        className="w-full mt-6 py-2 px-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
      >
        Confirm
      </button>
    </div>
  );
}

export default Daysui;