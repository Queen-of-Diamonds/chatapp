<template>
<div class="gallery">
  <div class="bezier">
    <BezierCurves />
    </div>
    <div class="radar">
    <Radar />
    </div>
    <div class="graph">
    <PerlinGraph />
    </div>
    <div class="flow">
    <PerlinFlow></PerlinFlow>
    </div>
    <div class="clock">
    <Clock/>
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
</script>

<style scoped>
.card {
  width: 1vw;
  height: 1vh;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 15px;
}
.bezier {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 6;
}

.radar {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 6;
}

.flow {
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
}
.clock {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 9;
}
</style>
