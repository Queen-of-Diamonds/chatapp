<template>
  <div
    class="card bg-white shadow-md border border-gray-200 rounded-lg w-3/4 p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <nav class="flex items-center justify-between h-full p-3 m-auto">
      <span>My Name</span>
      <div class="relative">
        <button id="user-menu" aria-label="User menu" aria-haspopup="true">
          <img
            class="w-14 h-14 rounded-full"
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          />
        </button>
        <div
          id="user-menu-dropdown"
          class="absolute right-0 w-48 mt-2 origin-top-right rounded-lg shadow-lg top-10 menu-hidden"
        >
          <div
            class="p-4 bg-white rounded-md shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <a
              href="#"
              class="block px-6 py-2 mb-2 font-bold rounded fas fa-user"
              role="menuitem"
              >My profile</a
            >
            <a
              href="#"
              class="block px-6 py-2 mb-2 font-bold rounded fas fa-bell"
              role="menuitem"
              >Notifications</a
            >
            <a
              href="#"
              class="block px-6 py-2 mb-2 font-bold rounded fas fa-envelope"
              role="menuitem"
              >Inbox</a
            >
            <a
              href="#"
              class="block px-6 py-2 font-bold rounded fas fa-sign-out-alt"
              role="menuitem"
              >Logout</a
              >
          </div>
        </div>
      </div>
    </nav>

    <!-- <p class="mt-4"></p> -->
    <slot></slot>
  </div>
</template>

<script setup>
// TODO @Christie: refactor into script setup pattern.
// import { MailIcon, PhoneIcon } from '@vue-hero-icons/solid'
</script>

<style>
.card {
  max-height: 600px;
}

#user-menu ~ #user-menu-dropdown {
  transform: scaleX(0) scaleY(0);
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 75ms;
  opacity: 0;
  top: 3.25rem;
}

#user-menu ~ #user-menu-dropdown:focus-within,
#user-menu:focus ~ #user-menu-dropdown {
  transform: scaleX(1) scaleY(1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 100ms;
  opacity: 1;
}
</style>
