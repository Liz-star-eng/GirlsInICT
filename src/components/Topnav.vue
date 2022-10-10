<template>
  <div class="header">
    <nav class="topBar bigscreen">
      <div class="H-container">
        <div class="user">
          <a href="/about-us"><i class="fa fa-user"></i> About Us</a>
          <a href="/contact" class="cta"> Ask for help </a>
        </div>
        <div class="social">
          <a class="text" href="/users/login"
            ><i class="fa fa-sign-in" aria-hidden="true"></i>
            Login
          </a>
          <div class="socialIcons">
            <a href=""><i class="fa fa-facebook"></i></a>
            <a href=""><i class="fa fa-linkedin"></i></a>
            <a href=""><i class="fa fa-twitter"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
            <a href=""><i class="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </nav>

    <header>
      <div class="navBar">
        <a href="/" class="title"
          ><img src="../assets/girlslogo.png" alt="" />
        </a>
        <nav class="menuItems">
          <li class="dropdown">
            <a class="dropbtn"
              ><i class="fa fa-address-book-o"></i> Directory
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/Mentors/mentorslistings">Mentors</router-link>
              <router-link to="/careers/careerlanding">Careers</router-link>
              <!-- <router-link to="/StudentsViews">Students</router-link> -->
            </div>
          </li>
          <li class="dropdown">
            <a class="dropbtn"
              ><i class="fa fa-folder-open-o"></i> Forum
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <!-- <router-link to="/moccorner">MoC Corner</router-link> -->
              <router-link to="/forum/letsChat">Let's Chat</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a class="dropbtn"
              ><i class="fa fa-graduation-cap"></i> Training
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/academy/primaryJhs">Primary/JHS</router-link>
              <router-link to="/academy/shs">SHS</router-link>
              <router-link to="/academy/tertiary">Tertiary</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a class="dropbtn"
              ><i class="fa fa-fire"></i> Episodes
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/news/upcomingevent">Upcoming</router-link>
              <router-link to="/news/newsviews">Past</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a class="dropbtn"
              ><i class="fa fa-archive"></i> Information Hub
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/programs/cyberview">Cybersecurity</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a class="dropbtn"
              ><i class="fa fa-tasks"></i> Programs
              <i class="fa fa-chevron-down"></i
            ></a>
            <div class="dropdown-content">
              <router-link to="/programs/cyberview">CyberSecurity</router-link>
              <router-link to="/programs/programming">Programming</router-link>
              <!-- <router-link to="/cyberview">IoT</router-link>
              <router-link to="/careers">Robotics</router-link> -->
            </div>
          </li>
        </nav>

        <div class="search-bar">
          <button onclick="openSearch()"><i class="fa fa-search"></i></button>
        </div>
        <div id="myOverlay" class="overlay">
          <span class="closebtn" onclick="closeSearch()" title="Close Overlay"
            >×</span
          >
          <div class="overlay-content">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
          </div>
        </div>

        <i class="fa fa-bars menuBars" @click="toggleNav()"></i>
      </div>
    </header>

    <!-- toggle navbar -->
    <div class="ResponsiveNav" :class="collapsibleNav">
      <nav class="NavItems">
        <li class="dropdown">
          <a class="dropbtn"
            ><i class="fa fa-address-book-o"></i> Directory
            <i class="fa fa-chevron-down arrow-down"></i
          ></a>
          <div class="dropdown-content">
            <!-- <a href="/directorylistings">Mentors</a> -->
            <a href="/Mentors/mentorslistings">Mentors</a>
            <a href="/careers/careerlanding">Careers</a>
            <!-- <a href="/StudentsViews">Students</a> -->
          </div>
        </li>
        <li class="dropdown">
          <a class="dropbtn"
            ><i class="fa fa-folder-open-o"></i> Forum
            <i class="fa fa-chevron-down arrow-down"></i
          ></a>
          <div class="dropdown-content">
            <a href="/forum/letsChat">Let's Chat</a>
            <!-- <a href="/moccorner">Mentors</a>
            <a href="/careers">Carreers</a> -->
          </div>
        </li>
        <li class="dropdown">
          <a class="dropbtn"
            ><i class="fa fa-graduation-cap"></i> Training
            <i class="fa fa-chevron-down arrow-down"></i
          ></a>
          <div class="dropdown-content">
            <a href="/academy/primaryJhs">Primary/JHS</a>
            <a href="/academy/shs">SHS</a>
            <a href="/academy/tertiary">Tertiary</a>
          </div>
        </li>
        <li class="dropdown">
          <a class="dropbtn"
            ><i class="fa fa-fire"></i> Episodes
            <i class="fa fa-chevron-down arrow-down"></i
          ></a>
          <div class="dropdown-content">
            <a href="/news/upcomingevent">Upcoming</a>
            <a href="/news/newsviews">Past</a>
          </div>
        </li>
        <li class="dropdown">
          <a class="dropbtn"
            ><i class="fa fa-archive"></i> Information Hub
            <i class="fa fa-chevron-down arrow-down"></i
          ></a>
          <div class="dropdown-content">
            <a href="/programs/cyberview">Cybersecurity</a>
          </div>
        </li>
        <li class="dropdown">
          <a class="dropbtn"
            ><i class="fa fa-archive"></i> Competition
            <i class="fa fa-chevron-down arrow-down"></i
          ></a>
          <div class="dropdown-content">
            <a href="/programs/cyberview">Cyber Security</a>
            <a href="/careers/careers">Programming</a>
            <!-- <a href="/careers">Robotics</a> -->
          </div>
        </li>
      </nav>
      <div class="sectionAsk">
        <div class="search-icon">
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

.social {
  display: flex;
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
  max-width: 90%;
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
.ResponsiveNav a .arrow-down {
  position: absolute;
  text-align: right;
  right: 0;
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
/* Collapsible search */
.openBtn {
  background: #f1f1f1;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
}

.openBtn:hover {
  background: #bbb;
}

.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

.overlay-content {
  position: relative;
  top: 46%;
  width: 80%;
  text-align: center;
  margin-top: 30px;
  margin: auto;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  cursor: pointer;
  color: white;
}

.overlay .closebtn:hover {
  color: #ccc;
}

.overlay input[type="text"] {
  padding: 15px;
  font-size: 17px;
  border: none;
  float: left;
  width: 80%;
  background: white;
}

.overlay input[type="text"]:hover {
  background: #f1f1f1;
}

.overlay button {
  float: left;
  width: 20%;
  padding: 15px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.overlay button:hover {
  background: #bbb;
}
/* end */
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
  .search-icon {
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
    left: 23rem;
  }
}

@media only screen and (max-width: 380px) {
  .H-container {
    max-width: 97%;
  }
  .cta {
    padding: 2px 2rem;
  }
}

@media (max-width: 200px) {
  .header {
    display: none;
  }
}
</style>
