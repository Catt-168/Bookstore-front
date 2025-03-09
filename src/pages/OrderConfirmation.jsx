import React, { useContext, useEffect, useState } from "react";
import { CartContext, useCart } from "../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import restClient, { SERVER } from "../components/constants/restClient";

const OrderConfirmation = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const fixedCart = cart.map((item) => ({
    ...item,
    price: parseFloat(item.price),
  }));

  const totalBill = fixedCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [customerInfo, setCustomerInfo] = useState({
    id: "",
    name: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleConfirmationYes = async () => {
    const book_id = fixedCart.map((item) => item.id);
    const payload = {
      customerId: customerInfo?.id,
      book_id: book_id,
      totalAmount: totalBill,
    };
    try {
      const { data } = await restClient.post(`${SERVER}/orders`, payload);
      console.log("data", data);
      console.log("Order confirmed!");
      navigate("/thankyou");
      clearCart();
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Order placed successfully for ${customerInfo.name}!`);
    handleConfirmationYes();
  };

  async function getCustomer() {
    const username = JSON.parse(localStorage.getItem("username")) || "";
    console.log("API CALL");
    try {
      const { data } = await restClient.get(
        `${SERVER}/customers/getCustomer?username=${username}`
      );

      setCustomerInfo({
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
  console.log("f", fixedCart);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Order Confirmation
      </h1>

      {fixedCart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid gap-6">
            {fixedCart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">{item.author.name}</p>
                    <p className="text-gray-800 font-semibold">
                      {item.price.toFixed(2)} MMK
                    </p>
                    {/* <p className="text-gray-600">Quantity: {item.quantity}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Total Bill: {totalBill.toFixed(2)} MMK
            </h2>
          </div>

          {/* Customer Information Form */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Customer Information
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerInfo.name}
                  disabled
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-orange"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  disabled
                  name="phoneNumber"
                  value={customerInfo.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-orange"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  disabled
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-orange"
                  rows="4"
                  required
                />
              </div>
              {/* <NavLink to="/thankyou"> */}
              <button
                type="submit"
                className="w-full px-6 py-2 bg-custom-orange font-semibold text-white rounded-md hover:bg-[#D96C4A] transition-colors mb-4"
              >
                Place Order
              </button>
              {/* </NavLink> */}
              <NavLink to="/add-to-cart">
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-gray-500 font-semibold text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Cancel Order
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
