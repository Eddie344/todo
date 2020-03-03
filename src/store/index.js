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
