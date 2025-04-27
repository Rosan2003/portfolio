// components/SocialIcons.jsx
import { Linkedin, Github, Instagram } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="fixed bottom-8 left-8 flex flex-col items-center space-y-6">
      <a
        href="https://www.linkedin.com/in/roshan-magar-5343942a0/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full  hover:bg-gray-400 transition"
      >
        <Linkedin className="text-black w-6 h-6" />
      </a>
      <a
        href="https://github.com/Rosan2003"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-400 transition"
      >
        <Github className="text-black w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/thenameis_rosan/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-400 transition"
      >
        <Instagram className="text-black w-6 h-6" />
      </a>
    </div>
  );
}
