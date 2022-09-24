<template>
  <div class="mainBody">
    <section>
      <div class="about">
        <div class="container">
          <h1>About Us</h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col1">
            <h1>Who we are</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              reprehenderit cupiditate quod provident, perferendis a repellat,
              accusantium consequatur natus repudiandae consequuntur
              praesentium! Iste architecto dolorum mollitia maiores modi ducimus
              facere!

              <br /><br /><br />

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              reprehenderit cupiditate quod provident, perferendis a repellat,
              accusantium consequatur natus repudiandae consequuntur
              praesentium! Iste architecto dolorum mollitia maiores modi ducimus
              facere!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odit reprehenderit cupiditate quod provident, perferendis a
              repellat, accusantium consequatur natus repudiandae consequuntur
              praesentium! Iste architecto dolorum mollitia maiores modi ducimus
              facere! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odit reprehenderit cupiditate quod provident, perferendis a
              repellat, accusantium consequatur natus repudiandae consequuntur
              praesentium! Iste architecto dolorum mollitia maiores modi ducimus
              facere!
            </p>
          </div>
          <div class="col2">
            <img src="../assets/photo-1573164574397-dd250bc8a598.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="mv">
        <div class="container">
          <div class="row">
            <div class="col3">
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                reprehenderit cupiditate quod provident, perferendis a repellat,
                accusantium consequatur natus repudiandae consequuntur
                praesentium! Iste architecto dolorum mollitia maiores modi
                ducimus facere!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                reprehenderit cupiditate quod provident, perferendis a repellat,
                accusantium consequatur natus repudiandae consequuntur
                praesentium! Iste architecto dolorum mollitia maiores modi
                ducimus facere!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                reprehenderit cupiditate quod provident, perferendis a repellat,
                accusantium consequatur natus repudiandae consequuntur
                praesentium! Iste architecto dolorum mollitia maiores modi
                ducimus facere!
              </p>
            </div>
            <div class="col4">
              <h1>Our Vission</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                reprehenderit cupiditate quod provident, perferendis a repellat,
                accusantium consequatur natus repudiandae consequuntur
                praesentium! Iste architecto dolorum mollitia maiores modi
                ducimus facere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="ourteam">
        <div class="container">
          <div class="ourteamtitle">
            <h1>Meet Our Team</h1>
            <div class="grid-conainer cards">
              <router-link to="">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
                    alt="Card image"
                    style="width: 100%"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Christiana</h4>
                    <p class="card-text">
                      Some example text some example text. John Doe is an
                      architect and engineer
                    </p>
                  </div>
                </div>
              </router-link>
              <router-link to="">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/mandy-zhang-a0EQFTH4ZfA-unsplash.jpg"
                    alt="Card image"
                    style="width: 100%"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Christiana</h4>
                    <p class="card-text">
                      Some example text some example text. John Doe is an
                      architect and engineer
                    </p>
                  </div>
                </div>
              </router-link>
              <router-link to="">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
                    alt="Card image"
                    style="width: 100%"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Christiana</h4>
                    <p class="card-text">
                      Some example text some example text. John Doe is an
                      architect and engineer
                    </p>
                  </div>
                </div>
              </router-link>
              <router-link to="">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/mandy-zhang-a0EQFTH4ZfA-unsplash.jpg"
                    alt="Card image"
                    style="width: 100%"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Christiana</h4>
                    <p class="card-text">
                      Some example text some example text. John Doe is an
                      architect and engineer
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mainBody {
  padding-top: 15rem;
  overflow: hidden;
}
section {
  width: 100vw;
  overflow: hidden;
}

.container {
  max-width: 80%;
  margin: auto;
}

.about {
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #652e89;
  align-content: center;
  font-size: 1.3rem;
}
.about h1 {
  padding-top: 50px;
  color: white;
}

.row {
  display: flex;
  padding: 5rem 0;
}
.row .col1 {
  /* margin: 50px 0; */
  padding-right: 50px;
  flex-basis: 50%;
}

/* taking default margin and padding out */
.row .col1  h1{
padding: 0;
margin: 0;
margin-bottom: 5px;
}
.row .col2 {
  flex-basis: 50%;
}

.col2 img {
  margin: 50px 0;
  width: 100%;
  object-fit: cover;
}
.mv {
  background-color: antiquewhite;
  padding: 50px 0;
}

.mv .col3 {
  margin: 50px 0;
  padding-right: 50px;
}

.mv .col4 {
  margin: 50px 0;
}

.ourteam {
  margin: 50px 0 0 0;
}
.ourteamtitle h1 {
  text-align: center;
}
.ourpartner {
  margin-bottom: 50px;
  background-color: rgba(250, 235, 215, 0.095);
  padding: 100px 0;
}

/* Grid cards*/
.grid-conainer {
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  gap: 55px;
  padding: 30px 0 0 0;
}

.cards {
  text-align: center;
}
.cards img {
  width: 150px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.cards a {
  color: black;
}
.cards a:hover {
  text-decoration: none;
  background-color: whitesmoke;
  padding: 6px;
  transition: 0.3s ease-in-out;
}
@media only screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 1px !important;
  }
  /* .row {
    flex-direction: column;
  } */
  /* .col1 {
  padding: 1rem;
  text-align: justify;
 } */
  .row .col1,
  .col3,
  .col4 {
    margin: 50px 0;
    padding: 5px;
    text-align: center;
  }

  .col2 img {
    margin-top: 1px;
    width: 100%;
  }
  .mv .col3 {
    margin: 2px 0;
  }
  .mv .col4 {
    margin: 4px 0;
  }
  .grid-conainer {
    grid-template-columns: 100%;
  }
  .cards img {
    height: 270px;
  }
}
@media only screen and (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .col1 {
    padding-right: 100px;
  }
  .col2 img {
    margin-top: 1px;
    width: 100%;
  }
  .mv .col3 {
    margin: 2px 0;
  }
  .mv .col4 {
    margin: 4px 0;
  }

  .ourteam .col5 {
    margin: 30px 0;
    flex-direction: column;
    align-items: center;
  }

  .piccard {
    padding-right: 1px;
    padding-bottom: 50px;
  }
}
@media only screen and (max-width: 1280px) {
  .row {
    flex-direction: column;
  }
  .col1 {
    padding-right: 100px;
  }
  .col2 img {
    margin-top: 1px;
    width: 100%;
  }
  .mv .col3 {
    margin: 2px 0;
  }
  .mv .col4 {
    margin: 4px 0;
  }

  .ourteam .col5 {
    margin: 30px 0;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
  }
  .ourteam .col5 img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }

  .piccard {
    padding: 20px;
    padding-bottom: 50px;
  }
}
@media only screen and (max-width: 992px) {
  .row {
    flex-direction: column;
  }
  .col1 {
    padding-right: 100px;
  }
  .col2 img {
    margin-top: 1px;
    width: 100%;
  }
  .mv .col3 {
    margin: 2px 0;
  }
  .mv .col4 {
    margin: 4px 0;
  }

  .ourteam .col5 {
    margin: 30px 0;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
  }
  .ourteam .col5 img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }

  .piccard {
    padding: 20px;
    padding-bottom: 50px;
  }
}
</style>