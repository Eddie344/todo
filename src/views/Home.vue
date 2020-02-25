<template>
  <div class="home">
    <div class="container">
      <div class="top-panel">
        <button class="btn btn-success">Add note</button>
      </div>
      <div class="notes-list">
        <NotesItem
          v-for="note in notes"
          :title="note.title"
          :todos="note.todos"
          :key="note.id"
        ></NotesItem>
      </div>
    </div>
  </div>
</template>

<script>
import NotesItem from "@/components/NotesItem.vue";
export default {
  name: "Home",
  components: {
    NotesItem
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          title: "Note 1",
          todos: [
            {
              title: "Todo 1"
            },
            {
              title: "Todo 2"
            }
          ]
        },
        {
          id: 2,
          title: "Note 2",
          todos: [
            {
              title: "Todo 1"
            },
            {
              title: "Todo 2"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.home
  padding: 30px 0

.top-panel
  margin-bottom: 20px

.notes-list
  display: flex
  margin-right: -30px
</style>
