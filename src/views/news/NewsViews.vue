<template>
  <div id="main-body" class="main-body">
    <!-- <span class="right-sidebar" id="span" onclick="openNav()"
             ><i>show Right Sidebar <<< </i></span
                 > -->
    <h2>Past Events</h2>

    <div class="grid-container cards">
      <div class="card">
        <img
          class="card-img-top"
          src="../../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Girls in ICT Event in Bolgatanga</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="/news/newsdetails" class="link"
            >View Details</router-link
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
          <h4 class="card-title">Girls in ICT Event in Bono Ahafo</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="/news/newsdetails" class="link"
            >View Details</router-link
          >
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Girls in ICT Event in Eatern Region</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="/news/newsdetails" class="link"
            >View Details</router-link
          >
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Girls in ICT Event in Ashanti Region</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="/news/newsdetails" class="link"
            >View Details</router-link
          >
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Girls in ICT Event in Nothern Region</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="/news/newsdetails" class="link"
            >View Details</router-link
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
          <h4 class="card-title">Girls in ICT Event in Western Region</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="/news/newsdetails" class="link"
            >View Details</router-link
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
          <h4 class="card-title">Girls in ICT Event in Bolgatanga</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="/news/newsdetails" class="link"
            >View Details</router-link
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
          <h4 class="card-title">Girls in ICT Event in Bolgatanga</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="/news/newsdetails" class="link"
            >View Details</router-link
          >
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
        />
        <div class="card-body">
          <h4 class="card-title">Girls in ICT Event in Greater Accra</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="/news/newsdetails" class="link"
            >View Details</router-link
          >
        </div>
      </div>
    </div>
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
    <hr />
  </div>
</template>

<style scoped>
.main-body {
  padding: 15rem 10rem 1rem 10rem;
  justify-content: center;
  margin-bottom: 0;
  overflow: hidden;
}

.grid-container {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 40px;
  padding: 30px;
  margin: 0 0 0 50px;
}

.grid-container div {
  background-color: rgb(231, 221, 221);
  padding: 20px;
  border-radius: 10px;
}
.card img  {
  width: 100%;
}
.grid-container {
  border-radius: 10px;
  cursor: pointer;
  object-fit: cover;
}
.cards img:hover {
  transform: none !important;
  filter: 0;
  transition: 0.3s;
}

.link {
  color: #652e89;
}

.link:hover {
  color: #2d0b44;
  text-decoration: none;
  cursor: pointer;
}

.cards .card h4,
.card-text {
  text-align: left;
  margin-left: 0;
}

.navigation {
  justify-content: space-around;
  text-align: center;
}
.navigation a {
  margin: 10px;
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 5px;
  color: #652e89;
}

.navigation a:hover {
  background-color: #652e89;
  color: #ffc527;
}
@media (max-width: 992px) {
  .main-body {
    padding: 15rem 2rem 1rem 1rem;
  }
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}
@media (max-width: 600px) {
  /* .main-body {
  padding: 15rem 1px 1px 1px;
} */
  .grid-container {
    grid-template-columns: 100%;
    margin: 0;
  }

  .navigation a {
    margin: 5px;
  }
}
</style>