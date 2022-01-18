<template>
  <ImageDisplay>
    <Clock />
    <div class="p5-description">
      Heading goes here
     <div class="text">Description text goes here</div>
      </div></ImageDisplay>
     
  <ImageDisplay>
    <BezierCurves />
    <div class="p5-description">
      Heading goes here
      <div class="text">Description text goes here</div>
    </div></ImageDisplay>
  
  <ImageDisplay>
    <Radar />
    <div class="p5-description">
      Heading goes here
      <div class="text">Description text goes here</div>
    </div></ImageDisplay>
  
  <ImageDisplay>
    <PerlinGraph />
    <div class="p5-description">
      Heading goes here
      <div class="text">Description text goes here</div>
    </div></ImageDisplay>
  
  <ImageDisplay>
    <PerlinFlow />
    <div class="p5-description">
      Heading goes here
     <div class="text">Description text goes here</div>
    </div></ImageDisplay>
</template>

<script setup>
import ImageDisplay from "@/components/ImageDisplay.vue";
import Clock from "@/sketches/clock/Clock.vue";
import BezierCurves from "@/sketches/bezier-curves/BezierCurves.vue";
import Radar from "@/sketches/radar/Radar.vue";
import PerlinGraph from "@/sketches/perlin-noise/PerlinGraph.vue";
import PerlinFlow from "@/sketches/perlin-noise/PerlinFlow.vue";
</script>

<style></style>
