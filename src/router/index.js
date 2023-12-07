import { createRouter, createWebHistory } from "vue-router";

import FirstComp from "../components/FirstComp.vue";
import About from '../components/About.vue'
//creating router array
const routes = [
  { path: "/", name: "FirstComp", component: FirstComp },
  {
    path: "/about",
    name: "About",
    component:()=>
        import ('../components/About.vue')
    
  },
];

//Creating router object
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
