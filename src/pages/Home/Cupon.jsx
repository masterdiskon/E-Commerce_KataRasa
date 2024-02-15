import React, { useEffect, useRef, useState } from "react";
import Cupon1 from "../../assets/Cupon/Cupon1.png";
import Cupon2 from "../../assets/Cupon/Cupon2.png";
import { Card, Carousel } from "antd";

function Cupon() {
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
      image: Cupon1,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },
    {
      image: Cupon2,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },
    {
      image: Cupon1,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },
    {
      image: Cupon2,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },
    {
      image: Cupon1,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },
    // Tambahkan promo lainnya jika diperlukan
  ];

  return (
    <div className="mx-auto">
      <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-5">
        {/* Layar Besar */}
        <div className="hidden md:inline lg:inline bg-[#F7FFF1] h-[220px]">
          <div className="ml-4 mt-5 ">
            <p>
              Makin <span className="text-[#3B8F51]"> discount</span> dengan
              kupon!
            </p>
          </div>
          <div
            className="flex overflow-auto w-[75rem] ml-4 "
            style={{ maxWidth: "100%" }}
          >
            {promos.map((promo, index) => (
              <div
                key={index}
                className="justify-start mt-2"
                style={{
                  position: "relative",
                  flex: "0 0 auto",
                  marginRight: "10px",
                }}
              >
                <img
                  src={promo.image}
                  className="w-full md:w-[240px] h-[110px]"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "15px",
                    color: "white",
                  }}
                >
                  <p className="text-base font-medium mt-2">{promo.title}</p>
                  <p className="text-sm">{promo.discount}</p>
                  <p className="text-sm mt-2">{promo.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ml-5 mr-2 mt-0 flex justify-end text-[#7da286]">
            <p className="cursor-pointer">
            *klik untuk copy kode
            </p>
          </div>
        </div>
      </div>

      {/* Layar HP */}
      <div className="mx-auto justify-center flex px-6 py-2">
        <div className="md:hidden lg:hidden ">
          <p className="font-medium text-lg ">
            Makin <span className="text-[#3B8F51]">discount</span> dengan kupon!
          </p>
          <div className="flex overflow-auto" style={{ maxWidth: "100%" }}>
            {promos.map((promo, index) => (
              <div
                key={index}
                className="justify-start mt-2"
                style={{
                  position: "relative",
                  flex: "0 0 auto",
                  marginRight: "10px",
                }}
              >
                <img
                  src={promo.image}
                  className="w-full md:w-[240px] h-[95px]"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "15px",
                    color: "white",
                  }}
                >
                  <p className="text-xs font-medium mt-2">{promo.title}</p>
                  <p className="text-[10px]">{promo.discount}</p>
                  <p className="text-[10px] mt-2">{promo.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cupon;
