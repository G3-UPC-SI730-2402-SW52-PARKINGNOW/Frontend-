import {
  createRouter,
  createWebHistory,
} from "vue-router";
import LoginView from "./pages/Login.vue";
import RegisterView from "./pages/Register.vue";
import RegisterDriverView from "./pages/RegisterDriver.vue";
import RegisterOwnerView from "./pages/RegisterOwner.vue";
import DashboardDriverView from "./pages/DashboardDriver.vue";
import DashboardOwnerView from "./pages/DashboardDriver.vue";
import ReservationsView from "./pages/Reservations.vue"

const routes = [
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
  {
    path: "/register-driver",
    component: RegisterDriverView,
  },
  {
    path: "/register-owner",
    component: RegisterOwnerView,
  },
  {
    path: "/dashboard",
    component: DashboardDriverView,
  },
  {
    path: "/dashboard-driver",
    component: DashboardDriverView,
  },
  {
    path: "/dashboard-owner",
    component: DashboardOwnerView,
  },
  { path: "/forgot-password", component: ReservationsView},
  { path: "/reservations", component: ReservationsView}, 
  {
    path: "/",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
