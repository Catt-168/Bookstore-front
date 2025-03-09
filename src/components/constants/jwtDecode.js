import { jwtDecode } from "jwt-decode";

export function decodeToken() {
  const token = localStorage.getItem("token") || null;
  const decoded = jwtDecode(token);
  localStorage.setItem("username", JSON.stringify(decoded.sub));
}
