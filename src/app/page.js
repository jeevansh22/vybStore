import Navbar from "@/components/navbar/page";
import Image from "next/image";
import LandingPage from "./landingpage/page";
import TravelPage from "./travel/page";
import FeatureSection from "./featuresection/page";
import InfluencerSection from "./influencers/page";
import HowToStartSection from "./howtostartsection/page";
import FAQSection from "./faqsection/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
     {/* <LandingPage/>
     <Influencer/> */}
      <TravelPage/>
      <FeatureSection/>
      {/* <InfluencerSection/> */}
      <HowToStartSection/>
      <FAQSection/>
    </div>
  );
}
