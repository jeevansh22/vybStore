import React from 'react';

const faqs = [
  { question: "How much does it cost to set up a store?", answer: "" },
  { question: "What kind of digital products can I sell?", answer: "" },
  { question: "Do I need technical skills to use the platform?", answer: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!" },
  { question: "Is there a limit to the number of products I can list?", answer: "" },
  { question: "How do I receive payments for my sales?", answer: "" },
  { question: "Can I sell internationally on this marketplace?", answer: "" },
  { question: "What support and resources are available for sellers?", answer: "" },
  { question: "Is there a review process for uploaded products?", answer: "" },
];

function FAQSection() {
  return (
    <section className="flex flex-wrap gap-9 justify-center items-center self-center mt-12 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[516px] max-md:max-w-full">
        <h2 className="text-4xl font-bold text-emerald-500 max-md:max-w-full">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="mt-4 text-lg font-medium text-white max-md:max-w-full">
          <strong>Quick answers to questions you may have. Can't find what you're looking for?</strong>
          <br />
          <strong className="text-white">Check out our full documentation</strong>
        </p>
      </div>
      <div className="flex flex-col self-stretch my-auto text-base text-black min-w-[240px] w-[619px] max-md:max-w-full">
        {faqs.map((faq, index) => (
          <details key={index} className={`mt-4 ${index === 0 ? 'mt-0' : ''}`}>
            <summary className="flex flex-wrap gap-5 items-center px-5 py-3.5 w-full font-bold bg-white rounded-2xl max-md:max-w-full cursor-pointer">
              <span className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">{faq.question}</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e0752137b33f9631c20d4a6f981b4028aa338220eb07f95ba8917dcaf9aa985?placeholderIfAbsent=true&apiKey=659e51b77f0f4f18bf276ef1ce877d91" alt="Expand" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            </summary>
            {faq.answer && (
              <div className="px-5 py-3.5 mt-3.5 font-medium bg-white rounded-2xl max-md:max-w-full">
                <p><strong>{faq.answer}</strong></p>
              </div>
            )}
          </details>
        ))}
      </div>
      <div className="flex gap-1 mt-9 bg-slate-300 rounded-3xl max-w-[1000] min-h-[9px] rotate-[0.01745329158704388rad] shadow-[0px_4px_4px_rgba(0,0,0,0.36)] w-[846px] max-md:max-w-full" />
     
    </section>
  );
}

export default FAQSection;