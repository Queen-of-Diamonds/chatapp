<template>
    <div :class="bubbleStyle" :style="cssVars" class="box"><slot/></div>
</template>

<script setup>
import { defineProps, toRefs, computed } from 'vue'

const props = defineProps({
    bubbleStyle: {
        type: String,
        default: "sb1"
    },

    bubbleColour: {
        type: String,
        default: "#00bfb6"
    }

})

const { bubbleColour } = toRefs(props);
const cssVars = computed(() => ({
    '--bubble-colour': bubbleColour.value,
})) 

</script>

<style scoped>
/**
See here for more on the speech bubble css: https://codingislove.com/css-speech-bubbles/ 
TODO @christie: that blue colour is repeated often, so let's turn that into a css dynamic variable
at the top here, standing by to be changed by the props.
*/
.box {
  /* Cristie, this width is something you'll likely want to play with to work with your ui. */
  width: 30%;
  margin: 50px auto;
  background: var(--bubble-colour);
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
  border-left: 10px solid var(--bubble-colour);
  border-right: 10px solid transparent;
  border-top: 10px solid var(--bubble-colour);
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
  border-right: 10px solid var(--bubble-colour);
  border-top: 10px solid  var(--bubble-colour);
  border-bottom: 10px solid transparent;
  left: -19px;
  top: 6px;
}

.sb3:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid var(--bubble-colour);
  border-right: 10px solid transparent;
  border-top: 10px solid var(--bubble-colour);
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
  border-right: 10px solid var(--bubble-colour);
  border-top: 10px solid var(--bubble-colour);
  border-bottom: 10px solid transparent;
  right: 19px;
  bottom: -19px;
}
</style>