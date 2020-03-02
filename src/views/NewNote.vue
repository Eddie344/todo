<template>
  <div class="main">
    <div class="container">
      <div class="header">
        <a class="back" @click="$router.push('/')">
          <i class="fas fa-arrow-left"></i>
        </a>
        <h2>Creating new note</h2>
      </div>
      <div class="main">
        <NoteForm :note="newNote" create></NoteForm>
      </div>
    </div>
  </div>
</template>

<script>
import NoteForm from "@/components/NoteForm";
export default {
  components: {
    NoteForm
  },
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    }
  },
  data() {
    return {
      newNote: {}
    };
  },
  mounted() {
    this.newNote = this.$store.getters.getNewNote;
    this.newNote.id = this.counter;
  },
  // computed: {
  //   newNote() {
  //     return this.$store.getters.getNewNote;
  //   }
  // },
  watch: {
    newNote: {
      handler(newNote) {
        this.$store.dispatch("setNewNoteAction", {
          newNote
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="sass" scoped>
.header
	display: flex
	align-items: center
	margin-bottom: 30px
	.back
		font-size: 20px
		margin-right: 15px
		color: $primary-color
		cursor: pointer
		transition: color 0.3s ease
		&:hover
			color: darken($primary-color, 10%)
</style>
