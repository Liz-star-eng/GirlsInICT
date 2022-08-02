<template>
  <div class="header">
    <nav class="topBar bigscreen">
      <div class="H-container">
        <div class="user">
          <router-link to="/about-us"
            ><i class="fa fa-user"></i> About Us</router-link
          >
             <a href="" class="cta"> Ask for help </a>
        </div>
        <div class="social">
          <a class="text"
            ><i class="fa fa-sign-in" aria-hidden="true"></i>
            Login
          </a>
          <div class="socialIcons">
          <a href=""><i class="fa fa-facebook"></i></a>
          <a href=""><i class="fa fa-linkedin"></i></a>
          <a href=""><i class="fa fa-twitter"></i></a>
          <a href=""><i class="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </nav>

    <header>
      <div class="navBar">
        <router-link to="/" class="title"
          ><img src="../assets/girlslogo.png" alt="" />
        </router-link>
        <nav class="menuItems">
          <li class="dropdown">
            <a href="" class="dropbtn"
              ><i class="fa fa-address-book-o"></i> Directory
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/directorylistings">Mentors</router-link>
              <!-- <router-link to="/StudentsViews">Students</router-link> -->
            </div>
          </li>
          <li class="dropdown">
            <a href="" class="dropbtn"
              ><i class="fa fa-folder-open-o"></i> Forum
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/moccorner">Mentors</router-link>
              <router-link to="/careers">Carreers</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a href="" class="dropbtn"
              ><i class="fa fa-graduation-cap"></i> Academy
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/cyberview" >Primary/JHS</router-link>
              <router-link to="/careers">SHS</router-link>
              <router-link to="/careers">Tertiary</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a href="" class="dropbtn"
              ><i class="fa fa-fire"></i> Events
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/upcomingevent">Upcoming</router-link>
              <router-link to="newsviews">Past</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a href="" class="dropbtn"
              ><i class="fa fa-archive"></i> Information Hub
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/cyberview">Cybersecurity</router-link>
            </div>
          </li>
           <li class="dropdown">
            <a href="" class="dropbtn"
              ><i class="fa fa-archive"></i> Competition
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/cyberview">Cyber Security</router-link>
              <router-link to="/careers">Programming</router-link>
              <router-link to="/cyberview">IoT</router-link>
              <router-link to="/careers">Robotics</router-link>
            </div>
          </li>
        </nav>
     
        <div class="search-bar">
          <!-- <input type="text" placeholder="what's on your mind" /> -->
          <button><i class="fa fa-search"></i></button>
        </div>
        <i class="fa fa-bars menuBars" @click="toggleNav()"></i>
      </div>
    </header>

    <!-- toggle navbar -->
    <div class="ResponsiveNav" :class="collapsibleNav">
      <nav class="NavItems">
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-address-book-o"></i> Directory
            <i class="fa fa-chevron-down" style="margin-left: 7.8rem;"></i
          ></a>
          <div class="dropdown-content">
            <router-link to="/directorylistings">Mentors</router-link>
            <!-- <router-link to="/StudentsViews">Students</router-link> -->
          </div>
        </li>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-folder-open-o"></i> Forum
            <i class="fa fa-chevron-down" style="margin-left: 9.7rem;"></i
          ></a>
          <div class="dropdown-content">
            <router-link to="/moccorner">Mentors</router-link>
            <router-link to="/careers">Carreers</router-link>
          </div>
        </li>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-graduation-cap"></i> Academy
            <i class="fa fa-chevron-down" style="margin-left: 6.6rem;"></i
          ></a>
          <div class="dropdown-content">
              <router-link to="/cyberview" >Primary/JHS</router-link>
              <router-link to="/careers">SHS</router-link>
              <router-link to="/careers">Tertiary</router-link>
          </div>
        </li>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-fire"></i> Events <i class="fa fa-chevron-down" style="margin-left: 10rem;"></i
          ></a>
          <div class="dropdown-content">
            <router-link to="/upcomingevent">Upcoming</router-link>
            <router-link to="newsviews">Past</router-link>
          </div>
        </li>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-archive"></i> Information Hub
            <i class="fa fa-chevron-down" style="margin-left: 1.8rem;"></i
          ></a>
          <div class="dropdown-content">
            <router-link to="/cyberview">Cybersecurity</router-link>
          </div>
        </li>
        <li class="dropdown">
            <a href="" class="dropbtn"
              ><i class="fa fa-archive"></i> Competition
              <i class="fa fa-chevron-down" style="margin-left: 4.9rem;"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/cyberview">Cyber Security</router-link>
              <router-link to="/careers">Programming</router-link>
              <router-link to="/careers">Robotics</router-link>
            </div>
          </li>
      </nav>
      <div class="sectionAsk">
        <div class="search-bar">
          <input type="text" placeholder="What are you looing for?" />
          <button><i class="fa fa-search"></i></button>
        </div>
      </div>
      <a @click="close()">
        <i class="fa fa-times close"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsibleNav: "slideUp",
    };
  },

  methods: {
    toggleNav() {
      this.collapsibleNav = !this.collapsibleNav;
    },
    close() {
      this.collapsibleNav = "closeSlide";
    },
  },
};
</script>
<style scoped>
a,
h2,
i,
li,
input,
button {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  z-index: 99;
  position: fixed;
}
/* TOPNAV */
.topBar {
  background-color: #652e89;
  padding: 1rem 0;
}
.H-container {
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.user {
  display: flex;
  align-items: flex-end;
}
.H-container a {
  color: white;
}

.social a {
  margin-left: 1rem;
}
.H-container a:hover {
  text-decoration: none;
  color: #ffc527;
}
.user a:first-child {
  margin-right: 3rem;
}
/* Navbar */
header {
  background-color: white;
  padding: 3rem 5rem;
  box-shadow: 0 10px 20px hsl(0deg 0% 67% / 15%);
  width: 100%;
}
.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 85%;
  margin: auto;
}
.title img {
  width: 170px;
}

