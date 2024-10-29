import React from 'react';
import FoodPlate from '../../assets/images/FoodPlate.png';
import FoodPlate2 from '../../assets/images/FoodPlate2.svg';
import Food1 from '../../assets/images/Food1.svg';
import googleplay2 from '../../assets/images/googleplay2.svg';
import Vector from '../../assets/images/Vector.svg';
import plate2 from '../../assets/images/plate2.svg';

const Secondhome = () => {
  return (
    <section className="bg-white w-full lg:w-[1440px] h-auto lg:h-[700px] mt-[213px] mb-[213px]">
      <div className="container flex flex-col lg:flex-row items-center justify-between mx-auto gap-8 lg:gap-[80px] px-4 lg:w-[1280px] lg:h-[592px]">
        
        {/* Left Side - Image */}
        <div className="relative w-full h-[300px] md:w-[500px] md:h-[500px] lg:w-[701px] lg:h-[403px] ml-0 lg:ml-[50px]">
          <img
            src={FoodPlate}
            alt="Main Dish"
            className="w-full h-full object-contain"
          />
          {/* Smaller Circle Images */}
          <div className="absolute top-[-20px] right-[-40px] lg:right-[-40px]">
            <img
              src={Food1}
              alt="Small Dish 1"
              className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] rounded-full"
            />
          </div>
          <div className="absolute bottom-0 right-[-30px] md:right-[-50px]">
            <img
              src={plate2}
              alt="Small Dish 2"
              className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] rounded-full"
            />
          </div>
          <div className="absolute top-1/2 left-[-30px] md:left-[-50px] transform -translate-y-1/2">
            <img
              src={FoodPlate2}
              alt="Small Dish 3"
              className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] rounded-full"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-[486px] h-auto lg:h-[403px] px-4 lg:px-8 text-center lg:text-left">
          <h2 className="text-xl lg:text-2xl font-bold text-orange-600 mb-4">
            A Bite into a Journey. A Journey into your Heart. Come Join us.
          </h2>
          <p className="text-gray-600 text-sm lg:text-base mb-6">
            Lorem ipsum dolor sit amet consectetur. Ut sed non tristique
            tincidunt. Nibh nunc bibendum leo ultricies orci. Viverra ultrices risus
            porttitor odio cursus lorem tincidunt sit. Quis euismod sollicitudin
            enim nibh amet porttitor sit.
          </p>
          <p className="text-gray-600 text-sm lg:text-base mb-8">
            Nunc eu vitae eget senectus amet ornare risus. Lectus purus fames
            donec tempor. Quis euismod sollicitudin enim nibh amet porttitor sit.
          </p>

          {/* App Store and Google Play Buttons */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="#" className="flex items-center bg-black text-white rounded-lg p-2 shadow-md hover:bg-gray-800">
              <img
                src={Vector}
                alt="App Store"
                className="h-8 w-auto mr-2"
              />
              <div className="text-left">
                <p className="text-xs font-light">Download on the</p>
                <p className="text-sm font-bold">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center bg-black text-white rounded-lg p-2 shadow-md hover:bg-gray-800">
              <img
                src={googleplay2}
                alt="Google Play"
                className="h-8 w-auto mr-2"
              />
              <div className="text-left">
                <p className="text-xs font-light">GET IT ON</p>
                <p className="text-sm font-bold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secondhome;



// import React from 'react';
// import FoodPlate from '../../assets/images/FoodPlate.png';
// import FoodPlate2 from '../../assets/images/FoodPlate2.svg';
// import Food1 from '../../assets/images/Food1.svg';
// import googleplay2 from '../../assets/images/googleplay2.svg';
// import Vector from '../../assets/images/Vector.svg';
// import plate2 from '../../assets/images/plate2.svg';

// const Secondhome = () => {
//   return (
//     <section className="bg-white w-{1440} h-[700px] mt-[213px] mb-[213px]">
//       <div className="container w-[1280px] h-[592px] flex items-center justify-between mx-auto gap-[80px]">
//         {/* Left Side - Image */}
//         <div className="ml-[50px] relative w-[701px] h-[403px]">
//           <img
//             src={FoodPlate}
//             alt="Main Dish"
//             className="w-full h-full object-contain"
//           />
//           {/* Smaller Circle Images */}
//           <div className="absolute top-[-20px] right-[-40px]">
//             <img
//               src={Food1}
//               alt="Small Dish 1"
//               className="w-[68px] h-[68px] rounded-full"
//             />
//           </div>
//           <div className="absolute bottom-0 right-[-50px]">
//             <img
//               src={plate2}
//               alt="Small Dish 2"
//               className="w-[68px] h-[68px] rounded-full"
//             />
//           </div>
//           <div className="absolute top-1/2 left-[-50px] transform -translate-y-1/2">
//             <img
//               src={FoodPlate2}
//               alt="Small Dish 3"
//               className="w-[68px] h-[68px] rounded-full"
//             />
//           </div>
//         </div>

//         {/* Right Side - Text */}
//         <div className="w-[486px] h-[403px] mr-[0px] px-8">
//           <h2 className="text-1xl text-start font-bold text-orange-600 mb-4 w-full">
//             A Bite into a Journey. A Journey into your Heart. Come Join us.
//           </h2>
//           <p className="text-gray-600 text-start text-sm mb-6 w-full">
//             Lorem ipsum dolor sit amet consectetur. Ut sed non tristique
//             tincidunt. Nibh nunc bibendum leo ultricies orci. Viverra ultrices risus
//             porttitor odio cursus lorem tincidunt sit. Quis euismod sollicitudin
//             enim nibh amet porttitor sit.
//           </p>
//           <p className="text-gray-600 text-sm text-start mb-8 w-full">
//             Nunc eu vitae eget senectus amet ornare risus. Lectus purus fames
//             donec tempor. Quis euismod sollicitudin enim nibh amet porttitor sit.
//           </p>

//           {/* App Store and Google Play Buttons */}
//           <div className="flex items-center space-x-4">
//             <a href="#" className="flex items-center bg-black text-white rounded-lg p-2 shadow-md hover:bg-gray-800">
//               <img
//                 src={Vector}
//                 alt="App Store"
//                 className="h-8 w-auto mr-2"
//               />
//               <div className="text-left">
//                 <p className="text-xs font-light">Download on the</p>
//                 <p className="text-sm font-bold">App Store</p>
//               </div>
//             </a>
//             <a href="#" className="flex items-center bg-black text-white rounded-lg p-2 shadow-md hover:bg-gray-800">
//               <img
//                 src={googleplay2}
//                 alt="Google Play"
//                 className="h-8 w-auto mr-2"
//               />
//               <div className="text-left">
//                 <p className="text-xs font-light">GET IT ON</p>
//                 <p className="text-sm font-bold">Google Play</p>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Secondhome;
