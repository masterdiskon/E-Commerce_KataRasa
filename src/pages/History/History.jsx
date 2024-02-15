import React from "react";
import { Segmented, Tabs } from "antd";
import Navbar from "../../layout/Navbar";
import Semua from "./Semua";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Semua",
    children: <Semua/>,
  },
  {
    key: "2",
    label: "Belum Bayar",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Berhasil",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Batal",
    children: "Content of Tab Pane 4",
  },
];
const History = () => {

  const [alignValue, setAlignValue] = React.useState("center");
  return (
    <>
      <Navbar />
      <div className="mx-auto mt-10 p-10 lg:p-20">
        <h1 className="md:mt-5 font-bold text-[32px]">History Pesanan</h1>
        <Segmented
          defaultValue="center"
          style={{
            marginBottom: 8,
          }}
        //   onChange={(value) => setAlignValue(value)}
        />
        <Tabs
          defaultActiveKey="1"
          items={items}
        //   onChange={onChange}
        //   indicator={{
        //     size: (origin) => origin - 20,
        //     align: alignValue,
        //   }}
        />
      </div>
    </>
  );
};
export default History;
