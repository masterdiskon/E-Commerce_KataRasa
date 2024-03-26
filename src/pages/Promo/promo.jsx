import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Promo1 from "../../../assets/Promo/promo1.png";
import Promo2 from "../../../assets/Promo/promo2.png";
import Promo3 from "../../../assets/Promo/promo3.png";
import Promo4 from "../../../assets/Promo/promo4.png";
import Promo5 from "../../../assets/Promo/promo5.png";
import Promo6 from "../../../assets/Promo/promo6.png";
import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Baseurl from "../../Api/BaseUrl";

function Promo() {
  const promoData = [
    { image: Promo1, name: "Promo Chinese New Year" },
    { image: Promo2, name: "Promo Valentine's Day" },
    { image: Promo3, name: "Buy 1 Get 1 on Elections Day" },
    { image: Promo4, name: "Happy Hour Promo Disc 10%" },
    { image: Promo5, name: "Promo Sumpah Pemuda - Discount 28%!" },
    { image: Promo6, name: "Buy 2 Get 1 - Independence day" },
  ];

  const [DataPromoAll, setDataPromoAll] = useState([]);

  const GetCuponAll = async () => {
    try {
      // const token = localStorage.getItem("token");
      const response = await axios.get(
        `${Baseurl}promo/get-promo?page=1&limit=999&keyword=`
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      setDataPromoAll(response.data.data.data);
      console.log("Data PROMO:", response.data.data.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    GetCuponAll();
  }, []);
  return (
    <div className="w-full h-screen">
      <Navbar />

      {/* Layar Besar */}
      <>
        <div className="hidden md:inline lg:inline">
          <div className="  h-auto w-full md:p-20 mx-auto sm:w-[85rem]">
            <div className="mt-20">
              <h1 className="text-[#3B8F51] font-medium text-2xl">
                Promo Special Kata Rasa
              </h1>
              <div className="mt-10">
                <div
                  className={`flex flex-wrap ${
                    DataPromoAll.length >= 3
                      ? "justify-between"
                      : "justify-start"
                  }`}
                >
                  {DataPromoAll.map((promo, index) => (
                    <div className="w-1/3 mb-5 " key={index}>
                      <Link to={`/detailpromosi/${promo.id_promo}`}>
                        <div className="bg-white rounded-lg shadow-md p-1">
                          <div className="flex justify-center items-center">
                            <img
                              className="w-[80%] h-[8rem] "
                              src={promo.images}
                              alt={`Promo ${index + 1}`}
                            />
                          </div>
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
        </div>
      </>

      {/* Layar HP */}
      <>
        <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen  mx-auto justify-start px-4 py-2">
          <div className="mt-24 p-4">
            <h1 className="text-[#3B8F51] font-medium text-xl">
              Promo Special Kata Rasa
            </h1>
          </div>

          <div className="mt-5 w-full">
            <div className="flex flex-wrap justify-between">
              {DataPromoAll.map((promo, index) => (
                <div className="w-full mb-5 " key={index}>
                  <Link to={`/detailpromosi/${promo.id_promo}`}>
                    <div className="bg-white rounded-lg shadow-md p-1">
                      <img src={promo.images} alt={`Promo ${index + 1}`} />
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
