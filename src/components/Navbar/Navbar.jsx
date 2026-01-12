import React from 'react'
import { useState , useEffect } from 'react';
import { FiMenu , FiX } from "react-icons/fi";
import { FaGithub , FaLinkedin} from "react-icons/fa";

const Navbar = () => {
    const [isScrolled , setIsScrolled] = useState(false);
    const [isOpen , setIsOpen ] = useState(false);
    const [ activeItem , setActiveItem] = useState("");
    // Scroll Function 
    const handleMenuItemClick = (sectionID) =>{
        setActiveItem(sectionID);
        setIsOpen(false)

        const element = document.getElementById(sectionID);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Scroll To change navbar background

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled( window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll" , handleScroll);
    }, []);

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const menuItems = [
        { id : "about" , label: "About"},
        { id : "skills" , label: "Skills"},
        { id : "projects" , label: "Projects"},
        { id : "education" , label: "Education"},
        { id : "contact" , label: "Contact"},
        
    ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
      ${isScrolled ? "bg-[#050414]/60 backdrop-blur-md shadow-md" : "bg-transparent backdrop-blur-0 shadow-none"}`}
      id='nav'
    >
      <div className="text-white py-5 flex justify-between items-center">
        
        {/* Portfolio Logo */}
        <button
          className="cursor-pointer text-3xl font-extrabold tracking-wide bg-linear-to-r 
                    from-indigo-500 via-purple-500 to-pink-500 
                    bg-clip-text text-transparent"
          onClick={handleClick}
        >
          Portfolio
        </button>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-grey-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-[#8245ec] ${
                activeItem === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)} className='cursor-pointer'>
                {item.label}
              </button>
            </li>
          ))}
        </ul>


        {/* Social media Icons  */}

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/mayurbatave"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://linkedin.com/in/mayurbatave"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin></FaLinkedin>
          </a>
        </div>

        {/* Mobile Menu icon  */}

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            ></FiX>
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            ></FiMenu>
          )}
        </div>

        {/* Mobile menu Items  */}

        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeItem === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
              
            <div className='flex space-x-4'>
                <a
                    href="https://github.com/mayurbatave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-300 hover:text-[#8245ec]"
                >
                    <FaGithub></FaGithub>
                </a>
                <a
                    href="https://linkedin.com/in/mayurbatave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-300 hover:text-[#8245ec]"
                >
                    <FaLinkedin></FaLinkedin>
                </a>
            </div>
            
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar