import React, { useEffect, useState } from "react";
import IMG1 from "../../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import { Button, Tag } from "antd";
import axios from "axios";
import Baseurl from "../../Api/BaseUrl";

function Semua() {
  const [DataAllOrder, setDataAllOrder] = useState([])
  const data = [
    {
      date: "09-12-2023",
      items: "Coffee Beans - Coffee Rebusta",
      status: "Sedang Dikemas",
      datee: "Senin, 12 Februari 2024",
      NoResi: "INV.12389-320832-38921",
      Harga: "90.000",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    {
      date: "07-12-2023",
      items: "Hazelnut Choco bar  ",
      status: "Belum Bayar",
      datee: "Senin, 12 Februari 2024",
      NoResi: "INV.12389-320832-38921",
      Harga: "90.000",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    {
      date: "29-11-2023",
      items: "Strawberry Chocobox ",
      status: "Pesanan Selesai",
      datee: "Senin, 12 Februari 2024",
      NoResi: "INV.12389-320832-38921",
      Harga: "90.000",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    {
      date: "22-11-2023",
      items: "Robusta Temanggung ",
      status: "Pesanan Selesai",
      datee: "Senin, 12 Februari 2024",
      NoResi: "INV.12389-320832-38921",
      Harga: "90.000",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    {
      date: "22-11-2023",
      items: "Robusta Temanggung ",
      status: "Dibatalkan",
      datee: "Senin, 12 Februari 2024",
      NoResi: "INV.12389-320832-38921",
      Harga: "90.000",
      image: IMG1, // IMG1 merupakan variabel yang berisi URL gambar
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  const GetDataOrderAll = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${Baseurl}order/data-order?page=1&limit=10&status=`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      console.log("Data Order:", response.data.data.items);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    GetDataOrderAll();
  }, []);

  

  return (
    <div>
      <div className="h-auto  w-full mx-auto ">
        <div className="mt-5  h-[70rem] overflow-auto">
          {data.map((item, index) => (
            <div className="shadow-lg mb-4 rounded-3xl">
              <div
                key={index}
                className={` md:justify-between p-6 ${
                  item.status === "Dibatalkan"
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
              >
                
                <div className=" flex text-[#000000] font-medium">
                  <div className="w-1/2 ">{item.datee}</div>
                  <div className="w-1/2  text-end">{item.NoResi}</div>
                </div>
                <div className="flex  space-x-4 pt-2">
                  <div className="w-1/6 pt-2 mb-4 md:mb-0 relative ">
                    <img
                      src={item.image}
                      alt=""
                      className={
                        item.status === "Dibatalkan" ? "opacity-50" : ""
                      }
                    />
                  </div>
                  <div className="pt-2 w-full">
                    <p className=" text-[22px] font-medium">{item.items}</p>
                    <p className="text-[#3B8F51] text-[18px] font-medium">
                      <span className="mr-3">x1 </span>{" "}
                      <span>Rp{item.Harga}</span>
                    </p>
                  </div>
                  <div className="w-1/5 pt-2 text-end justify-end mt-2">
                    <p className="text-[#787878]">Total Belanja</p>
                    <p className=" text-[22px] font-medium text-[#3B8F51]">
                      Rp 270.000
                    </p>
                  </div>
                </div>
                <div className="flex w-full mt-4">
                  <div className=" w-1/2 text-[#3B8F51] text-base ">
                    <div className="bg-[#f7fff1] rounded-full h-10 w-1/2 text-center justify-center items-center flex" >Lihat detail pesanan </div>
                  </div>
                  <div className=" w-1/2 flex justify-end space-x-2">
                    <Button className="rounded-full border-solid border-[#3B8F51] text-[#3B8F51] h-10">
                      Lacak Pesanan
                    </Button>
                    <Button className="rounded-full bg-[#3B8F51] text-white h-10">
                      Pesanan Diterima
                    </Button>
                  </div>
                </div>

                {/* <div className="w-full md:w-full p-4 mb-4 md:mb-0 relative">
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
                </div> */}
                {/* <div className="w-full md:w-1/6 mr-20 mb-4 md:mb-0 relative">
                  <div className="flex p-4 space-x-1 text-[#3B8F51] text-base">
                    <a>Lihat Details</a>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Semua;
