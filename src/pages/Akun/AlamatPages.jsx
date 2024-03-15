import React, { useEffect, useState } from "react";
import { Form, Input, Select, Menu, Button, Checkbox } from "antd";
import { MailOutlined } from "@ant-design/icons";
import axios from "axios";
import Baseurl from "../../Api/BaseUrl";

const { Option } = Select;

function AlamatPages() {
  const [form] = Form.useForm();

  const [alamatData] = useState([
    {
      key: "1",
      title: "Kantor Eureka",
    },
    {
      key: "2",
      title: "Rumah",
    },
    // Tambahkan data alamat lainnya di sini jika diperlukan
  ]);

  const onFinish = (values) => {
    console.log("Received values:", values);
    form.resetFields();
  };

  const [DataAlamatUser, setDataAlamatUser] = useState([]);

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
                    value={alamat.province.name}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
                  >
                    {DataAlamatUser.map((address, index) => (
                      <Option key={index} value={address.city.name}>
                        {address.city.name}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="w-1/2 ">
                  <div className="font-semibold">Kota</div>
                  <Select
                    value={alamat.city.name}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
                  >
                    {DataAlamatUser.map((address, index) => (
                      <Option key={index} value={address.city.name}>
                        {address.city.name}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="w-full flex space-x-4 mt-5">
                <div className="w-1/2 ">
                  <div className="font-semibold">Kelurahan</div>
                  <Select
                    value={alamat.district.name}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
                  >
                    {DataAlamatUser.map((address, index) => (
                      <Option key={index} value={address.city.name}>
                        {address.city.name}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="w-1/2 ">
                  <div className="font-semibold">Kecamatan</div>
                  <Select
                    value={alamat.sub_district.name}
                    className="border border-solid mt-4 border-[#3B8F51] w-full rounded-lg h-[32px]"
                  >
                    {DataAlamatUser.map((address, index) => (
                      <Option key={index} value={address.city.name}>
                        {address.city.name}
                      </Option>
                    ))}
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
            </div>
          </Menu.SubMenu>
        ))}
      </Menu>
    </div>
  );
}

export default AlamatPages;
