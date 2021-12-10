<template>
  <div id="conversation">
    <div class="conversation-container">
      <div
        v-for="message in messages"
        :key="message.index"
        class="bubble-container"
        :class="{ myMessage: message?.state?.author === name }"
      >
        <div class="bubble">
          <div class="name">{{ message?.state?.author }}:</div>
          <div class="message">{{ message?.state?.body }}</div>
        </div>
      </div>
    </div>
    <div class="flex">
      <input
        @keyup.enter="sendMessage"
        v-model="messageText"
        placeholder="Enter your message"
      />
      <base-button @click="sendMessage">Send message</base-button>
      <base-button @click="logMessages">Dev: log messages</base-button>
    </div>
    </div>
</template>

<script>
export default {
    props: ["activeConversation", "name"],
    data() {
        return {
            messages: [],
            messageText: "",
            isSignedInUser: false
        }
    },
    methods: {
      sendMessage() {
        const { messageText } = this
        console.log("dvdb - sendMessage - message", messageText)

        // send message obj to db

        // on success log out the returned success message from Firebase
      },
      logMessages() {
        // Get all messages from Firebase, and log it.
      }
    }
}
</script>

<style scoped>
.conversation-container {
  margin: 0 auto;
  max-width: auto;
  height: 600px;
  padding: 0 20px;
  border: 3px solid #f1f1f1;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: scroll; /* Add vertical scrollbar */
}

.bubble-container {
  text-align: left;
}

.bubble {
  border: 2px solid #f1f1f1;
  background-color: #fdfbfa;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  width: 230px;
  float: right;
}

.myMessage .bubble {
  background-color: #abf1ea;
  border: 2px solid #87e0d7;
  float: left;
}

.name {
  padding-right: 8px;
  font-size: 11px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  #app input {
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-left: 5px;
    width: 400px;
  }

  #app button {
    background-color: #21cfbc;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    margin-left: 5px;
    cursor: pointer;
  }
  .button {
  transition-duration: 0.4s;
}

.button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
</style>
