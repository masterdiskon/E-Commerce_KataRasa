import React from "react";
import PE from "../../assets/Partners/Logo-Penerbit-Erlangga.png";
import JI from "../../assets/Partners/Jajaid.png";
import EBH from "../../assets/Partners/EurekaBookhouse.png";
import Masdis from "../../assets/Partners/Master Diskon.png";
import RACE from "../../assets/Partners/Race_New.png";
import Elogs from "../../assets/Partners/elogs.png";

function OurPartner() {
  const partners = [
    {
      image: PE,
    },
    {
      image: JI,
    },
    {
      image: EBH,
    },
    {
      image: Masdis,
    },
    {
      image: RACE,
    },
    {
      image: Elogs,
    },
  ];
  return (
    <>
    <div>
   <div className="hidden md:inline lg:inline ">
   <div className=" text-black mx-auto justify-center flex px-32 lg:px-20 sm:px-32 py-2 mt-10 ">
      <div className="w-[76rem] ">
        <div className="ml-2 text-center mb-5">
          <p className="text-2xl sm:text-3xl font-medium text-green-600">
            Our Brands
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((item, index) => (
            <div key={index} className="flex justify-center items-center mt-2">
              <img
                src={item.image}
                className="w-24 sm:w-32 h-auto"
                alt={`Partner ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>

   {/* Layar HP */}
   <div className="md:hidden lg:hidden ">
   <div className=" text-black mx-auto justify-center flex px-10 lg:px-20 sm:px-32 py-2 mt-10 ">
      <div className="w-full">
        <div className="ml-2 text-center mb-5">
          <p className="text-2xl sm:text-3xl font-medium text-green-600">
            Our Brands
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((item, index) => (
            <div key={index} className="flex justify-center items-center mt-2">
              <img
                src={item.image}
                className="w-24 sm:w-32 h-auto"
                alt={`Partner ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
    </div>
    </>
  );
}

export default OurPartner;
