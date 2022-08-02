<template>
  <div id="main-body" class="main-body">
    <div class="herobg">
      <div class="herotext">
        <div class="left"></div>
        <div class="right">
          <h2>GIRLS in ICT</h2>
          <P
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iure
            provident, nisi illo accusantium. Deserunt, deleniti libero?</P
          >
          <router-link to="/about-us"
            ><button><i class="fa fa-user"></i> Who we are</button></router-link
          >
        </div>
      </div>
    </div>
    <div class="intro">
      <h3 style="text-align: center; margin-top: 5%">
        We are here to <br /><strong>always help</strong> you
      </h3>
      <p class="mt-4" style="text-align: center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. <br />Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <h3 style="text-align: center; margin-top: 5%">Text Goes Here</h3>
    <div class="top-cards mt-3 mb-5">
      <div class="top-card">
        <img
          src="../assets/icon-search-heart-heart-inspiration-icon-with-png-and-vector-856151.png"
          alt=""
        />
        <h4 style="text-align: center">Inspire</h4>
      </div>
      <div class="top-card top-card-mid">
        <img src="../assets/fa-users.png" alt="" />
        <h4 style="text-align: center">Engage</h4>
      </div>
      <div class="top-card">
        <img src="../assets/photo_2022-04-29_15-17-16.png" alt="" />
        <h4 style="text-align: center">Educate</h4>
      </div>
    </div>

    <div class="empower mb-5">
      <div class="left">
        <h3>Empowering Girls & Women In Cyber Security</h3>
        <p style="text-align: justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <img src="../assets/photo_2022-07-25_09-11-26.jpg" alt="" />
    </div>
    <div class="pastEvent">
      <h3>Past Events</h3>
      <div class="containerEvents">
        <a href=""><img src="../assets/tertiary.jpg" alt="" /></a>
        <a href=""><img src="../assets/mic.jpg" alt="" /></a>
        <a href=""><img src="../assets/office.png" alt="" /></a>
      </div>
    </div>

    <div class="special">
      <h3 style="text-align: center; margin-top: 100px">
        What is the <br />
        <strong>Speciality Of Us ?</strong>
      </h3>
      <div class="row-2">
        <div class="speciality-card">
          <img src="../assets/tertiary.jpg" alt="" />
          <h3>Title <strong>Goes Here</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div class="speciality-card">
          <img src="../assets/gicts1.jpg" alt="" />
          <h3>Title <strong>Goes Here</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div class="speciality-card">
          <img src="../assets/tertiary.jpg" alt="" />
          <h3>Title <strong>Goes Here</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor .
          </p>
        </div>
      </div>
    </div>
    <br />

    <div class="mt-5">
      <div class="partner mt-5">
        <div class="left">
          <h4>Our Sponsors And Partnership Helps Us Grow</h4>
        </div>
        <div class="right">
          <button>Become A Partner Today</button>
        </div>
      </div>
    </div>

    <section>
      <!-- Message from minister -->
      <div class="container">
        <div class="mins-msg">
          <div class="minsImage">
            <img
              src="../assets/Min.Ursula-Owusu-Ekuful-1.jpg"
              alt="Minister's image"
            />
          </div>
          <div class="mins-text">
            <h1>Become A Partner Today</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ipsa
              vitae. Rerum corrupti explicabo maiores enim quae vitae, molestias
              voluptatem consequuntur! Ipsum voluptatum nihil molestiae veniam
              ratione neque mollitia ex!
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ipsa
              vitae. Rerum corrupti explicabo maiores enim quae vitae, molestias
              voluptatem consequuntur! Ipsum voluptatum nihil molestiae veniam
              ratione neque mollitia ex!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our partners carousel -->

    <div class="mt-5 mb-5">
      <h3 style="text-align: center" class="mt-5 mb-5">Our Partners</h3>
      <!-- <partners /> -->
    </div>
  </div>
</template>

<!-- <script>
import partners from "./views/partners.vue";

export default {
  components: {
    partners,
  },
};
</script> -->
<style scoped>
.main-body {
  overflow: hidden;
  padding-top: 15rem;
}
/* Hero background */
.herobg {
  background-image: url("../assets/IMG_7391.jpg");
  height: 65vh;
  background-repeat: no-repeat;
  background-size: 100% 130%;
}

.herotext {
  display: flex;
  height: 65vh;
  padding: 15rem 30rem 0 30rem;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.798),
    rgba(255, 255, 255, 0.001)
  );
}
.herotext .right {
  width: 50%;
}

.herotext button {
  padding: 1.5rem 3.5rem;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 197, 39, 0.8);
  color: #652e89;
  font-size: 18px;
}
.herotext button:hover {
  background-color: rgba(204, 153, 12, 0.8);
}

.herotext h2,
.herotext p {
  color: white;
}

