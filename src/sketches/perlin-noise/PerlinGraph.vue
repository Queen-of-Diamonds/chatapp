<template>
  <div id="perlin-graph"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
if (process.browser) {
  var perlin = require("./perlinGraph");
}

const P5 = require("p5");
new P5(perlin.main, "perlin-graph");
</script>

<style lang="scss" scoped></style>
