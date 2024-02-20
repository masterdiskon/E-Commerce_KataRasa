import React, { useEffect, useState } from "react";
import LogoKatarasa from "../assets/Katarasa/KataRasa.png";
import IconOrder from "../assets/KeranjangPutih.png";
import IconGoogle from "../assets/logo/Google.png";
import IconElogs from "../assets/logo/Elogs.png";
import SearchIcon from "../assets/Search.png";
import keranjangIcon from "../assets/Keranjang.png";
import { Button, Dropdown, Input, InputNumber, Menu, Modal, Tag } from "antd";
import {
  SearchOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LeftOutlined,
  ArrowLeftOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { API_Login } from "../func/FungsiLogin";

function Navbar() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleSignIn, setPasswordVisibleSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staticName, setStaticName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleSignIn, setVisibleSignIn] = useState(false);
  const [visibleOTP, setVisibleOTP] = useState(false);
  const [OTP, setOTP] = useState("");
  const [timer, setTimer] = useState(90); // State untuk menyimpan nilai timer
  const [intervalId, setIntervalId] = useState(null);
  const [visibleVerif, setVisibleVerif] = useState(false);

  // Fungsi untuk mengubah nilai timer
  const handleTimerChange = (value) => {
    setTimerValue(value);
  };

  // Modal OTP
  const handleOkOTP = () => {
    setVisibleOTP(false);
    setTimer(90); // Reset timer saat modal ditutup
  };

  const handleCancelOTP = () => {
    setVisibleOTP(false);
    setTimer(90); // Reset timer saat modal ditutup
  };

  const handleButtonClick = () => {
    setVisibleOTP(true);
  };

  // Sign In
  const showModalSignIn = () => {
    setVisibleSignIn(true);
  };

  const handleCancelSignIn = () => {
    setVisibleSignIn(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibilitySignIn = () => {
    setPasswordVisibleSignIn(!setPasswordVisibleSignIn);
  };

  // Login
  const handleLogin = () => {
    // Menggunakan email dan password statis
    const staticEmail = "nmaya7371@gmail.com";
    const staticPassword = "akumaya098";
    const staticName = "maya";

    // Proses validasi login
    if (email === staticEmail && password === staticPassword) {
      setIsLoggedIn(true);
      setStaticName(staticName); // Set nama pengguna setelah berhasil login
      setModalVisible(false);
    } else {
      // Handle jika login gagal (misalnya, menampilkan pesan kesalahan)
    }
  };

  const showModal = () => {
    setVisible(true);
  };

  // Fungsi untuk menyembunyikan modal
  const handleCancel = () => {
    setVisible(false);
  };

  const handleLoginOrSignIn = () => {
    // Logika untuk tindakan login atau sign in di sini
    // Setelah login atau sign in berhasil, tutup dropdown dengan menetapkan isMenuOpen ke false
    setIsMenuOpen(false);
  };

  const menu = (
    <Menu className="w-36">
      <br />
      <Menu.Item key="menu">
        <Link to="/menu" className=" px-8 py-1  ">
          <span className="text-[#3B8F51] text-base">Home</span>
        </Link>
      </Menu.Item>
      <br />
      <Menu.Item key="promo">
        <Link to="/promo" className=" px-8 py-1  ">
          {" "}
          <span className="text-[#3B8F51] text-base">Promo</span>
        </Link>
      </Menu.Item>
      <br />
      <Menu className="flex justify-center">
        <Menu.Item>
          <Link to="/tambahkeranjang">
            <img src={keranjangIcon} alt="keranjang" className="w-7 h-6 ml-8" />
          </Link>
        </Menu.Item>
      </Menu>
      <hr className="border border-[#3B8F51]" />
      <br />

      <Menu.Item>
        <Button
          onClick={() => {
            handleLoginOrSignIn();
            setModalVisible(true);
          }}
          className="text-white bg-[#3B8F51] border border-[#3B8F51] rounded-full px-8 py-1 ml-2 transition-colors duration-300 ease-in-out hover:bg-white hover:border-[#3B8F51]"
        >
          Login
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button
          onClick={() => {
            handleLoginOrSignIn();
            setVisibleSignIn(true);
          }}
          className="text-[#3B8F51] border border-[#3B8F51] rounded-full px-7 py-1 ml-2 transition-colors duration-300 ease-in-out hover:bg-[#3B8F51] hover:border-none"
        >
          Sign In
        </Button>
      </Menu.Item>

      <br />
    </Menu>
  );

  useEffect(() => {
    if (visibleOTP) {
      const id = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => clearInterval(id);
    }
  }, [visibleOTP]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  const handleKirimUlangClick = () => {
    clearInterval(intervalId); // Hentikan interval saat tombol verifikasi diklik
    setTimer(90); // Atur ulang timer
    setIntervalId(null); // Reset intervalId
  };

  // Modal Verifikasi
  const showModalVerif = () => {
    setVisibleVerif(true);
  };

  const handleOkVerif = () => {
    setVisibleVerif(false);
  };

  const handleCancelVerif = () => {
    setVisibleVerif(false);
  };

  return (
    <div className="flex mx-auto bg-red-700 sm:w-screen w-screen  fixed sm:z-[10] z-[999] ">
      <nav className="  shadow-lg sm:w-full w-screen flex top-0 bg-[#41644A] pt-5 pb-5  justify-center items-center  ">
        <div className="flex items-center ">
          {/* Search Layar HP */}

          <>
            <div className="md:hidden mr-12">
              <img
                src={SearchIcon}
                alt="order"
                className="w-[30px] h-[30px]"
                onClick={showModal} // Panggil showModal saat gambar diklik
              />

              <Modal
                title={
                  <span className="text-[#3B8F51]">
                    Cari menu favorite-mu!{" "}
                  </span>
                }
                closeIcon={<CloseOutlined style={{ color: "#3B8F51" }} />}
                visible={visible} // State untuk mengontrol keterlihatan modal
                onCancel={handleCancel} // Panggil handleCancel saat modal ditutup
                footer={null} // Tidak menampilkan footer
              >
                <Input
                  placeholder="Cari disini"
                  className="border border-[#3B8F51] rounded-full mt-4"
                />
                <Link to="/pencarian">
                  {" "}
                  <Button className="mt-5 w-full text-white bg-[#3B8F51] border border-[#3B8F51] rounded-full px-8 py-1  transition-colors duration-300 ease-in-out hover:bg-white hover:border-[#3B8F51]">
                    Search
                  </Button>
                </Link>
              </Modal>
            </div>
          </>
          <div className="mr-14 ">
            {/* Logo */}
            <Link to="/home">
              {" "}
              <img
                src={LogoKatarasa}
                alt="Logo"
                className=" h-[59px]  w-[163px] "
              />
            </Link>
          </div>

          {/* Tampilkan tab pada layar besar */}
          <div className="hidden md:flex md:space-x-6">
            <a
              className="text-white hover:text-white rounded-full px-4 py-3  hover:bg-[#3B8F51] hover:border-none"
              style={{ fontFamily: "Special Elite, sans-serif" }}
            >
              <Link to="/menu">Home</Link>
            </a>
            <a className="text-white hover:text-white rounded-full px-4 py-3 hover:bg-[#3B8F51] hover:border-none">
              <Link to="/promo">Promo</Link>
            </a>

            <Input
              placeholder="Cari disini"
              suffix={
                <Link to="/pencarian">
                  <SearchOutlined
                    style={{ color: "rgba(0, 0, 0, 0.25)" }}
                    className="cursor-pointer "
                  />
                </Link>
              }
              style={{
                width: "447px",
                marginLeft: "16px",
                marginRight: "16px",
                marginTop: "8px",
                marginBottom: "8px",
                borderRadius: "40px",
                paddingLeft: "36px", // Sesuaikan dengan lebar ikon
              }}
            />
            <div className="px-3 py-3 bg-[#d0d0d0a7] rounded-full">
              <Link to="/tambahkeranjang">
                <img
                  src={IconOrder}
                  alt="order"
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </div>

            <div className="text-white font-bold px-2 py-3">|</div>
            {/* Tambahkan kondisional untuk menampilkan tombol "Login" */}
            <>
              <div className="px-4 py-2">
                <Button
                  onClick={() => setModalVisible(true)}
                  className="text-white border border-white bg-[#3B8F51] rounded-full px-5 py-1 transition-colors duration-300 ease-in-out hover:bg-white hover:border-none"
                >
                  Login
                </Button>
                <>
                  <Button
                    className="text-[#3B8F51] bg-white border border-[#3B8F51] rounded-full px-7 py-1 ml-2 transition-colors duration-300 ease-in-out hover:bg-[#3B8F51] hover:border-none"
                    onClick={showModalSignIn}
                  >
                    Sign In
                  </Button>
                </>
              </div>
            </>
          </div>

          {/* Hanya tampilkan hamburger icon saat layar kecil */}
          <div className="md:hidden absolute top-0 right-0 mt-9 mr-5">
            <Dropdown overlay={menu} trigger={["click"]} visible={isMenuOpen}>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-align-justify"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </Dropdown>
          </div>

          {/* Modal Login */}
          <>
            <Modal
              width={600}
              visible={modalVisible}
              onCancel={() => {
                setModalVisible(false);
                setEmail(""); // Reset email setelah modal ditutup
                setPassword(""); // Reset password setelah modal ditutup
              }}
              footer={null}
              title={
                <span
                  style={{ color: "#3B8F51" }}
                  className="font-semibold md:text-2xl text-lg "
                >
                  Masuk
                </span>
              }
            >
              <div className="mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <div className="md:mt-10 mt-5">
                  <label className=" font-medium md:text-xl">Email</label>
                  <Input
                    className="mt-3 border-none rounded-[10px] p-3"
                    placeholder="Masukkan Email Anda"
                    style={{ backgroundColor: "#E1DFDF" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <label className="font-medium md:text-xl">Password</label>
                  <Input.Password
                    className="mt-3 border-none rounded-[10px] p-3 "
                    placeholder="Masukkan Password Anda"
                    iconRender={(visible) =>
                      visible ? (
                        <EyeTwoTone onClick={togglePasswordVisibility} />
                      ) : (
                        <EyeInvisibleOutlined
                          onClick={togglePasswordVisibility}
                        />
                      )
                    }
                    type={passwordVisible ? "text" : "password"}
                    bordered={false}
                    style={{ backgroundColor: "#E1DFDF" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  className="mt-5 justify-center w-full h-[50px] rounded-full bg-[#3B8F51] text-white hover:bg-transparent hover:border-green-500 hover:text-green-500"
                  onClick={() => {
                    API_Login();
                    handleLogin();
                  }}
                >
                  Login
                </Button>

                <p className="text-end mt-5 text-[#3B8F51] font-medium text-sm cursor-pointer md:mb-5">
                  lupa password ?
                </p>

                <br />
                <hr className="border-1 border-solid border-[#3B8F51] " />
                <br />

                <div>
                  <div className="justify-center items-center w-full flex">
                    Belum punya akun?{" "}
                    <span
                      className="ml-2 text-[#3B8F51] cursor-pointer"
                      onClick={() => {
                        setVisibleSignIn(true);
                        setModalVisible(false);
                      }}
                    >
                      SignIn
                    </span>
                  </div>
                  <Button className="mt-5 justify-center w-full h-[50px] rounded-full border-solid border-black flex items-center">
                    <span>
                      <img src={IconGoogle} alt="" className="w-5 h-5 mr-5" />
                    </span>{" "}
                    Login Via Google
                  </Button>
                  <Button className="mt-5 justify-center w-full h-[50px] rounded-full border-solid border-black flex items-center">
                    <span>
                      <img src={IconElogs} alt="" className="w-5 h-5 mr-5" />
                    </span>{" "}
                    Eureka Log In
                  </Button>
                </div>
              </div>
            </Modal>
          </>

          {/* Modal Sign In */}
          <>
            <Modal
              title={
                <span
                  style={{ color: "#3B8F51" }}
                  className="font-semibold sm:text-lg md:text-2xl"
                >
                  Daftar
                </span>
              }
              visible={visibleSignIn}
              onCancel={handleCancelSignIn}
              footer={null}
            >
              <div className="md:mt-10 mt-5">
                <label className=" font-medium md:text-xl">
                  Email / Nomor{" "}
                </label>
                <Input
                  className="mt-3 border-none rounded-[10px] p-3"
                  placeholder="Masukkan Email / Nomor Anda"
                  style={{ backgroundColor: "#E1DFDF" }}
                />
              </div>
              <div className="mt-5">
                <label className="font-medium md:text-xl">Password</label>
                <Input.Password
                  className="mt-3 border-none rounded-[10px] p-3"
                  placeholder="Masukkan Password Anda"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone onClick={togglePasswordVisibilitySignIn} />
                    ) : (
                      <EyeInvisibleOutlined
                        onClick={togglePasswordVisibilitySignIn}
                      />
                    )
                  }
                  type={passwordVisibleSignIn ? "text" : "password"}
                  bordered={false}
                  style={{ backgroundColor: "#E1DFDF" }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                className="mt-6 mb-8 justify-center w-full h-[50px] rounded-full bg-[#3B8F51] text-white hover:bg-transparent hover:border-green-500 hover:text-green-500"
                onClick={() => {
                  setVisibleSignIn(false); // Sembunyikan modal Sign In
                  setVisibleOTP(true); // Tampilkan modal OTP
                }}
              >
                Daftar
              </Button>
              <br />
              <hr className="border-1 border-solid border-[#3B8F51] " />
              <br />

              <div>
                <div className="justify-center items-center w-full flex">
                  Sudah punya akun?{" "}
                  <span
                    className="ml-2 text-[#3B8F51] cursor-pointer"
                    onClick={() => {
                      setVisibleSignIn(false);
                      setModalVisible(true);
                    }}
                  >
                    Login
                  </span>
                </div>
                <Button className="mt-5 justify-center w-full h-[50px] rounded-full border-solid border-black flex items-center">
                  <span>
                    <img src={IconGoogle} alt="" className="w-5 h-5 mr-5" />
                  </span>{" "}
                  Login Via Google
                </Button>
                <Button className="mt-5 justify-center w-full h-[50px] rounded-full border-solid border-black flex items-center">
                  <span>
                    <img src={IconElogs} alt="" className="w-5 h-5 mr-5" />
                  </span>{" "}
                  Eureka Log In
                </Button>
              </div>
            </Modal>
          </>

          {/* Modal OTP */}
          <>
            <Modal
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button
                    type="text"
                    icon={<ArrowLeftOutlined className="text-[#3B8F51]" />}
                    onClick={() => {
                      setVisibleOTP(false); // Tutup modal OTP
                      setVisibleSignIn(true); // Tampilkan modal Sign In kembali
                    }}
                  />
                  <span
                    className="text-lg font-medium sm:text-2xl"
                    style={{
                      color: "#3B8F51",
                      marginLeft: 8,
                    }}
                  >
                    Daftar
                  </span>
                </div>
              }
              visible={visibleOTP}
              onOk={handleOkOTP}
              onCancel={handleCancelOTP}
              closeIcon={<CloseOutlined style={{ color: "#3B8F51" }} />}
              footer={false}
            >
              <div className="flex justify-between  mt-5 sm:text-lg text-sm">
                Yuk, masukkan kode OTP yang sudah dikirimkan ke email-mu.
                pastikan email-mu aktif ya!
              </div>

              {/* 4 kotak input OTP */}
              <div className="flex mt-5 sm:mt-10">
                <Input className="w-1/4 mr-4 h-24 sm:h-36 text-3xl font-medium text-center rounded-2xl border border-[#41644A] bg-[#F7FFF1]" />
                <Input className="w-1/4 mr-4 h-24 sm:h-36 text-3xl font-medium text-center rounded-2xl border border-[#41644A] bg-[#F7FFF1]" />
                <Input className="w-1/4 mr-4 h-24 sm:h-36 text-3xl font-medium text-center rounded-2xl border border-[#41644A] bg-[#F7FFF1]" />
                <Input className="w-1/4 h-24 sm:h-36 text-3xl font-medium text-center rounded-2xl border border-[#41644A] bg-[#F7FFF1]" />
              </div>

              <div className="flex justify-center mt-5">
                <span className="text-[#3B8F51] font-medium text-lg sm:text-2xl ">
                  {formatTime(timer)}
                </span>
              </div>

              <div className="mt-5 text-sm sm:text-lg font-medium flex justify-center items-center ">
                Kode belum masuk?{" "}
                <span
                  className="text-[#3B8F51] cursor-pointer ml-2  "
                  onClick={handleKirimUlangClick}
                >
                  Kirim ulang
                </span>
              </div>

              <div>
                <Button
                  className="bg-[#3B8F51] text-white w-full h-16 rounded-full mt-5 sm:text-lg"
                  onClick={() => {
                    setVisibleOTP(false); // Tampilkan modal OTP
                    setVisibleVerif(true);
                  }}
                >
                  Verifikasi
                </Button>
              </div>

              <br />
              <hr className="border-[#3B8F51] mt-2 " />
              <br />

              <div className="mt-2">
                <div className="justify-center  sm:text-lg items-center w-full flex">
                  Sudah punya akun?{" "}
                  <span
                    className="ml-2 text-[#3B8F51] cursor-pointer"
                    onClick={() => {
                      setVisibleOTP(false);
                      setModalVisible(true);
                    }}
                  >
                    Login
                  </span>
                </div>
              </div>
            </Modal>
          </>

          {/* Modal Verif */}
          <>
            <Modal
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button
                    type="text"
                    icon={<ArrowLeftOutlined className="text-[#3B8F51] mt-1" />}
                    onClick={() => {
                      setVisibleOTP(false); // Tutup modal OTP
                      setVisibleSignIn(true); // Tampilkan modal Sign In kembali
                    }}
                  />
                  <span
                    className="text-lg font-medium sm:text-2xl"
                    style={{
                      color: "#3B8F51",
                      marginLeft: 8,
                    }}
                  >
                    Daftar
                  </span>
                </div>
              }
              visible={visibleVerif}
              onOk={handleOkVerif}
              closeIcon={<CloseOutlined style={{ color: "#3B8F51" }} />}
              onCancel={handleCancelVerif}
              footer={false}
            >
              <div className="flex justify-center items-center sm:text-3xl text-2xl mt-10 font-bold">
                Yeay, Verifikasi kamu berhasil
              </div>
              <div className="flex justify-center items-center  sm:text-sm text-base mt-2">
                Silahkan ketuk selesai untuk mulai berbelanja.
              </div>

              <div>
                <Button className="bg-[#3B8F51] text-white w-full h-16 rounded-full mt-5 sm:text-lg">
                  Selesai
                </Button>
              </div>
            </Modal>
          </>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
