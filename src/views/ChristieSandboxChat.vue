<template>
 <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
<img class="mx-auto h-12 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Speech_bubble.svg/300px-Speech_bubble.svg.png" alt="chat" />
  <div id="chat">
    <div class="text-black text-center font-bold">Welcome to the Chat App<span v-if="nameRegistered">, {{ name }}</span>!</div>
    <p>{{ statusString }}</p>
    <div v-if="!nameRegistered">
      <input @keyup.enter="registerName" v-model="name" placeholder="Enter your name">
      <button @click="registerName">Register name</button>
    </div>
    <div v-if="nameRegistered && !activeConversation && isConnected">
      <button @click="createConversation">Join chat</button>
    </div>
    <Conversation :active-conversation="activeConversation" :name="name" />
  </div>
  </div>
  </div>
</template>

<script>
// import {Client as ConversationsClient} from "@twilio/conversations"
// import Conversation from "@/src/views/Conversation.vue"
// export default {
// 	components: { Conversation },
// 	data() {
// 		return {
// 			statusString: "",
// 			activeConversation: null,
// 			name: "",
// 			nameRegistered: false,
// 			isConnected: false
// 		}
// 	},
// 	methods: {
// 		initConversationsClient: async function() {
// 			window.conversationsClient = ConversationsClient
// 			const token = await this.getToken(this.name)
// 			this.conversationsClient = await ConversationsClient.create(token)
// 			this.statusString = "Connecting to Twilio…"
// 			this.conversationsClient.on("connectionStateChanged", (state) => {
// 				switch (state) {
// 				case "connected":
// 					this.statusString = "You are connected."
// 					this.isConnected = true
// 					break
// 				case "disconnecting":
// 					this.statusString = "Disconnecting from Twilio…"
// 					break
// 				case "disconnected":
// 					this.statusString = "Disconnected."
// 					break
// 				case "denied":
// 					this.statusString = "Failed to connect."
// 					break
// 				}
// 			})
// 		},
// 		getToken: async function(identity) {
// 			const response = await fetch(`http://localhost:5000/auth/user/${identity}`)
// 			const responseJson = await response.json()
// 			return responseJson.token
// 		},
// 		registerName: async function() {
// 			this.nameRegistered = true
// 			await this.initConversationsClient()
// 		},
// 		createConversation: async function() {
// 			// Ensure User1 and User2 have an open client session
// 			try {
// 				await this.conversationsClient.getUser("User1")
// 				await this.conversationsClient.getUser("User2")
// 			} catch {
// 				console.error("Waiting for User1 and User2 client sessions")
// 				return
// 			}
// 			// Try to create a new conversation and add User1 and User2
// 			// If it already exists, join instead
// 			try {
// 				const newConversation = await this.conversationsClient.createConversation({uniqueName: "chat"})
// 				const joinedConversation = await newConversation.join().catch(err => console.log(err))
// 				await joinedConversation.add("User1").catch(err => console.log("error: ", err))
// 				await joinedConversation.add("User2").catch(err => console.log("error: ", err))
// 				this.activeConversation = joinedConversation
// 			} catch {
// 				this.activeConversation = await (this.conversationsClient.getConversationByUniqueName("chat"))
// 			}
// 		}
// 	}
// }
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
  margin-right: 5px;
  width: 300px;
}
#app button {
  background-color: #21cfbc;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
