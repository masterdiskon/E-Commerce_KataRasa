import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import ProductCoffee from "../../../assets/ProductCoffeeBeans/product coffee beans.png";
import ProductCoffee2 from "../../../assets/ProductCoffeeBeans/product coffee beans-1.png";
import ProductCoffee3 from "../../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import ProductCoffee4 from "../../../assets/ProductCoffeeBeans/product coffee beans-3.png";
import Choco1 from "../../../assets/ProductChocolate/productChocolateJar2.png";
import Choco2 from "../../../assets/ProductChocolate/productChocolateJar1.png";
import Choco3 from "../../../assets/ProductChocolate/productChocolateJar4.png";
import Choco4 from "../../../assets/ProductChocolate/productChocolateJar3.png";
import Bar1 from "../../../assets/ChocoBar/productChocobar3.png";
import Bar2 from "../../../assets/ChocoBar/productChocobar1.png";
import Bar3 from "../../../assets/ChocoBar/productChocobar2.png";
import Bar4 from "../../../assets/ChocoBar/productChocobar4.png";
import Tea1 from "../../../assets/ProductTea/productTea.png";
import Tea2 from "../../../assets/ProductTea/product Tea-1.png";
import Tea3 from "../../../assets/ProductTea/product Tea-2.png";
import Tea4 from "../../../assets/ProductTea/product Tea-3.png";
import Filter from "../../../assets/Filter.png";
import { Button, Modal, Pagination, Select, Slider } from "antd";
import { RightOutlined, CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

function Pencarian() {
  const [priceRange, setPriceRange] = useState([0, 100000]); // Nilai awal untuk range harga
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const handlePriceRangeChange = (value) => {
    // Mengatur range harga yang dipilih
    setPriceRange(value);
  };

  const products = [
    {
      image: ProductCoffee,
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
      image: Choco1,
      name: "Hazelnut ChocoBox",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Choco2,
      name: "Melon ChocoBox",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Choco3,
      name: "Matcha ChocoBox",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Choco4,
      name: "Taro ChocoBox",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Bar1,
      name: "Taro Chocobar",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Bar2,
      name: "Hazelnut Chocobar",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Bar3,
      name: "Strawberry Chocobar",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Bar4,
      name: "Sea Salt Chocobar",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Tea1,
      name: "Teh Dewi-Sakura Tea",
      description: "Tea",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4,
    },
    {
      image: Tea2,
      name: "Teh Dewi-Jasmine Tea",
      description: "Tea",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4,
    },
    {
      image: Tea3,
      name: "Teh Dewi-Lechyee Tea",
      description: "Tea",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4,
    },
    {
      image: Tea4,
      name: "Teh Dewi-Mint Tea",
      description: "Tea",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4,
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  // Fungsi untuk menutup modal
  const handleOk = () => {
    setIsModalVisible(false);
  };

  // Fungsi untuk menutup modal jika dibatalkan
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className=" w-full h-screen">
      <Navbar />

      {/* Layar Besar */}
      <>
        <div className="hidden md:inline">
          <div className=" flex flex-col text-lg md:flex-row md:justify-between h-auto w-screen md:p-20 space-x-5  mx-auto sm:w-[85rem]">
            <div className="flex flex-col sm:flex-row mt-24">
              {/* Konten sebelah kiri - Pencarian */}

              <div className=" lg:block sm:w-1/3">
                <h2 className="text-lg font-bold  mb-4">Filter Pencarian</h2>
                <div className="bg-white rounded-lg shadow-md p-4 sticky top-0">
                  {/* Isi konten pencarian */}
                  {/* Dropdown select untuk filter */}

                  <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                    Urutkan Menu
                  </h2>

                  <Select
                    className="w-full h-[4rem] border-solid-[#3B8F51] text-[#3B8F51]"
                    defaultValue="terfavorite"
                    // onChange={handleChange}
                    suffixIcon={
                      <svg
                        viewBox="0 0 1024 1024"
                        focusable="false"
                        data-icon="caret-down"
                        width="18px"
                        height="18px"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-[#3B8F51]"
                      >
                        <path d="M512 693.248L277.12 458.368a42.667 42.667 0 0 1 60.331-60.331l174.549 174.549 174.549-174.549a42.667 42.667 0 0 1 60.331 60.331z"></path>
                      </svg>
                    }
                  >
                    <Option value="terfavorite" className="text-base">
                      Ter-Favorite
                    </Option>
                    <Option value="kategori1" className="text-base">
                      Kategori 1
                    </Option>
                    <Option value="kategori2" className="text-base">
                      Kategori 2
                    </Option>
                    {/* Tambahkan lebih banyak opsi jika diperlukan */}
                  </Select>

                  <br />
                  <br />
                  <br />

                  {/* Tombol pencarian */}
                  <>
                    <div className="w-80 h-auto ">
                      <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                        Variasi Menu
                      </h2>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Coffee Bean
                      </button>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Snack Bar
                      </button>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Pastery
                      </button>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Merchandise
                      </button>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Box/Hampers
                      </button>
                    </div>
                  </>

                  <br />
                  <br />
                  <br />

                  {/* Range Harga */}

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

              {/* Konten sebelah kanan - Produk */}
              <div className="sm:w-2/3 ml-0 sm:ml-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Looping untuk menampilkan konten produk */}
                  <>
                    {products.map((product, index) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md p-4"
                      >
                        {/* Isi konten produk */}
                        <img
                          className="rounded-md"
                          src={product.image}
                          alt={`Product ${index}`}
                        />
                       <h3 className="text-md font-semibold mb-2 mt-2 overflow-hidden whitespace-nowrap truncate">
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
                <Pagination className="mt-3 text-end" />
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Layar HP */}
      <>
        <div className="sm:inline lg:hidden md:hidden sm:w-full mx-auto justify-start px-4 py-2">
          <div className=" flex  mt-28 text-black ">
            {/* Filter */}
            <>
              <div className="w-full mt-1">
                <p className="text-[#41644A] text-sm">
                  Search{" "}
                  <span className="ml-5 mr-5">
                    {" "}
                    <RightOutlined />{" "}
                  </span>{" "}
                  “Ter-Favorite”
                </p>
              </div>
              <div className="w-1/3">
                <Button
                  className="flex items-center text-white bg-[#3B8F51] border border-[#3B8F51] rounded-full transition-colors duration-300 ease-in-out"
                  onClick={showModal}
                >
                  <img src={Filter} alt="filter" className="w-4 h-2" />
                  <span className="ml-1">Filter</span>
                </Button>

                {/* Modal */}
                <Modal
                  title={
                    <span className="text-[#3B8F51] text-xl font-bold">
                      Filter Pencarian
                    </span>
                  }
                  closeIcon={<CloseOutlined style={{ color: "#3B8F51" }} />}
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null} // Hapus tombol Cancel dari footer
                >
                  <h2 className="text-lg text-[#41644A] font-medium mt-5 mb-2">
                    Urutkan Menu
                  </h2>
                  <Select
                    className="w-full mt-2 border-[#3B8F51] text-[#3B8F51]"
                    onChange={handleSelectChange}
                    value={selectedOption || "0"} // Mengatur nilai default ke opsi pertama
                  >
                    <Option value="0" style={{ color: "#3B8F51" }}>
                      Ter-Favorite
                    </Option>
                    <Option value="1" style={{ color: "#3B8F51" }}>
                      Kategori 1
                    </Option>
                    <Option value="2" style={{ color: "#3B8F51" }}>
                      Kategori 2
                    </Option>
                    {/* Tambahkan lebih banyak opsi jika diperlukan */}
                  </Select>

                  <>
                    <div className="w-80 h-auto mt-4">
                      <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                        Variasi Menu
                      </h2>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Coffee Bean
                      </button>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Snack Bar
                      </button>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Pastery
                      </button>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Merchandise
                      </button>
                      <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                        Box/Hampers
                      </button>
                    </div>
                  </>

                  <>
                    <div>
                      <h2 className="text-lg text-[#41644A] font-medium mt-5 mb-5">
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
                </Modal>
              </div>
            </>
          </div>

          {/* Product */}
          <>
            <div className="mt-5">
              {" "}
              <div className="sm:w-2/3 ml-0 sm:ml-6">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Looping untuk menampilkan konten produk */}
                  <>
                    {products.map((product, index) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md p-4"
                      >
                        {/* Isi konten produk */}
                        <img
                          className="rounded-md"
                          src={product.image}
                          alt={`Product ${index}`}
                        />
                        <h3 className="text-base font-semibold mb-2 mt-2">
                          {product.name}
                        </h3>
                        <p className="text-[10px] text-gray-600">
                          {product.description}
                        </p>
                        <p className="text-[#E53C3C] font-semibold text-[10px]">
                          <s>{product.originalPrice}</s>
                        </p>
                        <div className="mt-2">
                          <div className="text-xs text-[#3B8F51]">
                            {product.discountedPrice}{" "}
                            <span className="text-[#FFCA0C] ml-8">
                              &#9733;
                              <span className="text-xs text-[#3B8F51] ml-2">
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
          </>
        </div>
      </>

      <Footer />
    </div>
  );
}

export default Pencarian;
