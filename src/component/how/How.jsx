import React from 'react';
import phone1 from '../../assets/images/phone1.svg';
import vec from '../../assets/images/Vec.svg';
import gameicons from '../../assets/images/gameicons.svg';

const How = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center bg-white md:w-[831px] md:h-[1394px] lg:w-[1440px] lg:h-[720px]">
      <div className="w-full h-auto flex flex-col items-center justify-center md:w-[768px] md:h-[1300px] lg:w-[1228px] lg:h-[500px]">
        
        {/* Title */}
        <h2 className="text-2xl font-bold mb-8 text-orange-500">How it Works</h2>
        
        {/* Card Container */}
        <div className="flex flex-col gap-6 md:flex-row lg:flex-row md:justify-between">
          
          {/* Card 1 */}
          <div className="w-full md:w-[370px] h-[450px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
            <div className="w-[80px] h-[80px] rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <img src={vec} alt="Choose Your Meal" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Choose Your Meal</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="w-full md:w-[370px] h-[450px] bg-orange-500 shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
            <div className="w-[80px] h-[80px] rounded-full bg-orange-200 flex items-center justify-center mb-4">
              <img src={phone1} alt="Order Via App" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Order Via App</h3>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-[370px] h-[450px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
            <div className="w-[80px] h-[80px] rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <img src={gameicons} alt="Enjoy Your Meal" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Enjoy Your Meal</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default How;



// import React from 'react';
// import phone1 from '../../assets/images/phone1.svg'
// import vec from '../../assets/images/Vec.svg'
// import gameicons from '../../assets/images/gameicons.svg'
// const How = () => {
//   return (
//     <div className="w-[1440px] h-[720px] flex items-center justify-center bg-white">
//       <div className="w-[1228px] h-[500px] flex flex-col items-center justify-center">
//         {/* Title */}
//         <h2 className="text-2xl font-bold mb-8 text-orange-500">How it Works</h2>
        
//         {/* Card Container */}
//         <div className="flex justify-between gap-6">
//           {/* Card 1 */}
//           <div className="w-[370px] h-[450px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
//             <div className="w-[80px] h-[80px] rounded-full bg-orange-100 flex items-center justify-center mb-4">
//               <img src={vec}
//                alt="Choose Your Meal" className="w-12 h-12" />
//             </div>
//             <h3 className="text-xl font-semibold mb-4">Choose Your Meal</h3>
//             <p className="text-gray-600 text-center">
//               Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus.
//             </p>
//           </div>
          
//           {/* Card 2 */}
//           <div className="w-[370px] h-[450px] bg-orange-500 shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
//             <div className="w-[80px] h-[80px] rounded-full bg-orange-200 flex items-center justify-center mb-4">
//               <img src={phone1} alt="phone" className="w-12 h-12" />
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-4">Order Via App</h3>
//             <p className="text-white text-center">
//               Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="w-[370px] h-[450px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
//             <div className="w-[80px] h-[80px] rounded-full bg-orange-100 flex items-center justify-center mb-4">
//               <img src={gameicons} alt="Enjoy Your Meal" className="w-12 h-12" />
//             </div>
//             <h3 className="text-xl font-semibold mb-4">Enjoy Your Meal</h3>
//             <p className="text-gray-600 text-center">
//               Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default How;
