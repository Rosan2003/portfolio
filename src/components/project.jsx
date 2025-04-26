import { motion } from "framer-motion";
import projects from "../../public/data/data";

const Project = ({project}) => {
    const{title,description,imageUrl} = project;

  return (
    <div className="relative z-10">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative z-10 w-80 h-96 overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
    </div>
  );
};

export default Project;

