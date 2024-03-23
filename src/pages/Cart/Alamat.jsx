import React, { useEffect, useState } from "react";
import Baseurl from "../../Api/BaseUrl";
import axios from "axios";

function AlamatPage() {
  const [DataAlamat, setDataAlamat] = useState({});
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
    GetDataAlamat();
  }, []);

  return (
    <div>
      
      {DataAlamat && (
        <p>
          {DataAlamat.complete_address},{" "}
          {DataAlamat.district && DataAlamat.district.name},{" "}
          {DataAlamat.sub_district && DataAlamat.sub_district.name},{" "}
          {DataAlamat.city && DataAlamat.city.name},
          {DataAlamat.province && DataAlamat.province.name}
        </p>
      )}
      {/* <p className="mt-2">No.Telp : {DataAlamat.phone_number}</p> */}
      {/* <p className="mt-2">Kode Pos: {DataAlamat.postal_code}</p> */}
    </div>
  );
}

export default AlamatPage;
