import type { Route } from "@trace/base/types/index";

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
      },
      {
        path: "forgot-password",
        name: "auth.forgot-password",
        component: () => import("./pages/ForgotPassword.vue"),
        meta: {
          title: "Forgot Password",
        },
      },
      {
        path: "password-update",
        name: "auth.password-update",
        component: () => import("./pages/PasswordUpdate.vue"),
        meta: {
          title: "Password Update",
        },
      },
      {
        path: "otp-choice",
        name: "auth.otp-choice",
        component: () => import("./pages/OtpChoice.vue"),
        meta: {
          title: "OTP Choice",
        },
      },
      {
        path: "verify-otp",
        name: "auth.verify-otp",
        component: () => import("./pages/VerifyOtp.vue"),
        meta: {
          title: "Verify OTP",
        },
      }
    ]
  },
];

export default routes;
