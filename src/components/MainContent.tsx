import React from "react";
import Hero from "./hero";
import Navbar from "./Navbar";
import Services from "./services";
import Paragraph from "./Paragraph";
// import HeroBanner from "./HeroBanner";
// import Intro from "./Intro";
// import WhyChooseUs from "./WhyChooseUs";
// import OurServices from "./OurServices";
// import Insurance from "./Insurance";
// import StayConnected from "./StayConnected";
// import Team from "./Team";
// import HappyClient from "./HappyClient";
// import FaqSection from "./FaqSection";
// import ContactForm from "./ContactForm";
// import Banner from "./Banner";

export default function MainContent() {
  return (
    // <main className="flex-1 pt-30 text-center main-content ">

    //   <HeroBanner />
    //   <Intro />
    //   <WhyChooseUs />
    //   <OurServices />
    //   <Insurance />
    //   <StayConnected />
    //   <Team />
    //   <HappyClient />
    //   <FaqSection />
    //   <Banner/>
    //   <ContactForm />
    // </main>
    <>
      <Navbar />
      <Hero />
      <Paragraph/>
      <Services/>
    </>
  );
}
