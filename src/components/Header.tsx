import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white flex justify-between items-center w-full">
      <h1 className="text-xl font-bold">Billease</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#section1" className="hover:underline">Fotos Juntos</a></li>
          <li><a href="#section2" className="hover:underline">Sección 2</a></li>
          <li><a href="#section3" className="hover:underline">Sección 3</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;