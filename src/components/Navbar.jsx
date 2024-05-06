import React from "react";

const Navbar = () => {
  const navItems = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Services", href: "#" },
    { text: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-10">
        <a href="#" className="font-bold text-xl">FoodQuots</a>
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-md">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

