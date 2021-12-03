import Cookies from 'js-cookie'

export default {
  setCookieObject: function (value, prefix = '', expires = null) {
    if (prefix !== '') {
      prefix = prefix + '.'
    }
    for (const [key, value] of Object.entries(value)) {
      Cookies.set(prefix + key, value, {expires: expires});
    }
  },

  setCookie: function (key, value, expires = null) {
    Cookies.set(key, value, {expires: expires});
  },

}
