export default [
  {
    path: "/",
    component: () => import("./pages/indexPage"),
    models: [import("./models/indexPage")],
  },
];
