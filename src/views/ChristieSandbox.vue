<template>
    <Header></Header>
  <div
    class="bg-white border m-auto max-w-8xl border-gray-300 overflow-hidden rounded-md shadow-2xl">
    <ul role="list" class="divide-y divide-gray-300">
      <li>
        <ImageDisplay>
          <Clock />
          <div class="p5-description">
            Modern Clock
            <div class="text">
              This design shows you how to get the hours, minutes and seconds
              and design a template based on those.
              <b
                ><a
                  href="https://www.youtube.com/watch?v=E4RyStef-gY"
                  target="_blank"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Click here</a
                ></b
              >
            </div>
          </div>
          </ImageDisplay>
      </li>
      <li>
        <ImageDisplay>
          <BezierCurves />
          <div class="p5-description">
            Multicolour Bezier Curves
            <div class="text">
              This design shows you how to use a series of anchor and control
              points to create this design.
              <b
                ><a
                  href="https://www.youtube.com/watch?v=enNfb6p3j_g&t=1s"
                  target="_blank"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Click here</a
                ></b
              >
            </div>
          </div>
          </ImageDisplay>
      </li>
      <li>
        <ImageDisplay>
          <PerlinGraph />
          <div class="p5-description">
            One Dimensional Perlin Graph
            <div class="text">
              This graph uses one dimensional perlin noise to create this
              effect.
              <b
                ><a
                  href="https://www.youtube.com/watch?v=y7sgcFhk6ZM"
                  target="_blank"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Click here</a
                ></b
              >
            </div>
          </div>
          </ImageDisplay>
      </li>
      <li>
        <ImageDisplay>
          <PerlinFlow />
          <div class="p5-description">
            Two Dimensional Perlin Flow
            <div class="text">
              This design uses creative coding effect that produces
              organic-looking strands on the screen.
              <b
                ><a
                  href="https://www.youtube.com/watch?v=BjoM9oKOAKY"
                  target="_blank"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Click here</a
                ></b
              >
            </div>
          </div>
          </ImageDisplay>
      </li>
      <li>
        <ImageDisplay>
          <MandelbrotSet />
          <div class="p5-description">
            Mandelbrot Set
            <div class="text">
              Mandelbrot set is a type of shape known as a fractal. This design
              show you how to incorporates programming, pixels and arrays.
              <b
                ><a
                  href="https://www.youtube.com/watch?v=6z7GQewK-Ks"
                  target="_blank"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Click here</a
                ></b
              >
            </div>
          </div>
          </ImageDisplay>
      </li>
      <li>
        <ImageDisplay>
          <FractalTree />
          <div class="p5-description">
            Fractal Tree
            <div class="text">
              This design uses recursion to create each branch of the tree which creates the fractal pattern.
              <b
                ><a
                  href="https://www.youtube.com/watch?v=0jjeOYMjmDU"
                  target="_blank"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Click here</a
                ></b
              >
            </div>
          </div>
          </ImageDisplay>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ImageDisplay from "@/components/ImageDisplay.vue";
import Header from "@/components/Header.vue";
import Clock from "@/sketches/clock/Clock.vue";
import BezierCurves from "@/sketches/bezier-curves/BezierCurves.vue";
import PerlinGraph from "@/sketches/perlin-noise/PerlinGraph.vue";
import PerlinFlow from "@/sketches/perlin-noise/PerlinFlow.vue";
import MandelbrotSet from "@/sketches/mandelbrot-set/MandelbrotSet.vue";
import FractalTree from "@/sketches/fractal-tree/FractalTree.vue";
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
