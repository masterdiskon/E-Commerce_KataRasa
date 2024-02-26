import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import BackgroundCoffee from "../../assets/Produk/ProductpageCoffeBeans.png";
import ProductCoffee1 from "../../assets/ProductCoffeeBeans/product coffee beans.png";
import ProductCoffee2 from "../../assets/ProductCoffeeBeans/product coffee beans-1.png";
import ProductCoffee3 from "../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import ProductCoffee4 from "../../assets/ProductCoffeeBeans/product coffee beans-3.png";
import { Pagination, Slider } from "antd";
import Footer from "../../layout/Footer";

function ProductCoffee() {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const handlePriceRangeChange = (value) => {
    // Mengatur range harga yang dipilih
    setPriceRange(value);
  };

  const products = [
    {
      image: ProductCoffee1,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: ProductCoffee2,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: ProductCoffee3,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: ProductCoffee4,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: ProductCoffee4,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: ProductCoffee4,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },

    {
      image: ProductCoffee4,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },

    {
      image: ProductCoffee4,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
  ];

  return (
    <div className="w-screen h-screen  ">
      <Navbar />

      <div className="hidden md:inline">
        <div className=" flex flex-col h-auto w-screen mx-auto ">
          <div className="mt-24">
            <>
              <div
                className="w-full h-[240px] p-4 mb-4 md:mb-0 relative text-white flex justify-center items-center"
                style={{
                  backgroundImage: `url(${BackgroundCoffee})`,
                  backgroundSize: "cover", // Menentukan lebar gambar latar belakang
                }}
              >
                {/* Konten Anda di sini */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#41644A] to-transparent h-[100%]"></div>
                <div className="z-0 text-center relative">
                  <h1 className="text-7xl font-bold relative">
                    <span
                      className="text-transparent"
                      style={{
                        WebkitTextStroke: "1px white",
                      }}
                    >
                      Coffee <span className="text-white">Beans</span>
                    </span>
                  </h1>
                </div>
              </div>
            </>

            <>
              <div className="flex justify-center items-center w-full h-auto">
                <div className="w-[80rem] h-auto ">
                  <h2 className="text-lg font-bold  mb-4 mt-4">
                    Filter Pencarian
                  </h2>

                  <div className="flex space-x-5">
                    <div className="w-1/3 ">
                      <div className="p-4 bg-white shadow-2xl rounded-lg">
                        <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                          Urutkan Menu
                        </h2>{" "}
                        <select className="w-full border rounded-sm px-3 py-2 focus:outline-none focus:border-[#3B8F51] mt-2 border-[#3B8F51] text-[#3B8F51]">
                          <option value="terfavorite">Ter-Favorite</option>
                          <option value="kategori1">Kategori 1</option>
                          <option value="kategori2">Kategori 2</option>
                          {/* Tambahkan lebih banyak opsi jika diperlukan */}
                        </select>
                        <br />
                        <br />
                        <br />
                        <>
                          <div>
                            <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                              Range Harga
                            </h2>
                            <Slider
                              range
                              min={0}
                              max={100000}
                              defaultValue={[0, 100000]}
                              value={priceRange}
                              onChange={handlePriceRangeChange}
                              className="slider-track-color"
                            />

                            {/* Tampilkan nilai range harga dalam format rupiah */}
                            <div className="flex justify-between">
                              <span>
                                Min:{" "}
                                {priceRange[0].toLocaleString("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                })}
                              </span>
                              <span>
                                Max:{" "}
                                {priceRange[1].toLocaleString("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                })}
                              </span>
                            </div>

                            {/* CSS custom dengan Tailwind */}
                            <style>{`
                      .slider-track-color .ant-slider-track {
                        background-color: #3B8F51; /* Ganti warna garis slider menjadi hijau */
                      }
                      .slider-track-color .ant-slider-handle {
                        border-color: #3B8F51; /* Ganti warna border buletan menjadi hijau */
                        background-color: #3B8F51; /* Ganti warna buletan menjadi hijau */
                      }
                      
                    `}</style>
                          </div>
                        </>
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Looping untuk menampilkan konten produk */}
                        <>
                          {products.map((product, index) => (
                            <div
                              key={product.id}
                              className="bg-white rounded-lg shadow-xl p-4"
                            >
                              {/* Isi konten produk */}
                              <img
                                className="rounded-md"
                                src={product.image}
                                alt={`Product ${index}`}
                              />
                              <h3 className="text-md font-semibold mb-2 mt-2">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {product.description}
                              </p>
                              <p className="text-[#E53C3C] font-semibold text-sm">
                                <s>{product.originalPrice}</s>
                              </p>
                              <div className="mt-2">
                                <div className="text-lg font-semibold text-[#3B8F51]">
                                  {product.discountedPrice}{" "}
                                  <span className="text-[#FFCA0C] ml-5">
                                    &#9733;
                                    <span className="text-sm text-[#3B8F51] ml-1">
                                      {product.rating}/5
                                    </span>
                                  </span>
                                </div>
                              </div>
                              {/* Informasi lebih lanjut atau tombol beli */}
                            </div>
                          ))}
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductCoffee;