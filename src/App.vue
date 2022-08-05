<template>
  <div class="topNav">
  <Topnav />
  </div>
  <!-- <LeftSideBar /> -->
  <!-- <RightSideNav /> -->
  <router-view />
  <partners />
  <Footer />
</template>

<script>
import Topnav from "./components/Topnav.vue";
import Footer from "./components/Footer.vue";
import partners from "./components/partners.vue";
// import LeftSideBar from "./components/LeftSideBar.vue";
// import RightSideNav from "./components/RightSideNav.vue";

export default {
  name: "App",
  components: {
    Topnav,
    Footer,
    partners,
    // LeftSideBar,
    // RightSideNav,
  },
};
</script>

<style scoped>

</style>

