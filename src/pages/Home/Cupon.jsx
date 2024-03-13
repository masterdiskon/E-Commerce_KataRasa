import React, { useEffect, useRef, useState } from "react";

import Cupon1 from "../../../assets/Cupon/Cupon1.png";
import Cupon2 from "../../../assets/Cupon/Cupon2.png";
import Imlek from "../../../assets/Promo/promo1.png";
import Valentine from "../../../assets/Promo/promo2.png";
import Promo3 from "../../../assets/Promo/promo3.png";
import Promo4 from "../../../assets/Promo/promo4.png";
import Promo5 from "../../../assets/Promo/promo5.png";
import { Card, Carousel } from "antd";
import { Link } from "react-router-dom";
import Baseurl from "../../Api/BaseUrl";
import axios from "axios";

function Cupon() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const [DataPromoAll, setDataPromoAll] = useState([]);

  const GetCuponAll = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${Baseurl}promo/get-promo?page=1&limit=999&keyword=`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
      image: Imlek,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },
    {
      image: Valentine,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },
    {
      image: Promo3,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },
    {
      image: Promo4,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },
    {
      image: Promo5,
      title: "Promo New Member",
      discount: "Discount up to 50%",
      date: "1 Jan - 31 Jan 2024",
    },

    // Tambahkan promo lainnya jika diperlukan
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 200; // Sesuaikan nilai scroll sesuai kebutuhan
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 200; // Sesuaikan nilai scroll sesuai kebutuhan
  };

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
            className="relative overflow-hidden scroll-smooth"
            style={{ maxWidth: "100%", scrollBehavior: "smooth" }}
          >
            <div
              className="flex overflow-hidden w-[75rem] ml-4"
              style={{ maxWidth: "100%" }}
              ref={sliderRef}
            >
              {DataPromoAll.map((promo, index) => (
                <Link to={`/detailpromosi/${promo.id_promo}`}>
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
                      src={`https://api.katarasa.id` + promo.images}
                      // src={promo.images}
                      alt={`Promo ${index}`}
                      className="w-full md:w-[270px] h-[150px]"
                    />
                    <p></p>
                  </div>
                </Link>
              ))}
            </div>
            <button
              className="absolute   top-0 bottom-0 left-0 bg-transparent text-[#3B8F51] px-2 py-1"
              onClick={scrollLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 55 40"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 bg-transparent text-[#3B8F51] px-2 py-1"
              onClick={scrollRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-10 -mr-5"
                fill="none"
                viewBox="0 0 25 40"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
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
                {/* <div
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
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cupon;
