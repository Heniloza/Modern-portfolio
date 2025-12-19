import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0f]/80 backdrop-blur">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        <h1 className="text-xl font-bold text-white">Aryan Pawar</h1>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {["home", "about", "skills", "projects"].map((item) => (
            <span
              key={item}
              onClick={() => handleScroll(item)}
              className="cursor-pointer hover:text-[#22c55e] capitalize"
            >
              {item}
            </span>
          ))}

          <button
            onClick={() => handleScroll("contact")}
            className="bg-[#22c55e] text-black px-5 py-2 rounded-full font-medium ml-4 hover:bg-[#3b8655] transition-all hover:scale-105"
          >
            Contact me
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0b0b0f] border-t border-gray-800">
          <div className="flex flex-col gap-6 px-6 py-6 text-gray-300">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <span
                key={item}
                onClick={() => handleScroll(item)}
                className="cursor-pointer hover:text-[#22c55e] capitalize"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
