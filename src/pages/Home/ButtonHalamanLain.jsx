import React from "react";
import BT1 from "../../assets/Button/CoffeeBean.png";
import BT2 from "../../assets/Button/Tea.png";
import BT3 from "../../assets/Button/Chocolate.png";
import BT4 from "../../assets/Button/Merchen.png";

function ButtonHalamanLain() {
  const Buttons = [
    {
      image: BT1,
      title: "Coffee Bean",
    },
    {
      image: BT2,
      title: "Coffee Bean",
    },
    {
      image: BT3,
      title: "Coffee Bean",
    },
    {
      image: BT4,
      title: "Coffee Bean",
    },

    // Tambahkan promo lainnya jika diperlukan
  ];
  return (
    <>
      <div className="md:inline lg:inline hidden">
        <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
            {Buttons.map((gambar, index) => (
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
                  <p>{gambar.title}</p>
                </div>
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
            ))}
          </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ButtonHalamanLain;
