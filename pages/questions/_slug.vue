<template>
  <div>
    <section class="hero-area bg-white shadow-sm overflow-hidden pt-40px pb-40px">
      <span class="stroke-shape stroke-shape-1"></span>
      <span class="stroke-shape stroke-shape-2"></span>
      <span class="stroke-shape stroke-shape-3"></span>
      <span class="stroke-shape stroke-shape-4"></span>
      <span class="stroke-shape stroke-shape-5"></span>
      <span class="stroke-shape stroke-shape-6"></span>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-9">
            <div class="hero-content">
              <h2 class="section-title pb-2 fs-24 lh-34">Find the best answer to your technical question, <br>
                help others answer theirs
              </h2>
              <p class="lh-26">If you are going to use a passage of Lorem Ipsum, you need to be sure there
                <br> isn't anything embarrassing hidden in the middle of text.
              </p>
              <ul class="generic-list-item pt-3">
                <li><span class="icon-element icon-element-xs shadow-sm d-inline-block mr-2"><svg
                  fill="#6c727c" height="20px" viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg"><path
                  d="M0 0h24v24H0V0z" fill="none"/><path
                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg></span>
                  Anybody can ask a question
                </li>
                <li><span class="icon-element icon-element-xs shadow-sm d-inline-block mr-2"><svg
                  fill="#6c727c" height="20px" viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg"><path
                  d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></span>
                  Anybody can answer
                </li>
                <li><span class="icon-element icon-element-xs shadow-sm d-inline-block mr-2"><svg
                  height="20px" viewBox="0 0 320 512" width="20px" xmlns="http://www.w3.org/2000/svg"><path
                  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                  fill="#6c727c"></path></svg></span>
                  The best answers are voted up and rise to the top
                </li>
              </ul>
            </div><!-- end hero-content -->
          </div><!-- end col-lg-9 -->
          <div class="col-lg-3">
            <div class="hero-btn-box text-right py-3">
              <NuxtLink :to="{ name: 'questions-add' }"><a class="btn theme-btn" href="ask-question.html">Ask a
                Question</a></NuxtLink>
            </div>
          </div>
        </div><!-- end row -->
      </div><!-- end container -->
    </section>
    <section class="question-area pt-40px pb-40px">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="question-main-bar mb-50px">
              <div class="question-highlight">
                <div class="media media-card shadow-none rounded-0 mb-0 bg-transparent p-0">
                  <div class="media-body">
                    <h5 class="fs-20">{{ question.title }}</h5>
                    <div class="meta d-flex flex-wrap align-items-center fs-13 lh-20 py-1">
                      <div class="pr-3">
                        <span>Asked</span>
                        <span class="text-black">{{ question.date_created_full }}</span>
                      </div>
                      <div class="pr-3">
                        <span class="pr-1">Active</span>
                        <a class="text-black" href="#">19 days ago</a>
                      </div>
                      <div class="pr-3">
                        <span class="pr-1">Viewed</span>
                        <span class="text-black" href="#">{{ question.views }} {{
                            pluralize('view', question.views)
                          }}</span>
                      </div>
                    </div>
                    <div class="tags">
                      <a class="tag-link" href="#">javascript</a>
                      <a class="tag-link" href="#">jquery</a>
                      <a class="tag-link" href="#">attribute</a>
                    </div>
                  </div>
                </div><!-- end media -->
              </div><!-- end question-highlight -->
              <div class="question d-flex">
                <div class="votes votes-styled w-auto">
                  <div id="vote" class="upvotejs">
                    <a :class="'upvote ' + question.vote_up" data-placement="right" data-toggle="tooltip"
                       title="This question is useful" @click="vote_question(1)"></a>
                    <span class="count">{{ question.vote }}</span>
                    <a :class="'downvote ' + question.vote_down" data-placement="right" data-toggle="tooltip"
                       title="This question is not useful" @click="vote_question(-1)"></a>
                    <a class="star star-on" data-placement="right" data-toggle="tooltip"
                       title="Bookmark this question."></a>
                  </div>
                </div><!-- end votes -->
                <div class="question-post-body-wrap flex-grow-1">
                  <div class="question-post-body">
                    <div v-html="question.question"></div>
                  </div><!-- end question-post-body -->
                  <div class="question-post-user-action">
                    <div class="post-menu">
                      <div class="btn-group">
                        <button id="shareDropdownMenu" aria-expanded="false" aria-haspopup="true"
                                class="btn dropdown-toggle after-none" data-toggle="dropdown" type="button">Share
                        </button>
                        <div aria-labelledby="shareDropdownMenu"
                             class="dropdown-menu dropdown--menu dropdown--menu-2 mt-2">
                          <div class="py-3 px-4">
                            <h4 class="fs-15 pb-2">Share a link to this question</h4>
                            <form action="#" class="copy-to-clipboard">
                              <span class="text-success-message">Link Copied!</span>
                              <input class="form-control form--control form-control-sm copy-input" type="text"
                                     value="https://Disilab.com/q/66552850/15319675">
                              <div class="btn-box pt-2 d-flex align-items-center justify-content-between">
                                <a class="btn-text copy-btn" href="#">Copy link</a>
                                <ul class="social-icons social-icons-sm">
                                  <li><a class="bg-8 text-white shadow-none" href="#"
                                         title="Share link to this question on Facebook"><i class="la la-facebook"></i></a>
                                  </li>
                                  <li><a class="bg-9 text-white shadow-none" href="#"
                                         title="Share link to this question on Twitter"><i
                                    class="la la-twitter"></i></a></li>
                                  <li><a class="bg-dark text-white shadow-none" href="#"
                                         title="Share link to this question on DEV"><i class="lab la-dev"></i></a></li>
                                </ul>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div><!-- btn-group -->
                      <a class="btn" href="#">Edit</a>
                      <button class="btn">Follow</button>
                    </div><!-- end post-menu -->
                    <div class="media media-card user-media owner align-items-center">
                      <a class="media-img d-block" href="user-profile.html">
                        <img :src="question.avatar" alt="avatar">
                      </a>
                      <div class="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 class="pb-1">
                            <NuxtLink :to="{name: 'accounts-profile-id', params: {id: question.user_id}}"><a
                              href="user-profile.html">{{ question.username }}</a></NuxtLink>
                          </h5>
                          <div class="stats fs-12 d-flex align-items-center lh-18">
                            <span class="text-black pr-2">224,110</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span class="ball gold"></span>16</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span
                              class="ball silver"></span>93</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span class="ball"></span>136</span>
                          </div>
                        </div>
                        <small class="meta d-block text-right">
                          <span class="text-black d-block lh-18">asked</span>
                          <span class="d-block lh-18 fs-12">{{ question.date_created_full }}</span>
                        </small>
                      </div>
                    </div><!-- end media -->
                    <div class="media media-card user-media align-items-center">
                      <a class="media-img d-block" href="user-profile.html">
                        <img alt="avatar" src="~assets/images/img4.jpg">
                      </a>
                      <div class="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 class="pb-1"><a href="user-profile.html">Kevin Martin</a></h5>
                          <div class="stats fs-12 d-flex align-items-center lh-18">
                            <span class="text-black pr-2">6,514</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span class="ball gold"></span>3</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span
                              class="ball silver"></span>35</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span class="ball"></span>48</span>
                          </div>
                        </div>
                        <a class="meta d-block text-right fs-13 text-color" href="revisions.html">
                          <span class="d-block lh-18">edited</span>
                          <span class="d-block lh-18 fs-12">6 hours ago</span>
                        </a>
                      </div>
                    </div><!-- end media -->
                  </div><!-- end question-post-user-action -->
                  <div class="comments-wrap">
                    <ul class="comments-list">
                      <li>
                        <div class="comment-actions">
                          <span class="comment-score">1</span>
                        </div>
                        <div class="comment-body">
                          <span class="comment-copy">Where are you trying to get <code
                            class="code">prodId</code>?</span>
                          <span class="comment-separated">-</span>
                          <a class="comment-user" href="user-profile.html" title="15,467 reputation">Majed Badawi</a>
                          <span class="comment-separated">-</span>
                          <a class="comment-date" href="#">8 hours ago</a>
                        </div>
                      </li>
                      <li>
                        <div class="comment-actions">
                          <span class="comment-score"></span>
                        </div>
                        <div class="comment-body">
                          <span class="comment-copy">In a separate js file.  @MajedBadawi</span>
                          <span class="comment-separated">-</span>
                          <a class="comment-user owner" href="user-profile.html" title="224,110 reputation">Arden
                            Smith</a>
                          <span class="comment-separated">-</span>
                          <a class="comment-date" href="#">8 hours ago</a>
                        </div>
                      </li>
                      <li>
                        <div class="comment-actions">
                          <span class="comment-score"></span>
                        </div>
                        <div class="comment-body">
                          <span class="comment-copy">@MajedBadawi I just updated the code to show where I'm trying to get it.</span>
                          <span class="comment-separated">-</span>
                          <a class="comment-user owner" href="user-profile.html" title="224,110 reputation">Arden
                            Smith</a>
                          <span class="comment-separated">-</span>
                          <a class="comment-date" href="#">8 hours ago</a>
                        </div>
                      </li>
                      <li>
                        <div class="comment-actions">
                          <span class="comment-score"></span>
                        </div>
                        <div class="comment-body">
                          <span class="comment-copy">Your are missing quotes <code
                            class="code" v-html="'data-productId={{ $product->id }}'"></code> Your markup breaks after that</span>
                          <span class="comment-separated">-</span>
                          <a class="comment-user" href="user-profile.html" title="6,514 reputation">Kevin Martin</a>
                          <span class="comment-separated">-</span>
                          <a class="comment-date" href="#">8 hours ago</a>
                        </div>
                      </li>
                      <li>
                        <div class="comment-actions">
                          <span class="comment-score"></span>
                        </div>
                        <div class="comment-body">
                          <span class="comment-copy">This doesn't work either: <code
                            class="code">data-productId=" $product->id "</code>. @Kevin Martin</span>
                          <span class="comment-separated">-</span>
                          <a class="comment-user owner" href="user-profile.html" title="224,110 reputation">Arden
                            Smith</a>
                          <span class="comment-separated">-</span>
                          <a class="comment-date" href="#">8 hours ago</a>
                        </div>
                      </li>
                    </ul>
                    <div class="comment-form">
                      <div class="comment-link-wrap text-center">
                        <a aria-controls="addCommentCollapse" aria-expanded="false" class="collapse-btn comment-link"
                           data-toggle="collapse" href="#addCommentCollapse" role="button"
                           title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.">Add
                          a comment</a>
                      </div>
                      <div id="addCommentCollapse" class="collapse border-top border-top-gray mt-2 pt-3">
                        <form class="row pb-3" method="post">
                          <div class="col-lg-12">
                            <h4 class="fs-16 pb-2">Leave a Comment</h4>
                            <div class="divider mb-2"><span></span></div>
                          </div>
                          <div class="col-lg-12">
                            <div class="input-box">
                              <label class="fs-13 text-black lh-20">Message</label>
                              <div class="form-group">
                                <textarea class="form-control form--control form-control-sm fs-13" name="message"
                                          placeholder="Your comment here..." rows="5"></textarea>
                                <div class="d-flex flex-wrap align-items-center pt-2">
                                  <div class="badge bg-gray border border-gray mr-3 fw-regular fs-13">[named hyperlinks]
                                    (https://example.com)
                                  </div>
                                  <div class="mr-3 fw-bold fs-13">**bold**</div>
                                  <div class="mr-3 font-italic fs-13">_italic_</div>
                                </div>
                              </div>
                            </div>
                          </div><!-- end col-lg-12 -->
                          <div class="col-lg-12">
                            <div class="input-box d-flex flex-wrap align-items-center justify-content-between">
                              <div>
                                <div class="custom-control custom-checkbox fs-13">
                                  <input id="getNewComments" class="custom-control-input" type="checkbox">
                                  <label class="custom-control-label custom--control-label" for="getNewComments">Notify
                                    me of new comments vai email.</label>
                                </div>
                                <div class="custom-control custom-checkbox fs-13">
                                  <input id="getNewPosts" class="custom-control-input" type="checkbox">
                                  <label class="custom-control-label custom--control-label" for="getNewPosts">Notify me
                                    of new posts vai email.</label>
                                </div>
                              </div>
                              <button class="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                                      type="submit">Post Comment
                              </button>
                            </div>
                          </div><!-- end col-lg-12 -->
                        </form>
                      </div><!-- end collapse -->
                    </div>
                  </div><!-- end comments-wrap -->
                </div><!-- end question-post-body-wrap -->
              </div><!-- end question -->
              <div class="subheader d-flex align-items-center justify-content-between">
                <div class="subheader-title">
                  <h3 class="fs-16">{{ question.answer_count }} {{ pluralize('Answer', question.answer_count) }}</h3>
                </div><!-- end subheader-title -->
                <div class="subheader-actions d-flex align-items-center lh-1">
                  <label class="fs-13 fw-regular mr-1 mb-0">Order by</label>
                  <div class="w-100px">
                    <select class="select-container">
                      <option value="active">active</option>
                      <option value="oldest">oldest</option>
                      <option selected="selected" value="votes">votes</option>
                    </select>
                  </div>
                </div><!-- end subheader-actions -->
              </div><!-- end subheader -->
              <div v-if="question.best_answer" class="answer-wrap d-flex">
                <div class="votes votes-styled w-auto">
                  <div id="vote2" class="upvotejs">
                    <a :class="'upvote ' + question.best_answer.vote_up" data-placement="right" data-toggle="tooltip"
                       title="This question is useful" @click="vote_answer(1, question.best_answer.id)"></a>
                    <span class="count">{{ question.best_answer.vote }}</span>
                    <a :class="'downvote ' + question.best_answer.vote_down" data-placement="right"
                       data-toggle="tooltip"
                       title="This question is not useful" @click="vote_answer(-1, question.best_answer.id)"></a>
                    <a class="star check star-on mark-best" data-placement="right" data-toggle="tooltip"
                       title="The question owner accepted this answer"
                       @click="choose_best_answer(question.best_answer.id)"></a>
                  </div>
                </div><!-- end votes -->
                <div class="answer-body-wrap flex-grow-1">
                  <div class="answer-body" v-html="question.best_answer.answer">

                  </div><!-- end answer-body -->
                  <div class="question-post-user-action">
                    <div class="post-menu">
                      <div class="btn-group">
                        <button id="shareDropdownMenuTwo" aria-expanded="false" aria-haspopup="true"
                                class="btn dropdown-toggle after-none" data-toggle="dropdown" type="button">Share
                        </button>
                        <div aria-labelledby="shareDropdownMenuTwo"
                             class="dropdown-menu dropdown--menu dropdown--menu-2 mt-2">
                          <div class="py-3 px-4">
                            <h4 class="fs-15 pb-2">Share a link to this question</h4>
                            <form action="#" class="copy-to-clipboard">
                              <span class="text-success-message">Link Copied!</span>
                              <input class="form-control form--control form-control-sm copy-input" type="text"
                                     value="https://Disilab.com/q/66552850/15319675">
                              <div class="btn-box pt-2 d-flex align-items-center justify-content-between">
                                <a class="btn-text copy-btn" href="#">Copy link</a>
                                <ul class="social-icons social-icons-sm">
                                  <li><a class="bg-8 text-white shadow-none" href="#"
                                         title="Share link to this question on Facebook"><i class="la la-facebook"></i></a>
                                  </li>
                                  <li><a class="bg-9 text-white shadow-none" href="#"
                                         title="Share link to this question on Twitter"><i
                                    class="la la-twitter"></i></a></li>
                                  <li><a class="bg-dark text-white shadow-none" href="#"
                                         title="Share link to this question on DEV"><i class="lab la-dev"></i></a></li>
                                </ul>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div><!-- btn-group -->
                      <a class="btn" href="#">Edit</a>
                      <button class="btn">Follow</button>
                    </div><!-- end post-menu -->
                    <div class="media media-card user-media align-items-center">
                      <a class="media-img d-block" href="user-profile.html">
                        <img :src="question.best_answer.user.avatar" alt="avatar">
                      </a>
                      <div class="media-body d-flex align-items-center justify-content-between">
                        <div>
                          <h5 class="pb-1">
                            <NuxtLink :to="{name: 'accounts-profile-id', params: {id: question.best_answer.user.id}}"><a
                              href="user-profile.html">{{ question.best_answer.user.name }}</a></NuxtLink>
                          </h5>
                          <div class="stats fs-12 d-flex align-items-center lh-18">
                            <span class="text-black pr-2">15.5k</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span class="ball gold"></span>3</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span
                              class="ball silver"></span>10</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span class="ball"></span>26</span>
                          </div>
                        </div>
                        <small class="meta d-block text-right">
                          <span class="text-black d-block lh-18">answered</span>
                          <span class="d-block lh-18 fs-12">{{ question.best_answer.created_at }}</span>
                        </small>
                      </div>
                    </div><!-- end media -->
                    <div class="media media-card user-media align-items-center">
                      <div class="media-body d-flex align-items-center justify-content-end">
                        <a class="meta d-block text-right fs-13 text-color" href="revisions.html">
                          <span class="d-block lh-18">edited</span>
                          <span class="d-block lh-18 fs-12">8 hours ago</span>
                        </a>
                      </div>
                    </div><!-- end media -->
                  </div><!-- end question-post-user-action -->
                  <div class="comments-wrap">
                    <ul v-if="question.best_answer.reply" class="comments-list">
                      <li v-for="(reply, index) in question.best_answer.reply">
                        <div class="comment-actions">
                          <span class="comment-score">{{ index + 1 }}</span>
                        </div>
                        <div class="comment-body">
                          <span class="comment-copy">{{ reply.body }}</span>
                          <span class="comment-separated">-</span>
                          <NuxtLink :to="{name: 'accounts-profile-id', params:{id: reply.user.id}}"><a
                            class="comment-user owner" href="user-profile.html"
                            title="224,110 reputation">{{ reply.user.name }}</a></NuxtLink>
                          <span class="comment-separated">-</span>
                          <a class="comment-date" href="#">{{ reply.created_at }}</a>
                        </div>
                      </li>
                    </ul>
                    <div class="comment-form">
                      <div class="comment-link-wrap text-center">
                        <a :href="'#addCommentCollapse' + question.best_answer.id" aria-controls="addCommentCollapseTwo"
                           aria-expanded="false"
                           class="collapse-btn comment-link" data-toggle="collapse" role="button"
                           title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.">Add
                          a comment</a>
                      </div>
                      <div :id="'addCommentCollapse' + question.best_answer.id"
                           class="collapse border-top border-top-gray mt-2 pt-3">
                        <form v-if="isLogin" class="row pb-3" method="post"
                              @submit.prevent="replyAnswer(question.best_answer.id)">
                          <div class="col-lg-12">
                            <h4 class="fs-16 pb-2">Leave a Comment</h4>
                            <div class="divider mb-2"><span></span></div>
                          </div>
                          <div class="col-lg-12">
                            <div class="input-box">
                              <label class="fs-13 text-black lh-20">Message</label>
                              <div class="form-group">
                                <textarea v-model="answer_reply[question.best_answer.id]" class="form-control form--control form-control-sm fs-13"
                                          name="message" placeholder="Your comment here..."
                                          rows="5"></textarea>
                                <div class="d-flex flex-wrap align-items-center pt-2">
                                  <div class="badge bg-gray border border-gray mr-3 fw-regular fs-13">[named hyperlinks]
                                    (https://example.com)
                                  </div>
                                  <div class="mr-3 fw-bold fs-13">**bold**</div>
                                  <div class="mr-3 font-italic fs-13">_italic_</div>
                                </div>
                              </div>
                            </div>
                          </div><!-- end col-lg-12 -->
                          <div class="col-lg-12">
                            <div class="input-box d-flex flex-wrap align-items-center justify-content-between">
                              <div>
                                <div class="custom-control custom-checkbox fs-13">
                                  <input id="getNewCommentsTwo" class="custom-control-input" type="checkbox">
                                  <label class="custom-control-label custom--control-label" for="getNewCommentsTwo">Notify
                                    me of new comments vai email.</label>
                                </div>
                                <div class="custom-control custom-checkbox fs-13">
                                  <input id="getNewPostsTwo" class="custom-control-input" type="checkbox">
                                  <label class="custom-control-label custom--control-label" for="getNewPostsTwo">Notify
                                    me of new posts vai email.</label>
                                </div>
                              </div>
                              <button class="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                                      type="submit">Post Comment
                              </button>
                            </div>
                          </div><!-- end col-lg-12 -->
                        </form>
                        <NuxtLink v-else :to="{name: 'accounts-login'}"><a href="#">Login to reply</a></NuxtLink>
                      </div><!-- end collapse -->
                    </div>
                  </div><!-- end comments-wrap -->
                </div><!-- end answer-body-wrap -->
              </div><!-- end answer-wrap -->
              <div v-for="answer in show_answer" class="answer-wrap d-flex">
                <div class="votes votes-styled w-auto">
                  <div id="vote2" class="upvotejs">
                    <a :class="'upvote ' + answer.vote_up" data-placement="right" data-toggle="tooltip"
                       title="This question is useful" @click="vote_answer(1, answer.id)"></a>
                    <span class="count">{{ answer.vote }}</span>
                    <a :class="'downvote ' + answer.vote_down" data-placement="right" data-toggle="tooltip"
                       title="This question is not useful" @click="vote_answer(-1, answer.id)"></a>
                    <a class="star check mark-best" data-placement="right" data-toggle="tooltip"
                       title="The question owner accepted this answer" @click="choose_best_answer(answer.id)"></a>
                  </div>
                </div><!-- end votes -->
                <div class="answer-body-wrap flex-grow-1">
                  <div class="answer-body" v-html="answer.answer">

                  </div><!-- end answer-body -->
                  <div class="question-post-user-action">
                    <div class="post-menu">
                      <div class="btn-group">
                        <button id="shareDropdownMenuTwo" aria-expanded="false" aria-haspopup="true"
                                class="btn dropdown-toggle after-none" data-toggle="dropdown" type="button">Share
                        </button>
                        <div aria-labelledby="shareDropdownMenuTwo"
                             class="dropdown-menu dropdown--menu dropdown--menu-2 mt-2">
                          <div class="py-3 px-4">
                            <h4 class="fs-15 pb-2">Share a link to this question</h4>
                            <form action="#" class="copy-to-clipboard">
                              <span class="text-success-message">Link Copied!</span>
                              <input class="form-control form--control form-control-sm copy-input" type="text"
                                     value="https://Disilab.com/q/66552850/15319675">
                              <div class="btn-box pt-2 d-flex align-items-center justify-content-between">
                                <a class="btn-text copy-btn" href="#">Copy link</a>
                                <ul class="social-icons social-icons-sm">
                                  <li><a class="bg-8 text-white shadow-none" href="#"
                                         title="Share link to this question on Facebook"><i class="la la-facebook"></i></a>
                                  </li>
                                  <li><a class="bg-9 text-white shadow-none" href="#"
                                         title="Share link to this question on Twitter"><i
                                    class="la la-twitter"></i></a></li>
                                  <li><a class="bg-dark text-white shadow-none" href="#"
                                         title="Share link to this question on DEV"><i class="lab la-dev"></i></a></li>
                                </ul>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div><!-- btn-group -->
                      <a class="btn" href="#">Edit</a>
                      <button class="btn">Follow</button>
                    </div><!-- end post-menu -->
                    <div class="media media-card user-media align-items-center">
                      <a class="media-img d-block" href="user-profile.html">
                        <img :src="answer.user.avatar" alt="avatar">
                      </a>
                      <div class="media-body d-flex align-items-center justify-content-between">
                        <div>
                          <h5 class="pb-1">
                            <NuxtLink :to="{name: 'accounts-profile-id', params: {id: answer.user.id}}"><a
                              href="user-profile.html">{{ answer.user.name }}</a></NuxtLink>
                          </h5>
                          <div class="stats fs-12 d-flex align-items-center lh-18">
                            <span class="text-black pr-2">15.5k</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span class="ball gold"></span>3</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span
                              class="ball silver"></span>10</span>
                            <span class="pr-2 d-inline-flex align-items-center"><span class="ball"></span>26</span>
                          </div>
                        </div>
                        <small class="meta d-block text-right">
                          <span class="text-black d-block lh-18">answered</span>
                          <span class="d-block lh-18 fs-12">{{ answer.created_at }}</span>
                        </small>
                      </div>
                    </div><!-- end media -->
                    <div class="media media-card user-media align-items-center">
                      <div class="media-body d-flex align-items-center justify-content-end">
                        <a class="meta d-block text-right fs-13 text-color" href="revisions.html">
                          <span class="d-block lh-18">edited</span>
                          <span class="d-block lh-18 fs-12">8 hours ago</span>
                        </a>
                      </div>
                    </div><!-- end media -->
                  </div><!-- end question-post-user-action -->
                  <div class="comments-wrap">
                    <ul v-if="answer.reply" class="comments-list">
                      <li v-for="(reply, index) in answer.reply">
                        <div class="comment-actions">
                          <span class="comment-score">{{ index + 1 }}</span>
                        </div>
                        <div class="comment-body">
                          <span class="comment-copy">{{ reply.body }}</span>
                          <span class="comment-separated">-</span>
                          <NuxtLink :to="{name: 'accounts-profile-id', params: {id: reply.user.id}}"><a
                            class="comment-user owner" href="user-profile.html"
                            title="224,110 reputation">{{ reply.user.name }}</a></NuxtLink>
                          <span class="comment-separated">-</span>
                          <a class="comment-date" href="#">{{ reply.created_at }}</a>
                        </div>
                      </li>
                    </ul>
                    <div class="comment-form">
                      <div class="comment-link-wrap text-center">
                        <a :href="'#addCommentCollapse' + answer.id" aria-controls="addCommentCollapseTwo"
                           aria-expanded="false"
                           class="collapse-btn comment-link" data-toggle="collapse" role="button"
                           title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.">Add
                          a comment</a>
                      </div>
                      <div :id="'addCommentCollapse' + answer.id" class="collapse border-top border-top-gray mt-2 pt-3">
                        <form v-if="isLogin" class="row pb-3" method="post" @submit.prevent="replyAnswer(answer.id)">
                          <div class="col-lg-12">
                            <h4 class="fs-16 pb-2">Leave a Comment</h4>
                            <div class="divider mb-2"><span></span></div>
                          </div>
                          <div class="col-lg-12">
                            <div class="input-box">
                              <label class="fs-13 text-black lh-20">Message</label>
                              <div class="form-group">
                                <textarea v-model="answer_reply[answer.id]" class="form-control form--control form-control-sm fs-13"
                                          name="message" placeholder="Your comment here..."
                                          rows="5"></textarea>
                                <div class="d-flex flex-wrap align-items-center pt-2">
                                  <div class="badge bg-gray border border-gray mr-3 fw-regular fs-13">[named hyperlinks]
                                    (https://example.com)
                                  </div>
                                  <div class="mr-3 fw-bold fs-13">**bold**</div>
                                  <div class="mr-3 font-italic fs-13">_italic_</div>
                                </div>
                              </div>
                            </div>
                          </div><!-- end col-lg-12 -->
                          <div class="col-lg-12">
                            <div class="input-box d-flex flex-wrap align-items-center justify-content-between">
                              <div>
                                <div class="custom-control custom-checkbox fs-13">
                                  <input id="getNewCommentsTwo" class="custom-control-input" type="checkbox">
                                  <label class="custom-control-label custom--control-label" for="getNewCommentsTwo">Notify
                                    me of new comments vai email.</label>
                                </div>
                                <div class="custom-control custom-checkbox fs-13">
                                  <input id="getNewPostsTwo" class="custom-control-input" type="checkbox">
                                  <label class="custom-control-label custom--control-label" for="getNewPostsTwo">Notify
                                    me of new posts vai email.</label>
                                </div>
                              </div>
                              <button class="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                                      type="submit">Post Comment
                              </button>
                            </div>
                          </div><!-- end col-lg-12 -->
                        </form>
                        <NuxtLink v-else :to="{name: 'accounts-login'}"><a href="#">Login to reply</a></NuxtLink>
                      </div><!-- end collapse -->
                    </div>
                  </div><!-- end comments-wrap -->
                </div><!-- end answer-body-wrap -->
              </div><!-- end answer-wrap -->
              <div v-if="question.answer_count > offset" class="text-center load-more" @click="loadMore">Load more</div>
              <div class="subheader">
                <div class="subheader-title">
                  <h3 class="fs-16">Your Answer</h3>
                </div><!-- end subheader-title -->
              </div><!-- end subheader -->
              <div v-if="isLogin" class="post-form">
                <form class="pt-3" method="post" @submit.prevent="addAnswer">
                  <div class="input-box">
                    <div class="form-group">
                      <textarea class="form-control form--control form-control-sm fs-13 user-text-editor" name="message"
                                placeholder="Enter your answer here" rows="6"></textarea>
                    </div>
                  </div>
                  <button class="btn theme-btn theme-btn-sm" type="submit">Post Your Answer</button>
                </form>
              </div>
              <NuxtLink v-else :to="{name: 'accounts-login'}"><a class="mt-3" type="submit">Login To Answer</a>
              </NuxtLink>

            </div><!-- end question-main-bar -->
          </div><!-- end col-lg-9 -->
          <div class="col-lg-3">
            <div class="sidebar">
              <div class="card card-item">
                <div class="card-body">
                  <h3 class="fs-17 pb-3">Number Achievement</h3>
                  <div class="divider"><span></span></div>
                  <div class="row no-gutters text-center">
                    <div class="col-lg-6 responsive-column-half">
                      <div class="icon-box pt-3">
                        <span class="fs-20 fw-bold text-color">980k</span>
                        <p class="fs-14">Questions</p>
                      </div><!-- end icon-box -->
                    </div><!-- end col-lg-6 -->
                    <div class="col-lg-6 responsive-column-half">
                      <div class="icon-box pt-3">
                        <span class="fs-20 fw-bold text-color-2">610k</span>
                        <p class="fs-14">Answers</p>
                      </div><!-- end icon-box -->
                    </div><!-- end col-lg-6 -->
                    <div class="col-lg-6 responsive-column-half">
                      <div class="icon-box pt-3">
                        <span class="fs-20 fw-bold text-color-3">650k</span>
                        <p class="fs-14">Answer accepted</p>
                      </div><!-- end icon-box -->
                    </div><!-- end col-lg-6 -->
                    <div class="col-lg-6 responsive-column-half">
                      <div class="icon-box pt-3">
                        <span class="fs-20 fw-bold text-color-4">320k</span>
                        <p class="fs-14">Users</p>
                      </div><!-- end icon-box -->
                    </div><!-- end col-lg-6 -->
                    <div class="col-lg-12 pt-3">
                      <p class="fs-14">To get answer of question <a class="text-color hover-underline"
                                                                    href="signup.html">Join<i
                        class="la la-arrow-right ml-1"></i></a></p>
                    </div>
                  </div><!-- end row -->
                </div>
              </div><!-- end card -->
              <div class="card card-item">
                <div class="card-body">
                  <div class="d-flex align-items-center pb-3">
                    <svg class="mr-2" fill="#6c727c" height="18" viewBox="0 0 18 18" width="18">
                      <path
                        d="M1 6l8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6z"></path>
                    </svg>
                    <h3 class="fs-17">Love this site?</h3>
                  </div>
                  <div class="divider"><span></span></div>
                  <p class="fs-14 lh-20 py-3">Get the <span class="text-dark fw-medium">weekly newsletter!</span> In it,
                    you'll get:</p>
                  <ul class="generic-list-item generic-list-item-bullet fs-14 pb-3">
                    <li class="lh-20">The week's top questions and answers</li>
                    <li class="lh-20">Important community announcements</li>
                    <li class="lh-20">Questions that need answers</li>
                  </ul>
                  <button class="btn theme-btn theme-btn-gray w-100">Sign up for the digest</button>
                  <p class="fs-14 pt-1 text-center">See an example newsletter</p>
                </div>
              </div><!-- end card -->
              <div class="card card-item">
                <div class="card-body">
                  <h3 class="fs-17 pb-3">Related Questions</h3>
                  <div class="divider"><span></span></div>
                  <div class="sidebar-questions pt-3">
                    <div class="media media-card media--card media--card-2">
                      <div class="media-body">
                        <h5><a href="question-details.html">How to select the dom element with event.target</a></h5>
                        <small class="meta">
                          <span class="pr-1">2 mins ago</span>
                          <span class="pr-1">. by</span>
                          <a class="author" href="#">Sudhir Kumbhare</a>
                        </small>
                      </div>
                    </div><!-- end media -->
                    <div class="media media-card media--card media--card-2">
                      <div class="media-body">
                        <h5><a href="question-details.html">How can you cut an onion without crying?</a></h5>
                        <small class="meta">
                          <span class="pr-1">48 mins ago</span>
                          <span class="pr-1">. by</span>
                          <a class="author" href="#">wimax</a>
                        </small>
                      </div>
                    </div><!-- end media -->
                    <div class="media media-card media--card media--card-2">
                      <div class="media-body">
                        <h5><a href="question-details.html">How to change the behavior of dropdown buttons in HTML</a>
                        </h5>
                        <small class="meta">
                          <span class="pr-1">1 hour ago</span>
                          <span class="pr-1">. by</span>
                          <a class="author" href="#">Antonin gavrel</a>
                        </small>
                      </div>
                    </div><!-- end media -->
                  </div><!-- end sidebar-questions -->
                </div>
              </div><!-- end card -->
              <div class="card card-item">
                <div class="card-body">
                  <h3 class="fs-17 pb-3">Trending Tags</h3>
                  <div class="divider"><span></span></div>
                  <div class="tags pt-4">
                    <div class="tag-item">
                      <a class="tag-link tag-link-md" href="#">analytics</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div class="tag-item">
                      <a class="tag-link tag-link-md" href="#">computer</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div class="tag-item">
                      <a class="tag-link tag-link-md" href="#">python</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div class="tag-item">
                      <a class="tag-link tag-link-md" href="#">javascript</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div class="tag-item">
                      <a class="tag-link tag-link-md" href="#">c#</a>
                      <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                    </div><!-- end tag-item -->
                    <div id="showMoreTags" class="collapse">
                      <div class="tag-item">
                        <a class="tag-link tag-link-md" href="#">java</a>
                        <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                      </div><!-- end tag-item -->
                      <div class="tag-item">
                        <a class="tag-link tag-link-md" href="#">swift</a>
                        <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                      </div><!-- end tag-item -->
                      <div class="tag-item">
                        <a class="tag-link tag-link-md" href="#">html</a>
                        <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                      </div><!-- end tag-item -->
                      <div class="tag-item">
                        <a class="tag-link tag-link-md" href="#">angular</a>
                        <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                      </div><!-- end tag-item -->
                      <div class="tag-item">
                        <a class="tag-link tag-link-md" href="#">flutter</a>
                        <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                      </div><!-- end tag-item -->
                      <div class="tag-item">
                        <a class="tag-link tag-link-md" href="#">machine-language</a>
                        <span class="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                      </div><!-- end tag-item -->
                    </div><!-- end collapse -->
                    <a aria-controls="showMoreTags" aria-expanded="false" class="collapse-btn fs-13" data-toggle="collapse"
                       href="#showMoreTags" role="button">
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
    </section><!-- end question-area -->
  </div>
</template>

<script>
import {api_domain} from "../../constants/constants";
import axios from "axios";
import Pluralize from 'pluralize';
import Cookies from "js-cookie";
import checkCookie from "../../helper/checkCookie";
import $ from "jquery";

export default {
  name: 'questions-detail',
  head() {
    return {
      title: this.question.title,
    }
  },
  data() {
    return {
      question: {},
      pluralize: Pluralize,
      isLogin: checkCookie('user.id'),
      answer_reply: [],
      show_answer: [],
      offset: 1,
    }
  },
  created() {
    this.getQuestion();
  },
  methods: {
    appendAnswer() {
      this.show_answer = this.question.answers.slice(0, this.offset);
    },
    getQuestion() {
      axios.get(api_domain + 'questions/' + this.$route.params.slug, {
        headers: {
          'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
      })
        .then(response => {
          if (response.data.status_code === 404) {
            this.$notify({
              title: 'Không tìm thấy bài viết',
              message: 'Bài viết không tồn tại hoặc đã bị xóa',
              type: 'error',
              duration: 3000,
            });
            this.$router.push('/')
          }
          this.question = response.data;
          if (this.question.answer_count > 0) {
            this.show_answer = this.question.answers.slice(0, this.offset);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    vote_answer(vote, answer_id) {
      if (!Cookies.get('access_token')) {
        this.$notify({
          title: 'Bạn chưa đăng nhập',
          message: 'Vui lòng đăng nhập',
          type: 'error',
          duration: 3000,
        });
        this.$router.push({name: 'accounts-login'});
        return
      }
      axios.post(api_domain + 'questions/answer_vote', {
        vote: vote,
        answer_id: answer_id,
        user_id: Cookies.get('user.id'),
      }, {
        headers: {
          'Authorization': 'Bearer ' + Cookies.get('access_token')
        }
      })
        .then(response => {
          if (response.data.status_code === 200) {
            this.$notify({
              title: 'Thành công',
              message: 'Vote thành công',
              type: 'success',
              duration: 3000,
            });
            this.getQuestion();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    choose_best_answer(answer_id) {
      if (this.isLogin) {
        if (this.question.user.id != Cookies.get('user.id')) {
          this.$notify({
            title: 'Bạn không phải là tác giả của bài viết',
            message: 'Vui lòng đăng nhập',
            type: 'error',
            duration: 3000,
          });
        } else {
          axios.post(api_domain + 'questions/choose_best_answer', {
            question_id: this.question.id,
            answer_id: answer_id,
          }, {
            headers: {
              'Authorization': 'Bearer ' + Cookies.get('access_token'),
            }
          })
            .then(response => {
              this.$notify({
                title: 'Thành công',
                message: 'Bình chọn thành công',
                type: 'success',
                duration: 3000,
              });
              this.getQuestion();
            })
            .catch(error => {
              console.log(error);
            });
        }
      } else {
        this.$notify({
          title: 'Bạn chưa đăng nhập',
          message: 'Vui lòng đăng nhập',
          type: 'error',
          duration: 3000,
        });
      }
    },
    addAnswer() {
      if (this.isLogin) {
        const access_token = Cookies.get('access_token');
        axios.post(api_domain + 'questions/add_answer', {
          answer: $(".jqte_editor").html(),
          user_id: Cookies.get('user.id'),
          slug: this.$route.params.slug,
        }, {
          headers: {
            'Authorization': 'Bearer ' + access_token,
          }
        })
          .then(response => {
            if (this.offset === this.question.answer_count) {
              this.getQuestion()
              this.offset++
              this.appendAnswer()
            } else {
              this.getQuestion()
            }
            this.$notify({
              title: 'Thành công',
              message: 'Thêm câu trả lời thành công',
              type: 'success'
            });
          })
          .catch(error => {
            this.$notify({
              title: 'Thêm câu trả lời thất bại',
              message: 'Vui lòng thử lại sau vài phút',
              type: 'error'
            });
          });
      } else {
        this.$router.push({name: 'accounts-login'});
      }
    },
    vote_question(vote) {
      if (!Cookies.get('access_token')) {
        this.$notify({
          title: 'Bạn chưa đăng nhập',
          message: 'Vui lòng đăng nhập',
          type: 'error',
          duration: 3000,
        });
        this.$router.push({name: 'accounts-login'});
        return
      }
      axios.post(api_domain + 'questions/vote', {
        question_id: this.question.id,
        vote: vote,
        user_id: Cookies.get('user.id'),
      }, {
        headers: {
          'Authorization': 'Bearer ' + Cookies.get('access_token'),
        }
      })
        .then(response => {
          this.$notify({
            title: 'Thành công',
            message: 'Bình chọn thành công',
            type: 'success',
            duration: 3000,
          });
          this.getQuestion();
        })
        .catch(error => {
          console.log(error);
        });
    },
    replyAnswer(answer_id) {
      if (this.isLogin) {
        const access_token = Cookies.get('access_token');
        axios.post(api_domain + 'questions/reply_answer', {
          answer_id: answer_id,
          body: this.answer_reply[answer_id],
          user_id: Cookies.get('user.id'),
        }, {
          headers: {
            'Authorization': 'Bearer ' + access_token,
          }
        })
          .then(response => {
            this.getQuestion()
            this.$notify({
              title: 'Thành công',
              message: 'Thêm câu trả lời thành công',
              type: 'success'
            });
            this.answer_reply[answer_id] = '';
          })
          .catch(error => {
            this.$notify({
              title: 'Thêm câu trả lời thất bại',
              message: 'Vui lòng thử lại sau vài phút',
              type: 'error'
            });
          });
      } else {
        this.$router.push({name: 'accounts-login'});
      }
    },
    loadMore() {
      this.offset++
      this.appendAnswer()
    }
  },
}
</script>

<style scoped>
.load-more {
  cursor: pointer;
}

.load-more:hover {
  color: #2d86eb;
}

.mark-best {
  cursor: pointer !important;
}

.downvote, .upvote {
  cursor: pointer !important;
}
</style>
