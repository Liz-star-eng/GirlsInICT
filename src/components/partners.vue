<template>
<section class="partnerlogo">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/moc_logo_2.jpg" alt="" />
            <img src="img/nita-logo.png" alt="" />
            <img src="img/gi-kace-logo.png" alt="" />
          </div>
          <div class="carousel-item">
            <img src="../assets/moc_logo_2.jpg" alt="" />
            <img src="../assets/nita-logo.png" alt="" />
            <img src="../assets/gi-kace-logo.png" alt="" />
          </div>
          <div class="carousel-item">
            <img src="../assets/moc_logo_2.jpg" alt="" />
            <img src="../assets/nita-logo.png" alt="" />
            <img src="../assets/gi-kace-logo.png" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon icon"
            aria-hidden="true"
          ></span>

          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon icon"
            aria-hidden="true"
          ></span>

          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <!-- mobile view -->
    <section class="partnerlogo-m">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/moc_logo_2.jpg" alt="" />
          </div>
          <div class="carousel-item">
            <img src="../assets/nita-logo.png" alt="" />
          </div>
          <div class="carousel-item">
            <img src="../assets/gi-kace-logo.png" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon icon"
            aria-hidden="true"
          ></span>

          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon icon"
            aria-hidden="true"
          ></span>

          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
</template>


    <style scoped>
      .partnerlogo-m {
        display: none;
      }

      .partnerlogo {
        margin-top: 50px;
        padding: 20px 0;
      }
      .carousel-item {
        display: flex;
      }
      .carousel-inner {
        padding: 0 20%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .carousel-item img {
        height: 100px;
        padding-right: 20px;
      }
      .icon {
        font-weight: bold;
        size: 20px;
        background-color: #652e89;
        padding: 7px 10px;
        border-radius: 25%;
      }
  
      @media only screen and (max-width: 768px) {
        .carousel-item img {
          height: 40px;
          padding-right: 20px;
        }
      }
      @media only screen and (max-width: 1024px) {
        .carousel-item img {
          height: 40px;
          padding-right: 20px;
        }
      }

      @media only screen and (max-width: 1280px) {
        .carousel-item img {
          height: 40px;
          padding-right: 20px;
        }
      }
      @media only screen and (max-width: 992px) {
        /* .partnerlogo {
          margin-top: 50px;
          padding: 20px 0;
          display: flex;
        } */
        .carousel-item img {
          height: 35px;
          padding-right: 10px;
        }
      }
          @media only screen and (max-width: 600px) {
        .partnerlogo-m {
          display: block;
          margin-top: 50px;
        }
  

        .carousel-item img {
          height: 200px;
          justify-items: center;
        }
        .partnerlogo {
          display: none;
        }
      }
    </style>