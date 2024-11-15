'use client'
import Image from 'next/image';

import Image11 from '../../../public/images/image11.png';
import Image22 from '../../../public/images/image22.png';
import Image33 from '../../../public/images/image33.png';
import Image44 from '../../../public/images/image44.png';
import Image55 from '../../../public/images/image55.png';
import Image66 from '../../../public/images/image66.png';
import { useState } from 'react';








function LandingPage() {
  return (
    <section className="flex flex-wrap gap-9 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto font-bold basis-0 min-w-[240px] max-md:max-w-full">
        <h1 className="flex flex-wrap gap-3 items-start w-full text-5xl ml-10 text-black whitespace-nowrap max-md:max-w-full max-md:text-4xl">
          <span className="gap-2.5 self-stretch p-1.5 bg-white rounded-xl max-md:text-2xl">One</span>
          <span className="gap-2.5  p-2.5 bg-white rounded-xl max-md:text-2xl">Stop</span>
          <span className="gap-2.5 self-stretch p-2.5 bg-white rounded-xl min-w-[20px] max-md:text-4xl">Marketplace</span>
          <div className="flex overflow-hidden gap-3 items-center min-w-[240px] max-md:max-w-full max-md:text-4xl">
            <span className="self-stretch p-2.5 my-auto bg-white rounded-xl max-md:text-4xl">For</span>
            <span className="gap-2.5 self-stretch p-2.5 my-auto bg-emerald-500 rounded-xl min-w-[240px] max-md:text-4xl">Influencers</span>
          </div>
        </h1>
        <p className="mt-11 ml-10 text-4xl text-white max-md:mt-10 max-md:max-w-full">
          "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
        </p>
        <div className="flex gap-9 items-center self-start mt-11 text-lg font-semibold max-md:mt-10">
          <a href="#demo" className="overflow-hidden ml-10 self-stretch px-6 py-4 my-auto text-black bg-emerald-500 rounded-2xl max-md:px-5">
            Demo Store
          </a>
          <a href="#waitlist" className="flex overflow-hidden justify-center items-center self-stretch px-6 py-4 my-auto rounded-2xl max-md:px-5">
            <span className="self-stretch my-auto bg-clip-text text-white">Join Waitlist</span>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap flex-1 shrink gap-4 items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          
        <Image loading="lazy" src={Image11} alt="Product showcase 1" className="object-contain w-full rounded-2xl aspect-[1.72]" />
          <Image loading="lazy" src={Image33} alt="Product showcase 2" className="object-contain mt-2 w-full rounded-2xl aspect-[0.81]" />
          <Image loading="lazy" src={Image66} alt="Product showcase 3" className="object-contain mt-2 w-full rounded-2xl aspect-[2.3]" />
         </div>
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
         <Image loading="lazy" src={Image22} alt="Product showcase 1" className="object-contain w-full rounded-2xl aspect-[1.72]" />
          <Image loading="lazy" src={Image44} alt="Product showcase 2" className="object-contain mt-2 w-full rounded-2xl aspect-[0.81]" />
          <Image loading="lazy" src={Image55} alt="Product showcase 3" className="object-contain mt-2 w-full rounded-2xl aspect-[2.3]" />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;

