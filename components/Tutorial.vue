<!-- Please remove this file from your project -->
<template>
  <div
    class="
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div>
      <button @click="onSubmit">Login</button>
      <hr />
      <button @click="getUser">Get User</button>
    </div>
    <div class="d-flex flex-column">
      <div v-for="inve in investigations" :key="inve.id">{{inve.title}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NuxtTutorial",
 
};
</script>
