<template>
  <div class="grid h-full w-full">
    <div class="header border-t-3 border-dashed border-white text-white">
      Header
    </div>
    <div class="main  h-full w-full flex flex-col">
      <div class="speech-bubbles absolute bottom-0 left-0">
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
          bubbleColour="#00bf56"
          >{{ userMessage.content }}</speech-bubble
        >
      </div>
      <div class="input-message flex">
        <base-button @click="sendMessage('Christie', 'Hi Christie')">
          test db add
        </base-button>
        <base-button @click="deleteAllMessages"
          >delete all messages</base-button
        >
      </div>
    </div>
    <div class="sidebar border-t-3 border-dashed border-white text-white">
      Sidebar
    </div>
    <div class="footer border-t-3 border-dashed border-white space-y-4"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SpeechBubble from "@/components/shared/SpeechBubble.vue";
// import { ref, set, get, onValue, remove } from "firebase/database";

import db from "@/db.js";
import { createMessage, watchMessages, deleteAllMessages } from "@/api.js";

const userMessages = ref([]);
let count = 0;
watchMessages(userMessages);

function sendMessage(user, message) {
  createMessage({ message, user });
}

</script>

<style>
.speech-bubbles {
  height: 80%;
  border: 2px dotted blue;
}

.input-message {
  border: 2px dotted green;
}

.header {
  grid-area: header;
  background-color: #5f9ea0;
  margin-bottom: 5px;
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
  background-color: #5f9ea0;
  margin-top: 5px;
}

.grid {
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 1fr 10fr 1fr;
  grid-template-areas:
    "header header header header"
    "main main main sidebar"
    "footer footer footer footer";
  grid-gap: 13px;
}
</style>
