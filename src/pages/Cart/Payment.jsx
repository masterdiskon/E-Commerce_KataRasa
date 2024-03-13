import React, { useEffect, useState } from "react";
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
import Baseurl from "../../Api/BaseUrl";
import axios from "axios";
import Alamat from "./Alamat";
import AlamatPage from "./Alamat";

function Payment() {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [openKeys, setOpenKeys] = useState([]);
  const [DataCheckoutAll, setDataCheckoutAll] = useState([]);
  const [DataSummaryAll, setDataSummaryAll] = useState([]);
  const [DataAlamat, setDataAlamat] = useState({});
  const [selectedShipping, setSelectedShipping] = useState("");
  const [shippingCost, setShippingCost] = useState(null);

  const GetDataCheckout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${Baseurl}checkout/data-checkout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataCheckoutAll(response.data.data.items);
      setDataSummaryAll(response.data.data.summary);

      response.data.data.items.forEach((item) => {
        console.log("data diskon", item.discount);
      });
      console.log("Data checkout:", response.data.data.items);

      console.log("Data summary:", response.data.data.summary);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const GetDataAlamat = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${Baseurl}profile/data-alamat`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataAlamat(response.data.data[0]);
      console.log("Data Alamat:", response.data.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    GetDataCheckout();
    GetDataAlamat();
  }, []);

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

  const handleShippingChange = (event) => {
    setSelectedShipping(event.target.value);
    // Ambil harga pengiriman dari data JSON
    const selectedCost = selectPrice.find(
      (cost) => cost.service === event.target.value
    );
    if (selectedCost) {
      setShippingCost(selectedCost.cost[0].value);
    } else {
      setShippingCost(null);
    }
  };

  const selectPrice = [
    {
      service: "OKE",
      description: "Ongkos Kirim Ekonomis",
      cost: [
        {
          value: 53000,
          etd: "4-5",
          note: "",
        },
      ],
    },
    {
      service: "REG",
      description: "Layanan Reguler",
      cost: [
        {
          value: 62000,
          etd: "3-4",
          note: "",
        },
      ],
    },
  ];

  const subtotal = DataSummaryAll.subTotalNumber;

  // Fungsi untuk menghitung grand total
  function calculateGrandTotal(subtotal, shippingCost) {
    return subtotal + shippingCost;
  }

  // Menghitung grand total
  const grandTotal = calculateGrandTotal(subtotal, shippingCost);

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
                    <div className="w-full sm:w-full p-4 text-[#41644A] text-base  font-medium">
                      <div>
                        <p>
                          {DataAlamat.receiver_name}
                          <span>({DataAlamat.address_as})</span>
                        </p>
                        {DataAlamat && (
                          <p>
                            {DataAlamat.complete_address},{" "}
                            {DataAlamat.district && DataAlamat.district.name},{" "}
                            {DataAlamat.sub_district &&
                              DataAlamat.sub_district.name}
                            , {DataAlamat.city && DataAlamat.city.name},
                            {DataAlamat.province && DataAlamat.province.name}
                          </p>
                        )}
                        <p className="mt-2">
                          No.Telp : {DataAlamat.phone_number}
                        </p>
                        <p className="mt-2">
                          Kode Pos: {DataAlamat.postal_code}
                        </p>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/5 sm:p-2 flex justify-end">
                      <div className="border-3 border-solid border-[#000000]">
                        <EditOutlined className="text-[#41644a]  bg-[#e1eedd] px-3 py-3 rounded-full font-bold cursor-pointer " />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 ">
                  <h1 className="text-xl font-medium">Detail Pesanan </h1>
                  <>
                    {DataCheckoutAll.map((item) => (
                      <div key={item.id} className="mt-5 w-full flex space-x-3">
                        <div className=" w-1/6 flex justify-center items-center relative">
                          <img src={item.image} alt={item.name} />
                          {item.discount && (
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                              {item.discount[0].potongan}%
                            </div>
                          )}
                        </div>
                        <div className=" w-full">
                          <h1 className="font-medium text-lg mb-2">
                            {item.name}
                          </h1>
                          <Tag color="#41644A">
                            <p className="text-white text-xs font-normal p-2">
                              {item.size}gr, {item.gula}, {item.packaging}
                            </p>
                          </Tag>
                          <p className="text-[#41644A] md:text-lg font-medium mt-2">
                            <p>
                              Rp{" "}
                              {item.price !== null && item.discount !== null
                                ? (
                                    item.price -
                                    (item.price * item.discount[0].potongan) /
                                      100
                                  ).toLocaleString("id-ID")
                                : item.price !== null
                                ? item.price.toLocaleString("id-ID")
                                : null}
                              <span> x {item.qtyCart}</span>
                            </p>
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
                  <select
                    className="h-12 p-2 w-full mt-2 border border-solid-[#3B8F51] text-[#3B8F51] rounded-lg"
                    value={selectedShipping}
                    onChange={handleShippingChange}
                  >
                    <option value="">Pilih pengiriman</option>
                    <option value="OKE">Ongkos Kirim Ekonomis (OKE)</option>
                    <option value="REG">Layanan Reguler (REG)</option>
                  </select>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="w-1/2">
                    <p className="text-lg font-medium mt-2">SubTotal </p>
                    <p className="text-gray-400">
                      Items {DataSummaryAll.totalItems}
                    </p>
                  </div>
                  <div className="w-1/4 text-[#3B8F51] text-end mt-8 md:text-base sm:text-sm font-medium">
                    {DataSummaryAll.subTotal}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between ">
                    <div className="w-1/2">
                      <p className="text-lg font-medium mt-4">
                        {" "}
                        <h2>Detail Pengiriman</h2>{" "}
                      </p>
                    </div>
                    {selectedShipping && (
                      <div className="w-1/4 text-[#3B8F51] text-end mt-5 md:text-base sm:text-sm font-medium">
                        <p>{selectedShipping}</p>
                      </div>
                    )}
                    {/* Anda bisa menambahkan detail lainnya sesuai kebutuhan, seperti cost, etd, note, dsb. */}
                  </div>
                </div>

                <div className="flex justify-between ">
                  <div className="w-1/2">
                    <p className="text-lg font-medium mt-4">
                      Harga Pengiriman{" "}
                    </p>
                  </div>
                  <div className="w-1/4 text-[#3B8F51] text-end mt-5 md:text-base sm:text-sm font-medium">
                    {shippingCost !== null && (
                      <p> Rp {shippingCost.toLocaleString("id-ID")}</p>
                    )}
                  </div>
                </div>
                {/* <div className="flex justify-between ">
                  <div className="w-1/2">
                    <p className="text-lg font-medium mt-4">Diskon </p>
                  </div>
                  <div className="w-1/3 text-red-500 pl-5 text-center mt-5 md:text-base sm:text-sm font-medium">
                    - Rp 10.000
                  </div>
                </div> */}
                <br />
                <hr />
                <div className="flex justify-between mt-5">
                  <div className="w-1/2">
                    <p className="text-lg font-medium">Grand Total</p>
                  </div>
                  <div className="w-1/4 text-[#3B8F51] text-center  md:text-lg sm:text-sm font-medium">
                    Rp {grandTotal.toLocaleString("id-ID")}
                  </div>
                </div>

                <Input
                  placeholder="Silahkan Masukkan Voucher"
                  className="w-full h-[55px] mt-[20px] border border-[#3B8F51] placeholder-[#41644A] font-normal text-base"
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
                <button className="bg-[#3B8F51] h-[50px] text-white py-2 px-4 rounded-full mt-[20px] w-full hover:bg-[#41644A]">
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
                <div>
                  <p>
                    {DataAlamat.receiver_name}
                    <span>({DataAlamat.address_as})</span>
                  </p>
                  {DataAlamat && (
                    <p>
                      {DataAlamat.complete_address},{" "}
                      {DataAlamat.district && DataAlamat.district.name},{" "}
                      {DataAlamat.sub_district && DataAlamat.sub_district.name},{" "}
                      {DataAlamat.city && DataAlamat.city.name},
                      {DataAlamat.province && DataAlamat.province.name}
                    </p>
                  )}
                  <p className="mt-2">No.Telp : {DataAlamat.phone_number}</p>
                  <p className="mt-2">Kode Pos: {DataAlamat.postal_code}</p>
                </div>
              </div>
              <div className="w-1/6   flex justify-center ">
                <div className="rounded-full bg-[#e1eedd] px-3 py-0 h-9 mt-2 mr-1">
                  <EditOutlined className="mt-3 text-[#41644a] font-bold cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h1 className="text-sm font-medium">Pilih Pengiriman Anda</h1>
              <select
                className="h-12 p-2 w-full mt-2 border border-solid-[#3B8F51] text-[#3B8F51] rounded-lg text-sm"
                value={selectedShipping}
                onChange={handleShippingChange}
              >
                <option value="">Pilih pengiriman</option>
                <option value="OKE">Ongkos Kirim Ekonomis (OKE)</option>
                <option value="REG">Layanan Reguler (REG)</option>
              </select>
            </div>

            <div className="mt-8">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-0">
                {/* Isi konten pencarian */}
                {/* Dropdown select untuk filter */}

                <h2 className="text-sm text-[#41644A] font-medium  mb-4">
                  Detail Pesanan
                </h2>
                {DataCheckoutAll.map((order, index) => (
                  <div
                    className="flex justify-between mb-4 space-x-4"
                    key={index}
                  >
                    <div className=" w-1/6 flex justify-center items-center relative">
                      <img src={order.image} alt={order.name} />
                      {order.discount && (
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[8px] px-2 py-1 rounded-md">
                              {order.discount[0].potongan}%
                            </div>
                          )}
                    </div>
                    <div className="w-[230px]">
                      <p className="truncate text-sm">{order.name}</p>
                      <Tag color="#41644A">
                        <p className="text-white text-xs font-normal ">
                          {order.size}gr, {order.gula}, {order.packaging}
                        </p>
                      </Tag>
                      <p className="text-gray-400 text-[12px]">
                        Item x {order.qtyCart}
                      </p>
                    </div>
                    <div className="w-1/4 text-[#3B8F51] text-end mt-4 text-[12px]">
                      <p>
                        Rp{" "}
                        {(order.finalPrice * order.qtyCart).toLocaleString(
                          "id-ID"
                        )}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between ">
                  {" "}
                  <div className="w-1/2">
                    {" "}
                    <p className="text-sm font-medium mt-4">
                      {" "}
                      <h2>SubTotal</h2>{" "}
                    </p>
                  </div>{" "}
                  <div className=" text-[#3B8F51] text-end mt-4  text-xs">
                    {DataSummaryAll.subTotal}
                  </div>{" "}
                </div>
                <div className="flex justify-between ">
                  {" "}
                  <div className="w-1/2">
                    {" "}
                    <p className="text-sm font-medium mt-4">
                      {" "}
                      <h2>Detail Pengiriman</h2>{" "}
                    </p>
                  </div>{" "}
                  <div className=" text-[#3B8F51] text-end  text-xs">
                    {selectedShipping && (
                      <div className="w-1/4 text-[#3B8F51] text-end mt-5 md:text-base sm:text-sm font-medium">
                        <p>{selectedShipping}</p>
                      </div>
                    )}
                  </div>{" "}
                </div>
                <div className="flex justify-between mb-4">
                  {" "}
                  <div className="w-1/2">
                    {" "}
                    <p className="text-sm font-medium mt-4">
                      {" "}
                      <h2> Harga Pengiriman </h2>{" "}
                    </p>
                  </div>{" "}
                  <div className=" text-[#3B8F51] text-end  text-xs">
                    {selectedShipping && (
                      <div className=" text-[#3B8F51] text-end mt-5 md:text-base sm:text-sm font-medium">
                        {shippingCost !== null && (
                          <p> Rp {shippingCost.toLocaleString("id-ID")}</p>
                        )}
                      </div>
                    )}
                  </div>{" "}
                </div>
                <hr />
                <div className="flex justify-between mb-4 mt-2">
                  <div className="w-1/2">
                    <p className="text-base font-medium">Grand Total</p>
                  </div>
                  <div className="w-1/3 text-[#3B8F51] text-center  text-base font-medium">
                    <div className="text-[#3B8F51] text-end text-base font-medium">
                      Rp {grandTotal.toLocaleString("id-ID")}
                    </div>
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
                {grandTotal.toLocaleString("id-ID")}
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
