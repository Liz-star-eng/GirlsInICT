<template>
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
            accusantium consequatur natus repudiandae consequuntur praesentium!
            Iste architecto dolorum mollitia maiores modi ducimus facere!

            <br /><br /><br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            reprehenderit cupiditate quod provident, perferendis a repellat,
            accusantium consequatur natus repudiandae consequuntur praesentium!
            Iste architecto dolorum mollitia maiores modi ducimus facere!. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Odit
            reprehenderit cupiditate quod provident, perferendis a repellat,
            accusantium consequatur natus repudiandae consequuntur praesentium!
            Iste architecto dolorum mollitia maiores modi ducimus facere! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Odit
            reprehenderit cupiditate quod provident, perferendis a repellat,
            accusantium consequatur natus repudiandae consequuntur praesentium!
            Iste architecto dolorum mollitia maiores modi ducimus facere!
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
              praesentium! Iste architecto dolorum mollitia maiores modi ducimus
              facere!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              reprehenderit cupiditate quod provident, perferendis a repellat,
              accusantium consequatur natus repudiandae consequuntur
              praesentium! Iste architecto dolorum mollitia maiores modi ducimus
              facere!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              reprehenderit cupiditate quod provident, perferendis a repellat,
              accusantium consequatur natus repudiandae consequuntur
              praesentium! Iste architecto dolorum mollitia maiores modi ducimus
              facere!
            </p>
          </div>
          <div class="col4">
            <h1>Our Vission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              reprehenderit cupiditate quod provident, perferendis a repellat,
              accusantium consequatur natus repudiandae consequuntur
              praesentium! Iste architecto dolorum mollitia maiores modi ducimus
              facere!
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
          <div>
            
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <section>
    <div class="ourpartner">
      <div class="container">
        <div class="row">
          <div class="col6">
            <h1>Our Partners</h1>
            <p>put the partner carousel logo here</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
}
.row .col1 {
  margin: 50px 0;
  padding-right: 50px;
  flex-basis: 50%;
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
  margin: 50px 0;
}
.ourteamtitle h1 {
  text-align: center;
  
}
.ourteam .col5 {
  width: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
}

.piccard {
  padding-right: 100px;
  justify-content: center;
}

.col5 p {
  color: rgb(100, 100, 100);
  margin-top: -10px;
}
.ourteam .col5 img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.ourpartner {
  margin-bottom: 50px;
  background-color: rgba(250, 235, 215, 0.095);
  padding: 100px 0;
}
@media only screen and (max-width: 600px) {
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
