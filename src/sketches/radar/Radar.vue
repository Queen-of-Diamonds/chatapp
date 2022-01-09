<template>
  <div class="radar-container border">
    <div class="d-flex justify-content-center" id="p5Canvas"></div>
    <div class="message d-flex justify-content-center">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
if (process.browser) {
  var radar = require("./radar");
}

const message = ref("");
const P5 = require("p5");
new P5(radar.main, 'radar-container');
// new p5(sketch, 'container')

radar.setDelegate(callbackOnP5);

function callbackOnP5(timeStr) {
  message.value = timeStr;
}
</script>

<style lang="scss" scoped></style>
