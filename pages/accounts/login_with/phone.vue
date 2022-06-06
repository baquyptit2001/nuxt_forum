<template>
  <section class="recovery-area pt-200px pb-80px position-relative">
    <div class="container">
      <form class="card card-item login-form" method="post" @submit.prevent="loginWithPhone">
        <div class="card-body row p-0">
          <div class="col-lg-6">
            <div
              class="form-content py-4 pr-60px pl-60px border-right border-right-gray h-100 d-flex align-items-center justify-content-center">
              <img alt="Image" class="img-fluid" src="~assets/images/undraw-forgot-password.svg">
            </div>
          </div><!-- end col-lg-6 -->
          <div class="col-lg-5 mx-auto">
            <div class="form-action-wrapper py-5">
              <div class="form-group">
                <h3 class="fs-22 pb-3 fw-bold">Do you have your phone there?</h3>
                <div class="divider"><span></span></div>
                <p class="pt-3">Forgot your account's password or having trouble logging into your Account? Don't worry,
                  we'll help you to get back your account. Enter your phone number, I'll let you in.</p>
              </div>
              <div class="form-group">
                <label class="fs-14 text-black fw-medium lh-18">Phone number</label>
                <input v-model="phone" class="form-control form--control" name="email" placeholder="Phone number"
                       type="text">
              </div><!-- end form-group -->
              <div class="form-group">
                <button id="send-message-btn" class="btn theme-btn w-100" type="submit">Send token <i
                  class="la la-arrow-right icon ml-1"></i></button>
              </div><!-- end form-group -->
            </div><!-- end form-action-wrapper -->
          </div><!-- end col-lg-5 -->
        </div><!-- end row -->
      </form>
      <p class="text-center">
        <NuxtLink :to="{name: 'accounts-login'}"><a class="text-color hover-underline" href="login.html">Return to log
          in</a></NuxtLink>
      </p>
    </div><!-- end container -->
    <div class="position-absolute bottom-0 left-0 w-100 h-100 z-index-n1">
      <svg class="w-100 h-100" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#2d86eb"
              opacity=".07"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#2d86eb"
              opacity=".06"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#2d86eb"
              opacity=".04"></path>
      </svg>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import {api_domain} from "~/constants/constants";
import checkCookie from "~/helper/checkCookie";

export default {
  name: "phone",
  fetch() {
    if (checkCookie('access_token')) {
      this.$router.push({name: 'index'});
      this.$notify({
        title: 'Already logged in',
        text: 'You are already logged in',
        type: 'error'
      });
    }
  },
  head() {
    return {
      title: "Login with phone"
    }
  },
  layout(context) {
    return 'accounts'
  },
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    loginWithPhone() {
      axios.post(api_domain + 'accounts/send-token', {
        phone: this.phone
      }).then(response => {
        if (response.data.status_code === 500) {
          this.$notify.error({
            title: 'Mã đã được gửi không thành công, vui lòng thử lại',
            message: response.data.message
          });
        } else if (response.data.status_code === 200) {
          this.$notify.success({
            title: 'Thành công',
            message: response.data.message
          });
          this.$router.push({name: 'accounts-login_with-token'});
        }
      }).catch(error => {

      });
    }
  }
}
</script>

<style scoped>

</style>