.top-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  /* padding: 10px; */
  gap: 10px;
}
.top-card,
.top-card-mid {
  background-color: #293139;
  color: white !important;
  padding: 5rem 5rem;
  border-radius: 5px;
  text-align: center;
}
.top-card h4 {
  color: white;
}
.top-card-mid {
  background-color: #652e89;
}

.top-cards i {
  margin-top: 70px;
  font-size: 100px;
}

/* empower women section */
.empower {
  background-color: #fdd5ef;
  display: flex;
  padding: 8rem 16rem;
  align-content: center;
}

.empower .left {
  padding: 0 3rem 0 0;
}

.empower img {
  width: 500px;
}

.col-sm-4 img {
  border-radius: 10px;
  width: 100%;
}
/* past events */
.pastEvent h3 {
  text-align: center;
  margin: 100px auto 30px auto;
}

.pastEvent .containerEvents {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7.5rem;
  padding: 0 4rem;
}
.pastEvent .containerEvents a img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

/* whats our specialty card */
.row-2 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.speciality-card {
  margin-top: 30px;
  text-align: center;
  padding: 30px 20px;
  width: 350px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px 1px lightgray;
}
.speciality-card img {
  margin: 80px 0 px 0;
  width: 200px;
  height: 200px;
  object-position: center;
  object-fit: cover;
  border-radius: 100%;
}

.partner {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5rem 1rem;
  background-color: #652e89;
  width: 100%;
  gap: 10px;
}

.partner .left {
  font-weight: bold;
}
.partner .left h4 {
  font-weight: bold;
  color: white;
}
.partner .right button {
  padding: 10px 15px;
  background-color: white;
  color: #652e89;
  width: auto;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
}

.partner .right button:hover {
  background-color: #ffc527;
  color: #652e89;
}

p,
h2,
h3,
h4,
h5,
h6 {
  color: black;
}

.links img {
  height: 50px;
  object-fit: cover;
  width: auto;
}

.links {
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 0 10px 5rem;
}
.jumbotron {
  height: 20vh;
}

.row5 button {
  border-radius: 5px;
  background-color: #6f36bb;
  color: white;
  height: 50px;
  width: 300px;
}
.mt-5 .carousel-inner {
  height: 100px;
  padding: 10px 0;
}
.mt-5 .carousel-inner img {
  height: 50px;
  width: 200px;
}
.mt-5 .carousel-inner .row {
  display: flex;
  justify-content: center;
  padding: 10px 0 0 0;
}

.mins-msg {
  display: flex;
  margin: 40px 0;
}
.minsImage {
  width: 90%;
}
.mins-text {
  margin: 0 30px;
}
.mins-text h1 {
  font-size: 3rem;
}

.mins-msg img {
  width: 100%;
}

@media only screen and (max-width: 1203px) {
  .main-body {
    margin: 0;
  }
   .intro {
    padding: 0 10px;
  }

  .carousel-inner {
    height: 20vh;
  }

  .empower {
    flex-wrap: wrap;
  }
  .empower img {
    width: 100%;
  }
  .mins-msg {
    flex-direction: column;
  }
  .mins-text {
    margin: 0px;
    padding: 0px;
  }
}

@media (max-width: 890px) {
  .herobg,
  .herotext {
    height: 35vh;
  }
  .herotext {
    padding: 12rem 2rem 2rem 2rem;;
  }
}

@media only screen and (max-width: 600px) {
  .herobg,
  .herotext {
    height: 35vh;
  }
  .herotext .right {
    width: 70%;
  }

  .herotext {
    padding: 10px;
  }
  .herotext button {
    padding: 1rem 2rem;
  }

  /* Past events */
  .pastEvent .containerEvents {
    gap: 2rem;
  }
  /* sponsors */
  .partner .left h4 {
    text-align: center;
  }
  /* end */

  /* past events */

  .pastEvent .container a:first-child {
    padding-left: 0 !important;
    padding-right: 20px !important;
  }
  .pastEvent .container {
    gap: 5px;
  }
  /* end */

  .mins-msg {
    flex-direction: column;
  }
  .mins-msg img {
    width: 100%;
  }
  .mins-text {
    margin: 0px;
    padding: 0px;
  }

  .mins-text h1 {
    font-size: 3rem;
  }

  .empower {
    padding: 20px;
  }
  .empower img {
    width: 100%;
  }

  .row-2 .col-sm-4 {
    width: 100%;
    height: 100%;
  }

  .row-2 .speciality-card {
    width: 100% !important;
    height: 100%;
  }
}

@media only screen and (max-width: 320px) {
   .herobg,
  .herotext {
    height: 38vh;
  }
  .herotext .right {
    width: 100%;
  }
   .herotext button {
    padding: 5px 2rem;
  }
  .herotext {
    padding: 0;
  }
}
</style>
