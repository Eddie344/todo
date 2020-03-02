<template>
  <div class="main">
    <div class="container">
      <div class="header">
        <a class="back" @click="showCancelModal">
          <i class="fas fa-arrow-left"></i>
        </a>
        <h2>Editing note</h2>
      </div>
      <div class="main">
        <NoteForm :note="note" edit></NoteForm>
      </div>
    </div>
    <Modal v-if="cancelModal">
      <template v-slot:footer>
        <button class="btn btn-primary" @click="$router.push('/')">Go back</button>
        <button class="btn btn-secondary" @click="hideCancelModal">Cancel</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import NoteForm from "@/components/NoteForm";
import Modal from "@/components/Modal";
export default {
  components: {
    NoteForm,
    Modal
  },
  props: ["id"],
  data() {
    return {
      note: {},
      cancelModal: false
    };
  },
  mounted() {
    this.note = this.$store.getters.getEditingNote;
  },
  watch: {
    note: {
      handler() {
        this.$store.dispatch("setEditingNoteAction", {
          note: this.note
        });
      },
      deep: true
    }
  },
  methods: {
    showCancelModal() {
      this.cancelModal = true;
    },
    hideCancelModal() {
      this.cancelModal = false;
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
