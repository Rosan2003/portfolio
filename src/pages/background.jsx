import { motion } from "framer-motion";
import Home from "./home";
import Project from "../components/project";
import projects from "../../public/data/data";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Animated Circles */}
      <motion.div
        className="absolute w-40 h-40 bg-blue-400 rounded-full opacity-30"
        animate={{
          x: [0, 800, 600, 200, 1000, 0],
          y: [0, 200, 800, 600, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-32 h-32 bg-purple-400 rounded-full opacity-30"
        animate={{
          x: [1000, 100, 700, 300, 900, 1000],
          y: [0, 700, 200, 800, 100, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />

    </div>

  );
}
