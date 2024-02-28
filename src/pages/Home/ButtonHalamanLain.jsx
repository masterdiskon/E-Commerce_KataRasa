import React from "react";
import BT1 from "../../../assets/Produk/CoffeBeans.png";
import BT2 from "../../../assets/Produk/TeaLeaves.png";
import BT3 from "../../../assets/Produk/Chocolate.png";
import BT4 from "../../../assets/Produk/Merch.png";
import { Link } from "react-router-dom";

function ButtonHalamanLain() {
  const Buttons = [
    {
      id: "1",
      image: BT1,
      title: "Coffee Bean",
      path: "/product/coffee", // Tentukan path yang sesuai untuk setiap tombol
    },
    {
      id: "2",
      image: BT2,
      title: "Tea Leavess",
      path: "/product/tea",
    },
    {
      id: "3",
      image: BT3,
      title: "Chocolate Snack",
      path: "/product/chocolate",
    },
    {
      id: "4",
      image: BT4,
      title: "Merch & Others",
      path: "/product/merch",
    },
  ];

  return (
    <>
      <div className="md:inline lg:inline hidden">
        <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Buttons.map((gambar, index) => (
              <div
                key={index}
                className="justify-start mt-2"
                style={{ position: "relative" }}
              >
                <Link to={gambar.path}>
                  <img
                    src={gambar.image}
                    className="w-full h-auto md:w-[285px] md:h-[140px] rounded-2xl"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                    }}
                  >
                    <p>{gambar.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Layar HP */}
      <>
        <div className="md:hidden lg:hidden inline">
          <div className="text-black mx-auto justify-center flex px-5 py-2 mt-5">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
            
              {Buttons.map((gambar, index) => (
                 <Link to={gambar.path}>
                <div
                  key={index}
                  className="justify-start mt-2"
                  style={{ position: "relative" }}
                >
                 
                  <img
                    src={gambar.image}
                    className="w-full h-auto md:w-[285px] md:h-[140px]"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                    }}
                  >
                    <p className="text-xs">{gambar.title}</p>
                  </div>
                </div>
                </Link>
              ))}
             
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ButtonHalamanLain;
