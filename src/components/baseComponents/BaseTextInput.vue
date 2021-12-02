<script setup>
import { defineProps } from "vue";

const props = defineProps({
  inputType: String,
  autocomplete: String,
  required: Boolean,
});
</script>

<template>
  <label :for="inputType" class="block text-sm font-medium text-gray-700">
  </label>
  <div class="mt-1">
    <input
      :id="inputType"
      :name="inputType"
      :type="inputType"
      :autocomplete="autocomplete"
      :required="required"
      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>

  <slot></slot>
</template>
