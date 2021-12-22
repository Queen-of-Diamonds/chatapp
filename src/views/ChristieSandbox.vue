<template>
  <div class="container">
    <div class="input">
      <input v-model="message" />
    </div>
    <div class="button">
      <button @click="sendMessage('Christie', message)">Click Me</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const message = ref("Add message here");
watch(message, (newVal) => {
  console.log("🚀 ~ file: ChristieSandbox.vue ~ line 17 ~ watch ~ newVal", newVal)
})

function sendMessage(user, message) {
  console.log(
    "🚀 ~ file: ChristieSandbox.vue ~ line 18 ~ sendMessage ~ message",
    message
  );
}
</script>

<style>
.container {
  width: 300px;
  height: 300px;
  display: grid;
}

.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 10px;
}

.button {
  background-color: #fa8072;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  margin: auto;
  padding: 10px;
  border-radius: 12px;
}

.button:hover {
  background-color: #ffa07a;
}
</style>
