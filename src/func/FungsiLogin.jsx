import axios from "axios";
import Baseurl from "../Api/BaseUrl";

export const API_Login = async (email, password) => {
  const Body = {
    email: email,
    password: password,
  };
  try {
    const data = await axios.post(`${Baseurl}auth/login`, Body);
    console.log("datalogin", data.data.data);
    localStorage.setItem("token", data.data.data.token);
    localStorage.setItem("email", email);
  } catch (error) {}
};