.fa-angle-double-right {
  color: #652e89;
}

ul li {
  list-style-type: none;
}

li a,
.dropbtn {
  display: inline-block;
  color: #652e89;
  text-align: center;
  /* padding: 14px 16px; */
  text-decoration: none;
  font-size: 18px;
  margin: 0 1rem;
}
.dropbtn {
  padding: 14px 6px;
}
li a:hover,
.title:hover,
.NavItems li a:hover {
  color: #ae78d3;
  text-decoration: none;
  transition: 0.3s;
  font-weight: bold;
}
li.dropdown {
  display: inline-block;
  z-index: 99;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #652e89;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.ResponsiveNav .dropdown-content a,
.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  color: #ffc527;
}
.dropdown:hover .dropdown-content {
  display: block;
}

.navBar .fa-chevron-down {
  font-size: 12px;
}

.cta {
  background-color: #ffc527;
  padding: 0.4rem 2rem;
  border-radius: 50px;
  color: #652e89 !important;
}

.cta:hover {
  text-decoration: none;
  color: #652e89;
  background-color: white;
  font-weight: bold;
}
/* MENU BARS */
.menuBars {
  display: none;
  color: #652e89;
  font-size: 26px;
}
input,
button {
  height: 35px;
}

input {
  width: 150px;
  padding: 0 2.5rem;
  border-radius: 50px;
  outline: #aecdd3;
}

input::placeholder {
  font-style: italic;
  font-size: 12px;
  color: #652e89;
}

button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 15px;
  border: none;
  background-color: #652e89;
  color: white;
  margin-left: 9px;
}

/* responsivness */
.ResponsiveNav {
  height: 45rem;
  background-color: whitesmoke;
  overflow: hidden;
  transition: height 1s ease-in-out;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.slideUp {
  height: 0;
}
.closeSlide {
  height: 0;
  overflow: hidden;
}

.close {
  color: #652e89;
  font-size: 26px;
  padding-right: 2rem;
}
.NavItems li {
  display: block;
}
.NavItems li a {
  color: #652e89;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 16px;
  margin: 0 2rem 0.2rem 7rem;
}

.NavItems li a:hover {
  color: #ffc527;
  transition: 0.3s;
}

.NavItems .dropdown-content a {
  font-size: 14px;
  margin-left: 0;
}
.NavItems .dropdown-content {
  left: 28rem;
  top: 0;
  color: white;
  width: 50px;
}

.fa-chevron-down {
  font-size: 14px;
  position: relative;
}

@media (max-width: 1600px) {
  li a,
  .dropbtn {
    margin: 0 1rem;
    font-size: 16px;
  }
  .topBar {
    width: 100%;
  }
}

@media (max-width: 1400px) {
  header {
    padding: 3rem 2rem;
  }
}

@media (max-width: 1310px) {
  .menuItems,
  .search-bar {
    display: none;
  }
  .menuBars {
    display: block;
  }
}
@media (max-width: 600px) {
  .NavItems li a {
    margin-left: 2rem;
  }
  .socialIcons {
    display: none;
  }

  .NavItems .dropdown-content {
    left: 20rem;
  }
}
</style>
