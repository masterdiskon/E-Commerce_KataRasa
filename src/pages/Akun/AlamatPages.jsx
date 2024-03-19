import React, { useEffect, useState } from "react";
import { Form, Input, Select, Menu, Button, Checkbox } from "antd";
import { MailOutlined } from "@ant-design/icons";
import axios from "axios";
import Baseurl from "../../Api/BaseUrl";

const { Option } = Select;

function AlamatPages() {
  const [loading, setLoading] = useState(true);
  const [DataAlamatUser, setDataAlamatUser] = useState([]);
  const [DataSelect, setDataSelect] = useState({});
  const [selectedProvinsi, setSelectedProvinsi] = useState(null);
  const [selectedKota, setSelectedKota] = useState(null);
  const [selectedKabupaten, setSelectedKabupaten] = useState(null);
  const [selectedKecamatan, setSelectedKecamatan] = useState(null);

  const GetDataAlamatAll = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${Baseurl}profile/data-alamat`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataAlamatUser(response.data.data);
      console.log("Alamat Pengguna :", response.data.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
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
    GetDataAlamatAll();
  }, []);

  useEffect(() => {
    GetSelect();
  }, [selectedProvinsi, selectedKota, selectedKabupaten]);

  const handleProvinsiChange = (selectedProvinsi) => {
    setSelectedProvinsi(selectedProvinsi);
    setSelectedKota(null); // Reset nilai kota ketika provinsi berubah
    setSelectedKabupaten(null); // Reset nilai kabupaten ketika provinsi berubah
    setSelectedKecamatan(null); // Reset nilai kecamatan ketika provinsi berubah
  };

  const handleKotaChange = (selectedKota) => {
    setSelectedKota(selectedKota);
  };

  const handleKabupatenChange = (selectedKabupaten) => {
    setSelectedKabupaten(selectedKabupaten);
  };

  const handleKecamatanChange = (selectedKecamatan) => {
    setSelectedKecamatan(selectedKecamatan);
  };

  

  return (
    <div className="container mx-auto p-4">
      <Menu
        className="w-full"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ backgroundColor: "transparent" }}
      >
        {DataAlamatUser.map((alamat) => (
          <Menu.SubMenu
            key={alamat.id}
            icon={<MailOutlined />}
            title={
              <span style={{ fontWeight: "bold" }}>{alamat.address_as}</span>
            }
            className="rounded border border-solid border-[#3B8F51] mb-4"
          >
            <div style={{ padding: "16px" }}>
              <div>
                <div className="w-full flex space-x-4">
                  <div className="w-1/2">
                    <div className="font-semibold">Nama Alamat</div>
                    <Input
                      className="mt-4 border border-solid border-[#3B8F51] rounded-lg"
                      value={alamat.address_as}
                    />
                  </div>
                  <div className="w-1/2 ">
                    <div className="font-semibold">Tempat pengiriman</div>
                    <Select
                      value={alamat.address_as}
                      className="mt-4 border border-solid border-[#3B8F51] w-full rounded-lg h-[32px]"
                    >
                      <Option value={alamat.title}>{alamat.title}</Option>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="mt-5 w-1/2">
                  <div className="font-semibold">Nama Penerima</div>
                  <Input
                    value={alamat.receiver_name}
                    className="mt-4 border border-solid border-[#3B8F51] rounded-lg"
                  />
                </div>
                <div className="mt-5 w-1/2">
                  <div className="font-semibold">Nomor Penerima</div>
                  <Input
                    value={alamat.phone_number}
                    prefix={<div>+62</div>}
                    type="number"
                    className="mt-4 border border-solid border-[#3B8F51] rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-5">
                <div className="font-semibold">Alamat Lengkap</div>
                <Input.TextArea
                  value={alamat.complete_address}
                  className="mt-4 border border-solid border-[#3B8F51] rounded-lg"
                />
              </div>

              <div className="w-full flex space-x-4 mt-5">
                <div className="w-1/2 ">
                  <div className="font-semibold">Provinsi</div>
                  <Select
                    placeholder={alamat.province.name}
                    value={selectedProvinsi}
                    className="mt-4 border border-solid border-[#3B8F51] w-full rounded-lg h-[32px]"
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
                <div className="w-1/2 ">
                  <div className="font-semibold">Kota</div>
                  <Select
                    placeholder={alamat.city.name}
                    value={selectedKota}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
                    onChange={handleKotaChange}
                    disabled={!selectedProvinsi} // Men-disable select kota jika belum ada provinsi terpilih
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
              <div className="w-full flex space-x-4 mt-5">
                <div className="w-1/2 ">
                  <div className="font-semibold">Kelurahan</div>
                  <Select
                    placeholder={alamat.district.name}
                    value={selectedKabupaten}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
                    onChange={handleKabupatenChange}
                    disabled={!selectedKota} // Men-disable select kabupaten jika belum ada kota terpilih
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
                <div className="w-1/2 ">
                  <div className="font-semibold">Kecamatan</div>
                  <Select
                    placeholder={alamat.sub_district.name}
                    value={selectedKecamatan}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
                    onChange={handleKecamatanChange}
                    disabled={!selectedKabupaten} // Men-disable select kecamatan jika belum ada kabupaten terpilih
                  >
                    {loading ? (
                      <Select.Option>Loading...</Select.Option>
                    ) : (
                      DataSelect.selectKecamatan.map((kecamatan) => (
                        <Select.Option
                          key={kecamatan.sub_district_kd}
                          value={kecamatan.sub_district_kd}
                        >
                          {kecamatan.name}
                        </Select.Option>
                      ))
                    )}
                  </Select>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="mt-5 w-1/2">
                  <div className="font-semibold">Kode Pos</div>
                  <Input
                    value={alamat.postal_code}
                    className="mt-4 border border-solid border-[#3B8F51] rounded-lg"
                  />
                </div>
                {/*  */}
              </div>
              <div  className="flex mt-3 justify-end">
                <Button className="rounded-full bg-[#3B8F51] h-12 px-5 text-white">
                  Simpan
                </Button>
              </div>
            </div>
          </Menu.SubMenu>
        ))}
      </Menu>
    </div>
  );
}

export default AlamatPages;
