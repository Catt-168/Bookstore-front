import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SERVER } from "../components/constants/restClient";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength)
      return "Password must be at least 8 characters long.";
    if (!hasUpperCase)
      return "Password must contain at least one uppercase letter.";
    if (!hasLowerCase)
      return "Password must contain at least one lowercase letter.";
    if (!hasNumber) return "Password must contain at least one number.";
    if (!hasSpecialChar)
      return "Password must contain at least one special character.";

    return "";
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { username, address, password, phone } = formData;
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      toast.error(passwordError);
      return;
    }

    try {
      const { data } = await axios.post(`${SERVER}/auth/register`, {
        username: username,
        password: password,
        address: address,
        phone: phone,
      });
      console.log("DATA REGISSTER", data);
      // localStorage.setItem("token", JSON.stringify(data));

      toast.success("Logged in successfully!");
      setTimeout(() => navigate("/login"), 500);
    } catch (e) {
      console.log("ERROR", e);
    }

    toast.success("Account created successfully!");
    navigate("/profile1");
  };

  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/loginBg.jpg')" }}
    >
      <div className="w-[35vw] h-[80vh] bg-[rgba(255, 255, 255, 0.53)] backdrop-blur-lg rounded-lg border border-[rgba(0,0,0,0.3)] flex justify-center items-center pt-0 p-6 shadow-[10px_10px_20px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col items-center gap-3 w-full">
          <img src="/logoImg.png" alt="INKSPIRE Logo" className="w-100" />

          <h2 className="text-2xl font-bold text-[#E97B58]">Register</h2>
          <h3 className="text-gray-600 mb-2 ">Enter your information</h3>

          <form
            onSubmit={handleSignUp}
            className="flex flex-col items-center w-full gap-4"
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 pl-6 text-gray-800 rounded-3xl outline-none border border-gray-400 focus:border-[#E97B58]"
              autoComplete="username"
            />

            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 pl-6 text-gray-800 rounded-3xl outline-none border border-gray-400 focus:border-[#E97B58]"
              autoComplete="address"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 pl-6 text-gray-800 rounded-3xl outline-none border border-gray-400 focus:border-[#E97B58]"
              autoComplete="phone"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 pl-6 text-gray-800 rounded-3xl outline-none border border-gray-400 focus:border-[#E97B58]"
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
              className="w-full p-2 pl-6 text-gray-800 rounded-3xl outline-none border border-gray-400 focus:border-[#E97B58]"
              autoComplete="off"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-40 p-2 pl-4 pr-4 text-white rounded-3xl cursor-pointer font-normal shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] bg-[#E97B58] hover:bg-[#e97a58ce] disabled:cursor-not-allowed disabled:bg-gray-500"
            >
              Sign Up
            </button>
          </form>

          <Link
            to="/login"
            className="text-gray-600 hover:text-gray-800 hover:underline text-sm"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
