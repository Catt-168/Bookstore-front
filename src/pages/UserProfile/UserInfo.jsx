import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import restClient, { SERVER } from "../../components/constants/restClient";

const UserInfo = () => {
  const [customer, setCustomer] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    id: "",
  });
  const [formData, setFormData] = useState(customer);
  console.log("formadata", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log("Input changed:", name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const res = await restClient.put(`${SERVER}/customers/update`, {
        customerName: formData.name,
        customerAddress: formData.address,
        customerPhone: formData.phoneNumber,
      });
      alert("SUCCESSFULLY UPDATED CUSTOMER ", formData.name);
    } catch (e) {
      console.log("ERROR", e);
    }
    setCustomer(formData);
  };

  async function getCustomer() {
    const username = JSON.parse(localStorage.getItem("username")) || "";
    console.log("API CALL");
    try {
      const { data } = await restClient.get(
        `${SERVER}/customers/getCustomer?username=${username}`
      );

      setCustomer({
        id: data.id,
        name: data.customerName,
        address: data.customerAddress,
        phoneNumber: data.customerPhone,
      });
      setFormData({
        id: data.id,
        name: data.customerName,
        address: data.customerAddress,
        phoneNumber: data.customerPhone,
      });
    } catch (e) {
      console.log("ERORR", e);
    }
  }

  useEffect(() => {
    getCustomer();
  }, []);

  console.log(customer);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 font-roboto text-center">
        User Profile
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="flex items-center mb-4">
          <label
            htmlFor="name"
            className="w-1/4 text-gray-600 text-lg font-inter font-semibold"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange"
            placeholder="Enter your name"
          />
        </div>

        {/* Phone Number */}
        <div className="flex items-center mb-4">
          <label
            htmlFor="phoneNumber"
            className="w-1/4 text-gray-600 text-lg font-inter font-semibold"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Delivery Address */}
        <div className="flex items-center mb-12">
          <label
            htmlFor="address"
            className="w-1/4 text-gray-600 text-lg font-inter font-semibold"
          >
            Delivery Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange"
            rows="4"
            placeholder="Enter your delivery address"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-custom-orange text-white font-semibold rounded-lg hover:bg-[#D96C4A] transition-colors shadow-custom"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
