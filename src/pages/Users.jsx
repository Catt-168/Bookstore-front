import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/navbar/AdminNavbar";
import restClient, { SERVER } from "../components/constants/restClient";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [openMenuId, setOpenMenuId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    setShowDeleteModal(false);
  };

  const toggleMenu = (userId) => {
    setOpenMenuId(openMenuId === userId ? null : userId);
  };

  const openDeleteModal = (userId) => {
    setUserToDelete(userId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  useEffect(() => {
    async function getUsers() {
      const { data } = await restClient.get(`${SERVER}/customers`);
      const filterData = data.filter((item) => item.customerName !== "admin");

      setUsers(
        filterData.map((user) => {
          return {
            id: user.id,
            name: user.customerName,
            phone: user.customerPhone,
            profileImg: "maleUser.jpg",
            orderCount: user.orders.length,
          };
        })
      );
    }
    getUsers();
  }, []);

  return (
    <div className="">
      <div>
        <AdminNavbar />
      </div>
      <div className="layout">
        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center backdrop:blur-sm z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Delete User</h2>
              <p className="mb-6">Are you sure you want to delete this user?</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => handleDeleteUser(userToDelete)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={closeDeleteModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 mt-6">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-4">
            Users
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="text-left border-b border-gray-300">
                  <th className="py-2 px-4">User ID</th>
                  <th className="py-2 px-4">User Name</th>
                  <th className="py-2 px-4">Phone</th>
                  <th className="py-2 px-4">Order Count</th>
                  {/* <th className="py-2 px-4">Manage</th> */}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-300">
                    <td className="py-2 px-4">#{user.id}</td>
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={user.profileImg}
                        alt={user.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {user.name}
                    </td>
                    {/* <td className="py-2 px-4">{user.email}</td> */}
                    <td className="py-2 px-4">{user.phone}</td>
                    <td className="py-2 px-4">{user.orderCount}</td>
                    <td className="py-2 px-8 relative">
                      {/* <button
                        onClick={() => toggleMenu(user.id)}
                        className="focus:outline-none font-bold text-2xl"
                      >
                        &#8943;
                      </button> */}
                      {openMenuId === user.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          <button
                            onClick={() => openDeleteModal(user.id)}
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
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
    </div>
  );
};

export default Users;
