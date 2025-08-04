export default {
  path: "/Auth",
  name: "auth",
  component: () => import("../views/auth/AuthView.vue"),
  children: [
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/",
      name: "SignUp",
      component: () => import("../views/auth/SignUp.vue"),
    },
    {
      path: "/Forgot-Password",
      name: "Forgot-Password",
      component: () => import("../views/auth/ForgotP.vue"),
    },
  ],
};
