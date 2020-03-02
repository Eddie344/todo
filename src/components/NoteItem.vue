<template>
  <div class="notes-item">
    <div class="header">
      <h3 class="title">{{ this.item.title }}</h3>
      <div class="actions">
        <span class="icon-edit" @click="editNote(item.id)">
          <i class="fas fa-pen"></i>
        </span>
        <span class="icon-delete" @click="removeNote(index)">
          <i class="fas fa-trash"></i>
        </span>
      </div>
    </div>
    <div class="empty" v-if="!item.todos.length">No todos</div>
    <ul class="todo-list">
      <li class="todo-item" v-for="(todo, index) in item.todos.slice(0, 3)" :key="'todo' + index">
        <span class="todo-icon">
          <i :class="todo.done ? 'fas fa-check' : 'fas fa-times'"></i>
        </span>
        {{ todo.title }}
      </li>
      <span v-if="item.todos.length > 3">...</span>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number
  },
  methods: {
    removeNote() {
      this.$emit("remove", this.index);
    },
    editNote(id) {
      this.$router.push({ name: "Note", params: { id } });
      this.uprateEditNote(this.$store.getters.getNote(id));
    },
    uprateEditNote(note) {
      this.$store.dispatch("setStartEditingNoteAction", {
        note
      });
      this.$store.dispatch("setEditingNoteAction", {
        note
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.notes-item
	position: relative
	background-color: #fff
	padding: 20px
	position: relative
	border-radius: 5px
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)
	transition: box-shadow 0.3s ease, transform 0.3s ease
	.header
		display: flex
		justify-content: space-between
		margin-bottom: 1rem
		.title
			margin: 0

	.todo-list
		color: $text-muted
	&:hover
		box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2)
		transform: translateY(-2%)
		.actions
			opacity: 1

.todo-icon
	margin-right: 5px

.fa-times
	color: $danger-color

.fa-check
	color: $success-color
</style>
