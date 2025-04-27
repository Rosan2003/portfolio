import React from "react";
import { motion } from "framer-motion"; // For animations

export default function Test({ project }) {

    const{title,description,imageUrl}=project;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer max-w-sm"
    >
      <img
        src={imageUrl}
        alt={title}
        className="h-40 w-full object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}
