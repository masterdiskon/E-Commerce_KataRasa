import axios from "axios";
import Baseurl from "../Api/BaseUrl";

export const API_Login = async () => {
  const Body = {
    email: "sandiirawan859@gmail.com",
    password: "123456",
  };
  try {
    const data = axios.post(`${Baseurl}auth/login`, Body);
    console.log("datalogin", data);
  } catch (error) {}
};
