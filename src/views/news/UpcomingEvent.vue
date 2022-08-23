<template>
  <div id="main-body" class="main-body">
    <div class="Events">
      <h3><strong>Upcoming Events</strong></h3>
      <hr />
      <div class="eventContent">
        <div><img src="../../assets/Girls-in-ICT-Day.jpg" alt="" /></div>
        <div class="textContent">
          <h4>
            Splunk 101 Hands-on Workshop <br />
            -infosec Basics
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quo voluptatibus aperiam optio est, ut maxime voluptate eaque
            suscipit possimus velit alias sit dolorum quasi cupiditate qui
            aliquam excepturi perspiciatis nisi. Sit est perspiciatis, labore
            earum impedit in consequatur excepturi non cupiditate blanditiis ut
            corrupti commodi distinctio. Fugit, suscipit ut!
          </p>
          <br />
          <div class="symbol">
            <p class="symbol-text">
              <i class="fa fa-clock-o"></i> text goes here
            </p>
            <a href=""
              ><button>Register <i class="fa fa-long-arrow-right"></i></button
            ></a>
          </div>
        </div>
      </div>
      <div class="eventContent">
        <div><img src="../../assets/Girls-in-ICT-Day.jpg" alt="" /></div>
        <div class="textContent">
          <h4>
            Splunk 101 Hands-on Workshop <br />
            -infosec Basics
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quo voluptatibus aperiam optio est, ut maxime voluptate eaque
            suscipit possimus velit alias sit dolorum quasi cupiditate qui
            aliquam excepturi perspiciatis nisi. Sit est perspiciatis, labore
            earum impedit in consequatur excepturi non cupiditate blanditiis ut
            corrupti commodi distinctio. Fugit, suscipit ut!
          </p>
          <br />
          <div class="symbol">
            <p class="symbol-text">
              <i class="fa fa-clock-o"></i> text goes here
            </p>
            <a href=""
              ><button>Register <i class="fa fa-long-arrow-right"></i></button
            ></a>
          </div>
        </div>
      </div>
      <div class="eventContent">
        <div><img src="../../assets/Girls-in-ICT-Day.jpg" alt="" /></div>
        <div class="textContent">
          <h4>
            Splunk 101 Hands-on Workshop <br />
            -infosec Basics
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quo voluptatibus aperiam optio est, ut maxime voluptate eaque
            suscipit possimus velit alias sit dolorum quasi cupiditate qui
            aliquam excepturi perspiciatis nisi. Sit est perspiciatis, labore
            earum impedit in consequatur excepturi non cupiditate blanditiis ut
            corrupti commodi distinctio. Fugit, suscipit ut!
          </p>
          <br />
          <div class="symbol">
            <p class="symbol-text">
              <i class="fa fa-clock-o"></i> text goes here
            </p>
            <a href=""
              ><button>Register <i class="fa fa-long-arrow-right"></i></button
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="empower mb-5">
    <div class="left">
      <h3>Empowering Girls & Women In ICT</h3>
      <p style="text-align: justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. <br />Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <img src="../../assets/Girls-in-ICT-North-East.jpg" alt="" />
  </div>
</template>

<style scoped>
.main-body {
  padding: 15rem 10rem 0 10rem;
  overflow: hidden;
}

.Events {
  display: block;
  margin: 20px;
}

.eventContent {
  display: flex;
  border-radius: 5px;
  background-color: whitesmoke;
  margin: 20px;
  padding: 10px 10px 3px 10px;
}

.eventContent .textContent {
  padding: 3rem;
}

.eventContent img {
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  margin: 0 30px 0 0;
}

.eventContent img:hover {
  border-radius: 5px;
  filter: brightness(0.5);
  transition: 0.4s ease;
}

.symbol {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 2.5rem;
}

.symbol-text {
  margin-right: 200px;
}

.symbol button {
  border-radius: 5px;
  color: #6f36bb;
  padding: 5px;
  border: 1px solid #6f36bb;
}
a:hover {
  background-color: #6f36bb;
}

.symbol .fa {
  color: #6f36bb;
}
/* container empowering women */
.container {
  padding: 0 6rem;
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

.col-sm-4 img {
  border-radius: 10px;
  width: 100%;
}
@media only screen and (max-width: 1033px) {
  .main-body {
    margin-left: 0;
  }
}
@media only screen and (max-width: 1200px) {
  .eventContent {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 1000px) {
  .empower {
    flex-wrap: wrap;
  }
}

@media only screen and (max-width: 992px) {
  .main-body {
    padding: 15rem 1px 0 1px;
  }
  .empower {
    padding: 2rem 5rem;
    align-content: justify;
    margin-left: 0 !important;
  }
  .empower img {
    width: 400px;
  }
}

@media (max-width: 600px) {
  .main-body {
    padding: 15rem 1rem 0 1rem;
  }
  .Events {
    margin: 0 0 50px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .eventContent {
    margin: 0;
  }
  .eventContent .textContent {
    padding: 1rem;
  }
  .textContent {
    text-align: justify;
  }
  .symbol {
    padding: 5px 1px;
    flex-wrap: nowrap;
  }

  .symbol-text {
    margin-right: 0;
  }
  .eventContent img {
    width: 100%;
  }
  .empower {
    padding: 20px;
  }
  .empower img {
    width: 100%;
  }
}
</style>