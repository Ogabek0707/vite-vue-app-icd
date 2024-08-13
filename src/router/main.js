export default {
    path: "/Main",
    name: "Main",
    component: import("../views/main/Main.vue"),
    children: [
      {
        path: "/Main/Information",
        name: "Main-Information",
        component: import("../views/main/MainInformation.vue"),
      },
      {
        path: "/Main/Orders",
        name: "Main-Orders",
        component: import("../views/main/MainOrders.vue"),
      },
      {
        path: "/Main/Services",
        name: "Main-Services",
        component: import("../views/main/MainServices.vue"),
      },
    ],
  };
  