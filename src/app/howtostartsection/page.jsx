import React from 'react';

function HowToStartSection() {
  return (
    <section className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="flex overflow-hidden flex-col justify-center w-full max-md:max-w-full text-4xl font-bold text-center text-emerald-500">
        How to get started?
      </h2>
      <div className="flex flex-col items-center mt-9 w-full h-[450px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-center p-9 bg-pink-800 rounded-3xl max-w-[840px] shadow-[0px_4px_4px_rgba(0,0,0,0.36)] w-[840px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto text-white max-w-[340px] min-w-[240px] w-[340px]">
            <h3 className="text-3xl font-bold">Sign Up and create your own store hassle-free.</h3>
            <p className="mt-6 text-base font-medium">
              Join us via google signin and verify your influencer status by entering you social media Id and unlock your store{" "}
              <span className="text-white">@ zero cost.</span>
            </p>
          </div>
          <form className="flex flex-col self-stretch p-4 my-auto text-xs rounded-2xl bg-neutral-900 w-[330px]">
            <button type="button" className="flex gap-2.5 justify-center items-center px-3 py-2 w-full text-sm font-bold text-white rounded-lg border border-solid border-zinc-300">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed897f4257ad370b284ce470abfde9af40b64d0bd9d22fe893ff715f523768a?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91" alt="Google logo" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]" />
              <span>Login with google</span>
            </button>
            <div className="flex justify-between items-center mt-4 w-full font-medium text-neutral-400">
              <div className="shrink-0 self-stretch my-auto h-0 border border-solid bg-neutral-400 border-neutral-400 w-[85px]" />
              <span className="self-stretch my-auto border border-solid border-neutral-400">OR</span>
              <div className="shrink-0 self-stretch my-auto h-0 border border-solid bg-neutral-400 border-neutral-400 w-[85px]" />
            </div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="flex gap-2 items-center px-2 py-3 mt-4 w-full text-lg font-bold text-white whitespace-nowrap border-b border-neutral-400 bg-transparent"
            />
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="flex gap-2 items-center px-2 py-3 mt-4 w-full text-lg font-bold text-white whitespace-nowrap border-b border-neutral-400 bg-transparent"
            />
            <button type="submit" className="flex overflow-hidden justify-center items-center self-center px-4 py-3 mt-4 w-20 font-semibold whitespace-nowrap rounded-xl text-white bg-emerald-500">
              Login
            </button>
            <div className="flex gap-1 justify-center items-center mt-4 w-full">
              <p className="self-stretch my-auto font-medium text-neutral-400">Don't have an account?</p>
              <a href="#signup" className="flex overflow-hidden flex-col justify-center self-stretch my-auto w-16 font-semibold text-emerald-500">
                <span className="self-center">Get Started</span>
                <div className="w-full border border-emerald-500 border-solid min-h-[0px]" />
              </a>
            </div>
          </form>
        </div>
        <div className="flex gap-1 mt-9 bg-green-400 rounded-3xl max-w-[840px] min-h-[9px] rotate-[0.01745329158704388rad] shadow-[0px_4px_4px_rgba(0,0,0,0.36)] w-[846px] max-md:max-w-full" />
      </div>
    </section>
  );
}

export default HowToStartSection;