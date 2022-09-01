<template>
  <div class="partners-body">
    <div class="partners">
      <h2>Our Partners</h2>
      <div class="jumbotron">
        <div
          id="largeCarousel"
          class="carousel slide largeScreens"
          data-ride="carousel"
        >
          <!-- Carousel Indicators -->
          <ol class="carousel-indicators">
            <li
              data-target="#largeCarousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#largeCarousel" data-slide-to="1"></li>
            <li data-target="#largeCarousel" data-slide-to="2"></li>
          </ol>
          <!-- flex carousel items-->
          <div class="carousel-inner">
            <div class="item active row">
              <div class="col-sm-2"></div>
              <div class="col-sm-3">
                <img src="../assets/moc_logo_2.jpg" alt="Los Angeles" />
              </div>
              <div class="col-sm-3">
                <img class="nita" src="../assets/nita-logo.png" alt="Chicago" />
              </div>
              <div class="col-sm-3">
                <img src="../assets/gi-kace-logo.png" alt="New york" />
              </div>
              <div class="col-sm-1"></div>
            </div>
            <div class="item row">
              <div class="col-sm-2"></div>
              <div class="col-sm-3">
                <img src="../assets/moc_logo_2.jpg" alt="Los Angeles" />
              </div>
              <div class="col-sm-3">
                <img class="nita" src="../assets/nita-logo.png" alt="Chicago" />
              </div>
              <div class="col-sm-3">
                <img src="../assets/gi-kace-logo.png" alt="New york" />
              </div>
              <div class="col-sm-1"></div>
            </div>
            <div class="item row">
              <div class="col-sm-2"></div>
              <div class="col-sm-3">
                <img src="../assets/moc_logo_2.jpg" alt="Los Angeles" />
              </div>
              <div class="col-sm-3">
                <img class="nita" src="../assets/nita-logo.png" alt="Chicago" />
              </div>
              <div class="col-sm-3">
                <img src="../assets/gi-kace-logo.png" alt="New york" />
              </div>
              <div class="col-sm-1"></div>
            </div>
          </div>
          <a
            class="left carousel-control"
            href="#largeCarousel"
            data-slide="prev"
          >
            <span class="glyphicon glyphicon-chevron-left left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#largeCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <!-- small screens -->
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="../assets/moc_logo_2.jpg" alt="Los Angeles" />
            </div>

            <div class="item">
              <img src="../assets/nita-logo.png" alt="Chicago" />
            </div>

            <div class="item">
              <img src="../assets/gi-kace-logo.png" alt="New york" />
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partners-body {
  padding: 4rem 10rem;
}
.jumbotron {
  background-color: white;
  padding-bottom: 5px;
  margin-bottom: 0;
}
.row {
  justify-content: center;
}
#myCarousel {
  display: none;
}

#largeCarousel .carousel-inner img {
  width: 60%;
}
.nita {
  height: 60px;
}

.carousel-control.right,
.carousel-control.left {
  background-color: white;
  background-image: none;
  color: #652e89;
}
.partners {
  text-align: center;
}

@media screen and (max-width: 992px) {
  #largeCarousel .carousel-inner img {
    width: 70%;
  }
  .partners-body {
    padding: 4rem 5rem;
  }
  .nita {
    height: 45px;
  }
}

@media (max-width: 768px) {
  #largeCarousel {
    display: none;
  }
  .partners-body {
    padding: 4rem 0;
  }
  #myCarousel {
    display: flex;
  }

  #myCarousel .carousel-inner {
    padding-left: 10rem;
  }
  #myCarousel .carousel-inner img {
    width: 70%;
    height: 80px;
  }
}
</style>