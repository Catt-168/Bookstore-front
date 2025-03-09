import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/navbar/AdminNavbar";
import restClient, { SERVER } from "../components/constants/restClient";

const Orders = () => {
  const [filter, setFilter] = useState("all");
  const [colorMap, setColorMap] = useState({});
  const [orders, setOrders] = useState([]);
  const [orders2, setOrders2] = useState([]);
  const [kv, setKv] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const filteredOrders =
    filter === "all"
      ? orders
      : orders.filter((order) => order.status.toLowerCase() === filter);

  const handleStatusChange = async (id, newStatus) => {
    // return console.log(orderId);
    // const id = kv[orderId];
    const { data } = await restClient.put(`${SERVER}/orders/${id}`, {
      status: newStatus,
    });
    setShowConfirmation(false);
    location.reload();
  };

  const handleCancelOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
    setShowConfirmation(false);
  };

  const openConfirmation = (orderId) => {
    setSelectedOrderId(orderId);
    setShowConfirmation(true);
  };
  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  async function getOrders() {
    const { data } = await restClient.get(`${SERVER}/orders`);

    let currentId = data[data.length - 1].id;
    const idMapping = {};
    console.log("data", data);
    setOrders(
      data.map((item) => {
        return {
          id: item.id,
          productName: item.books.map((item) => item.title).join(", "),
          customerName: item.customer.customerName,
          date: item.orderDate,
          amount: item.totalAmount,
          status: item.orderStatus,
        };
      })
    );
    // const transformedOrders = data.flatMap((order) => {
    //   if (order.books.length > 1) {
    //     return order.books.map((book) => {
    //       currentId += 1; // Increment ID for each new order
    //       idMapping[currentId] = order.id; // Map original id to the new id
    //       return { ...order, id: currentId, books: [book] }; // Use the incremented ID and single book
    //     });
    //   } else {
    //     idMapping[order.id] = order.id; // If no split, just map original ID to original ID
    //     return order;
    //   }
    // });
    // setKv(idMapping);

    // setOrders(
    //   transformedOrders.map((item) => {
    //     return {
    //       id: item.id,
    //       productName: item.books[0].title,
    //       customerName: item.customer.customerName,
    //       date: item.orderDate,
    //       amount: item.totalAmount,
    //       status: item.orderStatus,
    //     };
    //   })
    // );

    // console.log("customers", customers);
    // console.log(
    //   books.map((item, index) => {
    //     return {
    //       id: index,
    //       productName: item.title,
    //       customerName: "Jake",
    //       date: "26 Feb 2025",
    //       amount: "27000 MMK",
    //       status: "Pending",
    //     };
    //   })
    // );
  }
  console.log("or", orders2);
  useEffect(() => {
    getOrders();
  }, []);

  function formatReadableTime(isoString) {
    const date = new Date(isoString);

    if (isNaN(date)) {
      return "Invalid Date";
    }

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleString(undefined, options);
  }
  const colors = [
    "bg-amber-50",
    "bg-blue-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-purple-50",
    "bg-cyan-50",
    "bg-navy-50",
    "bg-purple-50",
    "bg-pink-50",
  ];

  // const getColorForKv = (kvValue) => {
  //   if (!colorMap[kvValue]) {
  //     const newColor = colors[Object.keys(colorMap).length % colors.length];
  //     setColorMap((prev) => ({ ...prev, [kvValue]: newColor }));
  //   }
  //   return colorMap[kvValue];
  // };

  useEffect(() => {
    const colorAssignments = {};
    let colorIndex = 0;

    Object.values(kv).forEach((originalId) => {
      if (!colorAssignments[originalId]) {
        colorAssignments[originalId] = colors[colorIndex % colors.length];
        colorIndex++;
      }
    });

    setColorMap(colorAssignments);
  }, [kv]);

  const getColorForKv = (kvValue) => {
    return colorMap[kvValue] || "bg-white"; // Default to white if not assigned yet
  };

  return (
    <div className="">
      <div>
        <AdminNavbar />
      </div>
      <div className="layout">
        <h2 className="text-3xl font-semibold my-4">Orders</h2>
        <p className="mb-6 text-xl">
          An overview of recent data of customers, info, products details
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-white">
          <div
            className={`p-6 rounded-lg shadow-lg border border-custom-orange ${
              filter === "all" ? "bg-custom-orange" : "bg-white text-black"
            } cursor-pointer`}
            onClick={() => setFilter("all")}
          >
            <h3 className="text-xl font-semibold mb-2">Total Orders</h3>
            <p className="text-3xl font-bold">{orders.length}</p>
          </div>
          <div
            className={`p-6 rounded-lg shadow-lg border border-custom-orange ${
              filter === "pending" ? "bg-custom-orange" : "bg-white text-black"
            } cursor-pointer`}
            onClick={() => setFilter("pending")}
          >
            <h3 className="text-xl font-semibold mb-2">Orders Pending</h3>
            <p className="text-3xl font-bold">
              {orders.filter((order) => order.status === "PENDING").length}
            </p>
          </div>
          <div
            className={`p-6 rounded-lg shadow-lg border border-[#0b7312] ${
              filter === "delivered" ? "bg-[#0b7312]" : "bg-white text-black"
            } cursor-pointer`}
            onClick={() => setFilter("delivered")}
          >
            <h3 className="text-xl font-semibold mb-2">Orders Delivered</h3>
            <p className="text-3xl font-bold">
              {orders.filter((order) => order.status === "DELIVERED").length}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-6">All Orders</h3>
          <p className="mb-6">
            Keep track of recent order data and other information
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="text-left border-b border-gray-300">
                  <th className="py-2 px-4">Order ID</th>
                  <th className="py-2 px-4">Product Name</th>
                  <th className="py-2 px-4">Customer Name</th>
                  <th className="py-2 px-4">Ordered Date</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => {
                  const backgroundColor = getColorForKv(kv[order.id]);

                  return (
                    <tr
                      key={index}
                      className={`border-b border-gray-300 ${backgroundColor}`}
                    >
                      <td className="py-2 px-4">
                        #{/* {order.id} */}
                        {index + 1}
                      </td>
                      <td className="py-2 px-4">{order.productName}</td>
                      <td className="py-2 px-4">{order.customerName}</td>
                      <td className="py-2 px-4">
                        {formatReadableTime(order.date)}
                      </td>
                      <td className="py-2 px-4">{order.amount}</td>
                      <td className="py-2 px-4">
                        <button
                          className={`w-24 px-4 py-1 rounded-md text-sm font-semibold text-white ${
                            order.status === "DELIVERED"
                              ? "bg-[#0b7312]"
                              : "bg-custom-orange"
                          }`}
                          onClick={() => {
                            if (order.status === "PENDING") {
                              openConfirmation(order.id);
                            }
                          }}
                        >
                          {order.status}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-6">
            <button className="bg-[#474242] text-white px-8 py-2 rounded-md text-xl hover:bg-[#635f5f]">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur z-50">
          <div className="bg-white p-10 rounded-md shadow-[10px_10px_20px_rgba(0,0,0,0.4)] w-110">
            {/* <h2 className="text-xl font-semibold mb-4">Confirmation</h2> */}
            <p className="mb-6 text-lg">
              Are you sure you want to change the status of this order? Some
              Orders have multiple books so if you proceed to be DELIVERED, all
              books will be delivered!
            </p>
            <div className="flex justify-around space-x-4">
              <button
                onClick={() => handleCancelOrder(selectedOrderId)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Cancel Order
              </button>
              <button
                onClick={() => handleStatusChange(selectedOrderId, "DELIVERED")}
                className="bg-[#0b7312] text-white px-4 py-2 rounded-md hover:bg-[#437747]"
              >
                Delivered
              </button>
              <button
                onClick={closeConfirmation}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
