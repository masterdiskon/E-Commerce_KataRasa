import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import WA from "../../../assets/Bantuan/Whatsapp.png";
import Email from "../../../assets/Bantuan/Email.png";
import IG from "../../../assets/Bantuan/Instagram.png";
import { Button } from "antd";

function BantuanPage() {
  const handleHubungiKamiClick = () => {
    // Beralih ke halaman Instagram
    window.open("https://www.instagram.com/kopi.katarasa/", "_blank");
  };
  const handleWhatsAppClick = () => {
    // Nomor WhatsApp admin
    const adminPhoneNumber = "+6281224749911";
    // Membangun URL WhatsApp dengan nomor admin
    const url = `https://wa.me/${adminPhoneNumber}`;
    // Buka URL WhatsApp dalam tab baru
    window.open(url, "_blank");
  };
  const handleEmailClick = () => {
    // Alamat email Kedai Kopi Katarasa
    const email = "Kedai.kopikatarasa@gmail.com";
    // Membangun URI mailto
    const mailtoLink = `mailto:${email}`;
    // Buka aplikasi email default dengan alamat email yang ditentukan
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full h-screen ">
      <Navbar />
      <>
        <div className="hidden sm:inline">
          <div className="  h-auto w-screen md:p-20 mx-auto sm:w-[84rem]">
            <div className="w-full sm:mt-24 ">
              <div className=" pl-5 sm:pl-0 sm:mt-0">
                <div>
                  <h1 className=" font-semibold sm:text-3xl ">Bantuan</h1>
                </div>
                <p className="sm:mt-2 text-[#787878] sm:text-lg">
                  Butuh bantuan karena mengalami kendala? yuk hubungi kami :
                </p>
              </div>
              <br />
              <br />
              <br />
              <div className="w-full flex space-x-4">
                {[
                  {
                    src: WA,
                    title: "Whatsapp Kami",
                    contact: "+62 812-2474-9911",
                    onClick: handleWhatsAppClick,
                  },
                  {
                    src: IG,
                    title: "Instagram Kami",
                    contact: "@kopi.katarasa",
                    onClick: handleHubungiKamiClick,
                  },
                  {
                    src: Email,
                    title: "Email Kami",
                    contact: "Kedai.kopikatarasa@gmail.com",
                    onClick: handleEmailClick,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-1/2 relative flex flex-col items-center"
                    style={{
                      position: "relative",
                    }}
                  >
                    <img src={item.src} alt="" />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div>
                        <p className="flex justify-center items-center sm:text-2xl text-center font-medium mt-2">
                          {item.title}
                        </p>
                      </div>
                      <br />
                      <br />
                      <div>
                        <p className="text-[#3b8f51] text-xl">{item.contact}</p>
                      </div>
                      <br />
                      <br />
                      <div>
                        <Button
                          onClick={item.onClick}
                          className="bg-[#3b8f51] hover:bg-white hover:border-[#3b8f51] text-white w-full rounded-full h-[50px]"
                        >
                          Hubungi Kami
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen mx-auto justify-start px-4 py-2 ">
          <div className="mt-28 text-black">
            <div className=" pl-5 sm:pl-0 sm:mt-0">
              <div>
                <h1 className=" font-semibold sm:text-3xl ">Bantuan</h1>
              </div>
              <p className="sm:mt-2 text-[#787878] sm:text-lg">
                Butuh bantuan karena mengalami kendala? yuk hubungi kami :
              </p>
              
            </div>
           
            <br />
         
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default BantuanPage;
