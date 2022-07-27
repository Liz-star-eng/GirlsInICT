<template>
  <div class="header">
    <nav class="topBar">
      <div class="H-container">
        <div class="user">
          <a><i class="fa fa-user"></i> About Us</a>
          <a class="text"
            ><i class="fa fa-sign-in" aria-hidden="true"></i>
            Login
          </a>
        </div>
        <div class="social">
          <a href=""><i class="fa fa-facebook"></i></a>
          <a href=""><i class="fa fa-linkedin"></i></a>
          <a href=""><i class="fa fa-twitter"></i></a>
          <a href=""><i class="fa fa-instagram"></i></a>
        </div>
      </div>
    </nav>
    <header>
      <div class="navBar">
        <router-link to="/" class="title"
          ><img src="../assets/girlslogo.png" alt="" />
        </router-link>
        <nav>
          <li class="dropdown">
            <a href="" class="dropbtn"
              ><i class="fa fa-address-book-o"></i> Directory
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/directorylistings">Mentors</router-link>
              <router-link to="/StudentsViews">Students</router-link>
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
              <router-link to="/cyberview">Cyber Security</router-link>
              <router-link to="/careers">Programming</router-link>
              <router-link to="/careers">Trends in Tech</router-link>
              <router-link to="/StudentsViews">Basic of computing</router-link>
              <router-link to="/cyberview">IoT</router-link>
              <router-link to="/careers">Robotics</router-link>
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
        </nav>
        <a href="" class="cta"> Ask for help </a>
        <div class="search-bar">
          <!-- <input type="text" placeholder="what's on your mind" /> -->
          <button><i class="fa fa-search"></i></button>
        </div>
      </div>
    </header>

    <!-- responsiveness -->
    <nav class="collapsibleNav">
      <div class="smallDevices">
        <router-link to="/" class="title"
          ><img src="../assets/girlslogo.png" alt="" />
        </router-link>
        <i class="fa fa-bars" @click="toggleNav()"></i>
      </div>
    </nav>
    <!-- toggle navbar -->
    <div class="ResponsiveNav" :class="collapsibleNav">
      <nav class="NavItems">
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-folder-open-o"></i> Directory
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <router-link to="">Mentors</router-link>
            <router-link to="">Students</router-link>
          </div>
        </li>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-folder-open-o"></i> Directory
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <router-link to="">Mentors</router-link>
            <router-link to="">Students</router-link>
          </div>
        </li>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-folder-open-o"></i> Academy
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <router-link to="">Cyber Security</router-link>
            <router-link to="">Programming</router-link>
            <router-link to="">Trends in Tech</router-link>
            <router-link to="">Basic of computing</router-link>
            <router-link to="">IoT</router-link>
            <router-link to="">Robotics</router-link>
          </div>
        </li>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-folder-open-o"></i> Events
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <router-link to="">Upcoming</router-link>
            <router-link to="">Past</router-link>
          </div>
        </li>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-folder-building-o"></i> Information Hub
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <router-link to="">Cybersecurity</router-link>
          </div>
        </li>
        <a href="" class="cta"> Ask for help </a>
      </nav>

      <div class="search-bar">
        <input type="text" placeholder="What are you looing for?" />
        <button><i class="fa fa-search"></i></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SmallScreen: false,
      collapsibleNav: "slideUp",
    };
  },

  methods: {
    toggleNav() {
      this.SmallScreen = !this.SmallScreen;
      this.collapsibleNav = "slidedown";
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
  position: fixed;
  z-index: 99;
  width: 100vw;
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
}
.user {
  display: flex;
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
  width: 100vw;
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
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #652e89;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
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
  background-color: #652e89;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
}

.cta:hover {
  text-decoration: none;
  color: #652e89;
  background-color: #ffc527;
  font-weight: bold;
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

.collapsibleNav {
  display: none;
  box-shadow: 0 10px 20px hsl(0deg 0% 67% / 15%);
  background-color: white;
  z-index: 1;
  overflow: hidden;
}

.slideDown {
  height: auto;
}
.slideUp {
  display: none;
  height: 0;
}
.smallDevices {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}
.ResponsiveNav {
  padding: 0 0 2rem 2rem;
}
.NavItems li {
  display: block;
}
.NavItems li a {
  color: #652e89;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
  margin: 0 2rem;
}

.NavItems li a:hover {
  color: #aecdd3;
  transition: 0.3s;
}

.smallDevices .fa-bars {
  font-size: 30px;
  color: #652e89;
}

.NavItems .dropdown-content {
  left: 17rem;
  color: white;
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
  header {
    display: none;
  }
  .collapsibleNav {
    display: flex;
    padding: 3rem 0;
  }
}
</style>
