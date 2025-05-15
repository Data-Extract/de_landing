"use client";

import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { motion, AnimatePresence } from "framer-motion";

export default function ScheduleAppointment() {
  const [showInline, setShowInline] = useState(false);

  const toggleCalendly = () => setShowInline((prev) => !prev);
  

  return (
    <section  id="contact" className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold text-left flex-1">
            Schedule your Appointment
          </h2>
          <div className="flex space-x-6">
            <button
              onClick={toggleCalendly}
              className="bg-white border border-gray-800 text-gray-800 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
            >
              {showInline ? "Close calendar" : "Book now"}
            </button>
            <button className="bg-white border border-gray-800 text-gray-800 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
              Learn more
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showInline && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-6 border rounded shadow-lg overflow-hidden"
            >
              <InlineWidget url="https://calendly.com/diegoparadacanon/30min" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
