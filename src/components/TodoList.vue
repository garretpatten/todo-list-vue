<template>
  <section class="todo-list-content">
    <h1 class="">Todo App</h1>
    <div class="task-add-content">
      <input placeholder="Add task" type="text" />
      <button>Add task</button>
    </div>
    <div class="task-container">
      <!-- TODO: v for through tasks -->
      <div v-for="task of tasks">{{ task }}</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const tasks: string[] = [
  "Pick up groceries",
  "Throw Corbin off the balcony",
  "Order 5,000 steaks",
  "Give Harley steroids so that he becomes a super beagle",
];

export default defineComponent({
  name: "TodoList",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list-content {
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
}

.task-add-content,
input {
  padding: 5px;
}

.task-add-content,
button {
  margin-inline: 2px;
  padding: 5px;
}

.task-container {
  margin-top: 2%;
  margin-left: 20%;
  margin-right: 20%;
  text-align: left;
  width: 60%;
  background-color: red;
}
</style>
