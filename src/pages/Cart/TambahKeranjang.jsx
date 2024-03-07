import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button, Input, Radio, Tag } from "antd";
import produk1 from "../../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import produk2 from "../../../assets/ProductCoffeeBeans/product coffee beans-1.png";
import produk3 from "../../../assets/ProductCoffeeBeans/product coffee beans-3.png";
import Tea from "../../../assets/ProductTea/Tea.png";
import { Link } from "react-router-dom";
import Baseurl from "../../Api/BaseUrl";
import axios from "axios";
import { DeleteOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");

function TambahKeranjang() {
  const [quantity, setQuantity] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [kurangiClicked, setKurangiClicked] = useState(false);
  const [tambahClicked, setTambahClicked] = useState(false);
  const [jumlah, setJumlah] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [DeleteData, setDeleteData] = useState();
  const [Increase, setIncrease] = useState();
  const [Decrease, setDecrease] = useState();
  const [checkedItems, setCheckedItems] = useState([]);
  const [DataCartAll, setDataCartAll] = useState([]);
  const [cartItems, setCartItems] = useState(DataCartAll);

  const handleRadioClick = (item) => {
    setClickCount((prevCount) => (prevCount + 1) % 3);

    // Add your custom logic here based on the click count
    // You may want to toggle between different colors
    // (e.g., green, grey, and white), or implement your own color logic.
  };

  const [items, setItems] = useState([
    {
      id: 1,
      image: produk1,
      qty: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "1000gr, Exclude Gula, Plastics & no extra",
      harga: "24.000",
      category: "coffee",
    },
    {
      id: 2,
      image: produk2,
      qty: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "coffee",
    },
    {
      id: 3,
      image: produk3,
      qty: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "coffee",
    },
    {
      id: 4,
      image: produk3,
      qty: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "coffee",
    },
    {
      id: 5,
      image: Tea,
      qty: 0,
      name: "Teh Dewi - Jasmin Tea",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "tea",
    },
    {
      id: 6,
      image: Tea,
      qty: 0,
      name: "Teh Dewi - Jasmin Tea",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "tea",
    },
    {
      id: 7,
      image: Tea,
      qty: 0,
      name: "Teh Dewi - Jasmin Tea",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "tea",
    },
    {
      id: 7,
      image: Tea,
      qty: 0,
      name: "Teh Dewi - Jasmin Tea",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "tea",
    },
  ]);

  // const handleDecreaseQuantity = (id) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  //     )
  //   );
  // };

  // const handleIncreaseQuantity = (id) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

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

  // Calculate the total order value
  const totalPrice = orderDetails.reduce((sum, order) => {
    const price = parseFloat(order.price.replace("Rp ", "").replace(".", ""));
    return sum + price;
  }, 0);

  const handleClick = (itemId) => {
    // Mencari index dari item yang diklik
    const index = checkedItems.indexOf(itemId);
    // Meng-copy array checkedItems
    const newCheckedItems = [...checkedItems];

    // Jika item sudah ada dalam checkedItems, maka hapus dari array
    if (index > -1) {
      newCheckedItems.splice(index, 1);
    } else {
      // Jika item belum ada dalam checkedItems, tambahkan ke array
      newCheckedItems.push(itemId);
    }

    // Update state checkedItems
    setCheckedItems(newCheckedItems);
  };

  const GetTambahKeranjang = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${Baseurl}cart/data-cart?page=1&limit=5&is_gift=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const dataKeranjang = response.data.data.data;
      setDataCartAll(dataKeranjang);

      console.log("Data keranjang:", dataKeranjang);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    GetTambahKeranjang();
  }, []);

  const handleDelete = async (cartId) => {
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
          `https://api.katarasa.id/cart/delete-dari-cart?cart_id=${cartId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          }
        );

        if (response.ok) {
          // Item deleted successfully
          Swal.fire("Success", "Item deleted successfully!", "success");
          GetTambahKeranjang();
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

  const handleIncreaseQuantity = (itemId) => {};

  const handleDecreaseQuantity = (itemId) => {};

  const totalPrices = DataCartAll.reduce(
    (accumulator, order) => accumulator + order.total,
    0
  );

  const DataCeklist = async (cartId) => {
    const token = localStorage.getItem("token");
    try {
      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `https://api.katarasa.id/cart/set-select-cart?cart_id=${cartId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      GetTambahKeranjang();

      console.log("Data ceklist", response.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const totalDiscount = DataCartAll.reduce((acc, item) => {
    // Jika item tidak dicentang, kembalikan nilai 0 untuk diskon
    if (item.is_checked !== 1) {
      return acc;
    }
    return item.discount.length > 0
      ? acc + item.discount[0].discount_price
      : acc;
  }, 0);

  const subtotal = DataCartAll.reduce(
    (total, item) => (item.is_checked === 1 ? total + item.total : total),
    0
  );

  const grandTotal = subtotal - totalDiscount;

  const [masingQTY, setmasingQTY] = useState("");

  async function UpdateQty(tambagKurang, qty) {
    // console.log(tambagKurang, qty);
    if (tambagKurang == "kurang") {
      console.log(`ini kurang`, qty.qty - 1);
      await updateQty(qty, "kurang");
    } else {
      console.log(`ini tambah`, qty.qty + 1);
      await updateQty(qty, "tambah");
    }
  }

  async function updateQty(qty, tambahKurang) {
    console.log(`ini api`, qty);
    let qtyok = "";
    if (tambahKurang == "kurang") {
      qtyok = parseInt(qty.qty) - 1;
    } else {
      qtyok = parseInt(qty.qty) + 1;
    }
    const body = {
      cart_id: qty.cart_id,
      qty: qtyok,
    };

    try {
      const response = await axios.put(`${Baseurl}cart/update-qty-cart`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set header Content-Type
        },
      });

      // Tambahkan kode untuk menangani respons dari API
      console.log(response.data); // Tampilkan data respons untuk pemeriksaan

      // Jika respons berhasil, panggil fungsi GetTambahKeranjang
      GetTambahKeranjang();
    } catch (error) {
      console.error("Error updating quantity:", error);
      // Tambahkan kode untuk menangani kesalahan, jika diperlukan
    }
  }

  return (
    <div className="w-full h-screen">
      <Navbar />

      {/* Layar Besar */}
      <>
        <div>
          <div className="hidden md:inline lg:inline">
            <div className="flex flex-col md:flex-row md:justify-between h-auto w-screen md:p-20 space-x-6  mx-auto sm:w-[84rem] ">
              <div className="mt-20 mx-auto w-screen h-auto space-x-1 ">
                <h1 className="text-3xl font-medium text-[#3B8F51]">
                  Keranjang Anda
                </h1>
                <div className="flex w-full mt-5 ">
                  {/* Konten 1 */}
                  <>
                    <div className="w-full h-[30rem] overflow-auto">
                      {DataCartAll.map((item) => (
                        <div key={item.id} className="w-full p-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="h-5 w-5 text-green-500"
                              onChange={() => DataCeklist(item.cart_id)}
                              checked={item.is_checked === 1}
                            />
                            <div className="w-1/5 flex justify-center items-center">
                              <img
                                src={item.image}
                                className="w-28 h-24 ml-5 rounded-md"
                                alt="Coffee Beans"
                              />
                            </div>
                            <div className="w-1/2 ml-6">
                              <div className="ml-2">
                                <p className="text-base font-medium">
                                  {item.product}
                                </p>
                                <p className="text-[#41644A] mt-2 text-sm font-medium">
                                  <Tag color="#41644A">
                                    {item.size}gr , {item.gula},{" "}
                                    {item.packaging}
                                  </Tag>
                                </p>
                                <div className="flex items-center mt-3">
                                  <button
                                    onClick={(data, index) =>
                                      UpdateQty("kurang", item, data, index)
                                    }
                                    className={`px-3 py-1 rounded-full mr-2 ${
                                      item.quantity > 0
                                        ? "bg-[#3B8F51] text-white"
                                        : "bg-gray-300"
                                    }`}
                                  >
                                    -
                                  </button>
                                  <p className="text-[#3B8F51]">{item.qty}</p>
                                  <button
                                    onClick={(data, index) =>
                                      UpdateQty("tambah", item, data, index)
                                    }
                                    className={`px-3 py-1 rounded-full ml-2 ${
                                      item.quantity > 0
                                        ? "bg-[#3B8F51] text-white"
                                        : "bg-gray-300"
                                    }`}
                                  >
                                    +
                                  </button>
                                  <span className="ml-6 text-[#3B8F51] font-semibold">
                                    Rp {item.total}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                className="text-red-600 w-10"
                                onClick={() => handleDelete(item.cart_id)}
                              >
                                <DeleteOutlined />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                  {/* Konten 2 */}
                  <>
                    <div
                      className="w-1/2 p-5 bg-white rounded-lg shadow-xl h-fit"
                      style={{ height: "fit-content" }}
                    >
                      <h1 className="text-2xl font-medium mb-5 text-[#3B8F51]">
                        Detail Pesanan
                      </h1>
                      {/* {DataCartAll.map((order, index) => (
                        <div className="flex justify-between mb-4" key={index}>
                          <div className="w-[230px]">
                            <p className="truncate text-lg">{order.product}</p>
                            <p className="text-gray-400">Item x {order.qty}</p>
                          </div>
                          <div className="w-1/4 text-[#3B8F51] text-end mt-5">
                            {order.formated_price_total}
                          </div>
                        </div>
                      ))} */}
                      {DataCartAll.map((item) => (
                        <>
                          {item.is_checked == 1 && (
                            <div>
                              <div className="flex justify-between ">
                                <div className="w-1/2">
                                  <p className="text-lg font-medium">
                                    {item.product}
                                  </p>
                                  <p className="text-gray-400">
                                    Item x {item.qty}
                                  </p>
                                </div>
                                <div className="w-1/3 text-[#3B8F51] text-end mt-5 text-xl font-medium">
                                  Rp {item.total}
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                      <div className="flex justify-between">
                        <div className="w-1/2">
                          <p className="text-lg font-medium mt-5">Sub Total</p>
                        </div>
                        <div className="w-1/3 text-[#3B8F51] text-end mt-5  text-xl font-medium">
                          Rp{" "}
                          {DataCartAll.reduce(
                            (total, item) =>
                              item.is_checked === 1
                                ? total + item.total
                                : total,
                            0
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between ">
                        <div className="w-1/2">
                          <p className="text-lg font-medium mt-5">Diskon</p>
                        </div>

                        <div className="w-1/3 text-red-500 text-end mt-5 text-xl font-medium">
                          - Rp {totalDiscount}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="w-1/2">
                          <p className="text-xl font-medium mt-5">
                            Grand Total
                          </p>
                        </div>
                        <div className="w-1/3 text-[#3B8F51] text-end mt-5 mb-5 text-2xl font-medium">
                          Rp {grandTotal}
                        </div>
                      </div>

                      {/* <Input
                        placeholder="Silahkan Masukkan Voucher"
                        className="w-full h-14 border border-[#3B8F51] placeholder-[#41644A] font-normal text-base"
                      /> */}

                      <button className="bg-[#3B8F51] h-[50px] text-white py-2 px-4 rounded-full mt-5 w-full hover:bg-[#41644A]">
                        <Link to="/payment">Bayar Sekarang</Link>
                      </button>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Layar HP */}
      <>
        <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen mx-auto justify-start px-4 py-2 ">
          <div className="  mt-24 text-black p-3">
            <h1 className="text-[#3B8F51] text-lg font-medium">Your Chart</h1>
            <br />

            <>
              <div className=" h-[41rem] overflow-auto">
                <div className="w-full">
                  {DataCartAll.map((item) => (
                    <div key={item.id} className="w-full">
                      <div className="w-full p-2">
                        <div className="flex items-center">
                          <div
                            key={item.id}
                            className="flex items-center space-x-4"
                          >
                            <input
                              type="checkbox"
                              className="h-5 w-5 text-green-500"
                              onChange={() => DataCeklist(item.cart_id)}
                              checked={item.is_checked === 1}
                            />
                          </div>
                          <div className="w-1/3">
                            <img
                              src={item.image}
                              className="w-16 h-16 ml-2 rounded-md"
                              alt="Coffee Beans"
                            />
                          </div>
                          <div className="w-full  ">
                            <div className=" flex">
                              <div className="w-full ">
                                <p className="text-sm font-medium">
                                  {item.product}
                                </p>
                              </div>
                            </div>
                            <div className=" flex">
                              <div className="w-1/2 ">
                                <p className="text-[#41644A] mt-2 text-[10px] font-medium">
                                  <Tag color="#41644A">
                                    {item.size}gr , {item.gula},{" "}
                                    {item.packaging}
                                  </Tag>
                                </p>
                              </div>
                              <div className="flex justify-center w-full items-center mt-1">
                                <button
                                  onClick={(data, index) =>
                                    UpdateQty("kurang", item, data, index)
                                  }
                                  className={`px-2 py-1 rounded-full mr-1 text-xs ${
                                    item.quantity > 0
                                      ? "bg-[#3B8F51] text-white"
                                      : "bg-gray-300"
                                  }`}
                                >
                                  -
                                </button>
                                <p className="text-[#3B8F51] text-xs">
                                  {item.qty}
                                </p>
                                <button
                                  onClick={(data, index) =>
                                    UpdateQty("tambah", item, data, index)
                                  }
                                  className={`px-2 py-1 rounded-full ml-1 text-xs ${
                                    item.quantity > 0
                                      ? "bg-[#3B8F51] text-white"
                                      : "bg-gray-300"
                                  }`}
                                >
                                  +
                                </button>
                              </div>

                              <div className="w-1/4 ">
                                <div className="justify-end items-end flex mt-2">
                                  <button
                                    className="text-red-600 w-10"
                                    onClick={() => handleDelete(item.cart_id)}
                                  >
                                    <DeleteOutlined />
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="flex">
                              <div className="w-1/2  text-[#3B8F51] text-sm font-semibold">
                                Rp {item.total}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          </div>
        </div>
      </>

      <div className=" md:hidden lg:hidden">
        <footer className=" mt-10">
          <div className="w-full mx-auto bg-[#3B8F51] p-4">
            <div className="w-full flex mt-1">
              <div className="w-1/2  text-lg text-white">
                <p className="text-[#F7FFF1] text-xs">Total</p>
                Rp {totalPrices}
              </div>
              <div className="w-1/2  ">
                <Link to="/payment">
                  <Button className="bg-white rounded-full text-[#3B8F51] w-full text-xs h-full">
                    Selanjutnya
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="hidden md:inline lg:inline mt-0">
        <Footer />
      </div>
    </div>
  );
}

export default TambahKeranjang;
