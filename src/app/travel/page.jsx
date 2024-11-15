// components/TravelPage.js
'use client'
import ImageTravel from '../../../public/images/imageTravel.png'
import Travel1 from '../../../public/images/travel.png'
import Travel2 from '../../../public/images/travel2.png'
import Travel3 from '../../../public/images/travel3.png'
import Image from 'next/image';

const travelItineraries = [
    { title: "Darjeeling Itinerary", location: "West Bengal", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f2b177efd4e8c2ea86addc57294d75e8bde95da60f8ab62848143d2d099b165?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91" },
    { title: "Munnar Itinerary", location: "Kerala", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee07c49b5331f637ec64be383ba2c833a945b393cca6b0d053d0e5beaa336c18?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91" },
    { title: "Delhi Itinerary", location: "Delhi", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a3356434aeb5e657aee08b8061afb32629cc7568426ea00eb55aacb1ade236f?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91" },
    ];

  function TravelPage() {
    return (
      <section className="flex flex-col mt-12 w-full text-center max-md:mt-10 max-md:max-w-full">
        <nav className="flex flex-col w-full text-4xl font-bold text-white whitespace-nowrap max-md:max-w-full">
          <ul className="flex flex-wrap gap-10 justify-between items-center px-6 py-7 w-full bg-black rounded-3xl min-h-[112px] max-md:px-5 max-md:max-w-full">
            <li className="flex flex-col justify-center items-center self-stretch my-auto w-[113px]">
              <a href="#travel" className="text-white">Travel</a>
              <div className="mt-4 max-w-full bg-emerald-500 border border-emerald-500 border-solid min-h-[1px] w-[113px]" />
            </li>
            <li className="self-stretch my-auto"><a href="#digital" className="text-white">Digital</a></li>
            <li className="self-stretch my-auto"><a href="#brand" className="text-white">Brand</a></li>
            <li className="self-stretch my-auto"><a href="#merch" className="text-white">Merch</a></li>
          </ul>
        </nav>
        <div className="flex overflow-hidden flex-wrap gap-16 items-end mt-9 w-full bg-black rounded-3xl max-md:max-w-full">
          <div className="flex relative flex-col grow shrink gap-2.5 justify-center items-center px-24 py-24 font-bold text-white min-h-[540px] min-w-[240px] w-[960px] max-md:px-5 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98c0f0c78618f44d779583b9faf93a738b2c4567da9276124c7ec1046fc760a6?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91" alt="Travel background" className="object-cover absolute inset-0 size-full" />
            <div className="flex relative flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 h-[358px] min-w-[240px] max-md:max-w-full">
              {/* <h2 className="text-[180px] max-md:max-w-full max-md:text-4xl">TRAVEL</h2> */}
              {/* <p className="self-center mt-8 text-4xl max-w-[700px] w-[700px] max-md:max-w-full">
                Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.
              </p> */}
            </div>
          </div>
          <div className="flex flex-col grow shrink min-w-[240px] w-[960px] max-md:max-w-full">
            <h3 className="text-4xl font-bold text-white max-md:max-w-full">Explore Our Curated Travel Itineraries</h3>
            <div className="flex overflow-hidden overflow-x-auto gap-6 items-center pl-4 mt-14 w-full max-md:mt-10 max-md:max-w-full">
              {travelItineraries.map((itinerary, index) => (
                <article key={index} className="flex relative flex-col items-center self-stretch ml-10 pb-3 my-auto rounded-2xl aspect-[0.563] min-h-[400px] min-w-[420px] w-[270px]">
                  <img loading="lazy" src={itinerary.image} alt={`${itinerary.title} background`} className="object-cover absolute inset-0 size-full" />
                  <div className="flex relative flex-col justify-center items-center max-w-full text-white min-h-[59px] w-[252px]">
                    <h4 className="text-2xl font-bold">{itinerary.title}</h4>
                    <p className="text-lg font-medium"><strong>{itinerary.location}</strong></p>
                  </div>
                 
                </article>
              ))}
            </div>
          </div>
  
          <div className="grow shrink text-4xl font-bold text-white min-w-[240px] w-[960px] max-md:max-w-full">
            How to list?
          </div>
          <div className="flex flex-col grow shrink pt-12 text-4xl text-white min-w-[240px] w-[960px] max-md:max-w-full">
            <div className="flex relative flex-col pb-4 w-full min-h-[497px] max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99fd4aa4b840c28b81815a728b515339222d59194e97de1c7577ce1b501fd490?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91" alt="Background image" className="object-cover absolute inset-0 size-full" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a46b7ed02d893b01c20fcb4b1c05ec28e9e39a55fd2788fe97c996dbe9c34f07?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91" alt="Overlay image" className="object-contain z-10 mt-0 w-full aspect-[2.9] max-md:max-w-full" />
              <h3 className="relative self-center mt-28 max-md:mt-10 max-md:max-w-full">
                You Curate Experience, We Make It Happen
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
  

export default TravelPage;

// const TravelPage = () => {
//     return (
//         <div className="bg-gray-900 text-white px-4 md:px-10 lg:px-20 xl:px-36">
//             {/* Header Section */}
//             <div className="text-center py-10">
//                 <h1 className="text-4xl sm:text-5xl font-bold">TRAVEL</h1>
//                 <p className="mt-4 text-lg sm:text-xl">
//                     Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.
//                 </p>
//             </div>
            
//             {/* Travel Itineraries Section */}
//             <div className="text-center mb-10">
//                 <h2 className="text-3xl sm:text-4xl font-semibold">Explore Our Curated Travel Itineraries</h2>
//             </div>

//             {/* Itinerary Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//                     <Image src={Travel1} alt="Darjeeling Itinerary" className="w-full h-full object-cover"/>
//                     <div className="p-4">
//                         {/* <h3 className="text-xl sm:text-2xl font-bold">Darjeeling Itinerary</h3>
//                         <p className="text-sm sm:text-base">Samir Hotel</p> */}
//                     </div>
//                 </div>
//                 <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//                     <Image src={Travel2} alt="Mumbai Itinerary" className="w-full h-full object-cover"/>
//                     <div className="p-4">
//                         {/* <h3 className="text-xl sm:text-2xl font-bold">Mumbai Itinerary</h3>
//                         <p className="text-sm sm:text-base">Samir Hotel</p> */}
//                     </div>
//                 </div>
//                 <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//                     <Image src={Travel3} alt="Delhi Itinerary" className="w-full h-full
//                      object-cover"/>
//                     <div className="p-4">
//                         {/* <h3 className="text-xl sm:text-2xl font-bold">Delhi Itinerary</h3>
//                         <p className="text-sm sm:text-base">Samir Hotel</p> */}
//                     </div>
//                 </div>
//             </div>

//             {/* Listing Instructions Section */}
//             <div className="text-center my-10 w-30 h-30">
//     <h2 className="text-3xl sm:text-4xl font-semibold">How to list?</h2>
//     <div className="mt-4  ">
//         <div className="flex justify-center">
//             <Image src={ImageTravel} className="w-full h-30 object-cover"/>
//         </div>
//     </div>
// </div>

//         </div>
//     );
// };

// export default TravelPage;
