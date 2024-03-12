import React, { useEffect, useState } from "react";
import { Segmented, Tabs } from "antd";
import Navbar from "../../layout/Navbar";
import FotoAkun from "../../../assets/Katarasa/akun.png";
import EditDataProfile from "../../../assets/Katarasa/pen.png";
import { Link } from "react-router-dom";
import DataProfile from "./DataProfile";
import Footer from "../../layout/Footer";
import Baseurl from "../../Api/BaseUrl";
import axios from "axios";
import AlamatPage from "../Cart/Alamat";
import AlamatPages from "./AlamatPages";




const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Data Profile",
    children: <DataProfile />,
  },
  {
    key: "2",
    label: "Alamat anda",
    children: <AlamatPages/>,
  },
];

const sections = [
  
  {
    title: "Transaksi",
    content: [
      { label: "History Pesanan", path: "/history" },
      { label: "Protes pesanan", path: "/protes-pesanan" },
      { label: "Pembatalan", path: "/pembatalan" },
      { label: "Transaksi bermasalah", path: "/transaksi-bermasalah" },
    ],
  },
  {
    title: "Akun",
    content: [
      { label: "Edit Profil", path: "/edit-profil" },
      { label: "Tambah Alamat", path: "/tambah-alamat" },
      { label: "Ulasan Saya", path: "/ulasan-saya" },
    ],
  },
  {
    title: "Bantuan",
    content: [
      { label: "Customer Service", path: "/customer-service" },
      { label: "Kirim Tiket Bantuan", path: "/kirim-tiket-bantuan" },
    ],
  },
];

function AkunPage() {
  const [DataProfill, setDataProfill] = useState({});
  const GetDataAlamat = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${Baseurl}profile/data-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataProfill(response.data.data);
      console.log("Data profil:", response.data.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    GetDataAlamat();
  }, []);
  return (
    <div className="w-full h-screen">
      <>
        <Navbar />
        <div className="hidden md:inline">
          <div className=" flex flex-col h-auto w-full mx-auto">
            <div className="mt-40 ">
              <div className="flex justify-center items-center w-full h-auto">
                <div className="w-[75rem] h-auto ">
                  <div className="flex space-x-4">
                    {/* Konten Kiri */}
                    <>
                      <div className="w-1/3">
                        <div className="bg-white  shadow-lg rounded-lg">
                          <div className="p-5">
                            {/* Edit Profil */}
                            <>
                              <div className="flex space-x-4">
                                <div className="w-1/3 flex justify-center items-center">
                                  <img src={FotoAkun} alt="" />
                                </div>
                                <div className="w-full">
                                  <div className="flex justify-between">
                                    <div className="text-[#3B8F51] text-base">
                                      Profil Anda
                                    </div>
                                    <div className="flex justify-center items-center text-center">
                                      <img
                                        src={EditDataProfile}
                                        alt=""
                                        className="w-3 h-3 "
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <p> {DataProfill.name}</p>{" "}
                                      {/* Menggunakan data nama */}
                                      <p>{DataProfill.email}</p>{" "}
                                      {/* Menggunakan data email */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                            <>
                            <br />
                            <div>
                            <div className="text-[#3B8F51] text-base">
                                    Alamat Utama
                                  </div> 
                                  <div className="text-base mt-2">
                                    <AlamatPage/>
                                  </div>
                            </div>
                              {sections.map((section, index) => (
                                <div key={index}>
                                  <br />
                                  <div className="text-[#3B8F51] text-base">
                                    {section.title}
                                  </div>
                                  {section.content.map((item, itemIndex) => (
                                    <div
                                      key={itemIndex}
                                      className="text-base mt-2 cursor-pointer"
                                    >
                                      <Link to={item.path}>{item.label}</Link>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </>
                          </div>
                        </div>
                      </div>
                    </>

                    {/* Konten Kanan  */}
                    <>
                      <div className="w-full">
                        <Tabs
                          defaultActiveKey="1"
                          items={items}
                          onChange={onChange}
                        />
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default AkunPage;
