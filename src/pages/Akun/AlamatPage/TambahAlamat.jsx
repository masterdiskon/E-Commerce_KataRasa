import { Button, Input, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Baseurl from "../../../Api/BaseUrl";
import Swal from "sweetalert2";

const { Option } = Select;

function TambahAlamat() {
  const [loading, setLoading] = useState(true);
  const [DataSelect, setDataSelect] = useState({});
  const [selectedProvinsi, setSelectedProvinsi] = useState(null);
  const [selectedKota, setSelectedKota] = useState(null);
  const [selectedKabupaten, setSelectedKabupaten] = useState(null);
  const [selectedKecamatan, setSelectedKecamatan] = useState(null);

  const [formData, setFormData] = useState({
    receiver_name: "",
    phone_number: "",
    address_as: "",
    company_as: "",
    divisi_as: "",
    province_id: "",
    city_id: "",
    district_kd: "",
    district_id: "",
    sub_district_id: "",
    postal_code: "",
    alamat_lengkap: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://api.katarasa.id/profile/tambah-alamat",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      // Menampilkan SweetAlert setelah berhasil menyimpan data
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Alamat berhasil disimpan!",
      }).then(() => {
        // Reload halaman setelah pengguna menekan "OK"
        window.location.reload();
      });

      // Lakukan sesuatu setelah berhasil menambah alamat, misalnya menampilkan notifikasi atau mengarahkan pengguna ke halaman lain
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.errors) {
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
    }
  };

  const handleProvinsiChange = (selectedProvinsi) => {
    setSelectedProvinsi(selectedProvinsi);
    setSelectedKota(null);
    setSelectedKabupaten(null);
    setSelectedKecamatan(null);

    // Mengatur nilai provinsi_id di formData
    setFormData({
      ...formData,
      province_id: selectedProvinsi,
      city_id: null, // Reset nilai city_id
      district_kd: null, // Reset nilai district_id
      sub_district_id: null, // Reset nilai sub_district_id
    });
  };

  const handleKotaChange = (selectedKota) => {
    setSelectedKota(selectedKota);
    setSelectedKabupaten(null);
    setSelectedKecamatan(null);

    // Mengatur nilai city_id di formData
    setFormData({
      ...formData,
      city_id: selectedKota,
      district_kd: null, // Reset nilai district_id
      sub_district_id: null, // Reset nilai sub_district_id
    });
  };

  const handleKabupatenChange = (selectedKabupaten) => {
    setSelectedKabupaten(selectedKabupaten);
    setSelectedKecamatan(null);

    // Mengatur nilai district_id di formData
    setFormData({
      ...formData,
      district_kd: selectedKabupaten,
      district_id: selectedKabupaten,
      sub_district_id: null, // Reset nilai sub_district_id
    });
  };

  const handleKecamatanChange = (selectedKecamatan) => {
    setSelectedKecamatan(selectedKecamatan);

    // Mengatur nilai sub_district_id di formData
    setFormData({
      ...formData,
      district_id: selectedKecamatan, // Menggunakan selectedKecamatan sebagai nilai district_id
      sub_district_id: selectedKecamatan,
    });
  };

  const GetSelect = async () => {
    try {
      const response = await axios.get(
        `${Baseurl}profile/select-data-wilayah?province_id=${selectedProvinsi}&city_id=${selectedKota}&district_kd=${selectedKabupaten}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log("ini data select", response.data.data);
      setDataSelect(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetSelect();
  }, [selectedProvinsi, selectedKota, selectedKabupaten]);

  return (
    <div className="mt-5">
      <div className="sm:flex sm:space-x-4 mt-2">
        <div className="sm:w-1/2 ">
          <div className="font-semibold ">Tempat pengiriman</div>
          <Input
            type="text"
            name="address_as"
            value={formData.address_as}
            onChange={handleChange}
            placeholder="Masukkan Nama Alamat Anda di sini."
            className="mt-2 h-11 border border-solid border-[#3B8F51] rounded-lg"
          />
        </div>
        <div className="sm:w-1/2 sm:mt-0 mt-2 ">
          <div className="font-semibold">Nama Alamat</div>
          <Input
            type="text"
            name="company_as"
            value={formData.company_as}
            onChange={handleChange}
            placeholder="Masukkan tempat pengiriman Anda di sini."
            className="mt-2 sm:w-full h-11 border border-solid border-[#3B8F51] rounded-lg"
          />
        </div>
      </div>
      <div className="sm:flex sm:space-x-4 mt-2 ">
        <div className="sm:w-1/2 ">
          <div className="font-semibold ">Nama Penerima</div>
          <Input
            type="text"
            name="receiver_name"
            value={formData.receiver_name}
            onChange={handleChange}
            placeholder="Masukkan Nama Penerima Anda di sini."
            className="mt-2  h-11 border border-solid border-[#3B8F51] rounded-lg"
          />
        </div>
        <div className="sm:w-1/2">
          <div className="font-semibold">Nomor Penerima</div>
          <Input
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            prefix={<div>+62</div>}
            type="number"
            className="mt-2  h-11 border border-solid border-[#3B8F51] rounded-lg"
          />
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="font-semibold">Alamat Lengkap</div>
        <Input.TextArea
          name="alamat_lengkap"
          value={formData.alamat_lengkap}
          onChange={handleChange}
          className="mt-2 h-[320px] border border-solid border-[#3B8F51] rounded-lg"
        />
      </div>

      <div className="w-full sm:flex sm:space-x-4 mt-2">
        <div className="sm:w-1/2 ">
          <div className="font-semibold">Provinsi</div>
          <Select
            showSearch // Add showSearch prop here
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            className="mt-2  border border-solid border-[#3B8F51] w-full rounded-lg  h-11"
            onChange={handleProvinsiChange}
          >
            {loading ? (
              <Select.Option>Loading...</Select.Option>
            ) : (
              DataSelect.selectProvinsi.map((provinsi) => (
                <Select.Option
                  key={provinsi.province_id}
                  value={provinsi.province_id}
                >
                  {provinsi.name}
                </Select.Option>
              ))
            )}
          </Select>
        </div>
        <div className="sm:w-1/2 ">
          <div className="font-semibold">Kabupaten</div>
          <Select
            showSearch // Add showSearch prop here
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            className="border border-solid mt-2 border-[#3B8F51] w-full rounded-lg  h-11"
            onChange={handleKotaChange}
            disabled={!selectedProvinsi}
          >
            {loading ? (
              <Select.Option>Loading...</Select.Option>
            ) : (
              DataSelect.selectKota.map((kota) => (
                <Select.Option key={kota.city_id} value={kota.city_id}>
                  {kota.name}
                </Select.Option>
              ))
            )}
          </Select>
        </div>
      </div>

      <div className="w-full sm:flex sm:space-x-4 mt-2">
        <div className="sm:w-1/2 ">
          <div className="font-semibold">Kota</div>
          <Select
            showSearch // Add showSearch prop here
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            className="border border-solid mt-2 border-[#3B8F51] w-full rounded-lg  h-11"
            onChange={handleKabupatenChange}
            disabled={!selectedKota}
          >
            {loading ? (
              <Select.Option>Loading...</Select.Option>
            ) : (
              DataSelect.selectKabupaten.map((kabupaten) => (
                <Select.Option
                  key={kabupaten.district_kd}
                  value={kabupaten.district_kd}
                >
                  {kabupaten.name}
                </Select.Option>
              ))
            )}
          </Select>
        </div>
        <div className="sm:w-1/2 ">
          <div className="font-semibold">Kecamatan</div>
          <Select
            showSearch // Add showSearch prop here
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            className="border border-solid mt-2 border-[#3B8F51] w-full rounded-lg  h-11"
            onChange={handleKecamatanChange}
            disabled={!selectedKabupaten}
          >
            {loading ? (
              <Select.Option>Loading...</Select.Option>
            ) : (
              DataSelect.selectKecamatan.map((kecamatan) => (
                <Select.Option
                  key={kecamatan.sub_district_id}
                  value={kecamatan.sub_district_id}
                >
                  {kecamatan.name}
                </Select.Option>
              ))
            )}
          </Select>
        </div>
      </div>

      <div className="sm:flex sm:space-x-4">
        <div className="mt-2 sm:w-1/2">
          <div className="font-semibold">Kode Pos</div>
          <Input
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
            type="number"
            className="mt-2  h-11 border border-solid border-[#3B8F51] rounded-lg"
          />
        </div>
        {/*  */}
      </div>

      <div className="sm:flex mt-3 justify-end ">
        <Button
          onClick={handleSubmit}
          className="rounded-full bg-[#3B8F51] h-12 px-5 text-white w-full sm:w-1/4"
        >
          Simpan
        </Button>
      </div>
    </div>
  );
}

export default TambahAlamat;
