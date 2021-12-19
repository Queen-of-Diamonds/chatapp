<template>
  <div class="grid h-full w-full">
    <div class="header border-t-3 border-dashed border-black">One</div>
    <div class="main border-t-3 border-dashed border-black">Two</div>
    <div class="sidebar border-t-3 border-dashed border-black">Three</div>
    <div class="footer border-t-3 border-dashed border-black">
      <base-button @click="createMessage">test db add</base-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ref, set, get, onValue } from "firebase/database";

import db from "@/db.js";

let count = 0;
async function createMessage({ id, message="Automessage here" }) {
  const now = new Date();
  count++;
  /**
  Using set() overwrites data at the specified location, including any child nodes.
  See: https://firebase.google.com/docs/database/web/read-and-write
  */
  return await set(ref(db, `messages/${count}`), {
    id: `xyz-${count}`,
    content: message,
    time: now.toISOString(),
    timeUnix: now.getTime(),
  });
}

const messagesRef = ref(db, `messages/`);
onValue(messagesRef, (snapshot) => {
  const data = snapshot.val();
  console.log("dvdb - onValue - data", data);
});


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
