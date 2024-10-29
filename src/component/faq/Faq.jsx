import React, { useState } from 'react';
import arrowdown1 from '../../assets/images/arrowdown1.svg';
import arrowup1 from '../../assets/images/arrowup1.svg';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How to place an order?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Nibh integer nunc commodo nulla sit. Eget vulputate lorem arcu enim id vitae cras pharetra lectus. Fringilla suspendisse condimentum vulputate pharetra natoque. Orci eu lobortis semper amet sagittis feugiat massa pellentesque arcu. Ullamcorper nec amet nullam gravida commodo et dolor quis proin. Aliquam sed est cursus et risus cras feugiat ut.',
    },
    { question: 'Do you offer payment on delivery?' },
    { question: 'Can I cancel an order after payment?' },
    { question: 'How long does it take to receive an order?' },
    { question: 'What is your location?' },
    { question: 'Is there a special discount?' },
  ];

  return (
    <div className="flex flex-col items-center text-center w-full h-auto lg:w-[1440px] lg:h-[920px] p-6">
      <h2 className="text-orange-500 text-2xl font-bold">Frequently Asked Questions</h2>
      
      <div className="mt-6 w-full md:w-[831px] md:h-[826px] lg:w-[1280px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#FFEAD2] rounded-lg mb-4 text-left shadow-md"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full p-4 text-black font-semibold text-lg"
            >
              {faq.question}
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full"
                style={{ backgroundColor: '#FF8C00' }}
              >
                <img
                  src={activeIndex === index ? arrowup1 : arrowdown1}
                  alt="arrow"
                  className="h-4 w-4"
                />
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700 text-sm border-t border-gray-300">
                {faq.answer || 'No additional information available.'}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;


// import React, { useState } from 'react';
// import arrowdown1 from '../../assets/images/arrowdown1.svg';
// import arrowup1 from '../../assets/images/arrowup1.svg';

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: 'How to place an order?',
//       answer: 'Lorem ipsum dolor sit amet consectetur. Nibh integer nunc commodo nulla sit. Eget vulputate lorem arcu enim id vitae cras pharetra lectus. Fringilla suspendisse condimentum vulputate pharetra natoque. Orci eu lobortis semper amet sagittis feugiat massa pellentesque arcu. Ullamcorper nec amet nullam gravida commodo et dolor quis proin. Aliquam sed est cursus et risus cras feugiat ut.',
//     },
//     { question: 'Do you offer payment on delivery?' },
//     { question: 'Can I cancel an order after payment?' },
//     { question: 'How long does it take to receive an order?' },
//     { question: 'What is your location?' },
//     { question: 'Is there a special discount?' },
//   ];

//   return (
//     <div className="flex flex-col items-center text-center w-[1440px] h-[920px] p-6">
//       <h2 className="text-orange-500 text-2xl font-bold">Frequently Asked Questions</h2>
      
//       <div className="mt-6 w-[1280px]">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="bg-[#FFEAD2] rounded-lg mb-4 text-left shadow-md"
//           >
//             <button
//               onClick={() => toggleAccordion(index)}
//               className="flex justify-between items-center w-full p-4 text-black font-semibold text-lg"
//             >
//               {faq.question}
//               <span
//                 className="flex items-center justify-center w-8 h-8 rounded-full"
//                 style={{ backgroundColor: '#FF8C00' }}
//               >
//                 <img
//                   src={activeIndex === index ? arrowup1 : arrowdown1}
//                   alt="arrow"
//                   className="h-4 w-4"
//                 />
//               </span>
//             </button>
//             {activeIndex === index && (
//               <div className="px-4 pb-4 text-gray-700 text-sm border-t border-gray-300">
//                 {faq.answer || 'No additional information available.'}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faq;
