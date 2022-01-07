<template>
  <div
    class="wrapper rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
  >
    <div class="relative bg-white px-5">
      <a
        v-for="item in solutions"
        :key="item.name"
        :href="item.href"
        class="p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
      >
        <div class="flex">
          <p class="text-base font-medium text-gray-900">
            {{ item.name }}
          </p>
          <i :class="item.icon" class="mt-1 text-sm text-gray-500">
            {{ item.description }}
          </i>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const solutions = ref([
  {
    name: "Blog",
    description: "Learn about tips, product updates and company culture.",
    href: "#",
    icon: "fas fa-home",
  },
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "#",
    icon: "fas fa-user",
  },
]);
</script>

<style scoped>
.wrapper {
  width: 500px;
}
</style>
