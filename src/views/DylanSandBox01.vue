<template>
  <div class="grid h-full w-full">
    <div class="header border-t-3 border-dashed border-black">One</div>
    <div class="main border-t-3 border-dashed border-black">
      <!-- <speech-bubble bubbleStyle="sb1" bubbleColour="#00bfb6"
        >I'm a userz speech bubble</speech-bubble
      >
      <speech-bubble bubbleStyle="sb2" bubbleColour="#51884b"
        >I'm a friend speech bubble</speech-bubble
      >
      <speech-bubble bubbleStyle="sb2" bubbleColour="#51884b"
        >I'm a friend speech bubble</speech-bubble
      > -->
      <speech-bubble v-for="userMessage in userMessages" :key="userMessage.id" bubbleStyle="sb1" bubbleColour="#00bfb6"
        >{{userMessage.content}}</speech-bubble
      >
    </div>
    <div class="sidebar border-t-3 border-dashed border-black">Three</div>
    <div class="footer border-t-3 border-dashed border-black">
      <base-button @click="sendMessage('Dylan', 'Hi Christie2')">test db add</base-button>
      <base-button @click="deleteAllMessages">delete all messages</base-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SpeechBubble from "@/components/shared/SpeechBubble.vue"
// import { ref, set, get, onValue, remove } from "firebase/database";


import db from "@/db.js";
import { createMessage, watchMessages, deleteAllMessages } from '@/api.js'

const userMessages = ref([])
let count = 0;
watchMessages(userMessages)

function sendMessage(user, message) {
  createMessage({message, user})
}


onMounted(async () => {
  // TODO Dylan: flesh this out into
  // get(messageRef)
  // get(child(messageRef, `users/${userId}`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });
});
</script>

<style>
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.sidebar {
  grid-area: sidebar;
}
.footer {
  grid-area: footer;
}

.grid {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
</style>
