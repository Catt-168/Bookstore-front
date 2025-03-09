import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import restClient, { SERVER } from "../components/constants/restClient";
import { decodeToken } from "../components/constants/jwtDecode";

const Login = () => {
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { loginEmail, loginPassword } = formData;
    try {
      const { data } = await axios.post(`${SERVER}/auth/login`, {
        username: loginEmail,
        password: loginPassword,
      });
      localStorage.setItem("token", JSON.stringify(data));
      decodeToken();
      toast.success("Logged in successfully!");
      const { data: status } = await restClient.get(
        `${SERVER}/customers/first?username=${loginEmail}`
      );
      if (loginEmail === "admin") return navigate("/orders");
      setTimeout(() => {
        if (status) {
          navigate("/welcomepage");
        } else {
          navigate("/home");
          // navigate("/home");
        }
      }, 500);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  const handleForgotPassword = () => {
    if (!formData.loginEmail) {
      toast.error("Please enter your email to reset password.");
      return;
    }

    toast.success("Password reset email sent!");
  };

  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/loginBg.jpg')" }}
    >
      <div className="w-[35vw] h-[80vh] bg-[rgba(255, 255, 255, 0.53)] backdrop-blur-lg rounded-lg border border-[rgba(0,0,0,0.3)] flex justify-center items-center pt-0 p-6 shadow-[10px_10px_20px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col items-center gap-5 w-full">
          <img src="/logoImg.png" alt="INKSPIRE Logo" className="w-100" />

          <h2 className="text-2xl font-bold text-[#E97B58] mb-4">
            Sign in to your account
          </h2>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center w-full gap-4"
          >
            <input
              type="text"
              placeholder="Username"
              name="loginEmail"
              value={formData.loginEmail}
              onChange={handleChange}
              required
              className="w-full p-2 pl-6 text-gray-800 rounded-3xl outline-none border border-gray-400 focus:border-[#E97B58]"
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              name="loginPassword"
              value={formData.loginPassword}
              onChange={handleChange}
              required
              className="w-full p-2 pl-6 text-gray-800 rounded-3xl outline-none border border-gray-400 focus:border-[#E97B58]"
              autoComplete="off"
            />
            {/* <button
              onClick={handleForgotPassword}
              className="text-gray-600 hover:text-gray-800 hover:underline text-sm"
            >
              Forgot Password?
            </button> */}

            <div className="flex flex-row gap-4 w-4/5 mx-auto">
              <button
                type="submit"
                className="w-full p-2 pl-4 pr-4 text-gray-800 rounded-3xl border border-[#E97B58] cursor-pointer font-normal hover:bg-[#E97B58] disabled:cursor-not-allowed disabled:bg-gray-500 hover:text-white"
              >
                Sign In
              </button>
              <Link to="/register" className="w-full">
                <button
                  type="button"
                  className="w-full p-2 pl-2 pr-4 text-gray-800 rounded-3xl border border-[#E97B58] cursor-pointer font-normal hover:bg-[#E97B58] disabled:cursor-not-allowed disabled:bg-gray-500 hover:text-white"
                >
                  Sign up
                </button>
              </Link>
            </div>
          </form>
          {/* <div className="flex items-center w-4/5 mx-auto gap-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div> */}
          {/* <button className="w-4/5 mx-auto p-3 border-2 border-gray-400 text-gray-700 rounded-md cursor-pointer font-medium hover:bg-gray-100 flex items-center justify-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span>Continue with Google</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
