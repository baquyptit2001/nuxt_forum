<template>
  <header class="header-area bg-white border-bottom border-bottom-gray">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2">
          <div class="logo-box">
            <NuxtLink :to="{ name: 'index' }"><a class="logo" href="#"><img alt="logo"
                                                                            src="~assets/images/logo-black.png"></a>
            </NuxtLink>
            <div class="user-action">
              <div class="search-menu-toggle icon-element icon-element-xs shadow-sm mr-1" data-placement="top"
                   data-toggle="tooltip" title="Search">
                <i class="la la-search"></i>
              </div>
              <div class="off-canvas-menu-toggle icon-element icon-element-xs shadow-sm" data-placement="top"
                   data-toggle="tooltip" title="Main menu">
                <i class="la la-bars"></i>
              </div>
            </div>
          </div>
        </div><!-- end col-lg-2 -->
        <div class="col-lg-10">
          <div class="menu-wrapper border-left border-left-gray pl-4 justify-content-end">
            <nav class="menu-bar mr-auto">
              <ul>
                <li>
                  <a href="#">Home <i class="la la-angle-down fs-11"></i></a>
                  <ul class="dropdown-menu-item">
                    <li><a href="index.html">Home - landing</a></li>
                    <li><a href="home-2.html">Home - main</a></li>
                    <li><a href="home-3.html">Home - layout 2 <span class="badge bg-warning text-white">New</span></a>
                    </li>
                  </ul>
                </li>
                <li class="is-mega-menu">
                  <a href="#">pages <i class="la la-angle-down fs-11"></i></a>
                  <div class="dropdown-menu-item mega-menu">
                    <ul class="row">
                      <li class="col-lg-3">
                        <a href="user-profile.html">user profile</a>
                        <a href="notifications.html">Notifications</a>
                        <a href="referrals.html">Referrals</a>
                        <a href="setting.html">settings</a>
                        <a href="ask-question.html">ask question</a>
                        <a href="question-details.html">question details</a>
                        <a href="about.html">about</a>
                        <a href="revisions.html">revisions</a>
                        <a href="category.html">category</a>
                        <a href="companies.html">companies</a>
                        <a href="company-details.html">company details</a>
                      </li>
                      <li class="col-lg-3">
                        <a href="careers.html">careers</a>
                        <a href="career-details.html">career details</a>
                        <a href="contact.html">contact</a>
                        <a href="faq.html">FAQs</a>
                        <a href="pricing-table.html">pricing tables</a>
                        <a href="error.html">page 404</a>
                        <a href="terms-and-conditions.html">Terms & conditions</a>
                        <a href="privacy-policy.html">privacy policy</a>
                        <a href="cart.html">cart</a>
                        <a href="talent.html">talent</a>
                        <a href="advertising.html">advertising</a>
                      </li>
                      <li class="col-lg-3">
                        <a href="free-demo.html">free demo</a>
                        <a href="checkout.html">checkout</a>
                        <a href="wishlist.html">wishlist</a>
                        <a href="login.html">login</a>
                        <a href="login-2.html">login 2</a>
                        <a href="signup.html">sign up</a>
                        <a href="signup-2.html">sign up 2</a>
                        <a href="recover-password.html">recover password</a>
                        <a href="questions-layout-2.html">questions layout 2 <span class="badge bg-warning text-white">New</span></a>
                        <a href="questions-full-width.html">questions full-width <span
                          class="badge bg-warning text-white">New</span></a>
                        <a href="questions-left-sidebar.html">questions left sidebar <span
                          class="badge bg-warning text-white">New</span></a>
                      </li>
                      <li class="col-lg-3">
                        <a href="questions-right-sidebar.html">questions right sidebar <span
                          class="badge bg-warning text-white">New</span></a>
                        <a href="user-list.html">user list <span class="badge bg-warning text-white">New</span></a>
                        <a href="category-list.html">category list <span class="badge bg-warning text-white">New</span></a>
                        <a href="tags-list.html">tags list <span class="badge bg-warning text-white">New</span></a>
                        <a href="add-post.html">add post <span class="badge bg-warning text-white">New</span></a>
                        <a href="badges-list.html">Badges list <span class="badge bg-warning text-white">New</span></a>
                        <a href="job-list.html">job list <span class="badge bg-warning text-white">New</span></a>
                        <a href="error-2.html">page 404 2 <span class="badge bg-warning text-white">New</span></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">blog <i class="la la-angle-down fs-11"></i></a>
                  <ul class="dropdown-menu-item">
                    <li><a href="blog-grid-no-sidebar.html">grid no sidebar</a></li>
                    <li><a href="blog-left-sidebar.html">blog left sidebar</a></li>
                    <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                    <li><a href="blog-single.html">blog detail</a></li>
                  </ul>
                </li>
              </ul><!-- end ul -->
            </nav><!-- end main-menu -->
            <form class="mr-4" method="post">
              <div class="form-group mb-0">
                <input v-model="search" class="form-control form--control form--control-bg-gray" name="search"
                       placeholder="Type your search words..." type="text" v-on:keyup="typingSearch">
                <div class="search_result">
                  <ul class="list-unstyled">
                    <li v-for="question in search_result">
                      <NuxtLink :to="{name: 'questions-slug', params: {slug: question.slug}}"
                                @click="clearSearch()"><a href="#">
                        <div class="media">
                          <div class="media-left">
                            <img class="media-object" :src="question.avatar" alt="Generic placeholder image">
                          </div>
                          <div class="media-body">
                            <h4 class="media-heading">{{ question.title.substring(0, 14) }} <span
                              v-if="question.title.length > 14">...</span></h4>
                            <p>{{ question.question.substring(0, 56) }} <span
                              v-if="question.question.length > 56">...</span></p>
                          </div>
                        </div>
                      </a>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
                <button class="form-btn" type="button"><i class="la la-search"></i></button>
              </div>
            </form>
            <div class="nav-right-button">
              <NuxtLink v-if="!access_token" :to="{ name: 'accounts-login' }"><a class="btn theme-btn" href="#"><i
                class="la la-user mr-1"></i> Account</a></NuxtLink>
              <div v-else class="dropdown user-dropdown">
                <a id="userMenuDropdown" aria-expanded="false" aria-haspopup="true"
                   class="nav-link dropdown-toggle dropdown--toggle pl-2"
                   data-toggle="dropdown" href="#" role="button">
                  <div
                    class="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                    <div class="media-img media-img-xs flex-shrink-0 rounded-full mr-2">
                      <img id="profile_avatar" :src="user.avatar" alt="avatar" class="rounded-full">
                    </div>
                    <div class="media-body p-0 border-left-0">
                      <h5 class="fs-14">{{ user.username }}</h5>
                    </div>
                  </div>
                </a>
                <div aria-labelledby="userMenuDropdown"
                     class="dropdown-menu dropdown--menu dropdown-menu-right mt-3 keep-open">
                  <h6 class="dropdown-header">Hi, {{ user.username }}</h6>
                  <div class="dropdown-divider border-top-gray mb-0"></div>
                  <div class="dropdown-item-list">
                    <NuxtLink :to="{name: 'accounts-profile-id', params: {id: user.id}}"><a class="dropdown-item"
                                                                                            href="user-profile.html"><i
                      class="la la-user mr-2"></i>Profile</a></NuxtLink>
                    <a class="dropdown-item" href="notifications.html"><i class="la la-bell mr-2"></i>Notifications</a>
                    <a class="dropdown-item" href="referrals.html"><i class="la la-user-plus mr-2"></i>Referrals</a>
                    <a class="dropdown-item" href="setting.html"><i class="la la-gear mr-2"></i>Settings</a>
                    <a class="dropdown-item" href="#" @click="logout"><i class="la la-power-off mr-2"></i>Log out</a>
                  </div>
                </div>
              </div>
            </div><!-- end nav-right-button -->
          </div><!-- end menu-wrapper -->
        </div><!-- end col-lg-10 -->
      </div><!-- end row -->
    </div><!-- end container -->
    <div class="off-canvas-menu custom-scrollbar-styled">
      <div class="off-canvas-menu-close icon-element icon-element-sm shadow-sm" data-placement="left"
           data-toggle="tooltip" title="Close menu">
        <i class="la la-times"></i>
      </div><!-- end off-canvas-menu-close -->
      <ul class="generic-list-item off-canvas-menu-list pt-90px">
        <li>
          <a href="#">Home</a>
          <ul class="sub-menu">
            <li><a href="index.html">Home - landing</a></li>
            <li><a href="home-2.html">Home - main</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Pages</a>
          <ul class="sub-menu">
            <li><a href="user-profile.html">user profile</a></li>
            <li><a href="notifications.html">Notifications</a></li>
            <li><a href="referrals.html">Referrals</a></li>
            <li><a href="setting.html">settings</a></li>
            <li><a href="ask-question.html">ask question</a></li>
            <li><a href="question-details.html">question details</a></li>
            <li><a href="about.html">about</a></li>
            <li><a href="revisions.html">revisions</a></li>
            <li><a href="category.html">category</a></li>
            <li><a href="companies.html">companies</a></li>
            <li><a href="company-details.html">company details</a></li>
            <li><a href="careers.html">careers</a></li>
            <li><a href="career-details.html">career details</a></li>
            <li><a href="contact.html">contact</a></li>
            <li><a href="faq.html">FAQs</a></li>
            <li><a href="pricing-table.html">pricing tables</a></li>
            <li><a href="error.html">page 404</a></li>
            <li><a href="terms-and-conditions.html">Terms & conditions</a></li>
            <li><a href="privacy-policy.html">privacy policy</a></li>
          </ul>
        </li>
        <li>
          <a href="#">blog</a>
          <ul class="sub-menu">
            <li><a href="blog-grid-no-sidebar.html">grid no sidebar</a></li>
            <li><a href="blog-left-sidebar.html">blog left sidebar</a></li>
            <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
            <li><a href="blog-single.html">blog detail</a></li>
          </ul>
        </li>
      </ul>
      <div class="off-canvas-btn-box px-4 pt-5 text-center">
        <a class="btn theme-btn theme-btn-sm theme-btn-outline" data-target="#loginModal" data-toggle="modal"
           href="#"><i class="la la-sign-in mr-1"></i> Login</a>
        <span class="fs-15 fw-medium d-inline-block mx-2">Or</span>
        <a class="btn theme-btn theme-btn-sm" data-target="#signUpModal" data-toggle="modal" href="#"><i
          class="la la-plus mr-1"></i> Sign up</a>
      </div>
    </div><!-- end off-canvas-menu -->
    <div class="mobile-search-form">
      <div class="d-flex align-items-center">
        <form class="flex-grow-1 mr-3" method="post">
          <div class="form-group mb-0">
            <input class="form-control form--control pl-40px" name="search" placeholder="Type your search words..."
                   type="text">
            <span class="la la-search input-icon"></span>
          </div>
        </form>
        <div class="search-bar-close icon-element icon-element-sm shadow-sm">
          <i class="la la-times"></i>
        </div><!-- end off-canvas-menu-close -->
      </div>
    </div><!-- end mobile-search-form -->
    <div class="body-overlay"></div>
  </header>
