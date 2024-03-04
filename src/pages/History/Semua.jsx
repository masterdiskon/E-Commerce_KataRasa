import React from "react";
import IMG1 from "../../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import { Button, Tag } from "antd";

function Semua() {
  const data = [
    {
      date: "09-12-2023",
      items: "Robusta Temanggung x1, Hazelnut Chocobar x1.",
      status: "Sedang Dikemas",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    {
      date: "07-12-2023",
      items: "Hazelnut Choco bar x1, Minty Chocobar x1",
      status: "Belum Bayar",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    {
      date: "29-11-2023",
      items: "Strawberry Chocobox x2, Taro Chocobar x2",
      status: "Pesanan Selesai",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    {
      date: "22-11-2023",
      items: "Robusta Temanggung x2",
      status: "Pesanan Selesai",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    {
      date: "22-11-2023",
      items: "Robusta Temanggung x4",
      status: "Dibatalkan",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <div className=" flex flex-col h-auto w-full mx-auto ">
        <div className="mt-5">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row md:justify-between ${
                item.status === "Dibatalkan"
                  ? "opacity-50 pointer-events-none"
                  : ""
              }`}
            >
              <div className="w-full md:w-1/6 md:p-4 mb-4 md:mb-0 relative">
                <img
                  src={item.image}
                  alt=""
                  className={item.status === "Dibatalkan" ? "opacity-50" : ""}
                />
              </div>
              <div className="w-full md:w-full p-4 mb-4 md:mb-0 relative">
                <h1 className="text-green-700 font-medium text-xl">
                  {item.date}
                </h1>
                <br />
                <p>{item.items}</p>
                <br />
                <Tag
                  className={
                    item.status === "Dibatalkan"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }
                  color={
                    item.status === "Sedang Dikemas"
                      ? "lime"
                      : item.status === "Belum Bayar"
                      ? "gold"
                      : item.status === "Dibatalkan"
                      ? "gray"
                      : "#3B8F51"
                  }
                >
                  {item.status}
                </Tag>
              </div>
              <div className="w-full md:w-1/6 mr-20 mb-4 md:mb-0 relative">
                <div className="flex p-4 space-x-1 text-[#3B8F51] text-base">
                  <a>Lihat Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Semua;
