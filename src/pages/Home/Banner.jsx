import React, { useEffect } from "react";
import Banner1 from "../../assets/Katarasa/BannerDefault.png";
import Banner2 from "../../assets/Katarasa/BannerImlek.png";
import { Carousel } from "antd";
import axios from "axios";
import Baseurl from "../../Api/BaseUrl";
function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Menampilkan 3 item secara bersamaan
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const fetchData = async () => {
    try {
      const respons = await axios.get(`${Baseurl}nimda/other/data-banner`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });

      console.log("ini data banner", respons);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* layar Besar */}
      <div className="hidden lg:inline md:inline text-black mx-auto justify-center  px-5 md:px-20 py-2 mt-5">
        <Carousel
          autoplay
          dots={false}
          arrows={false}
          className=" md:pt-20 mt-5 mx-auto flex w-[75rem]   rounded-full  "
        >
          <div className="flex justify-center">
            <img
              className="w-full object-cover md:object-fill"
              src={Banner2}
              alt="Banner 1"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-full object-cover md:object-fill"
              src={Banner1}
              alt="Banner 2"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-full object-cover md:object-fill"
              src={Banner1}
              alt="Banner 3"
            />
          </div>
        </Carousel>
      </div>

      {/* layar hp */}
      <div>
      <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen mx-auto justify-start px-4 py-2 ">
        <div className="mt-28 text-black">
          <Carousel
            autoplay
            dots={false}
            arrows={false}
            className="mx-auto justify-center flex px-5 py-2"
          >
            <div className="flex justify-center rounded-md ">
              <img
                className="w-full object-cover rounded-md md:object-fill"
                src={Banner2}
                alt="Banner 1"
              />
            </div>
            <div className="flex justify-center rounded-md">
              <img
                className="w-full object-cover rounded-md md:object-fill"
                src={Banner1}
                alt="Banner 2"
              />
            </div>
            <div className="flex justify-center rounded-md">
              <img
                className="w-full object-cover rounded-md md:object-fill"
                src={Banner1}
                alt="Banner 3"
              />
            </div>
          </Carousel>
        </div>
      </div>
      </div>
    </>
  );
}

export default Banner;
