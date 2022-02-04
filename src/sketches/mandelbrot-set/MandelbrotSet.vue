<template>
  <div id="mandelbrot-set"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
if (process.browser) {
  var mandelbrot = require("./mandelbrotSet");
}

const P5 = require("p5");
new P5(mandelbrot.main, "mandelbrot-set");
</script>

<style lang="scss" scoped></style>