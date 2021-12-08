import Cookies from "js-cookie";

export default function checkCookie(name) {
  return Cookies.get(name) !== undefined;
}
