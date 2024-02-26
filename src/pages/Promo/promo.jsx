import React from "react";
import Navbar from "../../layout/Navbar";
import Promo1 from "../../../assets/Promo/promo1.png";
import Promo2 from "../../../assets/Promo/promo2.png";
import Promo3 from "../../../assets/Promo/promo3.png";
import Promo4 from "../../../assets/Promo/promo4.png";
import Promo5 from "../../../assets/Promo/promo5.png";
import Promo6 from "../../../assets/Promo/promo6.png";
import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";

function Promo() {
  const promoData = [
    { image: Promo1, name: "Promo Chinese New Year" },
    { image: Promo2, name: "Promo Valentine's Day" },
    { image: Promo3, name: "Buy 1 Get 1 on Elections Day" },
    { image: Promo4, name: "Happy Hour Promo Disc 10%" },
    { image: Promo5, name: "Promo Sumpah Pemuda - Discount 28%!" },
    { image: Promo6, name: "Buy 2 Get 1 - Independence day" },
  ];

  return (
    <div className="w-screen h-screen">
      <Navbar />

      {/* Layar Besar */}
      <>
        <div className="hidden md:inline lg:inline">
          <div className="  h-auto w-screen md:p-20 mx-auto sm:w-[85rem]">
            <div className="mt-20">
              <h1 className="text-[#3B8F51] font-medium text-2xl">
                Promo Special Kata Rasa
              </h1>
            </div>

            <div className="mt-10 w-full">
              <div className="flex flex-wrap justify-between">
                {promoData.map((promo, index) => (
                  <div className="w-1/3 mb-5 " key={index}>
                    <Link to="/detailpromosi">
                      <div className="bg-white rounded-lg shadow-md p-1">
                        <img src={promo.image} alt={`Promo ${index + 1}`} />
                        <p className="mb-4 ml-2 font-medium text-lg">
                          {promo.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Layar HP */}
      <>
        <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen  mx-auto justify-start px-4 py-2">
          <div className="mt-24 p-3">
            <h1 className="text-[#3B8F51] font-medium text-xl">
              Promo Special Kata Rasa
            </h1>
          </div>
          
          <div className="mt-5 w-full">
              <div className="flex flex-wrap justify-between">
                {promoData.map((promo, index) => (
                  <div className="w-full mb-5 " key={index}>
                    <Link to="/detailpromosi">
                      <div className="bg-white rounded-lg shadow-md p-1">
                        <img src={promo.image} alt={`Promo ${index + 1}`} />
                        <p className="mb-4 ml-2 font-medium text-lg">
                          {promo.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </>
      <div className="hidden md:inline lg:inline">
        <Footer />
      </div>
    </div>
  );
}

export default Promo;
