import React from "react";
import {FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Mayur Batave</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://www.github.com/mayurbatave/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mayurbatave" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
          ].map((item, index) => {
            const isDisabled = item.link === "#";

            return (
              <a
                key={index}
                href={isDisabled ? "#" : item.link}
                target={isDisabled ? "_self" : "_blank"}
                rel="noopener noreferrer"
                onClick={(e) => isDisabled && e.preventDefault()}
                className={
                  `text-xl transition-transform transform ` +
                  (isDisabled
                    ? " cursor-not-allowed pointer-events-none"
                    : "hover:text-purple-500 hover:scale-110")
                }
              >
                {item.icon}
              </a>
            );
          })}
        </div>


        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Mayur Batave. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer