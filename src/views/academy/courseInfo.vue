<template>
  <section>
    <div class="titleHolder">
      <div class="container2">
        <div class="title">Course Title Goes Here</div>
      </div>
    </div>

    <div class="rw3">
      <div class="container2">
        <div class="row2">
          <div class="menus">
            <div class="menuHolder">
              <div class="innerContainer">
                <div class="menu">
                  <a href="/academy/primaryJhs">Primary/JHS</a>
                  <a href="/academy/Shs">SHS</a>
                  <a href="/academy/Tertiary" class="lst">Tertiary</a>
                </div>
              </div>
            </div>

            <div class="rc">
              <div class="container3">
                <h3>Related Courses</h3>
                <div class="similarCourses">
                  <div class="similarCourse">
                    <div class="innerContainer2">
                      <a href="">
                        <div class="bg-img1">
                          <h6>Course name here</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="similarCourse">
                    <div class="innerContainer2">
                      <a href="">
                        <div class="bg-img1">
                          <h6>Course name here</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="similarCourse">
                    <div class="innerContainer2">
                      <a href="">
                        <div class="bg-img1">
                          <h6>Course name here</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="main">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              ad ducimus quos, repellat voluptates odio illo perspiciatis
              debitis error neque itaque, eligendi magnam dolorem cumque
              assumenda eveniet eius ea modi aliquid explicabo eum minus?
              Suscipit natus impedit tempore in obcaecati, magnam animi illo
              dignissimos nihil labore modi aspernatur vero quo iure sint qui
              cupiditate ut molestiae laudantium repudiandae debitis?
              Accusantium possimus, neque omnis facere perspiciatis molestiae ut
              aperiam nesciunt soluta quaerat dolor doloribus, quis consequuntur
              dicta expedita culpa, nostrum amet? Non aspernatur dolorem est
              earum accusamus! Eos adipisci ad iusto laborum laudantium, amet
              quo consequuntur vitae impedit quaerat autem doloremque!
            </p>
            <br />
            <div class="tabs">
              <input type="radio" name="tabs" id="tabone" checked="checked" />
              <label for="tabone">Course content</label>
              <div class="tab">
                <h1>Tab One Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <input type="radio" name="tabs" id="tabtwo" />
              <label for="tabtwo">Requirements</label>
              <div class="tab">
                <h1>Tab Two Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <input type="radio" name="tabs" id="tabthree" />
              <label for="tabthree">Description</label>
              <div class="tab">
                <h1>Tab Three Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div class="innerContainer">
              <div class="regis">
                <h2>Register for a Course Now!</h2>
                <p>Kindly File the form below</p>
              </div>
              <form>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Abigail Teye"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="liz@gmail.com"
                />
                <select id="cars" name="cars">
                  <option class="drp" value="">*Select a Course*</option>
                  <option class="drp" value="">CyberSecurity</option>
                  <option class="drp" value="">Robotics</option>
                  <option class="drp" value="">Python Programming</option>
                </select>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-top: 15rem;
  padding-bottom: 8rem;
}

.container2 {
  padding: 0 10%;
}

.row2 {
  display: flex;
}
.titleHolder {
  display: flex;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(255, 255, 255, 0.001)
    ),
    url("../../assets/IMG_3288.jpg");
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

.menus {
  flex-basis: 30%;
  margin: -5rem;
  position: relative;
}

