import Cookies from "js-cookie";

export default function (ctx) {
  if (Cookies.get("access_token")) {
    ctx.redirect("/");
  }
}
