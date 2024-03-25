import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = AutoComplete;

const AutocompleteProductCategory = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = async (value) => {
    try {
      const response = await axios.get(
        `${Baseurl}product/get-product-category/${value}`
      );
      setOptions(
        response.data.categories.map((category) => ({ value: category }))
      );
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <AutoComplete
      style={{
        width: 480,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 40,
      }}
      onSearch={handleSearch}
      placeholder="Cari disini"
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.value}
        </Option>
      ))}
    </AutoComplete>
  );
};

export default AutocompleteProductCategory;
