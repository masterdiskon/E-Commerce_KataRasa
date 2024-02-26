import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import Promo1 from "../../../assets/Promo/promo1.png";
import { Button, Input, Tooltip } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import FB from "../../../assets/Sosmed/FB.png";
import IG from "../../../assets/Sosmed/IG.png";
import TT from "../../../assets/Sosmed/TT.png";
import WA from "../../../assets/Sosmed/WA.png";
import COPY from "../../../assets/Sosmed/COPY.png";
import Cupon1 from "../../../assets/Cupon/Cupon1.png";
import Cupon2 from "../../../assets/Cupon/Cupon2.png";
import DetailPromosi1 from "../../../assets/Promo/detailpromo1.png";
import DetailPromosi2 from "../../../assets/Promo/detailpromo2.png";
import DetailPromosi3 from "../../../assets/Promo/detailpromo3.png";

function DetailPromo() {
  const promoDetails = [
    { label: "Waktu Periode", value: "12 - 24 Januari 2024" },
    { label: "Waktu Pemakaian", value: "Kapanpun" },
    { label: "Jenis Promo", value: "Discount up to 50%" },
    { label: "Platform promo", value: "Desktop, Android & iOS" },
    { label: "Minimal transaksi", value: "Rp100.000" },
  ];

  const [copied, setCopied] = useState(false);

  const codeToCopy = "GONGXI2024";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  const promos = [
    {
      image: DetailPromosi1,
      title: "Sweet heart Drinks",
    },
    {
      image: DetailPromosi2,
      title: "Elections editions",
    },
    {
      image: DetailPromosi3,
      title: "Happy hour promo",
    },
  ];

  return (
    <div className="w-screen h-screen ">
      <Navbar />

      {/* Layar Besar */}
      <>
        <div className="hidden md:inline lg:inline">
          <div className="  h-auto w-screen md:p-20 mx-auto sm:w-[85rem]">
            <div className="w-full flex space-x-6 mt-20 ">
              <div className="w-full rounded-lg shadow-lg ">
                <div className="p-3">
                  <h1 className="text-[#3B8F51] font-medium text-2xl pl-3">
                    Chinese New Year bundling discount!
                  </h1>
                  <img
                    src={Promo1}
                    alt=""
                    className="w-[710px] h-[320px] mt-6"
                  />
                  <div className="pl-3 mt-4">
                    <p>
                      Katarasa kasih kamu paket hemat untuk merayakan Chinese
                      New Year 2024 ini loh 🤩 Kamu bisa mendapatkan potongan
                      harga up to 50% 😍
                    </p>
                    <p className="mt-4">*Berlaku 15-16 Februari 2024</p>
                    <p className="mt-4">
                      *Bisa dipakai di offline store atau order online
                    </p>
                    <p className="mt-4 ml-[-8px]">
                      📍Ciracas, Jl. Haji Baping Raya no.100
                    </p>
                    <p className="mt-4">
                      Available on Go-Food
                      <p>“Kedai Kopi Kata & Rasa, Ciracas, Jakarta Timur”</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="bg-white h-auto rounded-lg shadow-lg">
                  <p className="p-2 font-medium text-lg">Ketentuan Promo</p>
                  <div className="p-2 text-[#41644A] text-base">
                    {promoDetails.map((detail, index) => (
                      <div key={index} className="w-full flex mb-3">
                        <div className="w-1/3">{detail.label}</div>
                        <div className="w-1/6 flex justify-center items-center">
                          :
                        </div>
                        <div className="w-1/2">{detail.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-1 p-2 font-medium text-lg">Kode Promo</div>
                  <div className="p-2 font-medium text-lg">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-[370px] bg-[#f7fff1] h-[40px] rounded-md p-2 text-[#41644A]">
                        {codeToCopy}
                        <Tooltip title="Copy to clipboard">
                          <span
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={handleCopyClick}
                          >
                            <CopyOutlined className="w-5 h-5 text-[#41644A]" />
                          </span>
                        </Tooltip>
                      </div>
                      {copied && (
                        <span className="text-[#41644A]">Copied!</span>
                      )}
                    </div>
                    <div className="mt-5">
                      Bagikan Promo
                      <div className="mt-2 flex">
                        <img
                          src={FB}
                          alt=""
                          className="w-9 h-9 cursor-pointer"
                        />
                        <img
                          src={IG}
                          alt=""
                          className="w-9 h-  mr-1 cursor-pointer"
                        />
                        <img
                          src={WA}
                          alt=""
                          className="w-7 h-7 mr-2 cursor-pointer "
                        />
                        <img
                          src={COPY}
                          alt=""
                          className="w-7 h-7 mr-2 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div>
              <p className="font-medium text-lg mb-5">Promo Lainnya</p>
              <div className="hidden md:inline lg:inline bg-[#F7FFF1] h-[250px] ">
                <div
                  className="flex overflow-auto w-[75rem] ml-4 "
                  style={{ maxWidth: "100%" }}
                >
                  {promos.map((promo, index) => (
                    <div
                      key={index}
                      className="justify-start mt-2 shadow-xl"
                      style={{
                        position: "relative",
                        flex: "0 0 auto",
                        marginRight: "10px",
                      }}
                    >
                      <img
                        src={promo.image}
                        className="w-full md:w-[488px] h-[180px]"
                      />
                      <div className="mt-2 mb-3 flex items-center justify-between">
                        <div className="text-xl font-medium">
                          <p className="p-3 pt-4 pb-8">{promo.title}</p>
                        </div>
                        <div className="pr-3">
                          <button className="p-2 bg-[#3B8F51] text-white rounded-full cursor-pointer py-2 px-5">
                            Lihat
                          </button>
                        </div>
                      </div>
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
        <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen  mx-auto justify-start px-4 py-2 bg-[#FAF0E7]">
          <div className="mt-24 p-3">
            {" "}
            <div className="w-full rounded-lg shadow-lg bg-white">
              <div className="p-3">
                <h1 className="text-[#3B8F51] font-medium text-lg pl-3 mt-2">
                  Chinese New Year bundling discount!
                </h1>
                <div className="flex justify-center items-center">
                  <img
                    src={Promo1}
                    alt=""
                    className="w-[310px] h-[160px] mt-4 "
                  />
                </div>
                <div className="pl-3 mt-4 text-base">
                  <p>
                    Katarasa kasih kamu paket hemat untuk merayakan Chinese New
                    Year 2024 ini loh 🤩 Kamu bisa mendapatkan potongan harga up
                    to 50% 😍
                  </p>
                  <p className="mt-4">*Berlaku 15-16 Februari 2024</p>
                  <p className="mt-4">
                    *Bisa dipakai di offline store atau order online
                  </p>
                  <p className="mt-4 ml-[-8px]">
                    📍Ciracas, Jl. Haji Baping Raya no.100
                  </p>
                  <p className="mt-4">
                    Available on Go-Food
                    <p>“Kedai Kopi Kata & Rasa, Ciracas, Jakarta Timur”</p>
                  </p>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <>
              <div className="bg-white h-auto rounded-lg shadow-lg mt-10 p-2">
                <p className="p-2 font-medium text-lg">Ketentuan Promo</p>
                <div className="p-2 text-[#41644A] text-base">
                  {promoDetails.map((detail, index) => (
                    <div key={index} className="w-full flex mb-3">
                      <div className="w-1/3 text-sm">{detail.label}</div>
                      <div className="w-1/6 flex justify-center items-center  text-sm">
                        :
                      </div>
                      <div className="w-1/2  text-sm">{detail.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-1 p-2 font-medium text-lg">Kode Promo</div>
                <div className="p-2 font-medium text-lg">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-[370px] bg-[#f7fff1] h-[40px] rounded-md p-2 text-[#41644A]">
                      {codeToCopy}
                      <Tooltip title="Copy to clipboard">
                        <span
                          className="absolute top-2 right-2 cursor-pointer"
                          onClick={handleCopyClick}
                        >
                          <CopyOutlined className="w-5 h-5 text-[#41644A]" />
                        </span>
                      </Tooltip>
                    </div>
                    {copied && <span className="text-[#41644A]">Copied!</span>}
                  </div>
                  <div className="mt-5">
                    Bagikan Promo
                    <div className="mt-2 flex">
                      <img src={FB} alt="" className="w-9 h-9 cursor-pointer" />
                      <img
                        src={IG}
                        alt=""
                        className="w-9 h-  mr-1 cursor-pointer"
                      />
                      <img
                        src={WA}
                        alt=""
                        className="w-7 h-7 mr-2 mt-1 cursor-pointer "
                      />
                      <img
                        src={COPY}
                        alt=""
                        className="w-7 h-7 mr-2 mt-1 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
            <br />
            {/* Card Promo */}
            <div>
              <p className="font-medium text-lg mb-5">Promo Lainnya</p>
              <div className="max-w-sm rounded  ">
                <div className="px-0 py-4 space-y-10">
                  {promos.map((promo, index) => (
                    <div
                      key={index}
                      className="justify-start mt-2 shadow-xl bg-white rounded-2xl"
                      style={{
                        position: "relative",
                        flex: "0 0 auto",
                        marginRight: "10px",
                      }}
                    >
                      <img
                        src={promo.image}
                        className="w-full md:w-[350px] h-[120px]"
                      />
                      <div className="mt-2 mb-3 flex items-center justify-between">
                        <div className="text-xl font-medium">
                          <p className="p-3 pt-4 pb-8">{promo.title}</p>
                        </div>
                        <div className="pr-3">
                          <button className="p-2 bg-[#3B8F51] text-white rounded-full cursor-pointer py-2 px-5">
                            Lihat
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="mt-[-3rem]">
        <Footer />
      </div>
    </div>
  );
}

export default DetailPromo;
