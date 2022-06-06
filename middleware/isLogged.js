import Cookies from "js-cookie";
import checkCookie from "~/helper/checkCookie";

export default function (context) {
  console.log("isLogged");
  console.log(Cookies.get());
  if (checkCookie('access_token')) {
    context.redirect("/");
  }
}
