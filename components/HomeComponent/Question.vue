<template>
  <section class="question-area pt-80px pb-30px">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 pr-0">
          <div class="sidebar pb-45px position-sticky top-0">
            <ul class="generic-list-item generic-list-item-highlight fs-15">
              <li class="lh-26"><a href="index.html"><i class="la la-home mr-1 text-black"></i> Home</a></li>
              <li class="lh-26 active"><a href="home-3.html"><i class="la la-globe mr-1 text-black"></i> Questions</a>
              </li>
              <li class="lh-26"><a href="tags-list.html"><i class="la la-tags mr-1 text-black"></i> Tags</a></li>
              <li class="lh-26"><a href="user-list.html"><i class="la la-user mr-1 text-black"></i> Users</a></li>
              <li class="lh-26"><a href="badges-list.html"><i class="la la-id-badge mr-1 text-black"></i> Badges</a>
              </li>
              <li class="lh-26"><a href="category-list.html"><i class="la la-sort mr-1 text-black"></i> Categories</a>
              </li>
              <li class="lh-26"><a href="job-list.html"><i class="la la-mouse mr-1 text-black"></i> Jobs</a></li>
              <li class="lh-26"><a href="companies.html"><i class="la la-briefcase mr-1 text-black"></i> Companies</a>
              </li>
            </ul>
          </div><!-- end sidebar -->
        </div><!-- end col-lg-2 -->
        <div class="col-lg-7 px-0">
          <div class="question-main-bar border-left border-left-gray pb-50px">
            <div class="filters pb-4 pl-3 d-flex align-items-center justify-content-between">
              <div class="mr-3">
                <h3 class="fs-18 fw-medium">All Questions</h3>
                <p class="pt-1 fs-14 fw-medium lh-20">21,287 questions</p>
              </div>
              <el-select v-model="pageSize" placeholder="Select" @change="getQuestions">
                <el-option
                  v-for="item in optionPage"
                  :key="item.value"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div><!-- end filters -->
            <div class="questions-snippet border-top border-top-gray">
              <div v-for="question in questions"
                class="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                <div class="votes text-center votes-2">
                  <div class="vote-block">
                    <span class="vote-counts d-block text-center pr-0 lh-20 fw-medium">{{ question.vote }}</span>
                    <span class="vote-text d-block fs-13 lh-18">votes</span>
                  </div>
                  <div :class="'answer-block my-2 ' + question.status">
                    <span class="answer-counts d-block lh-20 fw-medium">{{ question.answer_count }}</span>
                    <span class="answer-text d-block fs-13 lh-18">{{ pluralize('answer', question.answer_count) }}</span>
                  </div>
                  <div class="view-block">
                    <span class="view-counts d-block lh-20 fw-medium">{{ question.views }}</span>
                    <span class="view-text d-block fs-13 lh-18">views</span>
                  </div>
                </div>
                <div class="media-body">
                  <h5 class="mb-2 fw-medium"><NuxtLink :to="{name: 'questions-slug', params: {slug: question.slug}}"><a href="#">{{ question.title }}</a></NuxtLink></h5>
                  <p class="mb-2 truncate lh-20 fs-15" v-html="question.question"></p>
                  <div class="tags">
                    <a href="#" class="tag-link">javascript</a>
                    <a href="#" class="tag-link">bootstrap-4</a>
                    <a href="#" class="tag-link">jquery</a>
                    <a href="#" class="tag-link">select</a>
                  </div>
                  <div class="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                    <a href="user-profile.html" class="media-img d-block">
                      <img :src="question.avatar" alt="avatar">
                    </a>
                    <div class="media-body d-flex flex-wrap align-items-center justify-content-between">
                      <div>
                        <h5 class="pb-1"><NuxtLink :to="{name: 'accounts-profile-id', params: {id: question.user.id}}"><a href="user-profile.html">{{ question.username }}</a></NuxtLink></h5>
                        <div class="stats fs-12 d-flex align-items-center lh-18">
                          <span class="text-black pr-2" title="Reputation score">224</span>
                          <span class="pr-2 d-inline-flex align-items-center" title="Gold badge"><span
                            class="ball gold"></span>16</span>
                          <span class="pr-2 d-inline-flex align-items-center" title="Silver badge"><span
                            class="ball silver"></span>93</span>
                          <span class="pr-2 d-inline-flex align-items-center" title="Bronze badge"><span
                            class="ball"></span>136</span>
                        </div>
                      </div>
                      <small class="meta d-block text-right">
                        <span class="text-black d-block lh-18">asked</span>
                        <span class="d-block lh-18 fs-12">{{ question.date_created }}</span>
                      </small>
                    </div>
                  </div>
                </div>
              </div><!-- end media -->
            </div><!-- end questions-snippet -->
            <el-pagination
              style="margin-top: 50px ;justify-content: center; display: flex"
              background
              layout="prev, pager, next"
              :page-size="pageSize"
              :current-page.sync="currentPage"
              @current-change="getQuestions()"
              :total="question_count">
            </el-pagination>
          </div><!-- end question-main-bar -->
        </div><!-- end col-lg-7 -->
        <div class="col-lg-3">
          <div class="sidebar">
            <div class="card card-item">
              <div class="card-body">
                <h3 class="fs-17 pb-3">Related Questions</h3>
                <div class="divider"><span></span></div>
                <div class="sidebar-questions pt-3">
                  <div class="media media-card media--card media--card-2">
                    <div class="media-body">
                      <h5><a href="question-details.html">Using web3 to call precompile contract</a></h5>
                      <small class="meta">
                        <span class="pr-1">2 mins ago</span>
                        <span class="pr-1">. by</span>
                        <a href="#" class="author">Sudhir Kumbhare</a>
                      </small>
                    </div>
                  </div><!-- end media -->
                  <div class="media media-card media--card media--card-2">
                    <div class="media-body">
                      <h5><a href="question-details.html">Is it true while finding Time Complexity of the algorithm
                        [closed]</a></h5>
                      <small class="meta">
                        <span class="pr-1">48 mins ago</span>
                        <span class="pr-1">. by</span>
                        <a href="#" class="author">wimax</a>
                      </small>
                    </div>
                  </div><!-- end media -->
                  <div class="media media-card media--card media--card-2">
                    <div class="media-body">
                      <h5><a href="question-details.html">image picker and store them into firebase with flutter</a>
                      </h5>
                      <small class="meta">
                        <span class="pr-1">1 hour ago</span>
                        <span class="pr-1">. by</span>
                        <a href="#" class="author">Antonin gavrel</a>
                      </small>
                    </div>
                  </div><!-- end media -->
                </div><!-- end sidebar-questions -->
              </div>
            </div><!-- end card -->
            <div class="card card-item">
              <div class="card-body">
                <h3 class="fs-17 pb-3">Related Tags</h3>
                <div class="divider"><span></span></div>
                <div class="tags pt-4">
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">analytics</a>
                    <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                  </div><!-- end tag-item -->
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">computer</a>
                    <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                  </div><!-- end tag-item -->
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">python</a>
                    <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                  </div><!-- end tag-item -->
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">javascript</a>
                    <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                  </div><!-- end tag-item -->
                  <div class="tag-item">
                    <a href="#" class="tag-link tag-link-md">c#</a>
                    <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                  </div><!-- end tag-item -->
                  <div class="collapse" id="showMoreTags">
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">java</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">swift</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">html</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">angular</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">flutter</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div class="tag-item">
                      <a href="#" class="tag-link tag-link-md">machine-language</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                  </div><!-- end collapse -->
                  <a class="collapse-btn fs-13" data-toggle="collapse" href="#showMoreTags" role="button"
                     aria-expanded="false" aria-controls="showMoreTags">
                    <span class="collapse-btn-hide">Show more<i class="la la-angle-down ml-1 fs-11"></i></span>
                    <span class="collapse-btn-show">Show less<i class="la la-angle-up ml-1 fs-11"></i></span>
                  </a>
                </div>
              </div>
            </div><!-- end card -->
            <div class="ad-card">
              <h4 class="text-gray text-uppercase fs-13 pb-3 text-center">Advertisements</h4>
              <div class="ad-banner mb-4 mx-auto">
                <span class="ad-text">290x500</span>
              </div>
            </div><!-- end ad-card -->
          </div><!-- end sidebar -->
        </div><!-- end col-lg-3 -->
      </div><!-- end row -->
    </div><!-- end container -->
  </section>
</template>

<script>
import axios from "axios";
import {api_domain} from "~/constants/constants";
import Cookies from "js-cookie";
import Pluralize from "pluralize";

export default {
  name: "Question",
  data() {
    return {
      questions: [],
      access_token: "",
      pluralize: Pluralize,
      currentPage: 1,
      pageSize: 5,
      question_count: 0,
      optionPage: [
        {
          value: 5,
          key: 5
        }, {
        value: 10,
          key: 10
        }, {
        value: 20,
          key: 20
        }
      ]
    }
  },
  created() {
    this.getQuestions();
    this.access_token = Cookies.get("access_token");
  },
  methods: {
    change(){

    },
    getQuestions() {
      axios.get(api_domain + 'questions/' + this.pageSize + '/' + this.currentPage)
        .then(response => {
          this.questions = response.data[0];
          this.question_count = response.data[1];
        })
        .catch(error => {
          console.log(error);
        })
    },
  }
}
</script>

<style scoped>

</style>
