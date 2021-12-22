<template>
  <div class="container p-3 bg-white">
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <div class="input mt-1">
      <input v-model="message" class="shadow-sm h-10 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your message here" />
    </div>
    <div class="button">
      <button @click="sendMessage('Christie', message)">Click Me</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const message = ref(null);
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
  width: 400px;
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
