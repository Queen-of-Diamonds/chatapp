<template>
    <div
      class="card bg-white shadow-md border border-gray-200 rounded-lg w-3/4 p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
    <img class="inline object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
     <p class="mt-5">
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
