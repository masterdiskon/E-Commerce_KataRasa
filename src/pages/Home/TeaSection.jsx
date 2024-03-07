import React, { useEffect, useRef, useState } from "react";
import BG1 from "../../../assets/BannerBelakang/hijau.png";
import Tea1 from "../../../assets/ProductTea/productTea.png";
import Tea2 from "../../../assets/ProductTea/product Tea-1.png";
import Tea3 from "../../../assets/ProductTea/product Tea-2.png";
import Tea4 from "../../../assets/ProductTea/product Tea-3.png";
import Tea5 from "../../../assets/ProductTea/Tea.png";
import axios from "axios";
import Baseurl from "../../Api/BaseUrl";
import { Link } from "react-router-dom";

function TeaSection() {
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

  const productss = [
    {
      image: Tea1,
      title: "Teh Dewi-Sakura Tea",
      type: "Non coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Tea2,
      title: "Teh Dewi-Jasmine Tea",
      type: "Non coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Tea3,
      title: "Teh Dewi-Lechyee Tea  ",
      type: "Non coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Tea4,
      title: "Teh Dewi-Mint Tea",
      type: "Non coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Tea5,
      title: "Teh Dewi-Oolong Tea",
      type: "Non coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${Baseurl}product/get-product?page=1&limit=999&keyword=`
        );
        const filteredProducts = response.data.data.data.filter(
          (product) => product.category === "tea"
        );
        setProducts(filteredProducts);
        console.log("ini njir", response.data.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Layar Besar */}
      <>
        <div className="hidden md:inline lg:inline">
          <div className="text-black  mx-auto justify-center flex px-20 py-2 mt-10">
            <div>
              <div
                className="justify-start mt-2"
                style={{ position: "relative" }}
              >
                <img src={BG1} className="w-[1200px] h-[300px]" />
                <div
                  style={{
                    position: "absolute",
                    top: "75%", // Atur posisi ke tengah secara vertikal
                    left: "50%", // Atur posisi ke tengah secara horizontal
                    transform: "translate(-50%, -50%)", // Geser sejauh setengah dari width dan height elemen
                    color: "white",
                  }}
                >
                  <div className="text-center">
                    <p className="font-semibold text-[40px] text-[#41644A]">
                      Tea KataRasa Section
                    </p>
                  </div>
                  {/* Kolom baru */}
                  <div className="flex">
                    <div className="w-full flex space-x-3">
                      {/* Konten produk di kolom kiri */}
                      {products.slice(0, 5).map((product, index) => (
                         <Link to={`/detailproduct/${product.slug}`}>
                         <div
                          key={index}
                          className="shadow-2xl md:w-[200px] md:h-[300px] mt-2 bg-white rounded-lg"
                        >
                          <img
                            className="rounded-md"
                            src={product.images}
                            alt={`Product ${index}`}
                          />
                          <div className="ml-2 p-[10px]">
                            <p className="font-bold text-sm text-black mt-2">
                              {product.name}
                            </p>
                            <p className="text-slate-400 text-xs">
                              {product.category
}
                            </p>
                            <p className="text-[#E53C3C] font-semibold text-sm">
                              <s>  {product.formatted_price}</s>
                            </p>
                            <div>
                              <div className="text-lg font-semibold text-[#3B8F51]">
                               {" "} {product.discount[0].discount_price_formatted}
                                <span className="text-[#FFCA0C]  ml-10">
                                  &#9733;
                                  <span className="text-sm text-[#3B8F51] ml-1">
                                    {product.rating}/5
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        </Link>
                      ))}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Layar HP */}
      <>
        <div className="md:hidden lg:hidden  mx-auto justify-start mt-5 px-4  py-1 ">
          <div>
            <div className="w-full p-3 mb-0">
              <p className="text-[#3B8F51] text-lg font-bold">
                Tea KataRasa Section
              </p>
            </div>
          </div>
          <div className="container mx-auto p-4 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              <div className="sm:col-span-1 lg:col-span-4">
                <div>
                  <div
                    ref={carousel}
                    className="carousel-container h-[235px] relative flex gap-3 overflow-auto scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                  >
                    {products.slice(0, 5).map((product, index) => {
                      return (
                        <Link to={`/detailproduct/${product.slug}`}>
                        <div
                          key={index}
                          className="carousel-item rounded-lg relative snap-start shadow-2xl w-[140px] h-[220px] mt-2 bg-white"
                        >
                          <a
                            href={product.link}
                            className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                          >
                            <img
                              src={product.images}
                              alt={product.title}
                              className="w-full rounded-lg"
                            />
                            <div className="ml-2">
                              <p className="font-bold text-xs mt-2">
                                {product.name}
                              </p>
                              <p className="text-slate-400 text-[10px]">
                                {product.category}
                              </p>
                              <p className="text-[#E53C3C] font-semibold text-[10px]">
                                <s> {product.formatted_price}</s>
                              </p>
                              <div>
                                <div className="text-sm font-semibold text-[#3B8F51] mt-2">
                                 {" "}{product.discount[0].discount_price_formatted}
                                  <span className="text-[#FFCA0C] ml-5">
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
                   
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default TeaSection;
