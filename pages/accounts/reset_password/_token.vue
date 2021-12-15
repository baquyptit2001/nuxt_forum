<template>
  <section class="recovery-area pt-200px pb-80px position-relative">
    <div class="container">
      <form action="" method="post" class="card card-item login-form" @submit.prevent="resetPassword">
        <div class="card-body row p-0">
          <div class="col-lg-6">
            <div
              class="form-content py-4 pr-60px pl-60px border-right border-right-gray h-100 d-flex align-items-center justify-content-center">
              <img src="~assets/images/undraw-forgot-password.svg" alt="Image" class="img-fluid">
            </div>
          </div><!-- end col-lg-6 -->
          <div class="col-lg-5 mx-auto">
            <div class="form-action-wrapper py-5">
              <div class="form-group">
                <h3 class="fs-22 pb-3 fw-bold">Reset your password</h3>
                <div class="divider"><span></span></div>
                <p class="pt-3">Tell me you'll remember your password</p>
              </div>
              <div class="form-group">
                <label class="fs-14 text-black fw-medium lh-18">Password</label>
                <input type="password" name="password" class="form-control form--control" placeholder="Password"
                       v-model="password">
              </div>
              <div class="form-group">
                <label class="fs-14 text-black fw-medium lh-18">Password Confirmation</label>
                <input type="password" name="password_confirmation" class="form-control form--control"
                       placeholder="Password confirmation" v-model="password_confirmation">
              </div>
              <div class="form-group">
                <button id="send-message-btn" class="btn theme-btn w-100" type="submit">Reset your password<i
                  class="la la-arrow-right icon ml-1"></i></button>
              </div><!-- end form-group -->
            </div><!-- end form-action-wrapper -->
          </div><!-- end col-lg-5 -->
        </div><!-- end row -->
      </form>
      <p class="text-center">
        <NuxtLink :to="{name: 'accounts-login'}"><a href="login.html" class="text-color hover-underline">Return to log
          in</a></NuxtLink>
      </p>
    </div><!-- end container -->
    <div class="position-absolute bottom-0 left-0 w-100 h-100 z-index-n1">
      <svg class="w-100 h-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path fill="#2d86eb"
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".07"></path>
        <path fill="#2d86eb"
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".06"></path>
        <path fill="#2d86eb"
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              opacity=".04"></path>
      </svg>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import {api_domain} from "../../../constants/constants";

export default {
  name: "_token",
  head() {
    return {
      title: "Cập nhật mật khẩu"
    };
  },
  layout: "account",
  data() {
    return {
      password: "",
      password_confirmation: ""
    };
  },
  methods: {
    resetPassword() {
      axios.post(api_domain + "accounts/reset-password/" + this.$route.params.token, {
        password: this.password,
        password_confirmation: this.password_confirmation
      })
        .then(response => {
          if (response.data.status_code === 200) {
            this.$notify({
              title: 'Thành công',
              type: 'success',
              message: "Thay đổi mật khẩu thành công"
            });
            this.$router.push({name: 'accounts-login'});
          } else {
            this.$notify({
              title: 'Thất bại',
              type: 'error',
              message: "Có lỗi xảy ra, vui lòng thử lại sau"
            });
          }
        })
        .catch(error => {
          if (error.response.data.message) {
            this.$notify({
              title: 'Thất bại',
              type: 'error',
              message: error.response.data.message
            });
          }
          this.$notify({
            title: 'Thất bại',
            type: 'error',
            message: error.response.data.errors.password[0]
          });
        });
    }
  }
}
</script>

<style scoped>

</style>
