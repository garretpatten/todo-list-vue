<template>
  <section class="todo-list-content">
    <h1 class="">Todo App</h1>
    <div class="task-add-content">
      <input placeholder="Add task" type="text" />
      <button>Add task</button>
    </div>
    <div class="task-container">
      <div>this is a test task</div>
      <div>this is a test task</div>
      <div>this is a test task</div>
      <div>this is a test task</div>
      <!-- TODO: v for through tasks -->
      <!-- <div :key="task.id" v-for="task.name in tasks">
        {{ task }}
      </div> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// TODO: Update this to use Task class
const tasks: object[] = [
  {
    id: 1,
    name: "Pick up groceries",
  },
  {
    id: 2,
    name: "Throw Corbin off the balcony",
  },
  {
    id: 3,
    name: "Order 5,000 steaks",
  },
  {
    id: 4,
    name: "Give Harley steroids so that he becomes a super beagle",
  },
];

export default defineComponent({
  name: "TodoList",
  props: {},
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
  margin-left: 30%;
  margin-right: 30%;
  text-align: left;
  width: 40%;
  background-color: red;
}
</style>
