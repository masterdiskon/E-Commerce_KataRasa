import React from "react";
import Logo from "../assets/Katasa_Putih.png"; // Ganti dengan path logo Anda
import FooterBackground from "../assets/Footer.png"; // Ganti dengan path gambar background Anda
import FooterBackground2 from "../assets/FooterBackground2.png"; // Ganti dengan path gambar background Anda
import IG from "../assets/Sosmed/IG.png";
import FB from "../assets/Sosmed/FB.png";
import TT from "../assets/Sosmed/TT.png";
import TWIT from "../assets/Sosmed/TWIT.png";
import APS from "../assets/Sosmed/APS.png";
import GP from "../assets/Sosmed/GP.png";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

function Footer() {
  //   const navigasi = useNavigate();
  //   const halamanAbout = () => {
  //     navigasi("/about");
  //   };

  const footerStyle = {
    backgroundImage: `url(${FooterBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // Tambahkan fungsi untuk mengubah gambar latar belakang saat aplikasi dijalankan pada layar ponsel
  if (window.innerWidth <= 768) {
    footerStyle.backgroundImage = `url(${FooterBackground2})`;
  }

  return (
    <footer className=" mt-10">
      <div className="w-screen mx-auto" style={footerStyle}>
        <div className="flex flex-wrap justify-start sm:justify-center mx-auto  sm:w-[85rem] p-14 text-white">
          <div className="w-screen sm:w-1/6 mb-4 sm:mb-0  ">
            {" "}
            {/* Tambahkan kelas order-last dan sm:order-first */}
            <img
              src={Logo}
              alt="Logo"
              className="w-[89px] h-[84px] md:h-[130px] mx-auto md:w-[140px]"
            />
          </div>
          <div className="w-full sm:w-1/6 md:mb-4 mb-10 ">
            <p className="font-semibold sm:text-xl">Katarasa</p>
            <Link to="/about">
              <p className="mt-5 cursor-pointer">About Us</p>
            </Link>

            <p className="mt-2 cursor-pointer">Team Katarasa</p>
            <p className="mt-2 cursor-pointer">Help</p>
            <p className="mt-2 cursor-pointer">Careers</p>
            <p className="mt-2 cursor-pointer">Privacy</p>
            <p className="mt-2 cursor-pointer">Terms and Condition</p>
          </div>
          {/* Product */}
          <div className="w-full sm:w-1/6 md:mb-4 mb-10">
            <p className="font-semibold">Product</p>
            <p className="mt-5 cursor-pointer">Menu</p>
            <p className="mt-2 cursor-pointer">Keranjang</p>
            <p className="mt-2 cursor-pointer">Promo</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 md:mb-4 mb-10">
            <p className="font-semibold">Social Media</p>
            <a
              href="https://www.instagram.com/kopi.katarasa/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center cursor-pointer"
            >
              <img
                src={IG}
                alt="Instagram"
                className="w-6 h-6 md:w-8 md:h-8 mr-2"
              />
              Instagram
            </a>
            <p className="mt-5 flex items-center cursor-pointer">
              <img
                src={TT}
                alt="TikTok"
                className="w-6 h-6 md:w-8 md:h-8 mr-2"
              />
              TikTok
            </p>
            <p className="mt-5 flex items-center cursor-pointer">
              <img
                src={FB}
                alt="Facebook"
                className="w-6 h-6 md:w-8 md:h-8 mr-2"
              />
              Facebook
            </p>
            <p className="mt-5 flex items-center cursor-pointer">
              <img
                src={TWIT}
                alt="Twitter"
                className="w-6 h-6 md:w-8 md:h-8 mr-2"
              />
              Twitter / X
            </p>
            {/* <Link to="/barcode"> */}
            <p className="mt-5 flex items-center cursor-pointer">
              <img
                src={TWIT}
                alt="Twitter"
                className="w-6 h-6 md:w-8 md:h-8 mr-2"
              />
              Barcode
            </p>
            {/* </Link> */}
          </div>

          <div className="w-full sm:w-1/6 md:mb-4 mb-10  justify-between">
            <p className="font-semibold">Support</p>
            <p className="mt-2 cursor-pointer">Email</p>
            <p className="mt-2 cursor-pointer">Whatsapp</p>
          </div>
          <div className="w-full sm:w-1/6 md:mb-4 mb-10  justify-between">
            <p className="font-semibold">Download App</p>
            <div>
              <div className="mt-2 cursor-pointer">
                <img
                  src={GP}
                  className="w-32 md:w-48 lg:w-64 h-auto"
                  alt="Google Play"
                />
              </div>
              <div className="mt-2 cursor-pointer">
                <img
                  src={APS}
                  className="w-32 md:w-48 lg:w-64 h-auto"
                  alt="App Store"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
