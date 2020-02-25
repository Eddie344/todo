<template>
  <div class="notes-item">
    <div class="header">
      <h2 class="title">{{ this.title }}</h2>
      <div class="actions">
        <span class="delete">
          <i class="fas fa-trash"></i>
        </span>
        <span class="edit">
          <i class="fas fa-pen"></i>
        </span>
      </div>
    </div>
    <ul class="todo-list">
      <li class="todo-item" v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    todos: Array
  }
};
</script>

<style lang="sass" scoped>
.notes-item
  background-color: $card-bg-color
  padding: 20px
  margin-right: 30px
  min-width: 230px
  border-radius: 5px
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3)
  transition: box-shadow 0.3s ease
  .header
    display: flex
    justify-content: space-between
    .title
      margin: 0
    .actions
      display: flex
      align-items: center
      opacity: 0
      transition: opacity 0.3s ease
      & *
        cursor: pointer
        margin-left: 5px
      .delete
        color: $danger-color
        &:hover
          color: darken($danger-color, 10%)
      .edit
        color: $primary-color
        &:hover
          color: darken($primary-color, 10%)

  .todo-list
    list-style-type: none
    padding: 0
  &:hover
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3)
    .actions
      opacity: 1
</style>
