import React, { useEffect, useState } from "react";
import { Form, Input, Select, Menu, Button, Checkbox, Modal } from "antd";
import { MailOutlined } from "@ant-design/icons";
import axios from "axios";
import Baseurl from "../../Api/BaseUrl";
import Swal from "sweetalert2";
import TambahAlamat from "./AlamatPage/TambahAlamat";
import { DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

function AlamatPages() {
  const [loading, setLoading] = useState(true);
  const [DataAlamatUser, setDataAlamatUser] = useState([]);
  const [DataSelect, setDataSelect] = useState({});
  const [selectedProvinsi, setSelectedProvinsi] = useState(null);
  const [selectedKota, setSelectedKota] = useState(null);
  const [selectedKabupaten, setSelectedKabupaten] = useState(null);
  const [selectedKecamatan, setSelectedKecamatan] = useState(null);
  const [editData, setEditData] = useState({});
  const [visible, setVisible] = useState(false);

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
  useEffect(() => {
    GetDataAlamatAll();
  }, []);

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

  const handleProvinsiChange = (selectedProvinsi) => {
    setSelectedProvinsi(selectedProvinsi);
    setSelectedKota(null);
    setSelectedKabupaten(null);
    setSelectedKecamatan(null);
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

  const handleInputChange = (e, id, field) => {
    const { name, value } = e.target;

    const newDataAlamatUser = DataAlamatUser.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        setEditData((prevEditData) => ({ ...prevEditData, [id]: updatedItem }));
        return updatedItem;
      }
      return item;
    });

    setDataAlamatUser(newDataAlamatUser);
  };

  const handleSaveAddress = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const editedAddressData = editData[id];

      if (!editedAddressData) return;

      const requestBody = {
        receiver_name: editedAddressData.receiver_name || "",
        phone_number: editedAddressData.phone_number || "",
        address_as: editedAddressData.address_as || "",
        province_id: selectedProvinsi || editedAddressData.province_id || "",
        city_id: selectedKota || editedAddressData.city_id || "",
        district_kd: selectedKabupaten || editedAddressData.district_kd || "",
        sub_district_id:
          selectedKecamatan || editedAddressData.sub_district_id || "",
        postal_code: editedAddressData.postal_code || "",
        alamat_lengkap: editedAddressData.complete_address || "",
      };

      const response = await axios.put(
        `https://api.katarasa.id/profile/edit-alamat?id_address=${id}`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Address successfully updated",
      });
      console.log("Address successfully updated:", response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update address",
      });
      console.error("Error updating address:", error);
    }
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    // Show confirmation prompt before deleting the item
    const confirmation = await Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });

    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(
          `https://api.katarasa.id/profile/delete-alamat?id_address=${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          }
        );

        if (response.ok) {
          // Item deleted successfully
          Swal.fire("Success", "Item deleted successfully!", "success");
          GetDataAlamatAll();
          // You can also update the state or perform any other actions as needed
        } else {
          // Handle error response
          Swal.fire("Error", "Failed to delete item!", "error");
        }
      } catch (error) {
        // Handle fetch error
        console.error("Error deleting item:", error);
        Swal.fire("Error", "Failed to delete item!", "error");
      }
    }
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
              <div className="mb-10">
                <div className="flex items-center ">
                  <input
                    value={alamat.isPrimary}
                    type="checkbox"
                    checked={alamat.isPrimary === 1}
                    onChange={(e) =>
                      handleInputChange(
                        { target: { value: e.target.checked ? 1 : 0 } }, // mimic input event
                        alamat.id,
                        "isPrimary"
                      )
                    }
                    className="mr-2"
                  />
                  <label htmlFor="priority">Set as Priority</label>
                </div>
              </div>
              <div>
                <div className="w-full flex space-x-4">
                  <div className="w-1/2">
                    <div className="font-semibold">Nama Alamat</div>
                    <Input
                      className="mt-4 border border-solid border-[#3B8F51] rounded-lg"
                      value={alamat.address_as}
                      onChange={(e) =>
                        handleInputChange(e, alamat.id, "address_as")
                      }
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
                    className="mt-4 border border-solid border-[#3B8F51] rounded-lg"
                    value={alamat.receiver_name}
                    onChange={(e) =>
                      handleInputChange(e, alamat.id, "receiver_name")
                    }
                  />
                </div>
                <div className="mt-5 w-1/2">
                  <div className="font-semibold">Nomor Penerima</div>
                  <Input
                    onChange={(e) =>
                      handleInputChange(e, alamat.id, "phone_number")
                    }
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
                  onChange={(e) =>
                    handleInputChange(e, alamat.id, "complete_address")
                  }
                  value={alamat.complete_address}
                  className="mt-4 border border-solid border-[#3B8F51] rounded-lg"
                />
              </div>

              <div className="w-full flex space-x-4 mt-5">
                <div className="w-1/2 ">
                  <div className="font-semibold">Provinsi</div>
                  <Select
                    showSearch // Add showSearch prop here
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    value={selectedProvinsi || alamat.province.id}
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
                   showSearch // Add showSearch prop here
                   filterOption={(input, option) =>
                     option.children
                       .toLowerCase()
                       .indexOf(input.toLowerCase()) >= 0
                   }
                    value={selectedKota || alamat.city.name}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
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
              <div className="w-full flex space-x-4 mt-5">
                <div className="w-1/2 ">
                  <div className="font-semibold">Kabupaten</div>
                  <Select
                   showSearch // Add showSearch prop here
                   filterOption={(input, option) =>
                     option.children
                       .toLowerCase()
                       .indexOf(input.toLowerCase()) >= 0
                   }
                    value={selectedKabupaten || alamat.district.name}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
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
                <div className="w-1/2 ">
                  <div className="font-semibold">Kecamatan</div>
                  <Select
                   showSearch // Add showSearch prop here
                   filterOption={(input, option) =>
                     option.children
                       .toLowerCase()
                       .indexOf(input.toLowerCase()) >= 0
                   }
                    value={selectedKecamatan || alamat.sub_district.name}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
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
              <div className="flex space-x-4">
                <div className="mt-5 w-1/2">
                  <div className="font-semibold">Kode Pos</div>
                  <Input
                    onChange={(e) =>
                      handleInputChange(e, alamat.id, "postal_code")
                    }
                    value={alamat.postal_code}
                    className="mt-4 border border-solid border-[#3B8F51] rounded-lg"
                  />
                </div>
                {/*  */}
              </div>
              <div className="flex mt-3 justify-end space-x-2">
                <Button
                  onClick={() => handleDelete(alamat.id)}
                  className="rounded-full h-10 hover:bg-white bg-white hover:text-black text-red-600 border-red-600"
                >
                  Delete
                </Button>
                <Button
                  onClick={() => handleSaveAddress(alamat.id)}
                  className="rounded-full bg-[#3B8F51] h-10 px-5 text-white"
                >
                  Simpan
                </Button>
              </div>
            </div>
          </Menu.SubMenu>
        ))}
      </Menu>

      <div className="mb-5 ">
        <Button
          className="rounded-full h-11 hover:bg-white bg-green-700 hover:text-black text-white"
          onClick={showModal}
        >
          Tambah Alamat
        </Button>
      </div>
      <Modal
        width={700}
        title={
          <span className="font-semibold text-2xl">
            Tambah Alamat
            <hr className="mt-2" />
          </span>
        }
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}

        // footer={[
        //   <Button key="cancel" onClick={handleCancel}>
        //     Batal
        //   </Button>,
        //   <Button key="submit" type="primary" onClick={handleOk}>
        //     Simpan
        //   </Button>,
        // ]}
      >
        <TambahAlamat />
      </Modal>
    </div>
  );
}

export default AlamatPages;
