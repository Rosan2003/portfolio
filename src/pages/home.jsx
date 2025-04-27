import React, { useEffect, useState } from "react";
import './home.css'

export default function Home() {
  const [headingText, setHeadingText] = useState('');
  const [paraText, setParaText] = useState('');
  const [headingIndex, setHeadingIndex] = useState(0);
  const [paraIndex, setParaIndex] = useState(0);

  const fullHeading = "Hello, I'm Roshan";
  const fullParagraph = "A passionate developer who loves bringing ideas to life through beautiful and functional web applications. Experienced in modern web technologies like React, Tailwind CSS, and Node.js.";

  useEffect(() => {
    if (headingIndex < fullHeading.length) {
      const timeout = setTimeout(() => {
        setHeadingText(prev => prev + fullHeading[headingIndex]);
        setHeadingIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    // Start paragraph typing once heading is fully typed
    if (headingIndex === fullHeading.length && paraIndex < fullParagraph.length) {
      const timeout = setTimeout(() => {
        setParaText(prev => prev + fullParagraph[paraIndex]);
        setParaIndex(prev => prev + 1);
      }, 20); // Faster typing for paragraph
      return () => clearTimeout(timeout);
    }
  }, [headingIndex, paraIndex]);

  return (
    <div className="min-h-screen bg-ghostwhite flex items-center justify-center p-8 font-sans">
      <div className="max-w-5xl w-full bg-white/50 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center p-8 backdrop-blur-md">

        {/* Image Section */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-3xl overflow-hidden shadow-sm mb-6 md:mb-0 md:mr-8">
          <img
            src="/images/pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Intro Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-600 mb-4">{headingText}</h1>
          <p className="text-lg text-gray-700 mb-4">{paraText}</p>
        </div>

      </div>
    </div>
  );
}
