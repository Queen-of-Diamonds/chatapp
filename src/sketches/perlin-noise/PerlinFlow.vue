<template>
  <div id="perlin-flow"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
if (process.browser) {
  var perlin = require("./perlinFlow");
}

const P5 = require("p5");
new P5(perlin.main, "perlin-flow");
</script>

<style scoped>
#perlin-flow {
  border: 0.5px solid black;
}
</style>