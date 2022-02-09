<template>
  <div id="bezier-curves"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
if (process.browser) {
  var bezier = require("./bezierCurves");
}

const P5 = require("p5");
new P5(bezier.main, "bezier-curves");
</script>

<style scoped>
#bezier-curves {
  height: 100%;
  /* border: 2px dotted blue; */
}
</style>