import { useState, useRef, useEffect } from "react";
import PestaDisc from "../assets/PestaDiscount.png";
import ProductCoffee from "../assets/ProductCoffeeBeans/product coffee beans-2.png";
import ProductChocoBar1 from "../assets/ChocoBar/productChocobar2.png";
import ProductChocoBar2 from "../assets/ChocoBar/productChocobar4.png";
import ProductChocolate1 from "../assets/ProductChocolate/productChocolateJar2.png";
import ProductChocolate2 from "../assets/ProductChocolate/productChocolateJar4.png";
import noPromo from "../../../assets/NoPromo.png";
import data from "./data.json";
import { Button, Col, Row } from "antd";
import Navbar from "./layout/Navbar";
import { Link } from "react-router-dom";
import Baseurl from "./Api/BaseUrl";
import axios from "axios";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const [DataPromoAll, setDataPromoAll] = useState([]);

  const GetDiskonAll = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${Baseurl}product/get-product?limit=0&page=0&keyword=`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Filter produk dengan diskon
      const produkDenganDiskon = response?.data?.data?.data?.filter(
        (produk) => produk.discount !== 0
      );
      setDataPromoAll(produkDenganDiskon);
      console.log("Data Diskonnn:", produkDenganDiskon);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    GetDiskonAll();
  }, []);
  useEffect(() => {
    GetDiskonAll();
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

  const products = [
    {
      image: ProductCoffee,
      title: "Coffee Beans - Tem..",
      type: "Non coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },

    {
      image: ProductChocolate1,
      title: "Hazelnut ChocoBox",
      type: "Non-coffe",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4.2,
    },
    {
      image: ProductChocolate2,
      title: "Matcha ChocoBox",
      type: "Non-coffe",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp18.000",
      rating: 4.2,
    },
    {
      image: ProductChocoBar2,
      title: "Sea salt Choco Bar",
      type: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4.2,
    },

    {
      image: ProductChocoBar1,
      title: "Red Velvet",
      type: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4.2,
    },
    {
      image: ProductChocoBar1,
      title: "Red Velvet",
      type: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4.2,
    },
    {
      image: ProductChocoBar1,
      title: "Red Velvet",
      type: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4.2,
    },
  ];

  return (
    <div>
      {/* Layar Besar */}
      <>
        <div className="hidden md:inline lg:inline ">
          <div className=" text-black mx-auto justify-center flex py-2 ">
            <div className="hidden lg:inline md:inline">
              <div className="carousel mx-auto flex w-[76rem]">
                <div className="relative overflow-hidden">
                  <div className="flex justify-between absolute top left w-full h-full">
                    <button
                      onClick={movePrev}
                      className="hover:bg-transparent  text-[#3b8f51] w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                      disabled={isDisabled("prev")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 40 30"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      <span className="sr-only">Prev</span>
                    </button>
                    <button
                      onClick={moveNext}
                      className="hover:bg-transparent text-[#3b8f51] w-6 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                      disabled={isDisabled("next")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 30 30"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </button>
                  </div>

                  <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                      <div className="sm:col-span-1 lg:col-span-1">
                        {/* Konten kiri */}
                        <div className="p-4 hidden sm:inline">
                          <div
                            className="justify-start"
                            style={{ position: "relative" }}
                          >
                            <img
                              src={PestaDisc}
                              className="w-full sm:w-[250px] sm:h-[250px] lg:h-[350px]"
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "40px",
                                left: "20px",
                                color: "white",
                              }}
                            >
                              <div className="p-5 mt-5">
                                <p className="text-3xl font-bold">
                                  Pesta Seru Discount
                                </p>
                                <p className="text-sm mt-4">Recommendations!</p>
                                <Button className="font-bold  border h-10 pl-6 pr-6 border-white bg-[#3b8f51]  px-2 py-1 transition-colors duration-300 ease-in-out hover:bg-white hover:border-none mt-5 rounded-full text-xs text-white">
                                  Lihat Semua
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-1 lg:col-span-4">
                        {/* Konten kanan */}
                        <div className="pt-10" style={{ marginLeft: "-30px" }}>
                          <div
                            ref={carousel}
                            className="carousel-container relative flex gap-2 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 sm:h-[330px]"
                          >
                            {DataPromoAll.length === 0 ? (
                              <div className="carousel-item rounded-lg relative snap-start shadow-2xl sm:w-full sm:h-[310px] mt-1 bg-white">
                                <div className="flex justify-center text-center items-center">
                                  <img
                                    src={noPromo}
                                    alt="No Promo"
                                    className="w-[256px] rounded-lg mt-10"
                                  />
                                </div>
                                <div className="text-center p-[10px]">
                                  <p className="font-bold text-sm mt-6 text-green-700">
                                    No Diskon Available
                                  </p>
                                </div>
                              </div>
                            ) : (
                              DataPromoAll.map((product, index) => {
                                return (
                                  <Link
                                    to={`/detailproductt/${product.slug}`}
                                    key={index}
                                  >
                                    <div className="carousel-item rounded-lg relative snap-start shadow-2xl md:w-[200px] sm:h-[310px] mt-1 bg-white">
                                      <a
                                        href={product.link}
                                        className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                                      >
                                        <img
                                          src={product.images}
                                          alt={product.name}
                                          className="w-full rounded-lg"
                                        />
                                        <div className="ml-2 p-[10px]">
                                          <p className="font-bold text-sm mt-2">
                                            {product.name}
                                          </p>
                                          <p className="text-slate-400 text-xs">
                                            {product.category}
                                          </p>
                                          <p className="text-[#E53C3C] font-semibold text-sm">
                                            <s>{product.formatted_price}</s>
                                          </p>
                                          <div className="">
                                            <div className="text-lg font-semibold text-[#3B8F51] mt-1">
                                              {
                                                product.discount[0]
                                                  .discount_price_formatted
                                              }
                                              <span className="text-[#FFCA0C] ml-9">
                                                &#9733;
                                                <span className="text-sm text-[#3B8F51] ml-1">
                                                  {product.rating}/5
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </Link>
                                );
                              })
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Layar Hp */}
      <>
        <div className=" sm:inline lg:hidden md:hidden sm:w-full mx-auto  px-4 py-2 mt-5 ">
        <div className="flex justify-between ">
              <div className="w-full p-4 mb-0">
                <p className="text-[#3B8F51] text-sm font-bold">
                  Pesta Seru Discount!
                </p>
                <p className="text-[#41644A] text-xs">Discount up to 50%!</p>
              </div>
              <div className="w-1/2  p-4 flex justify-center items-center">
                <Button className="w-16 h-8 relative border-[#3B8F51] rounded-full">
                  <p className="text-[10px] text-[#3B8F51] absolute inset-0 flex items-center justify-center">
                    Lihat semua
                  </p>
                </Button>
              </div>
              
            </div>
            <div>
            
            <div className="container mx-auto  pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                <div className="sm:col-span-1 lg:col-span-1">
                  {/* Konten kiri */}
                  <div className=" hidden sm:inline">
                    <div
                      className="justify-start"
                      style={{ position: "relative" }}
                    >
                      <img
                        src={PestaDisc}
                        className="w-full sm:w-[250px] sm:h-[250px] lg:h-[300px]"
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "20px",
                          left: "20px",
                          color: "white",
                        }}
                      >
                        <div className="p-5 mt-5">
                          <p className="text-3xl font-bold">
                            Pesta Seru Discount
                          </p>
                          <p className="text-sm mt-4">Recommendations!</p>
                          <Button className="mt-4 rounded-full text-xs text-white">
                            Lihat Semua
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-1 lg:col-span-4">
                  {/* Konten kanan */}
                  <div>
                    <Link to="/detailproduct">
                      <div
                        ref={carousel}
                        className="carousel-container  relative flex gap-1 overflow-auto scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                      >
                        {DataPromoAll.length === 0 ? (
                          <div className=" carousel-item rounded-lg relative snap-start w-full sm:h-[310px] mt-1 bg-white">
                            <div className="flex justify-center text-center items-center">
                              <img
                                src={noPromo}
                                alt="No Promo"
                                className="w-[10rem] rounded-lg mt-5"
                              />
                            </div>
                            <div className="text-center ">
                              <p className="font-semibold text-sm mt-6 text-green-700">
                                No Diskon Available
                              </p>
                            </div>
                          </div>
                        ) : (
                          DataPromoAll.map((product, index) => (
                            <div
                              key={index}
                              className="carousel-item rounded-lg relative snap-start shadow-2xl w-[140px] h-[220px] mt-2 bg-white"
                            >
                              <a
                                href={product.link}
                                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                              >
                                <img
                                  src={product.image}
                                  alt={product.title}
                                  className="w-full rounded-lg"
                                />
                                <div className="ml-2">
                                  <p className="font-bold text-xs">
                                    {product.title}
                                  </p>
                                  <p className="text-slate-400 text-[10px]">
                                    {product.type}
                                  </p>
                                  <p className="text-[#E53C3C] font-semibold text-[10px]">
                                    <s>{product.originalPrice}</s>
                                  </p>
                                  <div>
                                    <div className="text-sm font-semibold text-[#3B8F51] mt-3">
                                      {product.discountedPrice}{" "}
                                      <span className="text-[#FFCA0C] ml-1">
                                        &#9733;
                                        <span className="text-sm text-[#3B8F51] ml-1">
                                          {product.rating}/5
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </a>

                              {/* <a
        href={product.link}
        className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
      >
        <h3 className="text-black py-6 px-3 mx-auto text-xl">
          {product.title}
        </h3>
      </a> */}
                            </div>
                          ))
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Carousel;
