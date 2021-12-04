<template>
  <div>
    <label
      v-if="label"
      class="form-label block mb-1 font-semibold text-gray-700"
      :for="id"
      >{{ label }}</label
    >
    <div class="relative">
      <input
        :id="id"
        ref="input"
        v-bind="$attrs"
        class="px-2 py-2 h-12 leading-normal block w-full text-gray-800 bg-white font-sans rounded-lg text-left appearance-none outline-none"
        :class="[
          {
            'border-red-400': false,
            'pl-12': withIcon === true,
          },
          classes,
        ]"
        :type="type"
        :value="value"
        @input="updateValue($event.target.value)"
        @keydown="$emit('keydown', $event)"
        @blur="$emit('blur', $event)"
        @keyup="$emit('keyup', $event)"
      />
      <!-- <div v-if="errors?.length" class="text-red-600 mt-1 text-sm">
        {{ errors[0] }}
      </div> -->

      <!-- <svg
        class="absolute text-red-600 fill-current"
        style="top: 12px; right: 12px"
        v-if="errors.length"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
        />
      </svg> -->

      <div
        class="absolute left-0 top-0 bottom-0 w-10 block ml-2"
        v-if="withIcon"
      >
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// For now it looks like you need to run both kinds of scripts.
// Nice to know you can mix all three: 
// - setup-function, 
// - script-setup,
// - and still options-api if you need it.
// Currently that's the suggested way to keep `inheritAttrs: false`
import { defineComponent } from 'vue'
const TextInput = defineComponent({
name: "TextInput",

  // More info: https://v3.vuejs.org/guide/component-attrs.html#attribute-inheritance
  inheritAttrs: false,

  methods: {

    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    },
  },

  // computed: {
  //   classes() {
  //     return {
  //       "border-2 focus:border-blue-600 focus:border-blue-600":
  //         this.bordered === true,
  //       "border bg-gray-200 focus:bg-white": this.bordered === false,
  //     };
  //   },
  // },
})

</script>


<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  label: String,
  value: String,
  id: String,
  type: String,
  errors: String,
  withIcon: Boolean,
  bordered: Boolean,
})
console.log("dvdb - props", props.bordered)

const emit = defineEmits(['input'])

function updateValue(value) {
  emit('input', value)
}

function focus() {
  this.$refs.input.focus();
}

const classes = computed(() => {
  return {
        "border-2 focus:border-blue-600 focus:border-blue-600":
          props.bordered === true,
        "border bg-gray-200 focus:bg-white": props.bordered === false,
      };
})

</script>
