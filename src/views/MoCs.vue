<template>
  <div id="main-body" class="main-body">
    <div class="Moc-body">
      <h2>Minister/MoCD's Corner</h2>
      <hr />
      <div class="MoC-content">
        <div class="Mocimg">
          <img src="../assets/min.jpg" alt="" />
        </div>
        <div class="moccontent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam
            id in nihil deleniti! Eaque, doloribus. <br /><br />
            Inventore earum unde veritatis qui dicta reprehenderit, modi
            molestiae perspiciatis, id eveniet ducimus delectus, ratione aperiam
            architecto quaerat ex nesciunt expedita possimus cum libero!
            Perspiciatis delectus, harum sunt adipisci numquam sed suscipit,
            doloremque quis veniam sit ea reiciendis nulla maxime tenetur optio?
            Perferendis delectus odio ad ex facilis quaerat eos illum fugit,
            aspernatur veritatis porro adipisci similique dolorum iste nihil
            assumenda quam cumque obcaecati at consectetur et. <br /><br />
            Dolores nostrum exercitationem aut tempora a, odio voluptates!
            Consectetur nesciunt molestiae sequi exercitationem repudiandae quos
            odit, reprehenderit animi? Tempora tenetur nisi sunt, repellendus
            minima voluptates dolore eveniet maiores animi labore. Aliquid
            corrupti deserunt velit mollitia blanditiis illo, eligendi deleniti
            ipsum. Sit, fugit. <br /><br />
            Nulla cum natus consequuntur ipsum unde libero aperiam reiciendis
            sequi numquam omnis nemo itaque dicta veritatis deserunt, a voluptas
            maxime ea expedita vel reprehenderit magnam.
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam id
        in nihil deleniti! Eaque, doloribus. <br /><br />
        Inventore earum unde veritatis qui dicta reprehenderit, modi molestiae
        perspiciatis, id eveniet ducimus delectus, ratione aperiam architecto
        quaerat ex nesciunt expedita possimus cum libero! Perspiciatis delectus,
        harum sunt adipisci numquam sed suscipit, doloremque quis veniam sit ea
        reiciendis nulla maxime tenetur optio? Perferendis delectus odio ad ex
        facilis quaerat eos illum fugit, aspernatur veritatis porro adipisci
        similique dolorum iste nihil assumenda quam cumque obcaecati at
        consectetur et. <br /><br />
        Dolores nostrum exercitationem aut tempora a, odio voluptates!
        Consectetur nesciunt molestiae sequi exercitationem repudiandae quos
        odit, reprehenderit animi? Tempora tenetur nisi sunt, repellendus minima
        voluptates dolore eveniet maiores animi labore. Aliquid corrupti
        deserunt velit mollitia blanditiis illo, eligendi deleniti ipsum. Sit,
        fugit. <br /><br />
        Nulla cum natus consequuntur ipsum unde libero aperiam reiciendis sequi
        numquam omnis nemo itaque dicta veritatis deserunt, a voluptas maxime ea
        expedita vel reprehenderit magnam.
      </p>
    </div>
  </div>
  <div class="empower mb-5">
    <div class="left">
      <h3>Empowering Girls & Women In Cyber Security</h3>
      <p style="text-align: justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. <br />Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <img src="../assets/Girls-in-ICT-North-East.jpg" alt="" />
  </div>
</template>

<style scoped>
.main-body {
  overflow: hidden;
  padding: 15rem 10rem 0 10rem;
}
.MoC-content {
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
}
.mocimg {
  width: 50%;
  margin-right: 10rem;
  object-fit: cover;
  object-position: center;
}
.MoC-content img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.moccontent {
  padding: 0 0 0 3rem;
}

.Moc-body p {
  text-align: left;
}

.empower {
  background-color: #fdd5ef;
  display: flex;
  padding: 8rem 16rem;
  align-content: center;
}

.empower .left {
  padding: 0 3rem 0 0;
}

.empower img {
  width: 500px;
}
@media only screen and (max-width: 1200px) {
  .main-body {
    margin-left: 0;
    padding: 15rem 10px 10px 10px;
  }
  .MoC-content {
    flex-wrap: wrap;
    justify-content: center;
  }

  .MoC-content img {
    width: 70%;
  }
  .Moc-body p {
    text-align: center;
  }

  .empower {
    grid-template-columns: 100%;
  }
  .empower {
    flex-wrap: wrap;
  }
  .empower img {
    width: 100%;
  }
}
@media only screen and (max-width: 600px) {
  .empower {
    padding: 10px;
  }
  .MoC-content p {
    text-align: justify;
  }
}
</style>
