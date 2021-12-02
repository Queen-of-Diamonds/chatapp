<template>
  <label for="email" class="block text-sm font-medium text-gray-700"> </label>
  <div class="mt-1">
    <input
      id="email"
      name="email"
      type="email"
      autocomplete="email"
      required="true"
      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>

  <label for="password" class="block text-sm font-medium text-gray-700">
  </label>
  <div class="mt-1">
    <input
      id="password"
      name="password"
      type="password"
      autocomplete="current-password"
      required="true"
      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
  <slot></slot>
</template>
