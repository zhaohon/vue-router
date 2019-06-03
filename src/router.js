import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Logo from "./views/Logo.vue";
import Chat from "./views/Chat.vue";
import Text from "./views/Text.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "logo",
      component: Logo
    },
    {
      path: "/home",
      name: "home",
      component: Home
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/text",
      name: "text",
      component: Text
    }
    
    
  ]
});
