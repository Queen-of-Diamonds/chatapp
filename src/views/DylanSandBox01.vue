<template>
  <!-- <div class="grid h-full w-full"> -->
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
          bubbleColour="#00bf56"
          >{{ userMessage.content }}</speech-bubble
        >
      </div>
      <div class="footer">
        <div class="input-message flex">
          <base-button @click="sendMessage('Christie', 'Hi Christie')">
            test db add
          </base-button>
          <base-button @click="deleteAllMessages"
            >delete all messages</base-button
          >
        </div>
      </div>
    </messages-card>
  <!-- </div> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import SpeechBubble from "@/components/shared/SpeechBubble.vue";
import MessagesCard from "@/components/MessagesCard.vue";
// import { ref, set, get, onValue, remove } from "firebase/database";

import db from "@/db.js";
import { createMessage, watchMessages, deleteAllMessages } from "@/api.js";

const userMessages = ref([]);
let count = 0;
watchMessages(userMessages);

function sendMessage(user, message) {
  createMessage({message, user})
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
    border: 4px dotted blue;
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
  background-color: #5f9ea0;
}

.grid {
  grid-template-rows: calc(100% - 42px) 42px;
  grid-template-areas:
    "header header header header"
    "footer footer footer footer";
}
</style>