</template>

<script>
import axios from "axios";
import {api_domain} from "../constants/constants";
import Cookies from "js-cookie";

export default {
  name: "Header",
  data() {
    return {
      user: {
        username: null,
        email: null,
        id: null,
        avatar: null,
      },
      access_token: null,
      search: null,
      search_result: [],
    }
  },
  created() {
    if (Cookies.get("access_token")) {
      this.isLogged()
    } else {
      this.getUser()
    }
  },
  mounted() {
    this.$root.$on("editProfile", () => {
      this.getUser()
    })
  },
  watch: {
    async $route(to, from) {
      this.clearSearch()
    },
  },
  methods: {
    isLogged() {
      axios.get(api_domain + 'accounts/isLogged', {
        headers: {
          'Authorization': 'Bearer ' + Cookies.get("access_token"),
        }
      })
        .then(response => {
          if (response.data) {
            this.getUser()
          } else {
            document.cookie.split(";").forEach(function (c) {
              document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getUser() {
      this.access_token = Cookies.get('access_token');
      this.user.id = Cookies.get('user.id');
      this.user.username = Cookies.get('user.name');
      this.user.email = Cookies.get('user.email');
      this.user.avatar = Cookies.get('user.avatar');
    },
    typingSearch() {
      axios.get(api_domain + 'questions/find/' + this.search)
        .then(response => {
          if (response.data.status_code !== 404) {
            this.search_result = response.data
          } else {
            this.search_result = []
          }
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    },
    clearSearch() {
      this.search = '';
      this.search_result = [];
    },
    logout() {
      axios.get(api_domain + 'accounts/log-out', {
        headers: {
          'Authorization': 'Bearer ' + this.access_token,
        }
      }).then(response => {
        if (response.data.status_code === 200) {
          this.$notify.success({
            title: response.data.message,
            message: "Bạn sẽ sớm được điều hướng",
          });
          Cookies.remove('access_token');
          Cookies.remove('user.id');
          Cookies.remove('user.name');
          Cookies.remove('user.email');
          this.$router.push({name: 'accounts-login'});
        }
      }).catch(error => {
        this.$notify.error({
          title: "Đăng xuất không thành công",
          message: "Vui lòng thử lại sau.",
        });
      });
    },
  }
}
</script>

<style scoped>
.search_result {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  z-index: 9999;
  padding: 10px;
}

.search_result ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.search_result ul li {
  padding: 5px 0;
  border-bottom: 1px solid #e5e5e5;
}

.search_result ul li:last-child {
  border-bottom: none;
}

.search_result ul li a {
  color: #333;
  text-decoration: none;
}

.search_result ul li a:hover {
  color: #00a8ff;
}

.media-object {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
</style>