.menuHolder {
  padding-top: 5rem;
  background-color: antiquewhite;
  width: 300px;
  height: 300px;
}
.innerContainer {
  padding: 20px;
}
.innerContainer .menu {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.innerContainer .menu a {
  padding: 10px 15px;
  background-color: #652e89;
  margin: 10px;
  color: white;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.innerContainer .menu a:hover {
  background-color: white;
  color: #652e89;
  text-decoration: none;
  font-weight: bold;
}

.rc h3 {
  margin-top: 10rem;
  color: #652e89;
  padding-bottom: 10px;
}

.similarCourses {
  background-color: #c7c7c6;
  width: 300px;
  /* margin-top: 9rem; */
  padding: 2rem;
}
.container2 a {
  text-decoration: none;
}
.container2 a :hover {
  text-decoration: none;
}

.bg-img1 {
  margin-top: 3rem;
  display: flex;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(255, 255, 255, 0.001)
    ),
    url("../../assets/IMG_3288.jpg");
  height: 160px;
  width: 260px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
}
.bg-img1:hover {
  background-color: black;
  opacity: 80%;
  text-decoration: none;
}

.bg-img1 h6 {
  margin-top: 5rem;
  /* margin: 1rem 2rem; */
  padding: 2rem;
  color: white;
  font-size: 2rem;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.main {
  flex-basis: 70%;
  margin-top: 30px;
}

.message {
  width: 40%;
  height: 60px;
  padding: 0 0 0 10px;
}

input::placeholder {
  font-style: italic;
}
input {
  margin-top: 20px;
  width: 19%;
}
.input {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}

/* input:nth-child(2) {
  margin-left: 20px !important;
} */

button {
  background-color: #652e89;
  color: #ffc527;
  padding: 1rem;
  border-radius: 5px;
  border: none;
}

button:hover {
  background-color: #3c1655;
}

.break {
  border: 1px solid #652e89;
}

/**
 * Tabs
 */
.tabs {
  display: flex;
  flex-wrap: wrap;
}
.tabs label {
  order: 1;
  display: block;
  padding: 1rem 2rem;
  margin-right: 0.2rem;
  cursor: pointer;
  background: #652e89;
  color: #ffc527;
  font-weight: bold;
  transition: background ease 0.2s;
}
.tabs .tab {
  order: 99;
  flex-grow: 1;
  width: 100%;
  display: none;
  padding: 3rem;
  background: rgb(215, 215, 215);
  border: 1px solid;
  border-radius: 10px;
  border-color: rgb(238, 237, 237);
}
.tabs input[type="radio"] {
  display: none;
}
.tabs input[type="radio"]:checked + label {
  color: #652e89;
  background: #ffc527;
}
.tabs input[type="radio"]:checked + label + .tab {
  display: block;
}

.innerContainer {
  padding: 0 40px;
}
.regis {
  margin-top: 30px;
}

form {
  padding: 30px 0;
}

input,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input:focus {
  border: 2px solid#652e89;
}
.drp:hover {
  background: #652e89;
}

button {
  background-color: #652e89;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;
  margin: 4px 2px;
  cursor: pointer;
}
button:hover {
  color: #652e89;
  background-color: #ffc527;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  section {
    padding-top: 12rem;
    padding-bottom: 8rem;
  }

  .container3 {
    padding: 0 10%;
  }

  .row2 {
    flex-direction: column-reverse;
  }
  .menus {
    flex-basis: 100%;
    margin: 0;
    position: relative;
    padding: 0 50px;
  }
  .menuHolder {
    padding-top: 5rem;
    width: 100%;
    height: 300px;
  }

  .rc h3 {
    margin-top: 5rem;
  }

  .titleHolder {
    display: flex;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9),
        rgba(255, 255, 255, 0.001)
      ),
      url("../../assets/IMG_3288.jpg");
    height: 40vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .titleHolder .title {
    padding-top: 11rem;
    color: white;
    font-size: 2.5rem;
  }

  .bg-img1 {
    width: 100%;
  }
  .rc {
    width: 100%;
  }

  .similarCourses {
    width: 100%;
  }
  form {
    margin-bottom: 50px;
  }
}
@media only screen and (max-width: 992px) {
  section {
    padding-top: 12rem;
    padding-bottom: 8rem;
  }
  .container2 {
    padding: 0 5%;
  }
  .container3 {
    padding: 0 5%;
  }

  .row2 {
    flex-direction: column-reverse;
  }
  .menus {
    flex-basis: 100%;
    margin: 0;
    position: relative;
  }
  .menuHolder {
    padding-top: 5rem;
    width: 100%;
    height: 300px;
  }

  .title {
    padding-top: 10rem;
    color: white;
    font-size: 4rem;
  }
  .titleHolder {
    display: flex;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9),
        rgba(255, 255, 255, 0.001)
      ),
      url("../../assets/IMG_3288.jpg");
    height: 40vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .bg-img1 {
    width: 100%;
  }
  .rc {
    width: 100%;
  }
  .similarCourses {
    width: 100%;
  }
  form {
    margin-bottom: 50px;
  }
}

@media only screen and (max-width: 1280px) {
  section {
    padding-top: 12rem;
    padding-bottom: 8rem;
  }
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
@media only screen and (max-width: 1024px) {
  section {
    padding-top: 12rem;
    padding-bottom: 8rem;
  }
  .main {
    flex-basis: 60%;
    margin-top: 30px;
  }
}
</style>
