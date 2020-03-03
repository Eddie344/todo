<template>
  <li class="todo-item">
    <div class="default" v-if="!editing">
      <div class="check">
        <input type="checkbox" :id="'done' + index" v-model="todoData.done" />
        <label :for="'done' + index" class="custom-checkbox"></label>
      </div>
      <span class="title">{{ todoData.title }}</span>
      <div class="actions">
        <span class="icon-edit" @click="editTodo">
          <i class="fas fa-pen"></i>
        </span>
        <span class="icon-delete" @click="removeTodo(index)">
          <i class="fas fa-trash"></i>
        </span>
      </div>
    </div>
    <div class="edit" v-else>
      <div class="form-item">
        <input type="text" id="addTodo" v-model="newTitle" />
        <div class="input-buttons">
          <div class="input-button input-button-primary" @click="updateTodo">
            <i class="fas fa-check"></i>
          </div>
          <div class="input-button input-button-danger" @click="cancelEditTodo">
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number
  },
  data() {
    return {
      editing: false,
      newTitle: ""
    };
  },
  computed: {
    todoData() {
      return this.todo;
    }
  },
  methods: {
    removeTodo(index) {
      this.$emit("remove", index);
    },
    editTodo() {
      this.newTitle = this.todo.title;
      this.editing = true;
    },
    cancelEditTodo() {
      this.editing = false;
    },
    updateTodo() {
      if (this.newTitle.length) {
        this.todoData.title = this.newTitle;
        this.editing = false;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.todo-item
	background-color: #fff
	padding: 15px 20px
	margin-bottom: 10px
	min-width: 230px
	border-radius: 5px
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3)
	transition: box-shadow 0.3s ease, transform 0.3s ease
	.form-item
		margin: 0
	.default
		display: flex
		justify-content: space-between
		position: relative
		padding: 8.5px 0
	.title
		flex: 1
		padding: 0 5px
	.check
		position: relative
		input
			opacity: 0
			&:checked ~ .custom-checkbox::before
				font-family: "Font Awesome 5 Free"
				font-weight: 900
				font-size: 18px
				content: "\f00c"
				position: absolute
				top: -3px
				color: #333
		.custom-checkbox
			width: 15px
			height: 15px
			background-color: #fff
			border-radius: 5px
			border: 1px solid #d0d0d0
			cursor: pointer
			position: absolute
			top: 0
			left: 0
	&:hover
		box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2)
		transform: translateY(-2%)
		.actions
			opacity: 1
</style>
