import { Route } from "@/types/index";

const routes: Route[] = [
  {
    path: "/authentication",
    name: "auth",
    redirect: { name: 'auth.sign-in' },
    component: () => import("./AuthLayout.vue"),
    children: [
      {
        path: "sign-in",
        name: "auth.sign-in",
        component: () => import("./pages/SignIn.vue"),
        meta: {
          title: "Sign In",
        },
      }
    ]
  },
];

export default routes;
