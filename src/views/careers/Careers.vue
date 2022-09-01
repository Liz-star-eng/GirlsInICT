<template>
  <main>
    <div class="herobg">
      <h1>Career Profile</h1>
    </div>
    <div class="maincontent">
      <div class="content">
        <div class="sidenav">
          <h4>Degrees Required</h4>
          <input type="text" placeholder="filter here" class="search" />
          <button><i class="fa fa-search"></i></button>
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
                >Certified<wbr /> Information Security <br />Manager(CISM)
              </label>
            </div>
            <div class="inputs">
              <input
                type="checkbox"
                name="Certified Information Systems Security Professional (CISSP) Recommended"
              />
              <label
                for="Certified Information Systems Security Professional (CISSP) Recommended"
                >Certified<wbr />Information Systems <br />Security
                Professional(CISSP)
              </label>
            </div>
            <div class="inputs">
              <input type="checkbox" name="CompTIA Security + Recommended" />
              <label for="CompTIA Security + Recommended"
                >CompTIA <wbr />Security + Recommended</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Degree Not Required" />
              <label for="Degree Not Required"
                >Degree<wbr /> Not Required</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Doctorate Degree Required" />
              <label for="Doctorate Degree Required"
                >Doctorate Degree <wbr />Required</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Experience can supplement" />
              <label for="Experience can supplement"
                >Experience <wbr />can supplement</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="High School Diploma Required" />
              <label for="High School Diploma Required"
                >High <wbr />School Diploma<wbr /> Required</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Juris Doctorate Degree Required" />
              <label for="Juris Doctorate Degree Required"
                >Juris <wbr />Doctorate Degree<wbr /> Required</label
              >
            </div>
            <div class="inputs">
              <input type="checkbox" name="Master's Degree Required" />
              <label for="Master's Degree Required"
                >Master's Degree<wbr /> Required</label
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
                src="../../assets/Cybersecurity-Engineer-01.png"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Software Developer</a>
                <div class="field">
                  <div class="field-label">Type:</div>
                  <div class="field-item">Career</div>
                </div>
                <div class="field">
                  <div class="field-label">Degree required:</div>
                  <div class="field-item">Bachelor's Degree</div>
                </div>
                <div class="field">
                  <div class="field-label">Median Salary:</div>
                  <div class="field-item">$00.00</div>
                </div>
                <div class="field">
                  <div class="field-label">Job Demand:</div>
                  <div class="field-item"></div>
                </div>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../../assets/careers2.png"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Multi-Disciplined Language Analyst</a>
                <div class="field">
                  <div class="field-label">Type:</div>
                  <div class="field-item">Career</div>
                </div>
                <div class="field">
                  <div class="field-label">Degree required:</div>
                  <div class="field-item">Bachelor's Degree</div>
                </div>
                <div class="field">
                  <div class="field-label">Median Salary:</div>
                  <div class="field-item">$00.00</div>
                </div>
                <div class="field">
                  <div class="field-label">Job Demand:</div>
                  <div class="field-item"></div>
                </div>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../../assets/career3.png"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">IT Project Manager</a>
                <div class="field">
                  <div class="field-label">Type:</div>
                  <div class="field-item">Career</div>
                </div>
                <div class="field">
                  <div class="field-label">Degree required:</div>
                  <div class="field-item">Bachelor's Degree</div>
                </div>
                <div class="field">
                  <div class="field-label">Median Salary:</div>
                  <div class="field-item">$00.00</div>
                </div>
                <div class="field">
                  <div class="field-label">Job Demand:</div>
                  <div class="field-item"></div>
                </div>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../../assets/career3.png"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Information Systems Security Manager</a>
                <div class="field">
                  <div class="field-label">Type:</div>
                  <div class="field-item">Career</div>
                </div>
                <div class="field">
                  <div class="field-label">Degree required:</div>
                  <div class="field-item">Bachelor's Degree</div>
                </div>
                <div class="field">
                  <div class="field-label">Median Salary:</div>
                  <div class="field-item">$00.00</div>
                </div>
                <div class="field">
                  <div class="field-label">Job Demand:</div>
                  <div class="field-item"></div>
                </div>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../../assets/Cybersecurity-Engineer-01.png"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Security Engineer</a>
                <div class="field">
                  <div class="field-label">Type:</div>
                  <div class="field-item">Career</div>
                </div>
                <div class="field">
                  <div class="field-label">Degree required:</div>
                  <div class="field-item">Bachelor's Degree</div>
                </div>
                <div class="field">
                  <div class="field-label">Median Salary:</div>
                  <div class="field-item">$00.00</div>
                </div>
                <div class="field">
                  <div class="field-label">Job Demand:</div>
                  <div class="field-item"></div>
                </div>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../../assets/careers2.png"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Operator</a>
                <div class="field">
                  <div class="field-label">Type:</div>
                  <div class="field-item">Career</div>
                </div>
                <div class="field">
                  <div class="field-label">Degree required:</div>
                  <div class="field-item">Bachelor's Degree</div>
                </div>
                <div class="field">
                  <div class="field-label">Median Salary:</div>
                  <div class="field-item">$00.00</div>
                </div>
                <div class="field">
                  <div class="field-label">Job Demand:</div>
                  <div class="field-item"></div>
                </div>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../../assets/careers2.png"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Legal Advisor</a>
                <div class="field">
                  <div class="field-label">Type:</div>
                  <div class="field-item">Career</div>
                </div>
                <div class="field">
                  <div class="field-label">Degree required:</div>
                  <div class="field-item">Bachelor's Degree</div>
                </div>
                <div class="field">
                  <div class="field-label">Median Salary:</div>
                  <div class="field-item">$00.00</div>
                </div>
                <div class="field">
                  <div class="field-label">Job Demand:</div>
                  <div class="field-item"></div>
                </div>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../../assets/career3.png"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Forensics Expert</a>
                <div class="field">
                  <div class="field-label">Type:</div>
                  <div class="field-item">Career</div>
                </div>
                <div class="field">
                  <div class="field-label">Degree required:</div>
                  <div class="field-item">Bachelor's Degree</div>
                </div>
                <div class="field">
                  <div class="field-label">Median Salary:</div>
                  <div class="field-item">$00.00</div>
                </div>
                <div class="field">
                  <div class="field-label">Job Demand:</div>
                  <div class="field-item"></div>
                </div>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="../../assets/Cybersecurity-Engineer-01.png"
                alt="Card image"
              />
              <div class="card-body">
                <a class="card-title">Cyber Defense Incident Responder</a>
                <div class="field">
                  <div class="field-label">Type:</div>
                  <div class="field-item">Career</div>
                </div>
                <div class="field">
                  <div class="field-label">Degree required:</div>
                  <div class="field-item">Bachelor's Degree</div>
                </div>
                <div class="field">
                  <div class="field-label">Median Salary:</div>
                  <div class="field-item">$00.00</div>
                </div>
                <div class="field">
                  <div class="field-label">Job Demand:</div>
                  <div class="field-item"></div>
                </div>
                <router-link to="/academy/courseInfo" class="link"
                  >See Profile</router-link
                >
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
      </div>
    </div>
  </main>
</template>

<style scoped>
.maincontent {
  padding: 4rem 10rem 1rem 10rem;
}

.herobg {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4)
    ),
    url("../../assets/bg.avif");
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
  width: 20%;
  height: 100%;
}
.search {
  width: 200px;
  margin-left: 5px;
  padding: 0 2rem;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.search::placeholder {
  font-style: italic;
  color: #652e89;
}

.search,
button {
  height: 30px;
}

button {
  border: none;
  padding: 0 10px;
  color: white;
  background-color: #652e89;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
button:hover {
  background-color: #954cc5;
}
.inputs {
  display: flex;
  padding-top: 1rem;
}
.inputs:first-child {
  margin-top: 2rem;
}
label {
  vertical-align: text-top;
  word-wrap: break-word;
}
input {
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
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.card img {
  width: 100%;
}
.card-body {
  padding: 2rem 3rem 3rem 3rem;
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
/* card labels */
.field {
  display: flex;
  /* justify-content: space-between; */
  margin: auto;
  text-align: left;
}
.field-item {
  color: #2283d2;
  margin-left: 2.5rem;
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
  border-radius: 2px;
  padding: 5px;
  color: #652e89;
}
.navigation a:hover,
.navigation .active {
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