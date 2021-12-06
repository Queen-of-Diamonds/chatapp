<template>
    <div>
        Experiment Here, copy paste when it's ready to go.
    </div>
    <div>
        <markdown-it-vue class="md-body" :content="content" />
    </div>
</template>

<script setup>
//  I'm looking into a markdown editor for text, something like:ripple="false"
//  https://vuejsexamples.com/the-vue-lib-for-markdown-it/
// import MarkdownItVue from 'markdown-it-vue'
// import 'markdown-it-vue/dist/markdown-it-vue.css'
import { ref } from "vue"

const content = ref(`
    #Heading
    Normal text with a new line now:
    - maybe bullets?
`)
</script>

<style lang="scss" scoped>

</style>