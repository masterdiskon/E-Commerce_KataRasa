import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./src/app";

import Pencarian from "./src/pages/Search/Pencarian";
import DetailProduct from "./src/pages/DetailProduct/DetailProduct";
import Home from "./src/pages/Home/Home";
import TambahKeranjang from "./src/pages/Cart/TambahKeranjang";
import Payment from "./src/pages/Cart/Payment";
import History from "./src/pages/History/History";
import About from "./src/pages/AboutUs/About";
import Promo from "./src/pages/Promo/promo";
import DetailPromo from "./src/pages/Promo/DetailPromo";
import ProductCoffee from "./src/pages/Produk/ProductCoffee";
import ProductTea from "./src/pages/Produk/ProductTea";
import ProductChocolate from "./src/pages/Produk/ProductChocolate";
import ProductMerchen from "./src/pages/Produk/ProductMerchen";
import DetailProductChoco from "./src/pages/DetailProduct/DetailProductChoco";
import AkunPage from "./src/pages/Akun/AkunPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/menu" element={<Home />} />
      <Route path="/pencarian" element={<Pencarian />} />
      <Route path="/about" element={<About />} />
      <Route path="/tambahkeranjang" element={<TambahKeranjang />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/pencarian" element={<Pencarian />} />
      {/* <Route path="/detailproduct" element={<DetailProduct />} /> */}
      <Route path="/detailproduct/:slug" element={<DetailProduct />} />
      <Route path="/detailproductt/:slug" element={<DetailProductChoco />} />
      <Route path="/history" element={<History />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/product/coffee" element={<ProductCoffee />} />
      <Route path="/product/chocolate" element={<ProductChocolate />} />
      <Route path="/product/tea" element={<ProductTea />} />
      <Route path="/product/merch" element={<ProductMerchen />} />
      <Route path="/detailpromosi" element={<DetailPromo />} />
      <Route path="/akunsaya" element={<AkunPage />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
};

export default AppRouter;
