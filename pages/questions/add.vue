<template>
  <section class="question-area pt-80px pb-40px">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="card card-item">
            <form class="card-body" method="post" @submit.prevent="add">
              <div class="input-box">
                <label class="fs-14 text-black fw-medium mb-0">Question Title</label>
                <p class="fs-13 pb-3 lh-20">Be specific and imagine you’re asking a question to another person</p>
                <div class="form-group">
                  <input v-model="question.title" class="form-control form--control" name="text"
                         placeholder="Why it's not a headshot ??" type="text">
                </div>
              </div><!-- end input-box -->
              <div class="input-box">
                <label class="fs-14 text-black fw-medium mb-0">Details</label>
                <p class="fs-13 pb-3 lh-20">Include all the information someone would need to answer your question</p>
                <div class="form-group">
                  <textarea class="form-control form--control user-text-editor" cols="40" rows="10"></textarea>
                  <div class="d-flex align-items-center pt-2">
                    <div class="mr-3">
                      ``` <code class="badge bg-gray border border-gray text-gray">code</code> ```
                    </div>
                    <div class="mr-3 fw-bold">**bold**</div>
                    <div class="mr-3 font-italic">*italic*</div>
                    <div>&gt;quote</div>
                  </div>
                </div>
              </div>
              <div class="input-box pt-2">
                <div class="btn-box">
                  <button class="btn theme-btn" type="submit">Publish your question</button>
                </div>
              </div>
            </form>
          </div><!-- end card -->
        </div><!-- end col-lg-8 -->
        <div class="col-lg-4">
          <div class="sidebar">
            <div class="card card-item p-4">
              <h3 class="fs-17 pb-3">Step 1: Draft your question</h3>
              <div class="divider"><span></span></div>
              <p class="fs-14 lh-22 pb-2 pt-3">The community is here to help you with specific coding, algorithm, or
                language problems.</p>
              <p class="fs-14 lh-22">Avoid asking opinion-based questions.</p>
              <div id="accordion" class="generic-accordion pt-4">
                <div class="card">
                  <div id="headingOne" class="card-header">
                    <button aria-controls="collapseOne" aria-expanded="true" class="btn btn-link fs-15"
                            data-target="#collapseOne" data-toggle="collapse">
                      <span><span class="text-color pr-2 fs-16">1.</span> Summarize the problem</span>
                      <i class="la la-angle-down collapse-icon"></i>
                    </button>
                  </div>
                  <div id="collapseOne" aria-labelledby="headingOne" class="collapse show" data-parent="#accordion">
                    <div class="card-body">
                      <ul class="generic-list-item generic-list-item-bullet generic-list-item--bullet-2 fs-14">
                        <li class="lh-18 text-black-50">Include details about your goal</li>
                        <li class="lh-18 text-black-50">Describe expected and actual results</li>
                        <li class="lh-18 text-black-50 mb-0">Include any error messages</li>
                      </ul>
                    </div>
                  </div>
                </div><!-- end card -->
                <div class="card">
                  <div id="headingTwo" class="card-header">
                    <button aria-controls="collapseTwo" aria-expanded="false" class="btn btn-link collapsed fs-15"
                            data-target="#collapseTwo" data-toggle="collapse">
                      <span><span class="text-color pr-2 fs-16">2.</span> Describe what you’ve tried</span>
                      <i class="la la-angle-down collapse-icon"></i>
                    </button>
                  </div>
                  <div id="collapseTwo" aria-labelledby="headingTwo" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                      <p class="fs-14 lh-22 text-black-50">
                        Show what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t
                        meet your needs. You can get better answers when you provide research.
                      </p>
                    </div>
                  </div>
                </div><!-- end card -->
                <div class="card">
                  <div id="headingThree" class="card-header">
                    <button aria-controls="collapseThree" aria-expanded="false" class="btn btn-link collapsed fs-15"
                            data-target="#collapseThree" data-toggle="collapse">
                      <span><span class="text-color pr-2 fs-16">3.</span> Show some code</span>
                      <i class="la la-angle-down collapse-icon"></i>
                    </button>
                  </div>
                  <div id="collapseThree" aria-labelledby="headingThree" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                      <p class="fs-14 lh-22 text-black-50">
                        When appropriate, share the minimum amount of code others need to reproduce your problem (also
                        called a
                        <a class="text-color hover-underline" href="#">minimum</a>, <a class="text-color hover-underline"
                                                                                       href="#">reproducible
                        example</a>)
                      </p>
                    </div>
                  </div>
                </div><!-- end card -->
              </div><!-- end accordion -->
            </div><!-- end card -->
            <div id="accordion-two" class="generic-accordion">
              <div class="card mb-3">
                <div id="headingFour" class="card-header">
                  <button aria-controls="collapseFour" aria-expanded="false" class="btn btn-link collapsed fs-15"
                          data-target="#collapseFour" data-toggle="collapse">
                    <span>Have a non-programming question?</span>
                    <i class="la la-angle-down collapse-icon"></i>
                  </button>
                </div>
                <div id="collapseFour" aria-labelledby="headingFour" class="collapse" data-parent="#accordion-two">
                  <div class="card-body">
                    <p class="fs-14 lh-22 text-black-50 pb-2">
                      <a class="text-color hover-underline d-block" href="#" target="_blank">Super user</a>
                      Troubleshooting hardware and software issues
                    </p>
                    <p class="fs-14 lh-22 text-black-50 pb-2">
                      <a class="text-color hover-underline d-block" href="#" target="_blank">Software engineering</a>
                      For software development methods and process questions
                    </p>
                    <p class="fs-14 lh-22 text-black-50 pb-2">
                      <a class="text-color hover-underline d-block" href="#" target="_blank">Hardware
                        recommendations</a>
                    </p>
                    <p class="fs-14 lh-22 text-black-50 pb-2">
                      <a class="text-color hover-underline d-block" href="#" target="_blank">Software
                        recommendations</a>
                    </p>
                    <p class="fs-14 lh-22 text-black-50">Ask questions about the site on <a
                      class="text-color hover-underline" href="#" target="_blank">meta</a></p>
                  </div>
                </div>
              </div><!-- end card -->
              <div class="card">
                <div id="headingFive" class="card-header">
                  <button aria-controls="collapseFive" aria-expanded="false" class="btn btn-link collapsed fs-15"
                          data-target="#collapseFive" data-toggle="collapse">
                    <span>More helpful links</span>
                    <i class="la la-angle-down collapse-icon"></i>
                  </button>
                </div>
                <div id="collapseFive" aria-labelledby="headingFive" class="collapse" data-parent="#accordion-two">
                  <div class="card-body">
                    <p class="fs-14 lh-22 text-black-50 pb-2">
                      Find more information about <a class="text-color hover-underline" href="#" target="_blank">how to
                      ask a good question here</a>
                    </p>
                    <p class="fs-14 lh-22 text-black-50">
                      Visit the <a class="text-color hover-underline" href="#" target="_blank">help center</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';
import axios from "axios";
import {api_domain} from "../../constants/constants";
import Cookies from "js-cookie";

export default {
  name: "add",
  head: {
    title: 'Ask us',
  },
  created() {
    this.access_token = Cookies.get('access_token');
  },
  components: {},
  data() {
    return {
      question: {
        title: '',
        question: '',
        user_id: '',
      },
      access_token: '',
    }
  },
  methods: {
    add() {
      this.question.question = $(".jqte_editor").html();
      this.question.user_id = Cookies.get('user.id');
      axios.post(api_domain + 'questions/add', this.question, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.access_token,
        }
      }).then(res => {
        console.log(res.data);
        if (res.data.status_code === 200) {
          this.$notify({
            title: 'Thành công',
            message: res.data.message,
            type: 'success',
            duration: 3000,
          });
          this.$router.push({name: 'index'});
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>

</style>
