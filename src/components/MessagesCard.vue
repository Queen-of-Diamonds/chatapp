<template>
    <div
      class="card bg-white shadow-md border border-gray-200 rounded-lg w-3/4 p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <p class="mt-5">
        So Christie, here we have the classic: How to center a div challenge!
      </p>
      <slot></slot>
    </div>
</template>

<script setup>
// TODO @Christie: refactor into script setup pattern.
// import { MailIcon, PhoneIcon } from '@vue-hero-icons/solid'
</script>

<style>
.card{
  max-height: 600px;
}

</style>
