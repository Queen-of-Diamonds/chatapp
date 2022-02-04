<template>
  <div>
    <div class="container">
    <BezierCurves />
    <span>Add text here</span>
    <Radar />
    <PerlinGraph />
    <PerlinFlow></PerlinFlow>
    <Clock />
    <MandelbrotSet></MandelbrotSet>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Radar from "@/sketches/radar/Radar.vue";
import PerlinGraph from "@/sketches/perlin-noise/PerlinGraph.vue";
import PerlinFlow from "@/sketches/perlin-noise/PerlinFlow.vue";
import BezierCurves from "@/sketches/bezier-curves/BezierCurves.vue";
import Clock from "@/sketches/clock/Clock.vue";
import MandelbrotSet from "@/sketches/mandelbrot-set/MandelbrotSet.vue";
</script>

<style scoped>
.card {
  width: 1vw;
  height: 1vh;
}

.container {
  display: flex;
}
</style>
