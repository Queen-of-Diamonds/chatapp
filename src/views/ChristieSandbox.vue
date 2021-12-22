<template>
  <div class="container flex flex-row items-center justify-center bg-white">
    <label for="user" class="block text-sm font-medium text-gray-700"></label>
    <div class="input">
      <input v-model="message" class="shadow-sm h-10 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-700 rounded-md" placeholder="Your message here" />
    </div>
    <div class="button">
      <button @click="sendMessage('Christie', message)"><i class="fas fa-paper-plane fa-2x"></i></button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, } from "vue";

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
  width: 600px;
  height: 600px;
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
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
}

.button:hover {
  background-color: #ffa07a;
}

</style>
