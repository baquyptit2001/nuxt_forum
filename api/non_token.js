import axios from 'axios';

const data = {
  post: (url, data) => {
    axios.post(url, {
      data
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }
}
