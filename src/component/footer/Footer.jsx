import React, { useState } from 'react';
import food from '../../assets/images/food.svg';
import xxx from '../../assets/images/xxx.svg';
import facebook from '../../assets/images/facebook.svg';
import insta from '../../assets/images/insta.svg';
import linkedin from '../../assets/images/in.svg';
import arrowdown1 from '../../assets/images/arrowdown1.svg';
import arrowup1 from '../../assets/images/arrowup1.svg';

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto lg:w-[1440px] lg:h-[450px] bg-[#3F2601] text-white p-6">
      <div className="w-full lg:w-[1281px] lg:h-[276px] grid grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Brand and Description */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="bg-[#FF8C00] p-2 rounded-full mr-2">
              <img src={food} alt="Marvie Foods Icon" className="w-6 h-6" />
            </span>
            Marvie Foods
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-start">
            Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum. Magna commodo condimentum urna rhoncus.
          </p>
          <div className="flex mt-4 space-x-4">
            <img src={xxx} alt="Brand Icon" className="w-6 h-6" />
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
            <img src={insta} alt="Instagram" className="w-6 h-6" />
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start ml-4 md:ml-16">
          <div className="flex items-center justify-between w-full md:justify-start">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            {/* Arrow icon for mobile view */}
            <span 
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF8C00] md:hidden"
              onClick={() => toggleSection('quickLinks')}
            >
              <img
                src={activeSection === 'quickLinks' ? arrowup1 : arrowdown1}
                alt="arrow"
                className="h-4 w-4"
              />
            </span>
          </div>
          {(activeSection === 'quickLinks' || window.innerWidth >= 768) && (
            <ul className="space-y-2 text-start text-sm">
              <li>Home</li>
              <li>Menu</li>
              <li>About</li>
              <li>Testimonials</li>
              <li>Gallery</li>
            </ul>
          )}
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between w-full md:justify-start">
            <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
            {/* Arrow icon for mobile view */}
            <span 
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF8C00] md:hidden"
              onClick={() => toggleSection('openingHours')}
            >
              <img
                src={activeSection === 'openingHours' ? arrowup1 : arrowdown1}
                alt="arrow"
                className="h-4 w-4"
              />
            </span>
          </div>
          {(activeSection === 'openingHours' || window.innerWidth >= 768) && (
            <ul className="space-y-2 text-start text-sm">
              <li>Mon - Fri: 09:00 am - 09:00 pm</li>
              <li>Saturday: 09:00 am - 08:00 pm</li>
              <li>Sunday: 12:00 pm - 08:00 pm</li>
            </ul>
          )}
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between w-full md:justify-start">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            {/* Arrow icon for mobile view */}
            <span 
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF8C00] md:hidden"
              onClick={() => toggleSection('contactUs')}
            >
              <img
                src={activeSection === 'contactUs' ? arrowup1 : arrowdown1}
                alt="arrow"
                className="h-4 w-4"
              />
            </span>
          </div>
          {(activeSection === 'contactUs' || window.innerWidth >= 768) && (
            <address className="not-italic text-start text-sm space-y-2">
              <p>Hiltop Close, G.R.A, Port Harcourt.</p>
              <p>+234 901 234 5678</p>
              <p>
                <a href="mailto:marviefoods@marich.com" className="text-white underline">
                  marviefoods@marich.com
                </a>
              </p>
            </address>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-white mt-6 text-center text-sm pt-4">
        Copyright ©2024
      </div>
    </div>
  );
};

export default Footer;




// import React from 'react';
// import food from '../../assets/images/food.svg';
// import xxx from '../../assets/images/xxx.svg';
// import facebook from '../../assets/images/facebook.svg';
// import insta from '../../assets/images/insta.svg';
// import linkedin from '../../assets/images/in.svg';

// const Footer = () => {
//   return (
//     <div className="flex flex-col items-center justify-center w-[1440px] h-[450px] bg-[#3F2601] text-white p-6">
//       <div className="w-[1281px] h-[276px] grid grid-cols-4 gap-6">
//         {/* Brand and Description */}
//         <div className="flex flex-col items-start"> {/* Align items to the start */}
//           <h2 className="text-2xl font-bold flex items-center">
//             <span className="bg-[#FF8C00] p-2 rounded-full mr-2">
//               <img src={food} alt="Marvie Foods Icon" className="w-6 h-6" />
//             </span>
//             Marvie Foods
//           </h2>
//           <p className="mt-4 text-sm leading-relaxed text-start">
//             Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum. Magna commodo condimentum urna rhoncus.
//           </p>
//           <div className="flex mt-4 space-x-4">
//             <img src={xxx} alt="Brand Icon" className="w-6 h-6" />
//             <img src={facebook} alt="Facebook" className="w-6 h-6" />
//             <img src={insta} alt="Instagram" className="w-6 h-6" />
//             <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
//           </div>
//         </div>

//         {/* Quick Links */}
// <div className="flex flex-col items-start ml-16"> {/* Added ml-6 for margin-left */}
//   <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
//   <ul className="space-y-2 text-start text-sm">
//     <li>Home</li>
//     <li>Menu</li>
//     <li>About</li>
//     <li>Testimonials</li>
//     <li>Gallery</li>
//   </ul>
// </div>


//         {/* Opening Hours */}
//         <div className="flex flex-col items-start">
//           <h3 className="text-lg font-semibold  mb-2">Opening Hours</h3>
//           <ul className="space-y-2 text-start text-sm">
//             <li>Mon - Fri: 09:00 am - 09:00 pm</li>
//             <li>Saturday: 09:00 am - 08:00 pm</li>
//             <li>Sunday: 12:00 pm - 08:00 pm</li>
//           </ul>
//         </div>

//         {/* Contact Us */}
//         <div className="flex flex-col items-start">
//           <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
//           <address className="not-italic text-start text-sm space-y-2">
//             <p>Hiltop Close, G.R.A, Port Harcourt.</p>
//             <p>+234 901 234 5678</p>
//             <p>
//               <a href="mailto:marviefoods@marich.com" className="text-white underline">
//                 marviefoods@marich.com
//               </a>
//             </p>
//           </address>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="w-full border-t border-white mt-6 text-center text-sm pt-4">
//         Copyright ©2024
//       </div>
//     </div>
//   );
// };

// export default Footer;
