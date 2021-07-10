import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import firebase from "firebase";
// import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/candidates",
    name: "Candidates",
    component: () =>
      import(/* webpackChunkName: "candidate" */ "../views/Candidates.vue"),
  },
  {
    path: "/candidate/:id",
    name: "Candidate",
    component: () =>
      import(/* webpackChunkName: "candidate" */ "../views/Candidate.vue"),
  },
  {
    path: "/vacancies",
    name: "Vacancies",
    component: () =>
      import(/* webpackChunkName: "vacancies" */ "../views/Vacancies.vue"),
  },
  {
    path: "/vacancy/:id",
    name: "Vacancy",
    component: () =>
      import(/* webpackChunkName: "vacancy" */ "../views/Vacancy.vue"),
  },
  {
    path: "/edit-vacancy/:id",
    name: "EditVacancy",
    component: () =>
      import(/* webpackChunkName: "edit-vacancy" */ "../views/EditVacancy.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.auth)) {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         store.state.currentUser = user;
//         firebase
//           .auth()
//           .currentUser.getIdToken(/* forceRefresh */ true)
//           .then(function (idToken) {
//             store.state.currentUser.idToken = idToken;
//           })
//           .catch(function () {
//             // Handle error
//           });
//         next();
//       } else {
//         next({
//           path: "/",
//         });
//       }
//     });
//   } else if (to.matched.some((record) => record.meta.guest)) {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         next({
//           path: "/login",
//         });
//       } else {
//         next();
//       }
//     });
//   } else {
//     next();
//   }
// });

export default router;
