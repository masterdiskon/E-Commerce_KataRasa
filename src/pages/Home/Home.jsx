import React from "react";

import Navbar from "../../layout/Navbar";
import Carousel from "../../carousel";
import Banner from "./Banner";
import Footer from "../../layout/Footer";
import Cupon from "./Cupon";
import BestSeller from "./BestSeller";
import ButtonHalamanLain from "./ButtonHalamanLain";
import ChocolateSection from "./ChocolateSection";
import CoffeeSection from "./CoffeeSection";
import TeaSection from "./TeaSection";
import OurPartner from "./OurPartner";

function Home() {
  return (
    <div >
      <Navbar />
      <Banner />
      <Carousel />
      <Cupon />
      <BestSeller />
      <ButtonHalamanLain />
      <div className="md:mb-48 lg:mb-48">
        <CoffeeSection />
      </div>
      <div  className="md:mb-48 lg:mb-48">
        <TeaSection />
      </div>
      <div  className="md:mb-48 lg:mb-48">
        <ChocolateSection />
      </div>
      <OurPartner/>
      <Footer/>
    </div>
  );
}

export default Home;
