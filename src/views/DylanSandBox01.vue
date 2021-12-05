<template>
    <div class="box sb1">I'm user speech bubble</div>
    <div class="box sb2">I'm a friend speech bubble</div>
</template>

<script setup>
//  I'm looking into a markdown editor for text, something like:ripple="false"
//  https://vuejsexamples.com/the-vue-lib-for-markdown-it/
// import MarkdownItVue from 'markdown-it-vue'
// import 'markdown-it-vue/dist/markdown-it-vue.css'
import { ref } from "vue"

const content = ref(`
    #Heading
    Normal text with a new line now:
    - maybe bullets?
`)
</script>

<style scoped>
/* See here for more on the speech bubble css: https://codingislove.com/css-speech-bubbles/ */
.box {
  /* Cristie, this width is something you'll likely want to play with to work with your ui. */
  width: 30%;
  margin: 50px auto;
  background: #00bfb6;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  color: #fff;
  font-family: arial;
  position: relative;
}

.sb1:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #00bfb6;
  border-right: 10px solid transparent;
  border-top: 10px solid #00bfb6;
  border-bottom: 10px solid transparent;
  right: -19px;
  top: 6px;
}

.sb2:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid #00bfb6;
  border-top: 10px solid #00bfb6;
  border-bottom: 10px solid transparent;
  left: -19px;
  top: 6px;
}

.sb3:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #00bfb6;
  border-right: 10px solid transparent;
  border-top: 10px solid #00bfb6;
  border-bottom: 10px solid transparent;
  left: 19px;
  bottom: -19px;
}

.sb4:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid #00bfb6;
  border-top: 10px solid #00bfb6;
  border-bottom: 10px solid transparent;
  right: 19px;
  bottom: -19px;
}


</style>