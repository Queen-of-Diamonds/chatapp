<template>
  <div id="fractal-tree"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
if (process.browser) {
  var fractal = require("./fractalTree");
}

const P5 = require("p5");
new P5(fractal.main, "fractal-tree");
</script>

<style lang="scss" scoped></style>