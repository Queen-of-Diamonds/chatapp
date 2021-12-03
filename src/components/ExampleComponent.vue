<template>
  <div class="max-w-lg mx-auto my-12">
    <!--        examples with lables -->
    <div
      class="border-l-4 border-blue-500 p-3 rounded mb-6 shadow bg-gray-100 font-semibold text-gray-600 tracking-wide text-lg"
    >
      Input components with labels
    </div>
    <text-input label="Email" class="mb-4"></text-input>
    <text-input label="Password" type="password" class="mb-4"></text-input>
    <!--        examples with label ended -->
    <!--        examples with icons -->

    <div
      class="border-l-4 border-blue-500 p-3 rounded my-10 mb-6 shadow bg-gray-100 font-semibold text-gray-600 tracking-wide text-lg"
    >
      Input components with Icons
    </div>

    <text-input class="mb-4" with-icon placeholder="Enter your email...">
      <template #icon>
        <svg
          class="mt-2 w-8 h-8 stroke-current text-gray-100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
            stroke="#4A5568"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </text-input>
    <text-input
      class="mb-4"
      type="password"
      with-icon
      placeholder="Enter your password..."
    >
      <template #icon>
        <svg
          class="mt-2 w-8 h-8 stroke-current text-gray-100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z"
            stroke="#4A5568"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </text-input>
    <!--        examples with icons ended -->

    <!--        examples with error messages -->
    <div
      class="border-l-4 border-red-500 p-3 rounded mb-6 mt-10 shadow bg-gray-100 font-semibold text-gray-600 tracking-wide text-lg"
    >
      Input components with Error Messages
    </div>
    <text-input
      label="Email"
      class="mb-4"
      :errors="errors['errorEmail']"
      @keydown="delete errors['errorEmail']"
    >
    </text-input>
    <text-input
      label="Password"
      type="password"
      class="mb-4"
      :errors="errors['errorPassword']"
      @keydown="delete errors['errorPassword']"
    ></text-input>
    <!--        examples with error messages ended -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      errorEmail: "",
      errors: {
        errorEmail: ["The email field is required."],
        errorPassword: ["The password confirmation does not match."],
      },
    };
  },
};
</script>
