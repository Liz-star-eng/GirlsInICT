<template>
  <div class="footer">
    <div class="section">
      <div class="whitelogo">
        <a href="/"
          ><img src="../assets/white-girlslogo.png" alt=""
        /></a>
      </div>
      <div class="Links">
        <h4>Quick Links</h4>
        <hr class="underline" />
        <a href="">About Us</a><br />
        <a href="">Competition</a><br />
        <a href="/contact">Contact Us</a><br />
        <a href="/FQA">FAQ</a><br />
      </div>
      <div class="contact">
        <h4>Contact Us</h4>
        <hr class="underline" />
        <p>+233 00 00 00 00</p>
        <p>030 00 00 00 00</p>
        <p>+233 00 00 00 00</p>
      </div>
      <div class="social">
        <h4>Social Media</h4>
        <hr class="underline" />

        <li>
          <a href=""><i class="fa fa-facebook"></i></a>
          <a href=""><i class="fa fa-instagram"></i></a>
          <a href=""><i class="fa fa-linkedin"></i></a>
        </li>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright-container">
        <div>
          <p>
            <i>
              Copyright @GrlsinCyberSecurityGH | powered by
              <a href="https://www.aiti-kace.com.gh/" target="_blank"
                >AITI-KACE</a
              ></i
            >
          </p>
        </div>
        <div>
          <a href="/privacy"> Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #652e89;
  width: 100%;
  overflow: hidden;
  z-index: 99;
}
.section {
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 90%;
  margin: auto;
}
/* .line {
  padding:  1rem 10% 0 10%;
} */

.section div {
  margin: 0 6rem;
}
.section img {
  width: 200px;
}
.section img:hover {
  width: 202px;
  transition: 0.3s;
}
li {
  list-style-type: none;
}
.Links,
a,
.contact,
.social {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #ffc527;
}
.social i {
  margin-left: 1rem;
}
.underline {
  margin-top: 0;
}

.copyright {
  color: rgb(217, 215, 215);
  padding-top: 2rem;
  margin-top: 2rem;
  background-color: #440f67;
  font-size: 1rem;
}

.copyright-container {
  padding: 0 10%;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.copyright-container a {
  padding-right: 2rem;
}

@media only screen and (max-width: 1203px) {
  .section {
    flex-direction: column;
    gap: 20px;
  }
}

@media only screen and (max-width: 600px) {
  .section {
    flex-direction: column;
    gap: 10px;
  }
  .section img {
    width: 200px;
  }
  .section img:hover {
    width: 201px;
  }
  .underline {
    width: 20%;
    margin-left: 0 !important;
  }

  .copyright-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
    padding-left: 5rem;
  }
  .copyright-container p {
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 200px) {
  .footer {
    display: none;
  }
}
</style>
