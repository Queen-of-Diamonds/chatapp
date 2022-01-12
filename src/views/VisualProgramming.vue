<template>

    <BezierCurves />
    <Radar />
    <PerlinGraph />
    <PerlinFlow></PerlinFlow>
    <Clock/>

</template>

<script setup>
import { onMounted, ref } from "vue";
import Radar from "@/sketches/radar/Radar.vue";
import PerlinGraph from "@/sketches/perlin-noise/PerlinGraph.vue";
import PerlinFlow from "@/sketches/perlin-noise/PerlinFlow.vue";
import BezierCurves from "@/sketches/bezier-curves/BezierCurves.vue";
import Clock from "@/sketches/clock/Clock.vue";
</script>

<style scoped>
.card {
  width: 1vw;
  height: 1vh;
}
</style>
