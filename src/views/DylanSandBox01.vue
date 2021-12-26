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
          bubbleColour="#00bf56"
          >{{ userMessage.content }}</speech-bubble
        >
      </div>
      <div class="footer">
        <div class="input-message flex">
          <div class="input mt-1">
            <input
              v-model="message"
              class="shadow-sm h-10 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Your message here"
            />
          </div>
          <base-button @click="sendMessage('Christie', message)">
            test db add
          </base-button>
          <font-awesome-icon class="w-10" :icon="['fas', 'faPhone']" />
          <!-- <base-button @click="deleteAllMessages"
            >delete all messages</base-button
          > -->
        </div>
      </div>
    </messages-card>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import SpeechBubble from "@/components/shared/SpeechBubble.vue";
import MessagesCard from "@/components/MessagesCard.vue";
// import { ref, set, get, onValue, remove } from "firebase/database";

import db from "@/db.js";
import { createMessage, watchMessages, deleteAllMessages } from "@/api.js";

const message = ref(null);
watch(message, (newVal) => {
  console.log("🚀 ~ file: ChristieSandbox.vue ~ line 17 ~ watch ~ newVal", newVal)
})

const userMessages = ref([]);
let count = 0;
watchMessages(userMessages);

function sendMessage(user, message) {
  console.log("dvdb - sendMessage - message", message)
  createMessage({ message, user });
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
