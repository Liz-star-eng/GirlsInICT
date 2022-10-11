<template>
    <section>
        <div class="sponsors-body">
            <h2>Sponsors</h2>
            <div class="cardHolder">
            <div class="cards">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../assets/moc_logo_2.jpg"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Ministry of Communication</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <router-link to="" class="link"
                    >See website</router-link
                  >
                </div>
              </div>
              <div class="card">
                <img
                  class="card-img-top"
                  src="../assets/gi-kace-logo.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Kofi Annan IT Institute</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <router-link to="/cyberview" class="link"
                    >See website</router-link
                  >
                </div>
              </div>
              <div class="card">
                <img
                  class="card-img-top"
                  src="../assets/nita-logo.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Nita</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <router-link to="/academy/courseInfo" class="link"
                    >See website</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="container">
        <div class="title">
          <h1>Be a sponsor today. <br>
            Get in touch with Us!</h1>
          <p>
            We would love to hear you <br />
            Don’t hesitate to fill the form below and we’ll get back to you as
            soon as possible.
          </p>
        </div>
        <div class="row2">
          <div class="cln1">
            <form>
              <label for="Cname">Company Name</label>
              <input type="text" id="Cname" name="Cname" placeholder="AITI-KACE" required/>
              <!-- <label for="lname">Email</label>
              <input type="text" id="lname" name="lname" placeholder="Teye" /> -->
              <label for="lname">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="moc@gmail.com" required
              />
              <label for="Message">Message</label>
              <textarea
                rows="4"
                cols="50"
                name="Msg"
                id="textarea"
                placeholder="Type your message here.."
              >
  Enter text here...</textarea
              >
  
              <button type="submit">Send</button>
            </form>
          </div>
          <div class="cln2">
            <div>
              <h4>Contact</h4>
              <h6>+233 00 00 00 00</h6>
              <h6>030 00 00 00 00</h6>
              <h6>+233 00 00 00 00</h6>
            </div>
            <hr />
            <div>
              <h4>Email</h4>
              <div><h6>info@girlsinict.org</h6></div>
              <div><h6>girlsinict@gmail.com</h6></div>
            </div>
            <hr />
            <div>
              <h4>Location</h4>
              <div><h6>GPS: GA-079-0539</h6></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7942.10523415975!2d-0.19252!3d5.55922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33852c3863b53672!2sMinistry%20of%20Communications!5e0!3m2!1sen!2sgh!4v1659617993941!5m2!1sen!2sgh"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script></script>
  
  <style scoped>
  section {
    padding: 15rem 0 5rem 0;
  }
  
  /* card holder */
  .sponsors-body {
    max-width: 80%;
    margin: auto;
  }
  .sponsors-body h2 {
    font-style: italic;
  }
.cardHolder .cards {
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  background-color: whitesmoke;
  width: 31%;
  box-shadow: 0 10px 20px rgba(33, 32, 32, 0.15);
}

.card img {
  width: 100%;
  height: 40%;
}



.card-text,
.card-title {
  margin-bottom: 10px;
}
.card-body {
    padding: 3rem;
}
.card-body p {
  padding-bottom: 10px;
}
/* end */
  .row2 {
    display: flex;
  }
  .cln1 {
    flex-basis: 80%;
    margin-top: 50px;
  }
  
  /* form {
  } */
  
  input,
  textarea {
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
  textarea:focus {
    border: 2px solid#652e89;
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
  .cln2 {
    flex-basis: 20%;
    margin-left: 50px;
    margin-top: 50px;
  }
  .cln2 h4 {
    font-size: 3rem;
    color: #652e89;
  }
  
  .cln2 h6 {
    font-size: 2rem;
    font-weight: 400;
  }
  
  .cln2 hr {
    height: 2px;
    border: none;
    background: grey;
    margin: 30px 0;
  }
  
  iframe {
    width: 100%;
    height: 300px;
    margin-top: 20px;
  }
  @media only screen and (max-width: 992px) {
    .sponsors-body {
    max-width: 90%;
    margin: auto;
  }
    .cardHolder .cards {
        flex-wrap: wrap;
        gap: 20px;
    }

    .card {
        width: 40%;
    }

  
  }
  
  @media only screen and (max-width: 600px) {
    section {
      padding-top: 15rem;
      padding-bottom: 0;
      margin: 0 !important;
    }

    .cardHolder .cards {
        flex-direction: column;
    }

    .card {
        width: 100%;
    }
  
    .row2 {
      flex-direction: column;
    }
    .cln2 {
      padding: 20px;
      margin-left: 0px;
      margin-top: 50px;
    }
    .cln1,
    .title {
      padding: 0 20px;
      margin-top: 10px;
    }
    iframe {
      margin: 0;
      padding: 0;
    }
  }
  </style>
  