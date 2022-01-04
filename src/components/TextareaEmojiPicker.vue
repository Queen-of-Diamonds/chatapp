<template>
  <div class="textarea-emoji-picker">
    <!-- <textarea
      ref="textarea"
      class="textarea"
      v-model="value"
      v-on:keyup.enter="submit"
    ></textarea> -->

    <div class="row">
      <Picker
        v-show="showEmojiPicker"
        title="Pick your emoji..."
        :data="emojiIndex"
        set="twitter"
        
        @select="showEmoji"
      />
    </div>

    <div class="row">
      <div>
        {{ emojisOutput }}
      </div>
      <span
        class="emoji-trigger"
        :class="{ triggered: showEmojiPicker }"
        @click="toggleEmojiPicker"
      >
        <svg style="width: 20px; height: 20px" viewBox="0 0 24 24">
          <path
            fill="#888888"
            d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
          />
        </svg>
      </span>
      <p>{{ outputValueOnEnter }}</p>
    </div>
  </div>
</template>

<script>
import data from "emoji-mart-vue-fast/data/all.json";

import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";

let emojiIndex = new EmojiIndex(data);

export default {
  name: "App",
  components: {
    Picker,
  },

  data() {
    return {
      showEmojiPicker: false,
      emojiIndex: emojiIndex,
      emojisOutput: "",
      value: null,
      outputValueOnEnter: "",
    };
  },

  methods: {
    showEmoji(emoji) {
      this.emojisOutput = this.emojisOutput + emoji.native;
      this.addEmoji(emoji);
    },
    toggleEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker;
    },
    addEmoji(emoji) {
      this.value = this.value + emoji.native
            console.log("🚀 ~ file: App.vue ~ line 69 ~ showEmoji ~ emoji", emoji)
      this.toggleEmojiPicker()
    },
    submit(e) {
      this.outputValueOnEnter = e.target.value;
      e.target.value = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.row {
  display: flex;
}

.row > * {
  margin: auto;
}

* {
  box-sizing: border-box;
}

.textarea-emoji-picker {
  position: relative;
  width: 400px;
  margin: 0 auto;
}
.textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 40px;
  line-height: 20px;
  border: 1px solid #ccc;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
.emoji-mart {
  position: absolute;
  top: 33px;
  right: 10px;
}
.emoji-trigger {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  height: 20px;
}
.emoji-trigger path {
  transition: 0.1s all;
}
.emoji-trigger:hover path {
  fill: #000000;
}
.emoji-trigger.triggered path {
  fill: darken(#fec84a, 15%);
}
</style>