<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <TodoList msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    TodoList,
  },
});
</script>

<style></style>
