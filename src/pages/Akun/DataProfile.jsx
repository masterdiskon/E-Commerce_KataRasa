import React, { useEffect, useState } from "react";
import FotoProfile from "../../../assets/Katarasa/akun.png";
import EditData from "../../../assets/Katarasa/pen.png";
import { Button, Input, Modal, Select } from "antd";
import axios from "axios";
import Baseurl from "../../Api/BaseUrl";
import Swal from "sweetalert2";

function DataProfile() {
  const [visible, setVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleOk = () => {
    // Kirim permintaan API untuk mengubah kata sandi di sini
    const token = localStorage.getItem("token"); // Ganti dengan token Anda
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const requestData = {
      passwordBaru: newPassword,
    };

    axios
      .put(
        "https://api.katarasa.id/profile/update-password",
        requestData,
        config
      )
      .then((response) => {
        console.log(response.data);
        setVisible(false);

        // Tampilkan SweetAlert ketika penggantian kata sandi berhasil
        Swal.fire({
          icon: "success",
          title: "Sukses!",
          text: "Kata sandi berhasil diubah.",
          confirmButtonColor: "#3B8F51",
        });
      })
      .catch((error) => {
        console.error(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          // Terdapat kesalahan validasi dari server
          const errorMessages = error.response.data.errors
            .map((err) => err.message)
            .join("<br>");
          Swal.fire({
            icon: "error",
            title: "Validation Error",
            html: errorMessages,
          });
        } else {
          // Terjadi kesalahan selain dari validasi server
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Terjadi kesalahan. Mohon coba lagi nanti.",
          });
        }
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const showModal = () => {
    setVisible(true);
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

  const [DataProfill, setDataProfill] = useState({
    name: "",
    gender_id: "",
    birth_date: "",
    email: "",
    phone_number: "",
  });

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

  // const handleEditPassword = () => {
  //   const requestBody = {
  //     passwordBaru: "123456",
  //   };

  //   axios
  //     .put("https://api.katarasa.id/profile/update-password", requestBody, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       // Handle success response
  //       Swal.fire({
  //         icon: "success",
  //         title: "Success",
  //         text: "Password successfully updated",
  //       });
  //       console.log("Password successfully updated:", response.data);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       Swal.fire({
  //         icon: "error",
  //         title: "Error",
  //         text: "Failed to update profile",
  //       });
  //       console.error("Error updating profile:", error);
  //     });
  // };

  return (
    <div>
      {/* Layar Besar  */}
      <>
        <div className="hidden sm:inline">
          <div className="flex space-x-2">
            <div className=" w-1/2">
              <div className="bg-[#F7FFF1] border border-[#3b8f51] rounded-lg">
                <>
                  <div className="p-2 flex justify-center items-center">
                    <img
                      src={FotoProfile}
                      alt=""
                      className="w-[265px] h-[265px]"
                    />
                  </div>
                  <div className="p-4">
                    <Button className="w-full rounded-full bg-[#3B8F51] text-white h-12 text-base">
                      Upload Foto
                    </Button>
                    <div className="text-[#3B8F51]">
                      *Maksimal size photo yang diupload kurang dari 2mb
                    </div>
                  </div>
                </>
                <br />
                <div className="p-4">
                  <div className="text-lg font-semibold">Keamanan</div>
                  <Button
                    onClick={showModal}
                    className="w-full rounded-full bg-[#3B8F51] text-white mt-2 h-12 text-base"
                  >
                    Ganti Password Akun
                  </Button>
                  <Button className="w-full rounded-full border-[#3B8F51] text-[#3B8F51] mt-2 h-12 text-base">
                    Aktifkan verifikasi Email
                  </Button>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <div className="p-3">
                <h1 className="font-bold text-lg">Data Pribadi</h1>
                <br />
                <div>
                  <label className="font-bold">Nama Anda</label>
                  <Input
                    placeholder="Noor Maya"
                    value={DataProfill.name}
                    onChange={(e) =>
                      setDataProfill({ ...DataProfill, name: e.target.value })
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
                      setDataProfill({ ...DataProfill, gender_id: value })
                    }
                  >
                    <Select.Option value={1}>Laki-laki</Select.Option>
                    <Select.Option value={2}>Perempuan</Select.Option>
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
              </div>
              <br />
              <div className="p-3">
                <h1 className="font-bold text-lg">Kontak Anda</h1>
                <br />
                <div>
                  <label className="font-bold">Alamat Email</label>
                  <Input
                    value={DataProfill.email}
                    onChange={(e) =>
                      setDataProfill({ ...DataProfill, email: e.target.value })
                    }
                    className="h-11 rounded-full mt-2 placeholder-black"
                  />
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
                        <img src={EditData} alt="" className="w-3 h-3" />
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
          </div>

          {/* Modal */}
          <Modal
            width={500}
            title={
              <>
                <span className="font-semibold text-xl">
                  Ganti Password Baru
                </span>
                <hr className="mt-2" />
              </>
            }
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
          >
            <div className="mt-2">
              <p className="font-semibold"> Email Anda </p>
              <Input
                readOnly
                value={DataProfill.email}
                className="border-green-600 h-11 rounded-full mt-2 placeholder-black"
              />
            </div>
            <div className="mt-2">
              <p className="font-semibold">Masukkan Password Baru Anda :</p>
              <Input
                className="w-full mt-2 border-green-600 h-11 rounded-full"
                placeholder="Masukkan password baru yang akan anda gunakan "
                value={newPassword}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end items-end">
              <Button
                onClick={handleOk}
                className="rounded-full mt-2 h-11 w-28 bg-green-700 text-white hover:bg-white"
              >
                Simpan
              </Button>
            </div>
          </Modal>
        </div>
      </>

      {/* Layar HP */}
      <>
        <div className="sm:inline lg:hidden md:hidden sm:w-screen w-full mx-auto ">
          <div className="h-auto w-full mx-auto">
            <div>
              <div className="bg-[#F7FFF1] border border-[#3b8f51] rounded-lg">
                <div className="flex">
                  <div className="p-2 flex justify-center items-center w-1/2">
                    <img
                      src={FotoProfile}
                      alt=""
                      className="w-[155px] h-[155px]"
                    />
                  </div>
                  <div className="p-4 w-1/2 ">
                    <Button className="w-full rounded-full bg-[#3B8F51] text-white h-12 text-base mt-7">
                      Upload Foto
                    </Button>
                    <div className="text-[#3B8F51]">
                      *Maksimal size photo yang diupload kurang dari 2mb
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div>
                <div className="p-3">
                  <h1 className="font-bold text-lg">Data Pribadi</h1>
                  <br />
                  <div>
                    <label className="font-bold">Nama Anda</label>
                    <Input
                      placeholder="Noor Maya"
                      value={DataProfill.name}
                      onChange={(e) =>
                        setDataProfill({ ...DataProfill, name: e.target.value })
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
                        setDataProfill({ ...DataProfill, gender_id: value })
                      }
                    >
                      <Select.Option value={1}>Laki-laki</Select.Option>
                      <Select.Option value={2}>Perempuan</Select.Option>
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
                </div>
              </div>
              <div className="p-3">
                <h1 className="font-bold text-lg">Kontak Anda</h1>
                <br />
                <div>
                  <label className="font-bold">Alamat Email</label>
                  <Input
                    value={DataProfill.email}
                    onChange={(e) =>
                      setDataProfill({ ...DataProfill, email: e.target.value })
                    }
                    className="h-11 rounded-full mt-2 placeholder-black"
                  />
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
                        <img src={EditData} alt="" className="w-3 h-3" />
                      </div>
                    }
                  />
                </div>
                <div className="flex mt-3 justify-end">
                  <div className="space-x-2 w-1/2">
                    {/* <Button className="rounded-full border-[#3B8F51] h-12 px-5 text-[#3B8F51]">
                  Sign Up
                </Button> */}
                    <Button
                      onClick={handleSaveProfile}
                      className="rounded-full bg-[#3B8F51] h-12 px-5 text-white w-full"
                    >
                      Simpan
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="text-lg font-semibold">Keamanan</div>
                <Button
                  onClick={showModal}
                  className="w-full rounded-full bg-[#3B8F51] text-white mt-2 h-12 text-base"
                >
                  Ganti Password Akun
                </Button>
                <Button className="w-full rounded-full border-[#3B8F51] text-[#3B8F51] mt-2 h-12 text-base">
                  Aktifkan verifikasi Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default DataProfile;
