import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MentorsListing from '../views/Mentors/MentorsListing.vue'
import StudentsView from "../views/StudentsView.vue";
import UpcomingEvent from "../views/news/UpcomingEvent.vue"
import MoCs from "../views/MoCs.vue";
import MentorsDetail from "../views/Mentors/MentorsDetail.vue";
import programming from "../views/programs/programming.vue";
import CyberView from "../views/programs/CyberView.vue";
import Careers from "../views/careers/Careers.vue";
import CareerLanding from "../views/careers/CareerLanding.vue";
import NewsViews from "../views/news/NewsViews.vue";
import NewsDetails from "../views/news/NewsDetails.vue";
import Form from "../views/Form.vue";
import AboutUs from "../views/AboutUs.vue";
import privacy from "../views/privacy.vue"
import FQA from "../views/FQA.vue";
import contact from "../views/Contact"
import courseInfo from "../views/academy/courseInfo";
import primaryJhs from "../views/academy/primaryJhs";
import Shs from "../views/academy/Shs";
import Tertiary from "../views/academy/Tertiary";
import letsChat from "../views/forum/letsChat.vue";
import login from "../views/users/login.vue";
import signUp from "../views/users/signUp.vue";
import Test from "../views/Test.vue"




const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-us",
    name: "aboutus",
    component: AboutUs,
  },
  {
    path: "/Mentors/mentorslistings",
    name: "mentors",
    component: MentorsListing,
  },
  {
    path: "/Mentors/mentorsdetail",
    name: "directory",
    component: MentorsDetail,
  },
  {
    path: "/StudentsViews",
    name: "students",
    component: StudentsView,
  },
  {
    path: "/news/upcomingevent",
    name: "upcomingEvent",
    component: UpcomingEvent,
  },
  {
    path: "/moccorner",
    name: "MoCs",
    component: MoCs,
  },
  {
    path: "/programs/cyberview",
    name: "cybersecurity",
    component: CyberView,
  },
  {
    path: "/programs/programming",
    name: "programming",
    component: programming,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
  {
    path: "/careers/careers",
    name: "careers",
    component: Careers,
  },
  {
    path: "/careers/careerlanding",
    name: "careerlanding",
    component: CareerLanding,
  },
  {
    path: "/news/newsviews",
    name: "news",
    component: NewsViews,
  },
  {
    path: "/news/newsdetails",
    name: "newsdetails",
    component: NewsDetails,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: privacy,
  },
  {
    path: "/fqa",
    name: "fqa",
    component: FQA,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/academy/coursesinf",
    name: "coursesinfo",
    component: courseInfo,
  },
  {
    path: "/academy/primaryJhs",
    name: "primary",
    component: primaryJhs,
  },
  {
    path: "/academy/shs",
    name: "shs",
    component: Shs,
  },
  {
    path: "/academy/tertiary",
    name: "tertiary",
    component: Tertiary,
  },
  {
    path: "/forum/letsChat",
    name: "letsChat",
    component: letsChat,
  },
  {
    path: "/users/login",
    name: "login",
    component: login,
  },
  {
    path: "/users/signUp",
    name: "signup",
    component: signUp,
  },
  {
    path: "/Test",
    name: "test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
