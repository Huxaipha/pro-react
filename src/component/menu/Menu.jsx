import React from 'react';
import unsplash1 from '../../assets/images/unsplash1.png';
import unsplash2 from '../../assets/images/unsplash2.png';
import unsplash3 from '../../assets/images/unsplash3.png';
import bowl5 from '../../assets/images/bowl5.png';
import star from '../../assets/images/star.svg';

const Menu = () => {
    return (
        <section className="w-full h-auto mx-auto bg-gradient-to-r py-10 px-4 bg-gray-50 bg-no-repeat bg-center md:w-[831px] md:h-[1129px] lg:w-[1440px] lg:h-[700px]">
            <div className="w-full h-auto flex flex-col items-center md:h-[620px]">

                {/* Menu Header */}
                <div className="text-center mb-8">
                    <h2 className="text-orange-600 text-3xl font-bold">Our Menu</h2>
                    <p className="text-gray-700 text-lg mt-4">
                        Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor<br />
                        dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum.
                    </p>
                </div>

                {/* Menu Items */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Menu Item 1 */}
                    <div className="w-full h-[360px] p-[30px] px-[25px] gap-[10px] rounded-[70px_0_70px_0] flex flex-col items-center justify-center bg-orange-500 md:w-[290px]">
                        <img
                            src={unsplash1}
                            alt="Spaghetti"
                            className="w-[150px] h-[150px] rounded-full mb-4"
                        />
                        <h3 className="text-white text-lg font-bold">Spaghetti Confetti</h3>
                        <p className="text-white text-sm mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="text-white text-sm">Est orci arcu dignissim vestibulum.</p>

                        <div className="flex justify-between mt-4 text-white w-full items-center">
                            <div className="flex items-center">
                                <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                <span>4.5</span>
                            </div>
                            <p className="ml-2">₦4,000</p>
                        </div>
                    </div>

                    {/* Menu Item 2 */}
                    <div className="w-full h-[360px] p-[30px] px-[25px] gap-[10px] rounded-[70px_0_70px_0] flex flex-col items-center justify-center bg-orange-300 md:w-[290px]">
                        <img
                            src={unsplash2}
                            alt="Sandwich"
                            className="w-[150px] h-[150px] rounded-full mb-4"
                        />
                        <h3 className="text-white text-lg font-bold">Robaked Sandwich</h3>
                        <p className="text-white text-sm mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="text-white text-xs">Est orci arcu dignissim vestibulum.</p>

                        <div className="flex justify-between mt-4 text-white w-full items-center">
                            <div className="flex items-center">
                                <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                <span>4.2</span>
                            </div>
                            <p className="ml-2">₦6,000</p>
                        </div>
                    </div>

                    {/* Menu Item 3 */}
                    <div className="w-full h-[360px] p-[30px] px-[25px] gap-[10px] rounded-[70px_0_70px_0] flex flex-col items-center justify-center bg-orange-500 md:w-[290px]">
                        <img
                            src={unsplash3}
                            alt="Dream Salad"
                            className="w-[150px] h-[150px] rounded-full mb-4"
                        />
                        <h3 className="text-white text-lg font-bold">Dream Salad</h3>
                        <p className="text-white text-sm mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="text-white text-xs">Est orci arcu dignissim vestibulum.</p>
                        <div className="flex justify-between mt-4 text-white w-full items-center">
                            <div className="flex items-center">
                                <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                <span className="ml-1">4.7</span>
                            </div>
                            <p className="ml-2">₦5,300</p>
                        </div>
                    </div>

                    {/* Menu Item 4 */}
                    <div className="w-full h-[360px] p-[30px] px-[25px] gap-[10px] rounded-[70px_0_70px_0] flex flex-col items-center justify-center bg-orange-500 md:w-[290px]">
                        <img
                            src={bowl5}
                            alt="Pepper Egg Salad"
                            className="w-[150px] h-[150px] rounded-full mb-4"
                        />
                        <h3 className="text-white text-lg font-bold">Pepper Egg Salad</h3>
                        <p className="text-white text-sm mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="text-white text-xs">Est orci arcu dignissim vestibulum.</p>
                        <div className="flex justify-between mt-4 text-white w-full items-center">
                            <div className="flex items-center">
                                <img src={star} alt="star" className="w-4 h-4 mr-1" />
                                <span className="ml-1">4.2</span>
                            </div>
                            <p className="ml-2">₦6,000</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Menu;




// import React from 'react';
// import unsplash1 from '../../assets/images/unsplash1.png';
// import unsplash2 from '../../assets/images/unsplash2.png';
// import unsplash3 from '../../assets/images/unsplash3.png';
// import bowl5 from '../../assets/images/bowl5.png';
// import star from '../../assets/images/star.svg';

// import rainn from '../../assets/images/rainn.jpg';

// const Menu = () => {
//     return (
//         <section className="w-[1440px] h-[700px] mx-auto bg-gradient-to-r  py-10 px-4  bg-gray-50 bg-no-repeat bg-center">
//             {/* <section className="w-[1440px] h-[700px] mx-auto bg-gradient-to-r  py-10 px-4 bg-[url('../../assets/images/rainn.jpg')] bg-cover bg-no-repeat bg-center"> */}
//             <div className="w-full h-[620px] flex flex-col items-center">

//                 {/* Menu Header */}
//                 <div className="text-center mb-8">
//                     <h2 className="text-orange-600 text-3xl font-bold">Our Menu</h2>
//                     <p className="text-gray-700 text-lg mt-4">
//                         Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor<br />
//                         dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum.
//                     </p>

//                 </div>

//                 {/* Menu Items */}
//                 <div className="grid grid-cols-4 gap-6">
//                     {/* Menu Item 1 */}
//                     <div className="w-[290px] h-[360px] p-[30px] px-[25px] gap-[10px] rounded-[70px_0_70px_0] flex flex-col items-center justify-center bg-orange-500">
//                         <img
//                             src={unsplash1}
//                             alt="Spaghetti"
//                             className="w-[150px] h-[150px] rounded-full mb-4"
//                         />
//                         <h3 className="text-white text-lg font-bold">Spaghetti Confetti</h3>
//                         <p className="text-white text-sm mb-2">Lorem ipsum dolor sit amet consectetur.</p>
//                         <p className="text-white text-sm">Est orci arcu dignissim vestibulum.</p>

//                         <div className="flex justify-between mt-4 text-white w-full items-center">
//                             <div className="flex items-center">
//                                 <img src={star} alt="star" className="w-4 h-4 mr-1" />
//                                 <span>4.5</span>
//                             </div>
//                             <p className="ml-2">₦4,000</p>
//                         </div>
//                     </div>


//                     {/* Menu Item 2 */}
//                     <div className="w-[290px] h-[360px] p-[30px] px-[25px] gap-[10px] rounded-[70px_0_70px_0] flex flex-col items-center justify-center bg-orange-300">
//                         <img
//                             src={unsplash2}
//                             alt="Sandwich"
//                             className="w-[150px] h-[150px] rounded-full mb-4"
//                         />
//                         <h3 className="text-white text-lg font-bold">Robaked Sandwich</h3>
//                         <p className="text-white text-sm mb-2">Lorem ipsum dolor sit amet consectetur.</p>
//                         <p className="text-white text-xs">Est orci arcu dignissim vestibulum.</p>

//                         <div className="flex justify-between mt-4 text-white w-full items-center">
//                             <div className="flex items-center">
//                                 <img src={star} alt="star" className="w-4 h-4 mr-1" />
//                                 <span>4.2</span>
//                             </div>
//                             <p className="ml-2">₦6,000</p>
//                         </div>
//                     </div>


//                     {/* Menu Item 3 */}
//                     <div className="w-[290px] h-[360px] p-[30px] px-[25px] gap-[10px] rounded-[70px_0_70px_0] flex flex-col items-center justify-center bg-orange-500">
//                         <img
//                             src={unsplash3}
//                             alt="Dream Salad"
//                             className="w-[150px] h-[150px] rounded-full mb-4"
//                         />
//                         <h3 className="text-white text-lg font-bold">Dream Salad</h3>
//                         <p className="text-white text-sm mb-2">Lorem ipsum dolor sit amet consectetur.</p>
//                         <p className="text-white text-xs">Est orci arcu dignissim vestibulum.</p>
//                         <div className="flex justify-between mt-4 text-white w-full items-center">
//                             <div className="flex items-center">
//                                 <img src={star} alt="star" className="w-4 h-4 mr-1" />
//                                 <span className="ml-1">4.7</span>
//                             </div>
//                             <p className="ml-2">₦5,300</p>
//                         </div>
//                     </div>


//                     {/* Menu Item 4 */}
//                     <div className="w-[290px] h-[360px] p-[30px] px-[25px] gap-[10px] rounded-[70px_0_70px_0] flex flex-col items-center justify-center bg-orange-500">
//                         <img
//                             src={bowl5}
//                             alt="Pepper Egg Salad"
//                             className="w-[150px] h-[150px] rounded-full mb-4"
//                         />
//                         <h3 className="text-white text-lg font-bold">Pepper Egg Salad</h3>
//                         <p className="text-white text-sm mb-2">Lorem ipsum dolor sit amet consectetur.</p>
//                         <p className="text-white text-xs">Est orci arcu dignissim vestibulum.</p>
//                         <div className="flex justify-between mt-4 text-white w-full items-center">
//                             <div className="flex items-center">
//                                 <img src={star} alt="star" className="w-4 h-4 mr-1" />
//                                 <span className="ml-1">4.2</span>
//                             </div>
//                             <p className="ml-2">₦6,000</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Menu;
