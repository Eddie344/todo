<template>
  <div class="main">
    <div class="container">
      <div class="top-panel">
        <button class="btn btn-success" @click="$router.push('/create')">Add note</button>
      </div>
      <div class="notes-list">
        <div class="empty" v-if="!notes.length">No note created</div>
        <div class="grid-row">
          <div class="grid-item" v-for="(note, index) in notes" :key="note.id">
            <NoteItem :item="note" :index="index" @remove="showRemoveModal($event)"></NoteItem>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="removeModal">
      <template v-slot:footer>
        <button class="btn btn-danger" @click="removeItem">Remove</button>
        <button class="btn btn-secondary" @click="hideRemoveModal">Cancel</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import NoteItem from "@/components/NoteItem.vue";
import Modal from "@/components/Modal";
export default {
  name: "Home",
  components: {
    NoteItem,
    Modal
  },
  data() {
    return {
      removeModal: false,
      removindItemId: null
    };
  },
  computed: {
    notes() {
      return this.$store.getters.getAllNotes;
    }
  },
  methods: {
    showRemoveModal(index) {
      this.removeModal = true;
      this.removindItemIndex = index;
    },
    hideRemoveModal() {
      this.removeModal = false;
      this.removindItemId = null;
    },
    removeItem() {
      this.$store.dispatch("removeNoteAction", {
        index: this.removindItemIndex
      });
      this.hideRemoveModal();
    }
  }
};
</script>

<style lang="sass" scoped>
.top-panel
	margin-bottom: 20px

.notes-list
	display: flex
	flex-wrap: wrap
	margin: 0 -15px

.empty
	padding: 15px
	font-style: italic
	color: $text-muted
	font-size: 1.1rem
</style>
