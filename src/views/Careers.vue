<template>
  <main>
    <div class="herobg">
      <h1>Career Profile</h1>
    </div>
    <div class="maincontent">
      <div class="content">
        <div class="sidenav">
          <h4>Degrees Required</h4>
          <form action="">
            <div class="inputs">
              <input type="checkbox" name="Associate's Degree Required" />
              <label for="Associate's Degree Required"
                >Associate's Degree Required</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Bachelor's Degree Required" />
              <label for="Bachelor's Degree Required"
                >Bachelor's Degree Required</label
              >
            </div>
            <div class="inputs">
              <input
                type="checkbox"
                name="Certified Information Security Manager (CISM) Recommended"
              />
              <label
                for="Certified Information Security Manager (CISM) Recommended"
                >Certified<wbr> Information Security Manager <wbr>(CISM)
              </label>
            </div>
            <div class="inputs">
              <input
                type="checkbox"
                name="Certified Information Systems Security Professional (CISSP) Recommended"
              />
              <label
                for="Certified Information Systems Security Professional (CISSP) Recommended"
                >Certified<wbr>Information Systems <wbr>Security Professional<wbr> (CISSP)
              </label>
            </div>
            <div class="inputs">
              <input type="checkbox" name="CompTIA Security + Recommended" />
              <label for="CompTIA Security + Recommended"
                >CompTIA <wbr>Security + Recommended</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Degree Not Required" />
              <label for="Degree Not Required">Degree<wbr> Not Required</label>
            </div>
            <div class="inputs">
              <input type="checkbox" name="Doctorate Degree Required" />
              <label for="Doctorate Degree Required"
                >Doctorate Degree <wbr>Required</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Experience can supplement" />
              <label for="Experience can supplement"
                >Experience <wbr>can supplement</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="High School Diploma Required" />
              <label for="High School Diploma Required"
                >High <wbr>School Diploma<wbr> Required</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Juris Doctorate Degree Required" />
              <label for="Juris Doctorate Degree Required"
                >Juris <wbr>Doctorate Degree<wbr> Required</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Master's Degree Required" />
              <label for="Master's Degree Required"
                >Master's Degree<wbr> Required</label
              >
            </div>
            <div>
            <label for=""></label>
            <select name="Sort" id="Sort">
              <option value="Newest to oldest">Newest to oldest</option>
              <option value="Oldest to Newest">Oldest to Newest</option>
            </select>
            </div>
          </form>
        </div>
        <div class="container">
          <div class="grid-container">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Girls-in-ICT-North-East.jpg"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Software Developer</a>
                <p class="card-text">
                  Type: <p clastyle="color: blue;">Careers</p>
                </p>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Girls-in-ICT-North-East.jpg"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Multi-Disciplined Language Analyst</a>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Girls-in-ICT-North-East.jpg"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">IT Project Manager</a>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Girls-in-ICT-North-East.jpg"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Information Systems Security Manager</a>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Girls-in-ICT-North-East.jpg"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Security Engineer</a>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Girls-in-ICT-North-East.jpg"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Operator</a>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Girls-in-ICT-North-East.jpg"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Legal Advisor</a>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Girls-in-ICT-North-East.jpg"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Forensics Expert</a>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Girls-in-ICT-North-East.jpg"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Defense Incident Responder</a>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="navigation">
            <a href="">Previous</a>
            <a class="active" href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">Next</a>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding-top: 14rem;
}
.maincontent {
  padding: 4rem 10rem 1rem 10rem;
}

.herobg {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4)
    ),
    url("../assets/bg.avif");
  height: 30vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
}

h1 {
  padding: 10rem 17rem;
  color: white;
  font-weight: bold;
}
.content {
  max-width: 95%;
  margin: auto;
  display: flex;
}
/* left side */
.sidenav {
  padding: 0;
  left: 0;
  width: 30%;
  height: 100%;
}

label {
  position: relative;
  vertical-align: text-top;
}
.inputs {
  width: auto;
  white-space: nowrap;
}
input {
  margin-top: 20px;
  width: 30px;
  height: 20px;
}
input:hover {
  cursor: pointer;
}
h2 {
  text-align: center;
  color: white;
  font-weight: bold;
}
select {
  margin: 50px;
  padding: 1rem 0.5rem;
  border-radius: 20px;
  color: #652e89;
  font-weight: bold;
}

/* end */
.grid-container {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 40px;
  padding: 30px;
  margin: 0 0 0 50px;
}
.card {
  background-color: whitesmoke;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.card img {
  width: 100%;
}
.card-body {
  padding: 2rem 3rem 15rem 3rem;
}
.card-title {
  font-size: 2rem;
  font-weight: bold;
  color: #652e89;
}
.card-title:hover {
  text-decoration: none;
   color: #652e89;
}
.card-text {
  margin-top: 2.5rem;
  display: flex;
}
.inputs:hover {
  background-color: whitesmoke;
  box-shadow: 0 2px 3px 1px rgb(214, 212, 212);
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
.navigation a:hover, .navigation .active {
  background-color: #652e89;
  color: #ffc527;
}
@media (max-width: 1300px) {
 .grid-container {
 grid-template-columns: 50% 50%;
 }
}
@media (max-width: 1120px) {
  .maincontent {
      padding: 4rem 5rem 1rem 5rem;
  }
  .sidenav {
      padding: 0;
      width: 100%;
  }
   .sidenav label {
    font-size: 2rem;
    margin-top: 0;
   }
 .content {
    flex-wrap: wrap;
  }
   .container {
    padding: 0;
    margin: 0;
  }
    .grid-container { 
        padding: 0;
        margin: 0;
    }
     .navigation {
    margin-top: 20px;
  }
}
@media (max-width: 600px) {
  .maincontent {
  padding: 4rem 2rem 1rem 2rem;
  overflow: hidden;
}
h1 {
  padding: 12rem 8rem;
}
  .sidenav {
      padding: 0;
      width: auto;
  }
  .sidenav label {
    font-size: 1.5rem;
  }

  /* grid items */
 
  .grid-container {
    width: 100%;
      grid-template-columns: 100%;
     
  }
  
}
</style>
