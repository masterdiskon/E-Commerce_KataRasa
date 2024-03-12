import React, { useState } from "react";
import { Form, Input, Select, Menu, Button, Checkbox } from "antd";
import { MailOutlined } from "@ant-design/icons";

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

  return (
    <div className="container mx-auto p-4">
      <Menu
        className="w-full"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ backgroundColor: "transparent" }}
      >
        {alamatData.map((alamat) => (
          <Menu.SubMenu
            key={alamat.key}
            icon={<MailOutlined />}
            title={<span style={{ fontWeight: "bold" }}>{alamat.title}</span>}
            className="rounded border border-solid border-[#3B8F51]"
          >
            <div style={{ padding: "16px" }}>
              <Form
                key={alamat.key}
                name={`form_${alamat.key}`}
                form={form}
                onFinish={onFinish}
                initialValues={{ remember: true }}
                layout="vertical"
              >
                <div className="w-full flex space-x-4">
                  <div className="w-1/2 ">
                    <Form.Item label="Nama Alamat" name="nama_alamat">
                      <Input className="border border-solid border-[#3B8F51] rounded-full" />
                    </Form.Item>
                  </div>
                  <div className="w-1/2 ">
                    <Form.Item
                      label="Tempat Pengiriman"
                      name="tempatPengiriman"
                    >
                      <Select className="border border-solid border-[#3B8F51] w-full rounded-lg h-[32px]">
                        <Option value={alamat.title}>{alamat.title}</Option>
                      </Select>
                    </Form.Item>
                  </div>
                </div>
                <Form.Item label="Nama Penerima" name="nama_penerima">
                  <Input className="border border-solid border-[#3B8F51] rounded-full" />
                </Form.Item>
                <Form.Item label="Nomor Penerima" name="nomor_penerima">
                  <Input
                    prefix={<div>+62</div>}
                    type="number"
                    className="border border-solid border-[#3B8F51] rounded-full"
                  />
                </Form.Item>
                <Form.Item label="Alamat Lengkap" name="alamat">
                  <Input.TextArea className="border border-solid border-[#3B8F51] rounded-lg" />
                </Form.Item>
                <div className="w-full flex space-x-4">
                  <div className="w-1/2 ">
                    <Form.Item label="Kota" name="kota">
                      <Select className="border border-solid border-[#3B8F51] w-full rounded-lg h-[32px]">
                        <Option value="Kantor Eureka">Kantor Eureka</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="w-1/2 ">
                    <Form.Item label="Kecamatan" name="kecamatan">
                      <Select className="border border-solid border-[#3B8F51] w-full rounded-lg h-[32px]">
                        <Option value="Kantor Eureka">Kantor Eureka</Option>
                      </Select>
                    </Form.Item>
                  </div>
                </div>
                <div className="w-full flex space-x-4">
                  <div className="w-1/2 ">
                    <Form.Item label="Kelurahan" name="kelurahan">
                      <Select className="border border-solid border-[#3B8F51] w-full rounded-lg h-[32px]">
                        <Option value="Kantor Eureka">Kantor Eureka</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="w-1/2 ">
                    <Form.Item label="Kode Pos" name="kode_pos">
                      <Input
                        type="number"
                        className="border border-solid border-[#3B8F51] rounded-full"
                      />
                    </Form.Item>
                  </div>
                </div>
                <Form.Item
                  name="is_default"
                  valuePropName="checked"
                  initialValue={false}
                >
                  <Checkbox>Alamat Default</Checkbox>
                </Form.Item>
               
              </Form>
            </div>
          </Menu.SubMenu>
        ))}
      </Menu>
    </div>
  );
}

export default AlamatPages;
