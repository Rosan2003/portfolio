import React from "react";
import './home.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-ghostwhite flex items-center justify-center p-8 font-sans">
      <div className="max-w-5xl w-full bg-white/50 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center p-8">

        {/* Image Section */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-3xl overflow-hidden shadow-sm mb-6 md:mb-0 md:mr-8">
          <img
            src="/images/pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-600 mb-4">Hello, I'm Roshan</h1>
          <p className="text-lg text-gray-700 mb-4">
            A passionate developer who loves bringing ideas to life through beautiful and functional web applications.
            Experienced in modern web technologies like React, Tailwind CSS, and Node.js.
          </p>
        </div>

      </div>
    </div>
  );
}
