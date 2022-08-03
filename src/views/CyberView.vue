<template>
  <div class="main-body">
    <h2>Cyber security</h2>
    <div class="image">
      <img src="../assets/cyber.jpg" alt="" />
    </div>
    <div class="button">
      <button class="active">Overview</button>
      <button>Curriculum</button>
      <button>Reviews</button>
    </div>

    <h3>Long & big title</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus
      fugit minus earum cumque consequatur voluptate tempore debitis quam!
      Laborum odit minima veniam ea a sunt distinctio inventore debitis
      recusandae dolor, doloremque asperiores quod eligendi nulla porro
      officiis, unde incidunt itaque! Quaerat, asperiores maxime consequuntur
      nulla esse voluptatem harum magni illo! Officiis eaque natus sequi? Illum,
      id voluptas ipsa vero aliquam unde numquam necessitatibus autem sunt nisi
      placeat assumenda nihil ullam recusandae beatae culpa? Illum, eum vitae
      excepturi aut ex eligendi aliquam eos sunt accusantium ea nam ab deserunt
      sapiente cum, quaerat, facere maiores quos minus aperiam. Aspernatur, eum
      placeat?
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus
      fugit minus earum cumque consequatur voluptate tempore debitis quam!
      Laborum odit minima veniam ea a sunt distinctio inventore debitis
      recusandae dolor, doloremque asperiores quod eligendi nulla porro
      officiis, unde incidunt itaque! Quaerat, asperiores maxime consequuntur
      nulla esse voluptatem harum magni illo! Officiis eaque natus sequi? Illum,
      id voluptas ipsa vero aliquam unde numquam necessitatibus autem sunt nisi
      placeat assumenda nihil ullam recusandae beatae culpa? Illum, eum vitae
      excepturi aut ex eligendi aliquam eos sunt accusantium ea nam ab deserunt
      sapiente cum, quaerat, facere maiores quos minus aperiam. Aspernatur, eum
      placeat?
    </p>
    <br />
    <div class="container">
      <h3>Interested in this courses? Send us an email to register.</h3>
      <div class="name">
        <div>
          <p>First name</p>
          <input type="text" placeholder="Bismark" />
        </div>
        <div>
          <p>Last name</p>
          <input type="text" placeholder="Agyen" />
        </div>
      </div>
      <div>
        <p>Your Email address</p>
        <input type="text" placeholder="eg: liz@gmail.com" />
      </div>
      <div>
        <p>Which Course do you want to study</p>
        <input type="text" placeholder="" /><i class="fa fa-chevron-down"></i>
      </div>
      <div>
        <p>Type your message</p>
        <input type="text" placeholder="" />
      </div>
      <div>
        <a href="#" class="btn">Submit</a>
      </div>
    </div>
    <div class="cards">
      <div class="arrow">
        <a href=""><i class="fa fa-chevron-left"></i></a>
      </div>
      <div class="card">
        <i class="fa fa-"></i>
        <img src="../assets/office.png" alt="Avatar" style="width: 100%" />
        <div class="container">
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" class="btn">See Profile</a>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/ladys.webp" alt="Avatar" style="width: 100%" />
        <div class="container">
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" class="btn">See Profile</a>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/ursla.jpg" alt="Avatar" />
        <div class="container">
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" class="btn">See Profile</a>
          </div>
        </div>
      </div>
      <div class="arrow">
        <a href=""><i class="fa fa-chevron-right"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-body {
  overflow-x: hidden;
  padding: 15rem 10rem 1rem 10rem;
}

.image img {
  object-fit: cover;
  object-position: center;
  width: 70%;
  margin-left: 15rem;
  overflow: hidden;
  height: 500px;
  border-radius: 10px;
}
.button {
  display: flex;
  margin: 20px;
}

button {
  border: none;
  border-radius: 20px;
  height: 40px;
  width: 120px;
  margin: 0 50px;
}

.active {
  background: #652e89;
  color: #ffc527;
}

button:hover {
  background-color: #652e89;
  color: #ffc527;
  transition: 0.3s;
}

/* form */
.container div {
  margin: 30px 0 10px 0;
}
.name {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

input {
  border: 0;
  border-bottom: 1px solid;
  width: 40rem;
}
input::placeholder {
  color: rgba(128, 128, 128, 0.4);
}

.btn {
  background-color: #652e89;
  color: #ffc527;
  width: 100px;
}

.btn:hover {
  background-color: #ffc527;
  color: #652e89;
}
/* end */

.cards {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 5px 0;
}

.card {
  width: 350px;
  padding-bottom: 3rem;
  overflow: hidden;
  background-color: rgb(218, 211, 211);
  border-radius: 10px;
}

.card img {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  margin: 0;
  align-items: center;
}

.arrow {
  font-size: 24px;
  margin: 130px 0 0 0;
}

@media only screen and (max-width: 1280px) {
  .main-body {
    padding: 15rem 5rem 1rem 5rem;
  }
  .button {
    justify-content: center;
  }
  .cards {
    gap: 10px;
  }
}
@media only screen and (max-width: 992px) {
  .image img {
    width: 100%;
    margin-left: 0;
  }
  .card {
    width: 280px;
  }
  .cards {
    gap: 5px;
  }
  input {
    width: 30rem;
  }
}
@media (max-width: 600px) {
  .image img {
    margin-left: 0;
    height: 250px;
    width: 100%;
  }
  button {
    margin: 1px;
  }
  .button {
    margin: 4px;
  }
  .main-body {
    padding: 15rem 1rem 1rem 1rem;
  }

  .cards {
    justify-content: center;
    flex-direction: column;
    margin-left: 3rem;
    gap: 20px;
    margin-top: 1px !important;
  }
  .fa-chevron-right,
  .fa-chevron-left {
    display: none;
  }

  .container {
    margin-bottom: 1px;
  }
  .container h3 {
    font-size: 18px;
  }
  .container div {
    margin: 30px 0 10px 0;
    align-items: center;
  }

  input::placeholder {
    font-size: 12px;
    color: rgba(128, 128, 128, 0.4);
  }
  .fa-chevron-down {
    font-size: 10px;
  }
  /* arrow section */
  .arrow {
    margin: 0;
    padding: 0;
  }
}
@media (max-width: 360px) {
.cards {
margin-left: 7px;
}
input {
  width: 25rem;
}
}
</style>
