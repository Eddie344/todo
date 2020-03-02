import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewNote from "../views/NewNote.vue";
import EditNote from "../views/EditNote.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "New note",
    component: NewNote
  },
  {
    path: "/notes/:id",
    name: "Note",
    component: EditNote,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
