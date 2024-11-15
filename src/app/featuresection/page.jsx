// // pages/index.js



import React from 'react';

const features = [
  {
    title: "Trusted By Influencers",
    description: "A trusted platform for influencers to grow and earn.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03e5aa548348e8f7d16ab7313d04166ebf6861814ae73394ec1143dccc3cad4e?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91",
  },
  {
    title: "Authentic Payment Partner",
    description: "Reliable, fast, and secure payments you can trust",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6fbc2d783d60bab8774a6ba3612f7647be02a7b0799d39325e05ddbddca2296?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91",
  },
  {
    title: "Secured Data",
    description: "Advanced security measures to protect your valuable data",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e5e77e31b9dfcd0254cdf660bf2500dea951389c6115846cf943638465b59a?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91",
  },
  {
    title: "Monetize Your Influence",
    description: "Seamlessly turn your influence into consistent revenue",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/29f08f40df17a3afe40082b65a5722748e478370bd8a03f13e0a6ceaecd1aa6d?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91",
  },
];

function FeatureSection() {
  return (
    <section className="flex flex-wrap gap-9 justify-center items-center mt-12 w-full text-center max-md:mt-10 max-md:max-w-full">
      <h2 className="flex-1 shrink self-stretch my-auto text-6xl font-bold text-emerald-500 basis-0 max-md:max-w-full">
        From Creation to Monetization: Vyb Store Has It All
      </h2>
      <div className="flex flex-wrap gap-4 items-center self-stretch my-auto text-white min-w-[360px] w-[726px] max-md:max-w-full">
        {features.map((feature, index) => (
          <article key={index} className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[280px]">
            <div className="flex flex-col p-6 w-full bg-black rounded-3xl max-md:px-5">
              <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center w-full">
                  <h3 className="text-4xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-lg font-medium">
                    <strong>{feature.description}</strong>
                  </p>
                </div>
              </div>
              <img loading="lazy" src={feature.imageSrc} alt={feature.title} className="object-contain self-center mt-6 max-w-full rounded-none aspect-[1.18] w-[190px]" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;






// const Influencer = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
//         <h1 className="text-3xl font-bold mb-8 text-center">
//           From Creation to Monetization: Vyb Store Has It All
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
//           <div className="bg-white text-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center justify-center h-full">
//             <img src="/path/to/icon1.png" alt="Icon 1" className="h-16 w-16 mb-4" />
//             <h3 className="text-lg font-semibold text-center">Trusted By Influencers</h3>
//             <p className="text-gray-600 text-center">A trusted platform for influencers to grow and earn.</p>
//           </div>
//           <div className="bg-white text-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center justify-center h-full">
//             <img src="/path/to/icon2.png" alt="Icon 2" className="h-16 w-16 mb-4" />
//             <h3 className="text-lg font-semibold text-center">Secured Data</h3>
//             <p className="text-gray-600 text-center">Advanced security measures to protect your valuable data.</p>
//           </div>
//           <div className="bg-white text-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center justify-center h-full">
//             <img src="/path/to/icon3.png" alt="Icon 3" className="h-16 w-16 mb-4" />
//             <h3 className="text-lg font-semibold text-center">Authentic Payment Partner</h3>
//             <p className="text-gray-600 text-center">Reliable, fast, and secure payments you can trust.</p>
//           </div>
//           <div className="bg-white text-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center justify-center h-full">
//             <img src="/path/to/icon4.png" alt="Icon 4" className="h-16 w-16 mb-4" />
//             <h3 className="text-lg font-semibold text-center">Monetize Your Influence</h3>
//             <p className="text-gray-600 text-center">Seamlessly turn your influence into consistent revenue.</p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Influencer;
  