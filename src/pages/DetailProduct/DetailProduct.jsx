import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import gambar from "../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import Ulasan1 from "../../assets/Ulasan/Ulasan1.png";
import Ulasan2 from "../../assets/Ulasan/Ulasan2.png";
import Ulasan3 from "../../assets/Ulasan/Ulasan3.png";
import Ulasan4 from "../../assets/Ulasan/Ulasan4.png";
import Ulasan5 from "../../assets/Ulasan/Ulasan5.png";
import Ulasan6 from "../../assets/Ulasan/Ulasan6.png";
import Orang1 from "../../assets/Ulasan/Orang1.png";
import Orang2 from "../../assets/Ulasan/Orang2.png";
import Orang3 from "../../assets/Ulasan/Orang3.png";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

function DetailProduct() {
  const [jumlah, setJumlah] = useState(0);
  const [nilai, setNilai] = useState(4);
  const [bintang, setBintang] = useState("");
  const [kurangiClicked, setKurangiClicked] = useState(false);
  const [tambahClicked, setTambahClicked] = useState(false);
  const [gambarTerbuka, setGambarTerbuka] = useState(6);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedSugar, setSelectedSugar] = useState("");
  const [selectedPackaging, setSelectedPackaging] = useState("");
  const [selectedExtras, setSelectedExtras] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  const kurangiJumlah = () => {
    setKurangiClicked(true);
    setJumlah(jumlah - 1);
    setTimeout(() => {
      setKurangiClicked(false);
    }, 500);
  };

  const tambahJumlah = () => {
    setTambahClicked(true);
    setJumlah(jumlah + 1);
    setTimeout(() => {
      setTambahClicked(false);
    }, 500);
  };

  // const tambahJumlah = () => {
  //   setJumlah(jumlah + 1);
  // };

  // const kurangiJumlah = () => {
  //   if (jumlah > 0) {
  //     setJumlah(jumlah - 1);
  //   }
  // };

  useEffect(() => {
    let bintangString = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= nilai) {
        bintangString += "★";
      } else {
        bintangString += "☆";
      }
    }
    setBintang(bintangString);
  }, [nilai]);

  const renderGambar = () => {
    const gambar = [];
    for (let i = 1; i <= 6; i++) {
      if (i <= 5) {
        let gambarSource;
        switch (i) {
          case 1:
            gambarSource = Ulasan1;
            break;
          case 2:
            gambarSource = Ulasan2;
            break;
          case 3:
            gambarSource = Ulasan3;
            break;
          case 4:
            gambarSource = Ulasan4;
            break;
          case 5:
            gambarSource = Ulasan5;
            break;
          default:
            break;
        }

        gambar.push(
          <div key={i} className="relative inline-block mr-1">
            <img
              src={gambarSource}
              alt={`Gambar ${i}`}
              className="w-12 h-12 object-cover mr-2"
            />
          </div>
        );
      } else {
        gambar.push(
          <div
            key={i}
            className="w-12 h-12 bg-cover bg-center bg-gray-300  mr-1 flex items-center justify-center relative"
            style={{
              backgroundImage: `url(${Ulasan6})`,
            }}
          >
            <span className="absolute top-1 left-0 cursor-pointer text-white text-center  font-bold text-sm">
              20+ Foto
            </span>
          </div>
        );
      }
    }
    return gambar;
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleSugarClick = (sugar) => {
    setSelectedSugar(sugar);
  };

  const handlePackagingClick = (packaging) => {
    setSelectedPackaging(packaging);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const data = [
    {
      personImage: Orang1,
      name: "Enita Rachelia",
      rating: "★★★★★",
      review:
        "Minuman yang sangat segar dan juga manis di waktu yang sama! Favorite banget sih ini...",
      reviewImages: [Ulasan1, Ulasan2],
    },
    {
      personImage: Orang2,
      name: "Susi Yudhistira",
      rating: "★★★★",
      review: "Asemm, Segerrrrr, Manis manis gituuuu dehhh",
      reviewImages: [Ulasan3, Ulasan5],
    },
    {
      personImage: Orang3,
      name: "Riani Annisa",
      rating: "★★★★",
      review:
        "Minuman yang pas buat yang lagi lemes siang siang! Seger bangett sih inii gaboong ciiusss...",
      reviewImages: [Ulasan3, Ulasan5, Ulasan2],
    },
    {
      personImage: Orang3,
      name: "Riani Annisa",
      rating: "★★★★",
      review:
        "Minuman yang pas buat yang lagi lemes siang siang! Seger bangett sih inii gaboong ciiusss...",
      reviewImages: [Ulasan3, Ulasan5, Ulasan2],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = data.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(data.length / reviewsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" w-screen h-screen">
      <Navbar />
      {/* Layar Besar */}
      <>
        <div>
          <div className="hidden md:inline lg:inline ">
            <div className="flex flex-col md:flex-row md:justify-between h-screen w-screen md:p-20 space-x-5  mx-auto sm:w-[89rem]">
              <div className="flex mt-20 mx-auto w-screen sm:h-[550px] sm:mb- h-auto space-x-5  ">
                {/* Konten 1 */}
                <>
                  <div className="w-full md:w-1/2 bg-white  p-4 mb-4 md:mb-0 relative">
                    <h1 className=" text-[22px] font-medium">
                      Coffee Beans - Robusta Temanggung
                    </h1>
                    <img
                      src={gambar}
                      alt="Gambar Konten"
                      className="w-72 h-72  mb-4"
                    />

                    <p className="mt-5 text-md text-[#3B8F51] text-3xl font-medium">
                      Rp30.000
                    </p>
                    <p className="mt-5 text-md">
                      Pink Rainbow Frappe merupakan Frappe dengan rasa yang
                      sedikit asam dan segar dengan perpaduan cereal frootloops
                      menambahkan rasa manis.
                    </p>
                  </div>
                </>

                {/* Konten 2 */}
                <>
                  <div className=" md:w-1/3  h-auto  p-4 mb-4 md:mb-0 rounded-lg shadow-xl  ">
                    <h1 className="text-md font-medium mb-2 mt-2">Size</h1>
                    <div className="flex flex-wrap gap-2">
                      <button
                        className={`border ${
                          selectedSize === "500gr"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleSizeClick("500gr")}
                      >
                        500 gr
                      </button>
                      <button
                        className={`border ${
                          selectedSize === "1000gr"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleSizeClick("1000gr")}
                      >
                        1000 gr
                      </button>
                    </div>
                    <h1 className="text-md font-medium mt-3 mb-2">Gula</h1>

                    <div className="flex flex-wrap gap-2">
                      <button
                        className={`border ${
                          selectedSugar === "Exclude"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleSugarClick("Exclude")}
                      >
                        Exclude
                      </button>
                      <button
                        className={`border ${
                          selectedSugar === "Include"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleSugarClick("Include")}
                      >
                        Include
                      </button>
                    </div>
                    <h1 className="text-md font-medium mt-3 mb-2">Packaging</h1>
                    <div className="flex flex-wrap gap-2">
                      <button
                        className={`border ${
                          selectedPackaging === "Box"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handlePackagingClick("Box")}
                      >
                        Box
                      </button>
                      <button
                        className={`border ${
                          selectedPackaging === "Plastics"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handlePackagingClick("Plastics")}
                      >
                        Plastics
                      </button>
                    </div>
                    <h1 className="text-md font-medium mt-3 mb-2">Extras</h1>
                    <div className="flex flex-wrap gap-2">
                      <button
                        className={`border ${
                          selectedButton === "+500gr Robusta"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleButtonClick("+500gr Robusta")}
                      >
                        +500gr Robusta
                      </button>
                      <button
                        className={`border ${
                          selectedButton === "+250gr Oolong Tea"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleButtonClick("+250gr Oolong Tea")}
                      >
                        +250gr Oolong Tea
                      </button>
                      <button
                        className={`border ${
                          selectedButton === "+Choco Bar"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleButtonClick("+Choco Bar")}
                      >
                        +Choco Bar
                      </button>
                      <button
                        className={`border ${
                          selectedButton === "+Choco Box"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleButtonClick("+Choco Box")}
                      >
                        +Choco Box
                      </button>
                    </div>
                  </div>
                </>

                {/* Konten 3 */}
                <>
                  <div className=" md:w-1/3 bg-white">
                    <div className="w-[281px] h-auto rounded-lg shadow-md p-4 ">
                      <div className="justify-center">
                        {/* <div className="flex justify-between items-center border border-gray-300 p-4 rounded-lg">
                          <div>
                            <p className=" text-[#3B8F51] text-lg font-medium">
                              Notes :
                            </p>
                            <textarea
                              className="w-full h-48 p-2 "
                              placeholder="Tambahkan catatan"
                            ></textarea>
                          </div>
                        </div> */}
                        <div className="flex justify-between items-center mt-4">
                          <p className="text-black">Jumlah</p>
                          <div className="flex items-center">
                            <button
                              onClick={kurangiJumlah}
                              className={`px-3 py-1 rounded-full mr-2 ${
                                kurangiClicked
                                  ? "bg-[#3B8F51] text-white"
                                  : "bg-gray-300"
                              }`}
                            >
                              -
                            </button>
                            <p className="text-black">{jumlah}</p>
                            <button
                              onClick={tambahJumlah}
                              className={`px-3 py-1 rounded-full ml-2 ${
                                tambahClicked
                                  ? "bg-[#3B8F51] text-white"
                                  : "bg-gray-300"
                              }`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <hr className="mt-5" />
                        <div className="w-full mt-5 flex">
                          <div className=" w-1/2 flex justify-center items-center text-base">
                            Total Harga
                          </div>
                          <div className=" w-1/2 ">
                            <p className="justify-end items-end flex text-[#E53C3C] ">
                              <s>Rp 44.000</s>
                            </p>
                            <p className="justify-end items-end flex text-[#3B8F51] text-[22px] font-medium">
                              Rp 30.000
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center mt-4">
                          <button className="px-4 py-2 bg-[#3B8F51] text-white rounded-full w-full">
                            <Link to="/tambahkeranjang">Tambah Keranjang</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className=" mx-auto w-[89rem]">
              {/* Ulasan Produk */}
              <>
                <div className="flex flex-col md:flex-row md:justify-between md:ml-20 py-5 px-4  space-x-5 ">
                  <h1 className="text-3xl font-medium ">
                    Ulasan Produk
                    <p>
                      <div className="text-3xl font-medium text-[#3B8F51]">
                        <span className="text-[#FFCA0C]">
                          <span className="text-3xl font-medium text-[#3B8F51] mr-2">
                            {nilai}/5
                          </span>
                          <span>
                            {bintang.split("").map((char, index) => (
                              <span
                                key={index}
                                className={`${
                                  char === "★"
                                    ? "text-[#FFCA0C]"
                                    : "text-[#D3D3D3]"
                                }`}
                              >
                                {char}
                              </span>
                            ))}
                          </span>
                        </span>
                      </div>
                    </p>
                    <div className="flex mt-4">{renderGambar()}</div>
                  </h1>
                </div>
              </>

              {/* Ulasan Orang */}
              <>
                <div>
                  {currentReviews.map((item, index) => (
                    <div
                      className="flex flex-col md:flex-row md:justify-between md:ml-20"
                      key={index}
                    >
                      <div className="w-full md:w-1/12 p-4 mb-4 md:mb-0 relative">
                        <img
                          src={item.personImage}
                          alt="Person"
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="w-full md:w-full p-4 mb-4 md:mb-0 relative">
                        <h1 className="text-xl font-medium">{item.name}</h1>
                        <p className="text-[#FFC83C] text-2xl">{item.rating}</p>
                        <p className="text-base font-normal">{item.review}</p>
                      </div>
                      <div className="w-full md:w-1/6 mr-20 mb-4 md:mb-0 relative">
                        <div className="flex p-4 space-x-1">
                          {item.reviewImages.map((image, imageIndex) => (
                            <img
                              src={image}
                              alt="Person"
                              className="w-14 h-14"
                              key={imageIndex}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-end p-10 mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        className={`px-2 py-1 mx-1 rounded-full ${
                          index + 1 === currentPage
                            ? "bg-[#3B8F51] text-white"
                            : "bg-gray-200 text-[#3B8F51"
                        }`}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </>

      {/* Layar HP */}
      <>
        <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen mx-auto justify-start px-4 py-2 ">
          <div className="flex  mt-24 text-black">
            {" "}
            <>
              <div className="w-full   p-4 mb-4 md:mb-0 relative">
                <img
                  src={gambar}
                  alt="Gambar Konten"
                  className="w-56 h-56  mb-4 rounded-lg border"
                />
                <p className="text-[#E53C3C] font-semibold ">
                  <s className="text-[10px]">Rp 56.000</s>
                  <span className="text-[#3B8F51] text-lg font-medium ml-4">
                    Rp 30.000
                  </span>
                </p>
              </div>
              <div className="   w-1/3 flex flex-col items-center">
                <img
                  src={gambar}
                  alt="Gambar Konten"
                  className="w-16 h-16 mb-4 rounded-lg border mt-4"
                />
                <img
                  src={gambar}
                  alt="Gambar Konten"
                  className="w-16 h-16 mb-4 rounded-lg border"
                />
              </div>
            </>
          </div>
          <>
            <div className="ml-3 mr-2">
              <h1 className="text-lg font-medium">
                Coffee Beans - Robusta Temanggung
              </h1>
              <p className="mt-3 text-[#615f5f] text-sm text-justify">
                Kopi bubuk temanggung robusta ini merupakan robusta temanggung
                asli yang diambil dari pertanian kopi dan diolah di Temanggung,
                yang memiliki rasa nikmat dari temanggung asli.
              </p>
              <div className="mt-4">
                <div className="text-xl font-semibold text-[#3B8F51]">
                  <span className="text-[#FFCA0C] w-5 h-5">
                    &#9733;
                    <span className="text-sm text-black ml-2">4.2/5</span>
                    <span className="ml-3 mr-3 text-[#ACACAC]">•</span>{" "}
                    <span className="text-black text-base">Coffee</span>
                  </span>
                </div>
              </div>

              <div className="mt-5">
                {" "}
                <>
                  <div className="   mb-4">
                    <h1 className="text-md font-medium mb-2">Size</h1>
                    <div className="flex flex-wrap gap-2">
                      <button
                        className={`border ${
                          selectedSize === "500gr"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleSizeClick("500gr")}
                      >
                        500 gr
                      </button>
                      <button
                        className={`border ${
                          selectedSize === "1000gr"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleSizeClick("1000gr")}
                      >
                        1000 gr
                      </button>
                    </div>
                    <h1 className="text-md font-medium mt-3 mb-2">Gula</h1>

                    <div className="flex flex-wrap gap-2">
                      <button
                        className={`border ${
                          selectedSugar === "Exclude"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleSugarClick("Exclude")}
                      >
                        Exclude
                      </button>
                      <button
                        className={`border ${
                          selectedSugar === "Include"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleSugarClick("Include")}
                      >
                        Include
                      </button>
                    </div>
                    <h1 className="text-md font-medium mt-3 mb-2">Packaging</h1>
                    <div className="flex flex-wrap gap-2">
                      <button
                        className={`border ${
                          selectedPackaging === "Box"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handlePackagingClick("Box")}
                      >
                        Box
                      </button>
                      <button
                        className={`border ${
                          selectedPackaging === "Plastics"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handlePackagingClick("Plastics")}
                      >
                        Plastics
                      </button>
                    </div>
                    <h1 className="text-md font-medium mt-3 mb-2">Extras</h1>
                    <div className="flex flex-wrap gap-2">
                      <button
                        className={`border ${
                          selectedButton === "+500gr Robusta"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleButtonClick("+500gr Robusta")}
                      >
                        +500gr Robusta
                      </button>
                      <button
                        className={`border ${
                          selectedButton === "+250gr Oolong Tea"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleButtonClick("+250gr Oolong Tea")}
                      >
                        +250gr Oolong Tea
                      </button>
                      <button
                        className={`border ${
                          selectedButton === "+Choco Bar"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleButtonClick("+Choco Bar")}
                      >
                        +Choco Bar
                      </button>
                      <button
                        className={`border ${
                          selectedButton === "+Choco Box"
                            ? "bg-[#3B8F51] text-white"
                            : "border-[#3B8F51] text-[#3B8F51]"
                        } py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white`}
                        onClick={() => handleButtonClick("+Choco Box")}
                      >
                        +Choco Box
                      </button>
                    </div>
                  </div>
                </>
                {/* Jumlah */}
              </div>
            </div>
            <>
              <div className="flex mt-10 w-full">
                <div className="w-1/3  flex justify-center items-center">
                  {" "}
                  <p className="text-black font-semibold">Jumlah</p>
                </div>
                <div className="w-1/2  flex justify-center items-center">
                  {" "}
                  <button
                    onClick={kurangiJumlah}
                    className={`px-3 py-1 rounded-full mr-2 ${
                      kurangiClicked ? "bg-[#3B8F51] text-white" : "bg-gray-300"
                    }`}
                  >
                    -
                  </button>
                  <p className="text-black">{jumlah}</p>
                  <button
                    onClick={tambahJumlah}
                    className={`px-3 py-1 rounded-full ml-2 ${
                      tambahClicked ? "bg-[#3B8F51] text-white" : "bg-gray-300"
                    }`}
                  >
                    +
                  </button>
                </div>
                <div className="w-1/2 ">
                  {" "}
                  <button className="px-4 py-2 bg-[#3B8F51] text-white rounded-full w-full text-[10px]">
                    <Link to="/tambahkeranjang">Tambah Keranjang</Link>
                  </button>
                </div>
              </div>
            </>
          </>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default DetailProduct;
