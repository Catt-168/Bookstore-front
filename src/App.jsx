import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import GenreSelection from "./pages/GenreSelection";
import Books from "./pages/Books";
import Fantasy from "./pages/books/Fantasy";
import Action from "./pages/books/Action";
import Biography from "./pages/books/Biography";
import Business from "./pages/books/Business";
import Comics from "./pages/books/Comics";
import Detective from "./pages/books/Detective";
import Education from "./pages/books/Education";
import History from "./pages/books/History";
import Science from "./pages/books/Science";
import Romance from "./pages/books/Romance";
import Horror from "./pages/books/Horror";
import Thriller from "./pages/books/Thriller";
import ProductDetail from "./pages/ProductDetail";
import OrderConfirmation from "./pages/OrderConfirmation";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserInfo from "./pages/UserProfile/UserInfo";
import PurchaseHistory from "./pages/UserProfile/PurchaseHistory";
import { useState } from "react";
import ContactUs from "./pages/ContactUs";
import ThankYou from "./pages/ThankYou";
import WelcomePage from "./pages/WelcomePage";
import AboutUs from "./pages/AboutUs";
import EditBooks from "./pages/EditBooks";
import UploadBook from "./pages/UploadBook";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import ManageUserInfo from "./pages/ManageUserInfo";
import AddToCart from "./pages/AddToCart";
import { CartProvider } from "./context/CartContext.jsx";
import FloatingCart from "./components/FloatingCart";
import EditBook from "./pages/EditBook.jsx";

// import Logout from './pages/Logout';

const App = () => {
  const [customer, setCustomer] = useState({
    name: "Kaung Min Set",
    phoneNumber: "09775035648",
    address: "No./I/48 Oo Chit Maung Street, Shwe Pyi Thar, Yangon",
  });

  return (
    <CartProvider>
      <Router>
        <FloatingCart />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="/genre-selection" element={<GenreSelection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/books" element={<Books />}>
            <Route path="action" element={<Action />} />
            <Route path="biography" element={<Biography />} />
            <Route path="business" element={<Business />} />
            <Route path="comics" element={<Comics />} />
            <Route path="detective" element={<Detective />} />
            <Route path="education" element={<Education />} />
            <Route path="fantasy" element={<Fantasy />} />
            <Route path="history" element={<History />} />
            <Route path="horror" element={<Horror />} />
            <Route path="romance" element={<Romance />} />
            <Route path="science" element={<Science />} />
            <Route path="thriller" element={<Thriller />} />
          </Route>
          <Route path="/book/:bookId" element={<ProductDetail />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          {/* <Route path="/user-profile" element={<UserProfile customer={customer} setCustomer={setCustomer} />} /> */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/welcomepage" element={<WelcomePage />} />
          <Route path="/edit-books" element={<EditBooks />} />
          <Route path="/upload-book" element={<UploadBook />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/manage-user-info" element={<ManageUserInfo />} />
          <Route path="/user-profile" element={<UserProfile />}>
            <Route index element={<UserInfo />} />
            <Route path="user-info" element={<UserInfo />} />
            <Route path="purchase-history" element={<PurchaseHistory />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
