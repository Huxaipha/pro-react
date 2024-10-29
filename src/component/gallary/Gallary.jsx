import React from 'react'; 
import Rec5 from '../../assets/images/Rec5.png';
import Rec6 from '../../assets/images/Rec6.png';
import cen1 from '../../assets/images/cen1.jpg';
import cen2 from '../../assets/images/cen2.png';
import Rec7 from '../../assets/images/Rec7.png';
import Rec8 from '../../assets/images/Rec8.png';

const Gallery = () => {
  return (
    <div className="flex flex-col items-center text-center w-full h-auto lg:w-[1440px] lg:h-[940px]">
      <h2 className="text-orange-500 text-2xl font-bold mt-6">Our Gallery</h2>
      
      <div className="flex flex-col md:flex-row md:w-[831px] md:h-[1550px] lg:flex-row lg:w-[1280px] lg:h-[812px] mt-6 gap-4">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 items-center md:w-[290px] md:h-[1550px] lg:w-[290px] lg:h-auto">
          <div className="w-[290px] h-[331px] overflow-hidden rounded-lg">
            <img src={Rec5} alt="Breakfast plate" className="w-full h-full object-cover" />
          </div>
          <div className="w-[290px] h-[331px] overflow-hidden rounded-lg">
            <img src={Rec6} alt="Coffee lounge interior" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* cen1 with overlay */}
          <div className="relative w-full md:w-[334px] md:h-[721px] lg:w-[334px] lg:h-[721px]">
            <img src={cen1} alt="Restaurant " className="object-cover w-full h-full rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h3 className="text-lg font-semibold">Conducive Sit-Out Place/Coffee Lounge</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Amet tristique lobortis morbi morbi integer mus ultrices.
              </p>
            </div>
          </div>
          
          {/* cen2 */}
          <div className="w-full md:w-[334px] md:h-[721px] lg:w-[334px] lg:h-[721px]">
            <img src={cen2} alt="Meal with drink" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 items-center md:w-[290px] md:h-[1550px] lg:w-[290px] lg:h-auto">
          <img src={Rec7} alt="Savory dish" className="w-[290px] h-[331px] object-cover rounded-lg" />
          <img src={Rec8} alt="Noodles with sides" className="w-[290px] h-[331px] object-cover rounded-lg" />
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;



// import React from 'react';
// import Rec5 from '../../assets/images/Rec5.png';
// import Rec6 from '../../assets/images/Rec6.png';
// import cen1 from '../../assets/images/cen1.jpg';
// import cen2 from '../../assets/images/cen2.png';
// import Rec7 from '../../assets/images/Rec7.png';
// import Rec8 from '../../assets/images/Rec8.png';

// const Gallery = () => {
//   return (
//     <div className="flex flex-col items-center text-center w-[1440px] h-[940px] ">
//       <h2 className="text-orange-500 text-2xl font-bold mt-6">Our Gallery</h2>
//       <div className="flex justify-center mt-6 w-[1280px] h-[812px] gap-4">
        
//         {/* Left Column */}
//         <div className="flex flex-col gap-4">
//           <img src={Rec5} alt="Breakfast plate" className="w-[290px] h-[331px] object-cover rounded-lg" />
//           <img src={Rec6} alt="Coffee lounge interior" className="w-[290px] h-[331px] object-cover rounded-lg" />
//         </div>

//         {/* Center Row (cen1 and cen2 side by side) */}
//         <div className="flex gap-4">
//           {/* cen1 with overlay */}
//           <div className="relative w-[334px] h-[721px]">
//             <img src={cen1} alt="Restaurant interior with overlay text" className="object-cover w-full h-full rounded-lg" />
//             <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
//               <h3 className="text-lg font-semibold">Conducive Sit-Out Place/Coffee Lounge</h3>
//               <p className="text-sm">
//                 Lorem ipsum dolor sit amet consectetur. Amet tristique lobortis morbi morbi integer mus ultrices.
//               </p>
//             </div>
//           </div>
//           {/* cen2 */}
//           <img src={cen2} alt="Meal with drink" className="w-[334px] h-[721px] object-cover rounded-lg" />
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col gap-4">
//           <img src={Rec7} alt="Savory dish" className="w-[290px] h-[331px] object-cover rounded-lg" />
//           <img src={Rec8} alt="Noodles with sides" className="w-[290px] h-[331px] object-cover rounded-lg" />
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Gallery;
