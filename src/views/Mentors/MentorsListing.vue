<template>
  <div class="main-body">
    <div class="hero"></div>
    <div class="mentors">
      <h2>Categories</h2>
      <div class="mentorsCategories">
        <button>Primary/JHS</button>
        <button>SHS</button>
        <button>Tertiary</button>
      </div>
    </div>
    <div class="sub-body">
      <h2>Mentors</h2>
      <p style="margin-left: 70px">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima
        qui odio, rem officia dolorum accusamus aut vel dicta esse.
      </p>
      <div class="grid-container">
        <div class="card">
          <img src="../../assets/office.png" alt="Avatar" />
          <div class="card-body">
            <router-link to="/Mentors/mentorsdetail"
              ><h4><b>Matilda Doe</b></h4></router-link
            >
            <p>Computer Analyst</p>
            <a href="/Mentors/mentorsdetail">View Profile</a>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/ladys.webp" alt="Avatar" />
          <div class="card-body">
            <router-link to="/Mentors/mentorsdetail"
              ><h4><b>Sara Antwi</b></h4></router-link
            >
            <p>Systems Analyst</p>
            <a href="/Mentors/mentorsdetail">View Profile</a>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/lady.jpg" alt="Avatar" />
          <div class="card-body">
            <router-link to="/Mentors/mentorsdetail"
              ><h4><b>Rebecca Agyapong</b></h4></router-link
            >
            <p>Computer Application Analyst</p>
            <a href="/Mentors/mentorsdetail">View Profile</a>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/lady.jpg" alt="Avatar" />
          <div class="card-body">
            <router-link to="/Mentors/directorydetail"
              ><h4><b>Elizabeth Appiah</b></h4></router-link
            >
            <p>ICT Business Analyst</p>
            <a href="/Mentors/mentorsdetail">View Profile</a>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/office.png" alt="Avatar" />
          <div class="card-body">
            <router-link to="/Mentors/directorydetail"
              ><h4><b>Appiah Juliana</b></h4></router-link
            >
            <p>UI/UX Designer</p>
            <a href="/Mentors/mentorsdetail">View Profile</a>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/lady.jpg" alt="Avatar" />
          <div class="card-body">
            <router-link to="/Mentors/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>Cyber Security Expert</p>
            <a href="/Mentors/mentorsdetail">View Profile</a>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/office.png" alt="Avatar" />
          <div class="card-body">
            <router-link to="/Mentors/directorydetail"
              ><h4><b>LadyMartha Annoba</b></h4></router-link
            >
            <p>ux/ui Designer</p>
            <a href="/Mentors/mentorsdetail">View Profile</a>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/lady.jpg" alt="Avatar" />
          <div class="card-body">
            <router-link to="/Mentors/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>system Analysis</p>
            <a href="/Mentors/mentorsdetail">View Profile</a>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/office.png" alt="Avatar" />
          <div class="card-body">
            <router-link to="/Mentors/directorydetail"
              ><h4><b>Matilda Teye</b></h4></router-link
            >
            <p>internet security analyst</p>
            <a href="/Mentors/mentorsdetail">View Profile</a>
          </div>
        </div>
      </div>
      <div class="arrow">
        <a href="listings.html"><i class="fa fa-arrow-left"></i></a>
        <a href="listings.html"><i class="fa fa-arrow-right"></i></a>
      </div>
      <hr class="hr" />
    </div>
  </div>
</template>

<style scoped>
.main-body {
  padding: 15rem 15rem 1rem 15rem;
  overflow: hidden;
}
.mentorsCategories {
  display: flex;
  /* justify-content: space-around; */
}
.mentorsCategories button {
  width: 15%;
  height: 40px;
  margin: 0 1rem;
  background-color: #420a68;
  color: #ffc527;
  border: none;
  border-radius: 10px;
}
.mentorsCategories button:hover {
  background-color: #7211b3;
  transition: 0.3s;
}
.sub-body {
  padding: 0 3rem;
}
.grid-container {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 40px;
  padding: 30px;
  margin: 0 0 0 50px;
}
.card {
  text-align: center;
}
.card-body a,
.card h4 {
  color: #652e89;
}
.card img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.card-body a:hover {
  color: #ffc527;
  text-decoration: none;
  transition: 0.3s;
}

.arrow {
  text-align: center;
}
.arrow a {
  background-color: whitesmoke;
  color: black;
  border-radius: 50px;
  font-size: 16px;
  margin: 50px;
  padding: 10px;
}

.arrow a:hover {
  background-color: #420a68;
  color: #ffc527;
}
.jumbotron {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #8f32ce;
  color: white;
}
.partners button {
  margin-left: 20px;
  border: none;
  border-radius: 10px;
  color: #652e89;
  background-color: #ffc527;
  padding: 10px;
}

.partners button:hover {
  transition: 0.1s;
  background-color: #420a68;
  color: #ffc527;
}

.row-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 5px 0;
}

.links img {
  height: 50px;
  object-fit: cover;
  width: auto;
}
@media only screen and (max-width: 1033px) {
  .main-body {
    margin-left: 0;
  }
}

@media only screen and (max-width: 992px) {
  .main-body {
    padding: 15rem 6rem 1px 6rem;
  }
}
@media only screen and (max-width: 722px) {
  .main-body {
    padding: 15rem 2rem 1px 2rem;
  }
}

@media only screen and (max-width: 992px) {
  .grid-container {
    grid-template-columns: 50% 50%;
    margin: 0;
  }
}
@media only screen and (max-width: 600px) {
  .main-body {
    padding: 15rem 1rem 1rem 1rem !important;
  }

  .sub-body {
    padding: 0 !important;
  }

  .grid-container {
    grid-template-columns: 100%;
    margin: 0;
  }
}
</style>