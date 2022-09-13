<template>
  <div class="main-body">
    <h1>Mentor</h1>
    <div class="row">
      <div class="col-sm-3">
        <img src="../../assets/office.png" alt="Avatar" />
        <div class="container">
          <h4><b>Matilda Doe</b></h4>
          <p>System analyst</p>
          <!-- <p class="experience">15+ years experience in <br> Engineering and Leadership </p> -->
          <p>Category:</p>
          <p class="Category">Primary|SHS|Tertiary</p>
          <p>Contact Info.:</p>
          <a href="">+233 2404 444 24 </a>
          <br /><a href=""></a>
          <a href=""><i class="fa fa-map-marker"></i> - Accra-Ghana</a>
        </div>
      </div>
      <div class="col-sm-9">
        <h2>Bio</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
          iure officia qui architecto deleniti facere pariatur, sapiente
          possimus dolor dolorum ullam eaque aspernatur obcaecati? Iste eveniet,
          voluptatum optio quam sint doloremque voluptatibus vero natus velit
          temporibus, reprehenderit, repellendus ea ipsam corporis voluptates
          asperiores! Tempora, cum odit alias dignissimos quia id perferendis
          voluptas, ea ullam velit molestias, autem dolores blanditiis deserunt
          tenetur quasi. Maiores quos velit corporis, at quaerat nisi tenetur
          nam libero veritatis enim, ipsa laboriosam. Quis cumque temporibus
          ullam dolorum et reiciendis quasi, vel, officiis atque maxime, sit
          labore nostrum soluta tenetur ea! Nam recusandae dicta totam porro
          magni debitis quas voluptatum unde temporibus tempore necessitatibus
          reiciendis, ullam natus est, eos tenetur impedit repellat voluptas
          neque maiores repudiandae ipsum doloremque amet cupiditate. Corrupti
          deserunt voluptas iure dignissimos ex delectus illo distinctio totam
          cupiditate. Ut dignissimos ea dolorem voluptatibus iure deleniti
          animi, sint blanditiis expedita provident tenetur id assumenda
          molestias beatae exercitationem eaque cupiditate! Recusandae,
          voluptatum. Commodi sed eos odit id voluptas cupiditate a dolore, vel
          perspiciatis ab, cum veritatis, quo voluptates. Ipsa tempora esse
          voluptatum, repudiandae commodi a quas ab tempore ad reiciendis,
          molestias dolores. Illo voluptates provident quo facere dolorem enim
          quidem aliquid, ipsa, voluptate quos corporis unde.
        </p>
        <br />
        <div class="contribution">
          <div class="content">
            <div>
              <h2>Contributions</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <hr class="hr" />
            <div class="content2">
              <h2>Skills</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <!-- <div class="content2">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div> -->
          </div>
        </div>
        <br />
        <div>
          <h2>Comments</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex et
            minus quos maiores praesentium dolorem eaque fugit vel ea eos rem
            sed quam, itaque dicta doloremque sint nisi voluptatum voluptates
            tenetur veritatis? Animi, at totam nihil accusantium aut
            consequuntur saepe reiciendis ipsam natus maxime recusandae modi
            quas, eum veritatis.
          </p>
        </div>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          cumque beatae sit explicabo fugiat doloribus molestiae quis magni nam
          itaque blanditiis eos minima, cum laudantium mollitia rem? Quod quo
          error similique mollitia debitis explicabo, maxime rem recusandae
          perferendis dolores impedit ad id saepe? Repellat aliquam similique
          ullam totam veniam vel ipsum velit est, accusamus porro illo fugit.
          Laboriosam quia facilis quam unde iure architecto cum exercitationem
          asperiores laborum nisi autem itaque repellat nihil sapiente quod
          blanditiis nobis reprehenderit officia accusamus quisquam error ut,
          reiciendis esse a. Harum, asperiores? Possimus quidem cumque eligendi
          corrupti optio molestias expedita cupiditate, a deleniti voluptatum.
        </p>
        <br />
      </div>
    </div>
  </div>
  <div class="jumbotron">
    <h2>Mentors</h2>
    <div class="sponsors">
      <div class="cards">
        <div class="card">
          <img src="../../assets/lady.jpg" alt="Avatar" />
          <div class="container">
            <a href=""
              ><h4><b>Jane Doe</b></h4></a
            >
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/ladys.webp" alt="Avatar" />
          <div class="container">
            <a href=""
              ><h4><b>Jane Doe</b></h4></a
            >
            <p>Frontend Engineer</p>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/woman.webp" alt="Avatar" />
          <div class="container">
            <a href=""
              ><h4><b>Jane Doe</b></h4></a
            >
            <p>System Analyst</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-body {
  padding: 15rem 10rem 1rem 10rem;
  overflow: hidden;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  padding-top: 3rem;
  width: 200px;
  text-align: center;
  /* height: 100%; */
}

.card img,
.col-sm-3 img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.col-sm-3  {
text-align: center;
}
.card h4 {
  color: #652e89;
}
.card h4:hover {
  color: #ffc527;
  transition: 0.3s;
  text-decoration: none;
}
.contribution {
  text-align: center;
}

.contribution .content {
  display: flex;
  justify-content: space-between;
}
/* .content2 {
  border-left: 1px solid grey;
} */
.jumbotron {
  margin-bottom: 0;
  background-color: whitesmoke;
}

.jumbotron h2 {
  margin: 0 0 0 100px;
  padding: 10px 0 0 0;
}
.cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 60%;
  margin: auto;
  text-align: center;
}

.container .Category,
.container a {
  color: #652e89;
}
.experience,
.hr {
  margin-top: 0;
  border: 1px solid black;
  height: 200px;
}

@media only screen and (max-width: 1115px) {
  .main-body {
    margin-left: 0;
    padding: 15rem 7rem 1rem 7rem;
  }
  .row {
    flex-wrap: wrap;
  }
}

@media only screen and (max-width: 992px) {
  .main-body {
    padding: 15rem 4rem 1rem 4rem;
  }
  .row {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .main-body {
    padding: 15rem 2rem 1rem 2rem;
  }
  .row {
    justify-content: center;
  }
  .col-sm-9 p {
    text-align: justify;
  }

  .cards {
    justify-content: center;
    text-align: center;
  }
  /* start contribution */
  .contribution .content {
    flex-direction: column;
  }
  .hr {
    display: none;
  }
  /* end cntribution */
}
</style>