<template>
  <div class="sidebar">
    <div class="leftbar">
<<<<<<< HEAD
      <a href="" class="link"
        ><i class="fa fa-graduation-cap icons"></i>
        <span>
          Prmary to JHS<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 20px"
          ></i>
        </span>
      </a>
      <a class="link" href="#"
        ><i class="fa fa-graduation-cap icons"></i>
        <span
          >SHS<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 90px"
          ></i
        ></span>
      </a>
      <a class="link" href="#"
        ><i class="fa fa-graduation-cap icons"></i>
        <span>
          Tertiary<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 65px"
          ></i></span
=======
      <a class="link" href="#"
        >Basic High School<i
          class="fa fa-angle-right"
          style="font-size: 24px; margin-left: 20px"
        ></i>
      </a>
      <a class="link" href="#"
        >Tertiary<i
          class="fa fa-angle-right"
          style="font-size: 24px; margin-left: 90px"
        ></i
      ></a>
      <a class="link" href="#"
        >Start Up<i
          class="fa fa-angle-right"
          style="font-size: 24px; margin-left: 85px"
        ></i
>>>>>>> 5561f7eff834579583aa6d6b6854a24ba7914ba1
      ></a>
      <br />
      <div class="user">
        <h4><i class="fa fa-user"></i> About Us</h4>
        <a class="text" style="color: white"
          ><i class="fa fa-sign-in" aria-hidden="true"></i>
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openSidebar: false,
    };
  },
};
</script>
<style scoped>
.sidebar {
  padding: 0;
<<<<<<< HEAD
  background-color: #652E89;
  position: fixed;
  height: 60%;
  margin-top: 8%;
  overflow: hidden;
  width: 5.5vw;
  transition: all 500ms ease-in-out;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.sidebar:hover {
  width: 18vw;
=======
  background-color: #377D71;
  position: fixed;
  height: 100%;
  margin-top: 8%;
  overflow: auto;
  width: 16%;
>>>>>>> 5561f7eff834579583aa6d6b6854a24ba7914ba1
}

.sidebar .link {
  display: flex;
  flex-wrap: nowrap;
  color: white;
  margin: 15px 10px 15px 40px;
  text-decoration: none;
}
span {
  margin-left: 3rem;
  padding: 0 10px;
  top: 0;
 display: flex;
 flex-wrap: nowrap;
}
.sidebar .link:hover {
  color: #aecdd3;
  margin-left: 60px !important;
  transition: 0.4s;
  cursor: pointer;
}


.leftbar {
  margin-top: 10vh;
}

.icons {
  margin-right: 10px;
}

.sidebar h4 {
  text-align: left;
  color: white;
  font-size: 14px;
}
.sidebar .text {
  font-weight: bold;
  font-size: 14px;
  width: 100px;
}

div .content {
  padding: 1px 16px;
  height: 1000px;
}


.text:hover {
  text-decoration: none;
  color: rgb(214, 214, 75);
  cursor: pointer;
}

.user {
<<<<<<< HEAD
   margin-left: 3px;
=======
  position: fixed;
>>>>>>> 5561f7eff834579583aa6d6b6854a24ba7914ba1
}


/* media queries */

@media only screen and (max-width: 1409px) {
  .sidebar .link {
    margin-left: 0 !important;
  }

  .sidebar a.link:first-child {
    margin-top: 7vh !important;
  }

  .sidebar {
    margin-top: 0;
  }
}

@media only screen and (max-width: 1033px) {
  .sidebar {
    display: none;
  }
}
</style>
