import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Segmented, Select, Tabs } from "antd";
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
import Swal from "sweetalert2";

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
    children: <AlamatPages />,
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
      { label: "Tambah Alamat", path: "/akunsaya" },
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
  const [DataProfill, setDataProfill] = useState({
    name: "",
    gender_id: "",
    birth_date: "",
    email: "",
    phone_number: "",
  });
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
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

  const token = localStorage.getItem("token");

  const handleSaveProfile = () => {
    const requestBody = {
      namaLengkap: DataProfill.name,
      nip: "P2580",
      corporate: "RajaCepat, PT",
      department: "IT Developer",
      tanggalLahir: DataProfill.birth_date,
      phoneNumber: DataProfill.phone_number,
      gender: DataProfill.gender_id,
    };

    axios
      .put("https://api.katarasa.id/profile/edit-profile", requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle success response
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Profile successfully updated",
        });
        console.log("Profile successfully updated:", response.data);
      })
      .catch((error) => {
        // Handle error
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update profile",
        });
        console.error("Error updating profile:", error);
      });
  };
  return (
    <div className="w-full h-screen">
      <Navbar />
      <>
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
                                        className="w-3 h-3 cursor-pointer"
                                        onClick={showModal}
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
                                  <AlamatPage />
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

                      <Modal
                        width={700}
                        title={
                          <>
                            <span className="font-semibold text-xl">
                              Edit Data Profile
                            </span>
                            <hr className="mt-2" />
                          </>
                        }
                        visible={visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={false}
                      >
                        <div className=" w-full">
                          <div className="p-3">
                            <br />
                            <div>
                              <label className="font-bold">Nama Anda</label>
                              <Input
                                placeholder="Noor Maya"
                                value={DataProfill.name}
                                onChange={(e) =>
                                  setDataProfill({
                                    ...DataProfill,
                                    name: e.target.value,
                                  })
                                }
                                className="h-11 rounded-full mt-2 placeholder-black"
                              />
                            </div>
                            <br />
                            <div>
                              <label className="font-bold">Jenis Kelamin</label>
                              <Select
                                placeholder="Pilih gender"
                                value={DataProfill.gender_id}
                                className="h-11 rounded-full mt-2 w-full placeholder-black"
                                onChange={(value) =>
                                  setDataProfill({
                                    ...DataProfill,
                                    gender_id: value,
                                  })
                                }
                              >
                                <Select.Option value={1}>
                                  Laki-laki
                                </Select.Option>
                                <Select.Option value={2}>
                                  Perempuan
                                </Select.Option>
                              </Select>
                            </div>
                            <br />
                            <div>
                              <label className="font-bold">Tanggal Lahir</label>
                              <Input
                                value={DataProfill.birth_date}
                                onChange={(e) =>
                                  setDataProfill({
                                    ...DataProfill,
                                    birth_date: e.target.value,
                                  })
                                }
                                className="h-11 rounded-full mt-2 placeholder-black"
                              />
                            </div>
                            <br />
                            <div className="p-3">
                              <h1 className="font-bold text-lg">Kontak Anda</h1>
                              <br />
                              <div>
                                <label className="font-bold">
                                  Alamat Email
                                </label>
                                <Input
                                  value={DataProfill.email}
                                  onChange={(e) =>
                                    setDataProfill({
                                      ...DataProfill,
                                      email: e.target.value,
                                    })
                                  }
                                  className="h-11 rounded-full mt-2 placeholder-black"
                                />
                              </div>
                            </div>
                            <br />
                            <div>
                              <label className="font-bold">Nomor Telepon</label>
                              <Input
                                prefix={<div>+62</div>}
                                type="number"
                                value={DataProfill.phone_number}
                                onChange={(e) =>
                                  setDataProfill({
                                    ...DataProfill,
                                    phone_number: e.target.value,
                                  })
                                }
                                className="h-11 rounded-full mt-2 placeholder-black"
                                suffix={
                                  <div>
                                    <img
                                      src={EditDataProfile}
                                      alt=""
                                      className="w-3 h-3"
                                    />
                                  </div>
                                }
                              />
                            </div>
                            <div className="flex mt-3 justify-end">
                              <div className="space-x-2">
                                {/* <Button className="rounded-full border-[#3B8F51] h-12 px-5 text-[#3B8F51]">
                  Sign Up
                </Button> */}
                                <Button
                                  onClick={handleSaveProfile}
                                  className="rounded-full bg-[#3B8F51] h-12 px-5 text-white"
                                >
                                  Simpan
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal>
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

      <>
        <div className="sm:inline lg:hidden md:hidden sm:w-full w-full mx-auto justify-start px-4 py-2 ">
          <div className="h-auto w-full mx-auto">
            <div className="mt-28">
              {" "}
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
      </>
      <Footer />
    </div>
  );
}

export default AkunPage;
