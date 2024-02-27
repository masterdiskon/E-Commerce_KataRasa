import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import BackgroundAbout from "../../../assets/AboutUs/Background.png";
import Gambar1 from "../../../assets/AboutUs/Gambar1.png";
import Gambar2 from "../../../assets/AboutUs/Gambar2.png";
import Star2 from "../../../assets/AboutUs/Star2.png";
import Star1 from "../../../assets/AboutUs/Star1.png";
import Kiri from "../../../assets/AboutUs/kiri.png";
import Kanan from "../../../assets/AboutUs/kanan.png";
import gambar1 from "../../../assets/Locations/Gambar1.png";
import gambar2 from "../../../assets/Locations/Gambar2.png";
import grab from "../../../assets/Locations/Grab.png";
import sendok from "../../../assets/Locations/sendok.png";
import shoppee from "../../../assets/Locations/shoppee.png";

function About() {
  const images = [
    {
      src: gambar1,
      title: "Jl. Haji Baping Raya",
      address:
        "Jl. Haji Baping Raya No.100. Ciracas, Jakarta Timur. 13750 (PT Penerbit Erlangga)",
    },
    {
      src: gambar2,
      title: "Taman Mini - LRT City",
      address:
        "Jl. Haji baping Raya No.100. Ciracas, Jakarta Timur. 13750 (PT Penerbit Erlangga)",
    },
    {
      src: gambar2,
      title: "Taman Mini - LRT City",
      address:
        "Jl. Haji baping Raya No.100. Ciracas, Jakarta Timur. 13750 (PT Penerbit Erlangga)",
    },
    {
      src: gambar2,
      title: "Taman Mini - LRT City",
      address:
        "Jl. Haji baping Raya No.100. Ciracas, Jakarta Timur. 13750 (PT Penerbit Erlangga)",
    },
    // Add more image data as needed
  ];

  return (
    <div className="w-full h-screen  ">
      <Navbar />
      {/* Layar Besar */}
      <div>
        <div className="hidden sm:inline lg:inline ">
          <div className="flex flex-col sm:flex-row md:justify-between h-screen w-full  space-x-5  mx-auto ">
            <div className=" mt-20 mx-auto w-screen  h-auto  ">
              <>
                <div
                  className="w-full h-[900px] p-4 mb-4 md:mb-0 relative text-white flex justify-center items-center"
                  style={{
                    backgroundImage: `url(${BackgroundAbout})`,
                    backgroundSize: "cover", // Menentukan lebar gambar latar belakang
                  }}
                >
                  {/* Konten Anda di sini */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#41644A] to-transparent h-[100%]"></div>
                  <div className="z-0 text-center relative">
                    <h1 className="text-8xl font-bold relative">
                      <span
                        className="text-transparent"
                        style={{
                          WebkitTextStroke: "1px white",
                        }}
                      >
                        About Kata Rasa
                      </span>
                    </h1>
                  </div>
                </div>
              </>

              <>
                <div>
                  <div className="h-1/2 bg-slate-600">
                    <div className="bg-[#41644A] h-auto relative">
                      <div className="flex mx-auto w-[85rem]">
                        {/* Konten 1 */}
                        <div className="w-1/2 mb-20 mt-10">
                          <div className="p-16 text-white">
                            <p className="text-5xl w-[70%] font-semibold">
                              Secangkir Kata, Penuh Rasa.
                            </p>
                            <p className="mt-10">
                              Kata & Rasa Hadir dalam konsep kedai kopi dan teh,
                              secangkir kafein mampu membangkitkan inspirasi,
                              memori dan daya kreasi anda.
                            </p>
                            <p className="mt-5">
                              Kata & Rasa menjadi tempat bagi pengunjungnya
                              untuk mengembangkan imajinasi kreatif yang
                              menghasilkan narasi, puisi bahkan gambar yang
                              mengandung banyak makna.
                            </p>
                            <p className="mt-5">
                              Dalam Kata & Rasa, Kami merangkul terciptanya
                              segala ekspresi komunikasi yang mampu mengalihkan
                              ide-ide inovasi bagi penikmatnya.
                            </p>
                          </div>
                        </div>

                        {/* Gambar */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-14 w-1/2 h-full flex justify-center items-center ">
                          <img
                            src={Gambar1}
                            alt=""
                            className="w-[589px] h-[580px] self-start mt-28 mr-[12rem]"
                          />
                          <div className="absolute top-[7rem] right-[22rem]">
                            <img
                              src={Star1}
                              alt=""
                              className="w-[50px] h-[50px]"
                            />
                          </div>
                          <div className="absolute top-[8rem] right-[21rem]">
                            <img
                              src={Star2}
                              alt=""
                              className="w-[30px] h-[30px] mt-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <>
                    <div className="h-1/2 bg-[#FFF3E9] ">
                      <div className="relative">
                        <div className="absolute top-1/2 left-0 transform translate-y-[10rem]">
                          <img
                            src={Kiri}
                            alt=""
                            className="w-[283px] h-[498px]"
                          />
                        </div>
                        <div className="absolute top-1/2 right-0 transform translate-y-[39rem]">
                          <img
                            src={Kanan}
                            alt=""
                            className="w-[345px] h-[400px]"
                          />
                        </div>
                      </div>
                      <div className="h-auto relative">
                        <div className="flex mx-auto w-[85rem]">
                          {/* Konten 1 */}
                          <div className="w-1/2">
                            <div className="absolute top-24  transform  w-1/2 h-full flex justify-center items-center ">
                              <img
                                src={Gambar2}
                                alt=""
                                className="w-[589px] h-[580px] self-start mt-32 mr-[18rem]"
                              />
                            </div>
                          </div>

                          {/* Konten 2 */}
                          <div className="w-1/2 mb-20 mt-40">
                            <div className="p-16 text-[#41644A]">
                              <p className="text-5xl w-[70%] font-semibold">
                                Sedia Kata untuk kesatuan Rasa.
                              </p>
                              <p className="mt-10">
                                Kata & Rasa tersaji sebagai bagian dari
                                komunitas pecinta kopi yang akan terus
                                menghargai, mengedukasi, dan mengeksplorasi
                                kenikmatan dari sajian kopi, sebagai bagian dari
                                komoditas nusantara dan budaya dunia.
                              </p>
                              <p className="mt-5">
                                Kata & Rasa menyajikan serangkaian menu kopi
                                pilihan. Salah satu menu inovatif kami adalah
                                Tekopresso, paduan kuatnya kafein dengan
                                harumnya seduhan daun teh.
                              </p>
                              <p className="mt-5">
                                Kata & Rasa juga menghadirkan ragam varian kue
                                pastry sebagai teman minum kopi anda, seperti
                                Croissant, Danish dan Cromboloni.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      {/* locations */}
                      <>
                        <div className="flex mx-auto w-[80rem]">
                          <h1 className="font-semibold text-4xl">
                            Store Locations
                          </h1>
                        </div>

                        <div className="mx-auto max-w-[80rem] mt-5 ">
                          <div className="grid grid-cols-2 gap-2 ">
                            {images.map((image, index) => (
                              <div key={index} className="w-full">
                                <div className="bg-white rounded-lg shadow-md p-6 mb-20">
                                  <img src={image.src} alt="" />
                                  <div className="w-full flex mt-2">
                                    <div className="w-full">
                                      <h1 className="text-[22px] font-medium">
                                        {image.title}
                                      </h1>
                                      <p className="text-[16px] font-normal text-gray-400">
                                        {image.address}
                                      </p>
                                    </div>
                                    <div className="flex w-1/2 justify-between items-center">
                                      <div className="w-1/3 ">
                                        <img
                                          src={sendok}
                                          alt=""
                                          className="cursor-pointer"
                                        />
                                      </div>
                                      <div className="w-1/3 ">
                                        <img
                                          src={shoppee}
                                          alt=""
                                          className="cursor-pointer"
                                        />
                                      </div>
                                      <div className="w-1/3 ">
                                        <img
                                          src={grab}
                                          alt=""
                                          className="cursor-pointer"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Footer />
                      </>
                    </div>
                  </>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>

      {/* Layar Kecil */}

      <div>
        <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen mx-auto justify-start px-0 py-2 ">
          <div className=" mt-20 mx-auto w-screen  h-auto  ">
            <>
              <div className="bg-[#41644A]">
                <div
                  className="w-full h-[233px] p-4  md:mb-0 relative text-white flex justify-center items-center"
                  style={{
                    backgroundImage: `url(${BackgroundAbout})`,
                    backgroundSize: "cover", // Menentukan lebar gambar latar belakang
                  }}
                >
                  {/* Konten Anda di sini */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#41644A] to-transparent h-[102%]"></div>
                  <div className="z-0 text-center relative">
                    <h1 className="text-2xl font-semibold relative">
                      <span
                        className="text-transparent"
                        style={{
                          WebkitTextStroke: "1px white",
                        }}
                      >
                        About Kata Rasa
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </>
            <div className="bg-[#41644A] h-[600px] relative mt-0">
              <div>
                <div className="w-full">
                  <div className="p-14 text-white">
                    <p className="text-2xl  font-semibold">
                      Secangkir Kata, Penuh Rasa.
                    </p>
                    <p className="mt-10 text-[11px] text-[#EAE9E9]">
                      Kata & Rasa Hadir dalam konsep kedai kopi dan teh,
                      secangkir kafein mampu membangkitkan inspirasi, memori dan
                      daya kreasi anda.
                    </p>
                    <p className="mt-5 text-[11px] text-[#EAE9E9]">
                      Kata & Rasa menjadi tempat bagi pengunjungnya untuk
                      mengembangkan imajinasi kreatif yang menghasilkan narasi,
                      puisi bahkan gambar yang mengandung banyak makna.
                    </p>
                    <p className="mt-5 text-[11px] text-[#EAE9E9]">
                      Dalam Kata & Rasa, Kami merangkul terciptanya segala
                      ekspresi komunikasi yang mampu mengalihkan ide-ide inovasi
                      bagi penikmatnya.
                    </p>
                  </div>
                </div>
                <div className="absolute top-52 transform w-full h-full flex justify-center items-center ">
                  <img
                    src={Gambar1}
                    alt=""
                    className="w-[320px] h-[328px] self-start mt-36 rounded-se-[50%]"
                  />
                  <div className="absolute top-[9rem] left-[20rem]">
                    <img src={Star1} alt="" className="w-[38px] h-[37px]" />
                  </div>
                  <div className="absolute top-[10rem] left-[22rem]">
                    <img
                      src={Star2}
                      alt=""
                      className="w-[19px] h-[18px] mt-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF3E9] ">
              <div className="w-full mb-20">
                <div className="p-14 text-[#41644A]">
                  <p className="text-2xl mt-20  font-semibold">
                    Sedia Kata untuk kesatuan Rasa.
                  </p>
                  <p className="mt-10 text-[11px]">
                    Kata & Rasa tersaji sebagai bagian dari komunitas pecinta
                    kopi yang akan terus menghargai, mengedukasi, dan
                    mengeksplorasi kenikmatan dari sajian kopi, sebagai bagian
                    dari komoditas nusantara dan budaya dunia.
                  </p>
                  <p className="mt-5 text-[11px]">
                    Kata & Rasa menyajikan serangkaian menu kopi pilihan. Salah
                    satu menu inovatif kami adalah Tekopresso, paduan kuatnya
                    kafein dengan harumnya seduhan daun teh.
                  </p>
                  <p className="mt-5 text-[11px]">
                    Kata & Rasa juga menghadirkan ragam varian kue pastry
                    sebagai teman minum kopi anda, seperti Croissant, Danish dan
                    Cromboloni.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute  left-0 transform">
                    <img src={Kiri} alt="" className="w-[112px] h-[198px]" />
                  </div>
                  <div className="absolute  right-0 transform translate-y-[22rem]">
                    <img src={Kanan} alt="" className="w-[140px] h-[140px]" />
                  </div>

                  <div className="absolute  right-10 transform translate-y-[19rem] z-20">
                    <img src={Star1} alt="" className="w-[41px] h-[42px]" />
                  </div>
                  <div className="absolute  right-16 transform translate-y-[20rem] z-20">
                    <img
                      src={Star2}
                      alt=""
                      className="w-[20px] h-[21px] mt-4"
                    />
                  </div>
                </div>
                <div className="justify-center items-center flex">
                  <img
                    src={Gambar2}
                    alt=""
                    className="w-[320px] h-[328px] self-start z-10 rounded-ss-[40%]"
                  />
                </div>
              </div>

              {/* locations */}
              <>
                <>
                  <div className="mx-auto">
                    <h1 className="font-semibold text-lg pl-10">
                      Store Locations
                    </h1>
                  </div>

                  <div className="mx-auto mt-5 pl-10 pr-10 relative">
                    {images.map((image, index) => (
                      <div key={index} className="w-full">
                        <div className="bg-white rounded-lg shadow-md mb-10">
                          <img src={image.src} alt="" className="h-[150px]" />
                          <div className="w-full p-5">
                            <div className="w-full">
                              <h1 className="text-[22px] font-medium">
                                {image.title}
                              </h1>
                              <p className="text-[14px] font-normal text-gray-400">
                                {image.address}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <div className="w-1/2 flex mt-2">
                                <img
                                  src={sendok}
                                  alt="Logo 1"
                                  className="h-[50px]"
                                />
                                <img
                                  src={shoppee}
                                  alt="Logo 2"
                                  className="h-[50px]"
                                />
                                <img
                                  src={grab}
                                  alt="Logo 3"
                                  className="h-[50px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Footer />
                </>

          
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
