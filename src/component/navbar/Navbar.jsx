import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.svg';
import more1 from '../../assets/images/more1.svg';
import xicon from '../../assets/images/xicon.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-{1440px} h-[80px] bg-white  ">
      <div className="w-full lg:w-[1280px] mx-auto px-4 flex justify-between items-center h-full">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo2} alt="Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold text-black">Marvie Foods</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          <Link to="/" className="text-orange-500 font-semibold">Home</Link>
          <Link to="/about" className="text-gray-700">About Us</Link>
          <Link to="/menu" className="text-gray-700">Menu</Link>
          <Link to="/how-it-works" className="text-gray-700">How it Works</Link>
          <Link to="/faqs" className="text-gray-700">FAQs</Link>
          <Link to="/contact" className="text-gray-700">Contact Us</Link>
        </div>

        {/* Sign In Button */}
        <div className="flex items-center space-x-4">
          <Link to="/signin">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
              Sign in
            </button>
          </Link>

          {/* Tablet/Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              <img src={more1} alt="Menu Icon" className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu for Tablet/Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-white shadow-lg lg:hidden flex flex-col items-center pt-16 pb-6">
          {/* Close Icon on Tablet/Mobile */}
          <button onClick={toggleMenu} className="absolute top-6 right-6">
            <img src={xicon} alt="Close Menu" className="h-8 w-8" />
          </button>
          
          {/* Sidebar Links */}
          <Link to="/" onClick={toggleMenu} className="text-orange-500 font-semibold mb-6">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="text-gray-700 mb-6">About Us</Link>
          <Link to="/menu" onClick={toggleMenu} className="text-gray-700 mb-6">Menu</Link>
          <Link to="/how-it-works" onClick={toggleMenu} className="text-gray-700 mb-6">How it Works</Link>
          <Link to="/faqs" onClick={toggleMenu} className="text-gray-700 mb-6">FAQs</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-gray-700 mb-6">Contact Us</Link>
          
          {/* Sidebar Sign In Button */}
          <Link to="/signin" onClick={toggleMenu} className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full">
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo2 from '../../assets/images/logo2.svg';
// import more1 from '../../assets/images/more1.svg'
// const Navbar = () => {
//   return (
//     <nav className="bg-white w-[1440px] h-[80px] shadow-lg">
//       {/* Navbar Container with fixed width and height */}
//       <div className="w-[1280px] h-full mx-auto px-4 flex justify-between items-center pt-[15px] pb-[15px] ml-[80px] mr-[80px]">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={logo2}
//             alt="Logo"
//             className="h-10 w-10"
//           />
//           <h1 className="text-xl font-bold text-black">Marvie Foods</h1>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-8">
//           <Link to="/" className="text-orange-500 font-semibold">
//             Home
//           </Link>
//           <Link to="/about" className="text-gray-700">
//             About Us
//           </Link>
//           <Link to="/menu" className="text-gray-700">
//             Menu
//           </Link>
//           <Link to="/how-it-works" className="text-gray-700">
//             How it Works
//           </Link>
//           <Link to="/faqs" className="text-gray-700">
//             FAQs
//           </Link>
//           <Link to="/contact" className="text-gray-700">
//             Contact Us
//           </Link>
//         </div>

//         {/* Sign In Button */}
//         <div className="flex-shrink-0">
//           <Link to="/signin">
//             <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
//               Sign in
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
