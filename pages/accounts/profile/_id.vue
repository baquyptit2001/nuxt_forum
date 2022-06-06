<template>
  <div>
    <hero v-bind:user="user"></hero>
    <user-detail v-bind:user="user"></user-detail>
  </div>
</template>

<script>
import Hero from "../../../components/ProfileComponent/Hero";
import UserDetail from "../../../components/ProfileComponent/UserDetail";
import axios from "axios";
import {api_domain} from "../../../constants/constants";
import Cookies from "js-cookie";

export default {
  name: "profile",
  head() {
    return {
      title: this.user.name,
      meta: [
        {
          name: "description",
          content: "Profile page"
        }
      ]
    };
  },
  components: {UserDetail, Hero},
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios.get(api_domain + "accounts/info/" + this.$route.params.id, {
        headers: {
          Authorization: "Bearer " + Cookies.get("access_token")
        }
      }).then(response => {
        this.user = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>
