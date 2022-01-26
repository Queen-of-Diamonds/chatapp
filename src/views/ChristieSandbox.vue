<template>
  <ImageDisplay>
    <Clock />
    <div class="p5-description">
      Modern Clock
      <div class="text">
        This design shows you how to get the hours, minutes and seconds and
        design a template based on those.
        <b
          ><a
            href="https://www.youtube.com/watch?v=E4RyStef-gY"
            target="_blank"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            >Click here</a
          ></b>
      </div>
    </div></ImageDisplay
  >

  <ImageDisplay>
    <BezierCurves />
    <div class="p5-description">
      Multicolour Bezier Curves
      <div class="text">
        This design shows you how to use a series of anchor and control points
        to create this design.
        <b
          ><a
            href="https://www.youtube.com/watch?v=enNfb6p3j_g&t=1s"
            target="_blank"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            >Click here</a
          ></b>
      </div>
    </div></ImageDisplay
  >

  <ImageDisplay>
    <PerlinGraph />
    <div class="p5-description">
      One Dimensional Perlin Graph
      <div class="text">
        This graph uses one dimensional perlin noise to create this effect.
        <b
          ><a
            href="https://www.youtube.com/watch?v=y7sgcFhk6ZM"
            target="_blank"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            >Click here</a
          ></b>
      </div>
    </div></ImageDisplay
  >

  <ImageDisplay>
    <PerlinFlow />
    <div class="p5-description">
      Two Dimensional Perlin Flow
      <div class="text">
        This design uses creative coding effect that produces organic-looking
        strands on the screen.
        <b
          ><a
            href="https://www.youtube.com/watch?v=BjoM9oKOAKY"
            target="_blank"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            >Click here</a
          ></b>
      </div>
    </div></ImageDisplay
  >
</template>

<script setup>
import ImageDisplay from "@/components/ImageDisplay.vue";
import Clock from "@/sketches/clock/Clock.vue";
import BezierCurves from "@/sketches/bezier-curves/BezierCurves.vue";
import PerlinGraph from "@/sketches/perlin-noise/PerlinGraph.vue";
import PerlinFlow from "@/sketches/perlin-noise/PerlinFlow.vue";
</script>

<style>
/* a:link {
  color: #0000FF;
}
a:visited {
  color: #808080;
}
a:hover {
  color: #0000FF;
}
a:active {
  color: #0b1e86;
} */
</style>
