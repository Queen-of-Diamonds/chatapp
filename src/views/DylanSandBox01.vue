<template>
  <div class="card-layout h-full">
    <messages-card>
      <div class="header">
        <speech-bubble
          v-for="userMessage in userMessages"
          :key="userMessage.id"
          bubbleStyle="sb1"
          bubbleColour="#00bfb6"
          >{{ userMessage.content }}</speech-bubble
        >
        <speech-bubble
          v-for="userMessage in userMessages"
          :key="userMessage.id"
          bubbleStyle="sb2"
          bubbleColour="#D3D3D3"
          >{{ userMessage.content }}</speech-bubble
        >
      </div>
      <div class="footer">
        <div class="input-message flex">
          <div class="input m-2 h-10">
            <input
              v-model="message"
              style="background-color: #d3d3d3"
              class="shadow-sm h-14 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Your message here"
            />
          </div>
          <div class="home-page">
            <textarea-emoji-picker @input="handleEmojiClicked" />
          </div>
          <base-button @click="sendMessage('Christie', message)">
            <i style="color: white" class="h-4 fas fa-paper-plane fa-3x"></i>
          </base-button>
        </div>
      </div>
    </messages-card>
  </div>
</template>

<script setup>
/** For more on fontawesome icons see: https://fontawesome.com/v5.15/icons?d=gallery&p=2 */
import { onMounted, ref, watch } from "vue";
import SpeechBubble from "@/components/shared/SpeechBubble.vue";
import MessagesCard from "@/components/MessagesCard.vue";
import TextareaEmojiPicker from "@/components/TextareaEmojiPicker";

import { createMessage, watchMessages, deleteAllMessages } from "@/api.js";

const message = ref(null);
watch(message, (newVal) => {
  console.log(
    "🚀 ~ file: ChristieSandbox.vue ~ line 17 ~ watch ~ newVal",
    newVal
  );
});

const userMessages = ref([]);
let count = 0;
watchMessages(userMessages);

function sendMessage(user, message) {
  console.log("dvdb - sendMessage - message", message);
  createMessage({ message, user });
}

function handleEmojiClicked({ native }) {
  message.value += native;
}
</script>

<style>
.card-layout {
  display: flex;
  justify-content: center;
  align-items: center;
}

.speech-bubbles {
  height: 80%;
  border: 2px dotted blue;
}

.input-message {
  /* border: 2px dotted green; */
  float: left;
  /* background-color: orange; */
}

.home-page {
  padding-top: 50px;
}

.textarea-emoji-picker {
  position: relative;
  width: 100px;
  margin: 0 auto;
}

.header {
  grid-area: header;
  background-color: #5f9ea0;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
  /* border: 4px dotted blue; */
  height: 400px;
  overflow-y: scroll;
}

.main {
  grid-area: main;
  background-color: #fff;
  border: 2px dotted pink;
}
.sidebar {
  grid-area: sidebar;
}
.footer {
  grid-area: footer;
}

.grid {
  grid-template-rows: calc(100% - 42px) 42px;
  grid-template-areas:
    "header header header header"
    "footer footer footer footer";
}
</style>
