import React from 'react';
import bigimage from '../../assets/images/bigimage.png';
import Secondhome from '../secondhome/Secondhome';
import Menu from '../menu/Menu';
import How from '../how/How';
import Gallery from '../gallary/Gallary';
import Faq from '../faq/Faq';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <>
      <section
        className="w-full h-[605px] md:h-[605px] lg:w-[1440px] lg:h-[605px] bg-cover bg-center flex items-center" // Desktop view unchanged, responsive for mobile/tablet
        style={{ backgroundImage: `url(${bigimage})` }}
      >
        <div className="container w-[433px] h-[329px] ml-0 flex items-center justify-between px-6">
          {/* Text Section */}
          <div className="max-w-lg ml-20"> {/* Updated Tailwind margin class */}
  <div className="text-container mt-24 md:mt-32 lg:mt-0 ml-2 md:ml-12"> {/* Shift down and slightly left on mobile/tablet */}
    <h1 className="text-3xl text-left font-bold text-white leading-tight mb-4">
      Taste Your Heart in Every Bite You Take
    </h1>
    <p className="text-white text-left text-lg mb-6">
      Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum.
    </p>
    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-start">
      <span className="mr-2"></span>
      Order Now
    </button>
  </div>
</div>


        </div>
      </section>

      {/* Custom CSS for width/height based on screen size */}
      <style jsx>{`
        .text-container {
          max-width: 100%;
        }
        @media (min-width: 768px) {
          .text-container {
            max-width: 834px; /* Tablet max width */
          }
        }
        @media (min-width: 1024px) {
          .text-container {
            max-width: 1440px; /* Desktop max width */
          }
        }
      `}</style>

      {/* Additional Sections */}
      <Secondhome />
      <Menu />
      <How />
      <Gallery />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;




// import React from 'react';
// import bigimage from '../../assets/images/bigimage.png';
// import Secondhome from '../secondhome/Secondhome'
// import Menu from '../menu/Menu';
// import How from '../how/How';
// import Gallery from '../gallary/Gallary';
// import Faq from '../faq/Faq';
// import Footer from '../footer/Footer';
// const Home = () => {
//   return (
//     <>
//     <section
//       className="w-[1440px] h-[605px] bg-cover bg-center flex items-center"
//       style={{ backgroundImage: `url(${bigimage})` }}
//     >
//       <div className="container w-[433px] h-[329px] ml-0 flex items-center justify-between px-6">
//         {/* Text Section */}
//         <div className="max-w-lg ml-20"> {/* Updated Tailwind margin class */}
//           <h1 className="text-3xl text-left font-bold text-white leading-tight mb-4">
//             Taste Your Heart in Every Bite You Take
//           </h1>
//           <p className="text-white text-left text-lg mb-6">
//             Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum.
//           </p>
//           <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-start">
//             {/* Button Icon (optional, replace with actual icon) */}
//             <span className="mr-2"></span>
//             Order Now
//           </button>
//         </div>
//       </div>
//     </section>
//     <Secondhome/>
//     <Menu/>
//     <How/>
//     <Gallery/>
//     <Faq/>
//     <Footer/>
//     </>
//   );
// };

// export default Home;
