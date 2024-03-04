import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { EditOutlined } from "@ant-design/icons";
import { Button, Input, Select, Tag } from "antd";
const { Option } = Select;
import LogoGrab from "../../../assets/logo/logoGrab.png";
import Image1 from "../../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import Mandiri from "../../../assets/Bank/Mandiri.png";
import BCA from "../../../assets/Bank/BCA.png";
import BNI from "../../../assets/Bank/BNI.png";
import OCBC from "../../../assets/Bank/OCBC.png";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Payment() {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const items = [
    {
      key: "1",
      label: "Pilih Pembayaran",
      children: [
        {
          key: "Virtual Account",
          label: "Virtual Account",
          children: [
            { key: "Mandiri", label: "Bank Mandiri", image: Mandiri },
            { key: "BCA", label: "Bank BCA", image: BCA },
            { key: "OCBC", label: "Bank OCBC", image: OCBC },
            { key: "BNI", label: "Bank BNI", image: BNI },
          ],
          itemIcon: (props) => (
            <span style={{ display: "flex", alignItems: "center" }}>
              {props.image && (
                <img
                  src={props.image}
                  alt={props.label}
                  style={{ width: 20, marginRight: 8 }}
                />
              )}
              <span>{props.label}</span>
            </span>
          ),
        },
        {
          key: "E-Wallet",
          label: "E-Wallet",
          children: [
            { key: "Mandiri", label: "Bank Mandiri", image: Mandiri },
            { key: "BCA", label: "Bank BCA", image: BCA },
            { key: "OCBC", label: "Bank OCBC", image: OCBC },
            { key: "BNI", label: "Bank BNI", image: BNI },
          ],
          itemIcon: (props) => (
            <span style={{ display: "flex", alignItems: "center" }}>
              {props.image && (
                <img
                  src={props.image}
                  alt={props.label}
                  style={{ width: 20, marginRight: 8 }}
                />
              )}
              <span>{props.label}</span>
            </span>
          ),
        },
        {
          key: "Transfer",
          label: "Transfer",
          children: [
            { key: "Mandiri", label: "Bank Mandiri", image: Mandiri },
            { key: "BCA", label: "Bank BCA", image: BCA },
            { key: "OCBC", label: "Bank OCBC", image: OCBC },
            { key: "BNI", label: "Bank BNI", image: BNI },
          ],
          itemIcon: (props) => (
            <span style={{ display: "flex", alignItems: "center" }}>
              {props.image && (
                <img
                  src={props.image}
                  alt={props.label}
                  style={{ width: 20, marginRight: 8 }}
                />
              )}
              <span>{props.label}</span>
            </span>
          ),
        },
      ],
    },
  ];

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} title={item.label}>
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={item.key}
            icon={
              <img
                src={item.image}
                alt={item.label}
                style={{ width: "36px", height: "24px", marginRight: "10px" }}
              />
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{item.label}</span>
              <span style={{ marginLeft: "auto" }}>Pilih</span>
            </div>
          </Menu.Item>
        );
      }
    });
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission logic based on selectedPaymentMethod
  }; // Nilai awal untuk range harga

  const handlePriceRangeChange = (value) => {
    // Mengatur range harga yang dipilih
    setPriceRange(value);
  };

  const deliveryOptions = [
    {
      id: 1,
      name: "Grab Instant",
      estimate: "Estimasi 20 menit",
      price: "Rp 20.000",
      logo: LogoGrab,
    },
    // Tambahkan opsi pengiriman lainnya di sini jika diperlukan
  ];

  const dataItems = [
    {
      id: 1,
      image: Image1,
      title: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      price: "Rp 24.000",
      quantity: 1,
    },
    {
      id: 1,
      image: Image1,
      title: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      price: "Rp 24.000",
      quantity: 1,
    },
    // Tambahkan item lainnya di sini jika diperlukan
  ];

  const DataDetailPesanan = [
    {
      id: 1,
      title: "Coffee Beans - Robusta Te..",
      quantity: 1,
      price: "Rp24.000",
    },
    {
      id: 2,
      title: "Tea Leaves - Green",
      quantity: 2,
      price: "Rp20.000",
    },
  ];

  const orderDetails = [
    {
      name: "Coffee Beans - Robusta Temanggung",
      quantity: "Item x 1",
      price: "Rp 24.000",
    },
    {
      name: "Hazelnut Chocobar",
      quantity: "Item x 1",
      price: "Rp 24.000",
    },
  ];

  const grabInstantDeliveryCost = "20.000"; // Assuming Grab Instant delivery cost is fixed

  const totalPrice = orderDetails.reduce((sum, order) => {
    const price = parseFloat(order.price.replace("Rp ", "").replace(".", ""));
    return sum + price;
  }, 0);

  const totalWithGrab =
    totalPrice + parseFloat(grabInstantDeliveryCost.replace(".", ""));

  return (
    <div className=" w-full h-screen">
      <Navbar />

      {/* Layar Besar */}
      <>
        <div>
          <div className="hidden md:inline lg:inline">
            <div className="flex flex-col md:flex-row md:justify-between h-auto w-screen md:p-20 space-x-5  mx-auto sm:w-[85rem]">
              <div className="sm:w-2/3 mt-14 text-black">
                <div className="mt-5">
                  <h1 className="text-3xl font-medium text-[#3B8F51]">
                    CHECKOUT
                  </h1>
                  <h1 className="text-xl font-medium mt-5">Alamat Anda</h1>
                  <div className="flex flex-col sm:flex-row mt-2 border rounded-lg border-[#41644A] bg-[#fbfff1]">
                    <div className="w-full sm:w-5/6 p-4 text-[#41644A] text-base  font-medium">
                      Jl. Raya Poncol No.36 8 9, RT.8/RW.9, Susukan, Kec.
                      Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
                      <p className="mt-2">Kode Pos: 13750</p>
                    </div>
                    <div className="w-full sm:w-1/6 p-4 sm:p-2 flex justify-end ">
                      <div className="rounded-full bg-[#e1eedd] md:w-10 md:h-10 sm:w-10 sm:h-10 px-3 py-1">
                        <EditOutlined className="mt-3 text-[#41644a] font-bold cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 ">
                  <h1 className="text-xl font-medium">Pesanan Anda</h1>
                  <>
                    {dataItems.map((item) => (
                      <div key={item.id} className="mt-5 w-full flex">
                        <div className=" w-1/6">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className=" w-full">
                          <h1 className="font-medium text-lg mb-2">{item.title}</h1>
                         <Tag color="#41644A">
                         <p className="text-white text-lg font-normal p-2">
                            {item.description}
                          </p>
                         </Tag>
                          <p className="text-[#41644A] md:text-lg font-medium mt-2">
                            {item.price} <span> x {item.quantity}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </>
                </div>
              </div>

              <div className="sm:block sm:w-1/3 mt-16 shadow-xl rounded-lg p-4 sticky top-0 bg-white h-[50%]">
                <h2 className="text-2xl text-[#41644A] font-medium  mb-4 mt-2">
                  Detail Pesanan
                </h2>

                <div className="mt-2">
                  <h1 className="text-lg font-medium">Pilih Pengiriman Anda</h1>
                  <Select
                    className="mt-2 w-full h-auto"
                    defaultValue={deliveryOptions[0].name}
                  >
                    {deliveryOptions.map((option) => (
                      <Option key={option.id} value={option.name}>
                        <div className="flex flex-col sm:flex-row items-center p-2">
                          <div className="flex justify-center items-center w-20 h-12 sm:mr-5">
                            <img
                              src={option.logo}
                              alt={option.name}
                              className="w-full h-full"
                            />
                          </div>
                          <div className="flex flex-col flex-grow">
                            <div className="font-medium text-base">
                              {option.name}
                            </div>
                            <p className="text-xs text-[#787878]">
                              {option.estimate}
                            </p>
                          </div>
                          <div className="flex items-center justify-center md:ml-auto text-[#41644A] text-base font-medium">
                            {option.price}
                          </div>
                        </div>
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="w-1/2">
                    <p className="text-lg font-medium mt-2">SubTotal </p>
                    <p className="text-gray-400">Items {orderDetails.length}</p>
                  </div>
                  <div className="w-1/4 text-[#3B8F51] text-center mt-5 md:text-base sm:text-sm font-medium">
                    Rp {totalWithGrab.toLocaleString()}
                  </div>
                </div>

                <div className="flex justify-between ">
                <div className="w-1/2">
                    <p className="text-lg font-medium mt-4">Pengiriman </p>
                  
                  </div>
                  <div className="w-1/4 text-[#3B8F51] text-center mt-5 md:text-base sm:text-sm font-medium">
                    Rp 10.000
                  </div>
                </div>
                <div className="flex justify-between ">
                <div className="w-1/2">
                    <p className="text-lg font-medium mt-4">Diskon </p>
                  
                  </div>
                  <div className="w-1/3 text-red-500 pl-5 text-center mt-5 md:text-base sm:text-sm font-medium">
                   - Rp 10.000
                  </div>
                </div>
                <div className="flex justify-between mb-4 mt-4">
                  <div className="w-1/2">
                    <p className="text-lg font-medium">Grand Total</p>
                   
                  </div>
                  <div className="w-1/4 text-[#3B8F51] text-center  md:text-lg sm:text-sm font-medium">
                    Rp {totalWithGrab.toLocaleString()}
                  </div>
                </div>

                <Input
                  placeholder="Silahkan Masukkan Voucher"
                  className="w-full h-14 mt-3 border border-[#3B8F51] placeholder-[#41644A] font-normal text-base"
                />
                <div className="bg-green mt-2 border border-[#3B8F51] rounded-[10px]">
                  <Menu
                    className="w-full rounded-[10px] text-[#41644A]"
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                  >
                    {renderMenuItems(items)}
                  </Menu>
                </div>
                <button className="bg-[#3B8F51] text-white py-2 px-4 rounded-full mt-8 w-full hover:bg-[#41644A]">
                  Bayar Sekarang
                </button>

                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Layar HP */}
      <>
        <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen mx-auto justify-start px-4 py-2 ">
          <div className="mt-28">
            <h1 className="text-[#3B8F51] text-lg font-medium">Detail Order</h1>
            <br />
            <p className="text-black text-sm ">Alamat Anda</p>
            <div className="flex  mt-2 border rounded-lg border-[#41644A] bg-[#fbfff1]">
              <div className="w-full  p-4 text-[#41644A] text-[10px]  font-medium">
                Jl. Raya Poncol No.36 8 9, RT.8/RW.9, Susukan, Kec. Ciracas,
                Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
                <p className="mt-2">Kode Pos: 13750</p>
              </div>
              <div className="w-1/6   flex justify-center ">
                <div className="rounded-full bg-[#e1eedd] px-3 py-0 h-9 mt-2 mr-1">
                  <EditOutlined className="mt-3 text-[#41644a] font-bold cursor-pointer" />
                </div>
              </div>
            </div>

           

            <div className="mt-8">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-0">
                {/* Isi konten pencarian */}
                {/* Dropdown select untuk filter */}

                <h2 className="text-sm text-[#41644A] font-medium  mb-4">
                  Detail Pesanan
                </h2>
                {orderDetails.map((order, index) => (
                  <div className="flex justify-between mb-4" key={index}>
                    <div className="w-[230px]">
                      <p className="truncate text-sm">{order.name}</p>
                      <p className="text-gray-400 text-[12px]">
                        {order.quantity}
                      </p>
                    </div>
                    <div className="w-1/4 text-[#3B8F51] text-end mt-4 text-[12px]">
                      {order.price}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between mb-4">
                  {" "}
                  <div className="w-[230px]">
                    {" "}
                    <p className="truncate text-xs text-[#3B8F51] ">
                      {" "}
                      Grab Instant{" "}
                    </p>{" "}
                    <p className="text-[#3B8F51] text-xs">Pengiriman</p>{" "}
                  </div>{" "}
                  <div className="w-1/4 text-[#3B8F51] text-end mt-4 text-xs">
                    Rp {grabInstantDeliveryCost}
                  </div>{" "}
                </div>
                <div className="flex justify-between mb-4">
                  <div className="w-1/2">
                    <p className="text-xs font-medium">Total Pesanan</p>
                    <p className="text-gray-400 text-sm">
                      Items {orderDetails.length}
                    </p>
                  </div>
                  <div className="w-1/3 text-[#3B8F51] text-center mt-4 text-base font-medium">
                    Rp {totalWithGrab.toLocaleString()}
                  </div>
                </div>

                <Input
                  placeholder="Silahkan Masukkan Voucher"
                  className="w-full h-10 mt-3 border border-[#3B8F51] placeholder-[#41644A] font-normal text-xs"
                />

                <div className="bg-green mt-2 border border-[#3B8F51] rounded-[10px]">
                  <Menu
                    className="w-full rounded-[10px] text-[#41644A]"
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                  >
                    {renderMenuItems(items)}
                  </Menu>
                </div>
                <br />
               
              </div>
              <br />
                <br />
                <br />
            </div>
          </div>
        </div>
      </>

      {/* Footer Layar HP */}
      <div className=" md:hidden lg:hidden">
        <footer className=" mt-10">
          <div className="w-full mx-auto bg-[#3B8F51] p-4">
            <div className="w-full flex mt-1">
              <div className="w-1/2  text-lg text-white">
                <p className="text-[#F7FFF1] text-xs">Total</p> Rp{" "}
                {totalWithGrab.toLocaleString()}
              </div>
              <div className="w-1/2  ">
                <Link to="/payment">
                  <Button className="bg-white rounded-full text-[#3B8F51] w-full text-xs h-full">
                    Bayar Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="hidden md:inline lg:inline">
        <Footer />
      </div>
    </div>
  );
}

export default Payment;
