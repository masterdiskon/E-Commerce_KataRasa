import React, { useEffect, useState } from "react";
import FotoProfile from "../../../assets/Katarasa/akun.png";
import EditData from "../../../assets/Katarasa/pen.png";
import { Button, Input, Select } from "antd";
import axios from "axios";
import Baseurl from "../../Api/BaseUrl";
import Swal from "sweetalert2";

function DataProfile() {
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
          icon: 'success',
          title: 'Success',
          text: 'Profile successfully updated',
        });
        console.log("Profile successfully updated:", response.data);
      })
      .catch((error) => {
        // Handle error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update profile',
        });
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div>
      <div className="flex space-x-2">
        <div className=" w-1/2">
          <div className="bg-white border-[#3B8F51] rounded-lg">
            <>
              <div className="p-2 flex justify-center items-center">
                <img src={FotoProfile} alt="" className="w-[265px] h-[265px]" />
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

            <div className="p-4">
              <div className="text-lg font-semibold">Keamanan</div>
              <Button className="w-full rounded-full bg-[#3B8F51] text-white mt-2 h-12 text-base">
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
                  setDataProfill({ ...DataProfill, birth_date: e.target.value })
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
    </div>
  );
}

export default DataProfile;
