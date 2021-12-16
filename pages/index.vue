<template>
  <div>
    <TopContent/>
    <Question keep-alive/>
    <CTA/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CTA from "~/components/HomeComponent/CTA.vue";
import TopContent from "~/components/HomeComponent/TopContent.vue";
import Question from "~/components/HomeComponent/Question.vue";

export default Vue.extend({
  components: {Question, TopContent, CTA},
  head: {
    title: "Cổng hỏi đáp hàng đầu vũ trụ",
  },
})
</script>
