<template>
  <div class="note-form">
    <div class="form-wrap">
      <div class="form-item">
        <label for="noteTitle">Title</label>
        <input type="text" id="noteTitle" v-model="note.title" />
      </div>
      <div class="form-item">
        <button class="btn btn-success" v-if="create" @click="createNote">Create</button>
        <button class="btn btn-primary" v-if="edit" @click="editNote">Edit</button>
      </div>
    </div>
    <div class="todo-list">
      <div class="form-item">
        <label for="addTodo">Add todo</label>
        <input type="text" id="addTodo" v-model="newTodo.title" />
        <div class="input-buttons">
          <div class="input-button input-button-primary" @click="addTodo">
            <i class="fas fa-plus"></i>
          </div>
        </div>
      </div>
      <div class="empty" v-if="noteData.todos && !noteData.todos.length">No todos</div>
      <ul>
        <TodoItem
          v-for="(todo, index) in noteData.todos"
          :key="'todo' + index"
          :todo="todo"
          :index="index"
          @remove="removeTodo($event)"
        ></TodoItem>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  components: {
    TodoItem
  },
  props: {
    note: Object,
    create: {
      type: Boolean,
      default: false
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newTodo: {
        title: "",
        done: false
      }
    };
  },
  computed: {
    noteData() {
      return this.note;
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.title !== "") {
        this.noteData.todos.push(this.newTodo);
        this.clearNewTodo();
      }
    },
    createNote() {
      if (this.note.title !== "") {
        this.$store.dispatch("createNoteAction", {
          note: this.note
        });
        this.$store.dispatch("clearNewNoteAction");
        this.$store.dispatch("incrementCounterAction");
        this.$router.push("/");
      }
    },
    editNote() {
      if (this.note.title !== "") {
        this.$store.dispatch("editNoteAction", {
          note: this.noteData
        });
        this.$router.push("/");
      }
    },
    removeTodo(index) {
      this.noteData.todos.splice(index, 1);
    },
    clearNewTodo() {
      this.newTodo = {
        title: "",
        done: false
      };
    }
  }
};
</script>

<style lang="sass" scoped>
.note-form
	display: flex
	@media (max-width:530px)
		flex-direction: column
		.form-wrap, .todo-list
			width: 100%

.form-wrap
	width: 250px
	margin-right: 30px

.todo-list
	width: 300px
</style>
