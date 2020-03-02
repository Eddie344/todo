import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 1,
    notes: [],
    newNote: {
      id: null,
      title: "",
      todos: []
    },
    editingNote: {
      id: null,
      title: "",
      todos: []
    },
    startEditingNote: {
      id: null,
      title: "",
      todos: []
    }
  },
  plugins: [createPersistedState()],
  mutations: {
    incrementCounter(state) {
      state.counter++;
    },
    removeNote(state, payload) {
      state.notes.splice(payload.index, 1);
    },
    setNewNote(state, payload) {
      state.newNote = JSON.parse(JSON.stringify(payload.newNote));
    },
    setStartEditingNote(state, payload) {
      state.startEditingNote = JSON.parse(JSON.stringify(payload.note));
    },
    setEditingNote(state, payload) {
      state.editingNote = JSON.parse(JSON.stringify(payload.note));
    },
    createNote(state, payload) {
      state.notes.push(payload.note);
    },
    editNote(state, payload) {
      let index = state.notes.findIndex(note => note.id === payload.note.id);
      state.notes[index] = payload.note;
    },
    addTodoNewNote(state, payload) {
      state.newNote.todos.push(payload.todo);
    },
    removeTodoNewNote(state, payload) {
      state.newNote.todos.splice(payload.index, 1);
    },
    clearNewNote(state) {
      state.newNote = {
        title: "",
        todos: []
      };
    },
    emptyState(state) {
      this.replaceState({
        notes: state.notes,
        editingNote: state.startEditingNote,
        newNote: state.newNote,
        counter: state.counter
      });
    }
  },
  actions: {
    incrementCounterAction(context) {
      context.commit("incrementCounter");
    },
    removeNoteAction(context, payload) {
      context.commit("removeNote", payload);
    },
    setNewNoteAction(context, payload) {
      context.commit("setNewNote", payload);
    },
    setStartEditingNoteAction(context, payload) {
      context.commit("setStartEditingNote", payload);
    },
    setEditingNoteAction(context, payload) {
      context.commit("setEditingNote", payload);
    },
    createNoteAction(context, payload) {
      context.commit("createNote", payload);
    },
    editNoteAction(context, payload) {
      context.commit("editNote", payload);
    },
    addTodoNewNoteAction(context, payload) {
      context.commit("addTodoNewNote", payload);
    },
    removeTodoNewNoteAction(context, payload) {
      context.commit("removeTodoNewNote", payload);
    },
    clearNewNoteAction(context) {
      context.commit("clearNewNote");
    }
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getAllNotes(state) {
      return state.notes;
    },
    getNewNote(state) {
      return state.newNote;
    },
    getEditingNote(state) {
      return state.editingNote;
    },
    getNote: state => id => {
      return state.notes.find(note => note.id === id);
    }
  }
});
