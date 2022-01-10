<template>
  <div class="card">
    <Radar />
    <PerlinGraph />
    <PerlinFlow></PerlinFlow>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Radar from "@/sketches/radar/Radar.vue";
import PerlinGraph from "@/sketches/perlin-noise/PerlinGraph.vue";
import PerlinFlow from "@/sketches/perlin-noise/PerlinFlow.vue";

</script>

<style lang="scss" scoped></style>
