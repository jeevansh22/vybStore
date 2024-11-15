import React from 'react';

function InfluencerSection() {
  return (
    <section className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-4xl font-bold text-center text-emerald-500 max-md:max-w-full">Our Influencers</h2>
      <div className="flex overflow-hidden flex-wrap gap-9 items-center mt-9 w-full max-md:max-w-full">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[215px]">
            <img
              loading="lazy"
              src={`http://b.io/ext_${24 + index}-`}
              alt={`Influencer ${index}`}
              className="object-contain w-full aspect-square rounded-[238px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfluencerSection;