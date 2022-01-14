<template>
  <div id="clock"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
if (process.browser) {
  var clock = require("./clock");
}

const P5 = require("p5");
new P5(clock.main, "clock");
</script>

<style scoped>
</style>