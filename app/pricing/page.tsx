"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
        {/* Monthly Plan */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-orange-200"
        >
          <h2 className="text-2xl font-bold text-gray-800">Monthly Plan</h2>
          <p className="mt-2 text-gray-500">Perfect if you want flexibility</p>
          <div className="mt-6 text-4xl font-extrabold text-orange-500">
            $9 <span className="text-lg text-gray-500">/month</span>
          </div>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle className="text-green-500" /> Unlimited Trips
            </li>
          </ul>
          <button className="mt-8 w-full py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition">
            Get Monthly
          </button>
        </motion.div>

        {/* Yearly Plan */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-tr from-pink-500 to-orange-400 text-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center relative"
        >
          <div className="absolute -top-4 right-6 bg-yellow-300 text-gray-900 text-sm font-bold px-3 py-1 rounded-full shadow">
            Best Value
          </div>
          <h2 className="text-2xl font-bold">Yearly Plan</h2>
          <p className="mt-2 text-pink-100">Save big with one-time billing</p>
          <div className="mt-6 text-4xl font-extrabold">
            $50 <span className="text-lg text-pink-200">/year</span>
          </div>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle className="text-green-200" /> Unlimited Trips
            </li>
          </ul>
          <button className="mt-8 w-full py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-200 transition">
            Get Yearly
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default PricingPage;
