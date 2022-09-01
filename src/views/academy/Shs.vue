<template>
  <section class="main-body">
    <div class="titleHolder">
      <div class="container2">
        <div class="title">Senior High Schools</div>
      </div>
    </div>

    <div class="container2">
      <div class="row2">
        <!-- <div class="menus">
          <div class="menuHolder">
            <div class="innerContainer">
              <div class="menu">
                <a href="/academy/primaryJhs">Primary/JHS</a>
                <a href="/academy/Shs">SHS</a>
                <a href="/academy/Tertiary" class="lst">Tertiary</a>
              </div>
            </div>
          </div>
        </div> -->

        <nav>
          <ul>
            <h4>Other categories</h4>
            <hr />
            <li><a href="/academy/primaryJhs">Primary/Jhs</a></li>
            <li><a href="/academy/tertiary">Tertiary</a></li>
            <hr />
            <h4>Related Articles</h4>
            <hr />
            <li><a href="/Mentors/mentorslistings">Mentors</a></li>
            <li><a href="/news/upcomingevent">Events</a></li>
            <li><a href="/careers/careerlanding">Careers</a></li>
            <li><a href="">Competitions</a></li>
          </ul>
        </nav>
        <div class="main">
          <div class="intro">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id et
              molestias illo vero est aut blanditiis, rem atque eligendi natus,
              repellat deleniti explicabo rerum perspiciatis doloremque beatae
              sapiente illum ipsam minus aliquid fugiat! Vitae reiciendis
              quisquam perspiciatis autem accusantium fuga recusandae quae
              nostrum fugit quos inventore quidem suscipit quasi laborum libero
              porro sed optio unde, asperiores similique repellendus a dolores
              iusto! Cupiditate eveniet officia nulla, architecto blanditiis
              tempora quae? Numquam nostrum, corrupti earum voluptate excepturi
              quos explicabo cupiditate tempore ipsum quo illum praesentium at
              expedita
            </p>
          </div>

          <div class="cardHolder">
            <div class="cards">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../../assets/Girls-in-ICT-North-East.jpg"
                  alt="Card image"
                  style="width: 100%"
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <router-link to="/academy/courseInfo" class="link"
                    >See Profile</router-link
                  >
                </div>
              </div>
              <div class="card">
                <img
                  class="card-img-top"
                  src="../../assets/Girls-in-ICT-North-East.jpg"
                  alt="Card image"
                  style="width: 100%"
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <router-link to="/academy/courseInfo" class="link"
                    >See Profile</router-link
                  >
                </div>
              </div>
              <div class="card">
                <img
                  class="card-img-top"
                  src="../../assets/Girls-in-ICT-North-East.jpg"
                  alt="Card image"
                  style="width: 100%"
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <router-link to="/academy/courseInfo" class="link"
                    >See Profile</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <div class="navigation">
              <a href="">Previous</a>
              <a href="">1</a>
              <a href="">2</a>
              <a href="">3</a>
              <a href="">4</a>
              <a href="">5</a>
              <a href="">Next</a>
            </div>
            <hr class="btm" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style scoped>
.container2 {
  padding: 0 10%;
}

.titleHolder {
  display: flex;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(255, 255, 255, 0.001)
    ),
    url("../../assets/IMG_3566.jpg");
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.title {
  padding-top: 15rem;
  color: white;
  font-size: 4rem;
}

.row2 {
  display: flex;
  justify-content: space-between;
}

nav {
  background-color: #652e89;
  padding: 5rem 5rem 0 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(190, 184, 184, 0.52);
  margin-top: -35px;
  height: 100%;
  border-radius: 5px;
}
nav h4 {
  color: white;
}
nav li {
  list-style: none;
  padding: 1rem 0 1rem 0;
}
nav li a {
  color: #ffc527;
  font-size: 16px;
}
nav li a:hover {
  text-decoration: none;
  color: white;
  transition: 0.4s;
}
.lst {
  margin-bottom: 100px;
}

.main {
  margin-top: 25px;
  flex-basis: 70%;
}

.main .intro {
  margin: 20px 0;
  padding-bottom: 20px;
}

.main .cardHolder {
  display: flex;
  flex-direction: column;
}
.main .cardHolder .cards {
  margin-top: 25px;
  gap: 30px;
  display: flex;
}
.card-body {
  padding-bottom: 30px;
}

.card-text,
.card-title {
  margin-bottom: 10px;
}

.card-body p {
  padding-bottom: 10px;
}

.link {
  background-color: #652e89;
  padding: 10px;
  margin: 12px 0;
  color: white;
  border-radius: 2px;
}
.link:hover {
  background-color: #652e89;
  color: rgba(255, 197, 39, 0.8);
  text-decoration: none;
}

.navigation {
  justify-content: space-around;
  text-align: center;
}
.navigation a {
  margin: 10px;
  background-color: whitesmoke;
  padding: 5px;
  color: black;
}

.navigation a:hover {
  background-color: #652e89;
  color: rgba(255, 197, 39, 0.8);
  text-decoration: none;
}
hr {
  height: 2px;
  border: none;
  background: grey;
  margin: 30px 0;
}

@media only screen and (max-width: 600px) {
  section {
    padding-top: 13rem;
    padding-bottom: 8rem;
  }

  .title {
    padding-top: 10rem;
    color: white;
    font-size: 4rem;
  }

  .row2 {
    flex-direction: column-reverse;
  }
  .menus {
    margin: 0;
    flex-basis: 100%;
  }
  .menuHolder {
    padding-top: 5rem;
    background-color: antiquewhite;
    width: 100%;
    height: 300px;
  }
  .main .cardHolder .cards {
    margin-top: 25px;
    gap: 30px;
    flex-direction: column;
  }
  .navigation {
    text-align: center;
    align-content: center;
    justify-content: center;
  }
}

@media only screen and (max-width: 992px) {
  section {
    padding-top: 13rem;
    padding-bottom: 8rem;
  }

  .title {
    padding-top: 18rem;
    color: white;
    font-size: 4rem;
  }

  .row2 {
    flex-direction: column-reverse;
  }
  .menus {
    margin: 0;
    flex-basis: 50%;
  }
  .main {
    margin: 25px 0;
    padding-left: 0;
  }
  .menuHolder {
    padding-top: 5rem;
    background-color: antiquewhite;
    width: 100%;
    height: 300px;
  }
  .main .cardHolder .cards {
    margin-top: 25px;
    gap: 30px;
    /* flex-direction: column; */
  }
  .btm {
    margin-bottom: 50px;
  }
}

@media only screen and (max-width: 1280px) {
  .menus {
    flex-basis: 40%;
    margin: -5rem;
    position: relative;
  }
  .main {
    /* padding-left: 80px; */
    margin-top: 25px;
    flex-basis: 60%;
  }
}
</style>