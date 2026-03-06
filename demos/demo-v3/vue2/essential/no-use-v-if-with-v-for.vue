
<!-- eslint-disable vue/valid-v-for -->

<template>
  <div>
    <todo-item
      v-for="todo in todos"
      v-if="todo.shown"
      :todo="todo"
    />

    <todo-item
      v-for="todo in todos"
      v-if="shown"
      :todo="todo"
    />
  </div>
</template>
