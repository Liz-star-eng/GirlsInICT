<template>
    
    <div class="footer">
          <div class="section">
            <div>
              <router-link to="/"><img src="../assets/white-girlslogo.png" alt=""></router-link>
            </div>
            <div class="Links">
              <h4>Quick Links</h4>
              <hr class="underline">
              <a href="">About Us</a><br>
              <a href="">Entreprenures' Forum</a><br>
              <a href="">Market Place</a><br>
              <a href="">Resources</a><br>
            </div>
            <div class="contact">
              <h4>Contact Us</h4>
               <hr class="underline">
              <p>+233 00 00 00 00 </p>
              <p>030 00 00 00 00</p>
              <p>+233 00 00 00 00</p>
            </div>
            <div class="social" >
              <h4>Social Media</h4>
              <hr class="underline">

              <li>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-instagram"></i></a> 
                <a href=""><i class="fa fa-linkedin"></i></a>
              </li>
            </div>
          </div>
          <div class="copyright"><p><i> Copyright @GrlsinCyberSecurityGH | powered by AITI-KACE</i></p></div>
    </div> 
</template>

<style scoped>
.footer {
  background-color: #652E89;
  padding: 3rem 1rem;
  width: 100%;
  overflow: hidden;
  z-index: 99;
}
.section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: auto;
}

.section div {
  margin: 0 6rem;
}
.section img {
  width: 300px
}
.section img:hover {
  width: 298px;
  transition: 0.3s;
}
li {
  list-style-type: none;
}
.Links, a, .contact, .social {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #FFC527;
} 
.social i {
  margin-left: 1rem;
}
.underline {
margin-top: 0;
}

.copyright {
  color: rgb(217, 215, 215);
  text-align: center;
  padding: 2rem 0;
}
@media only screen and (max-width: 1100px) {
    .section {
       gap: 20px;
    }
}

@media only screen and (max-width: 660px) {
  .section {
    flex-direction: column;
    gap: 10px;
    margin-left: 3rem;
  }
  .section img {
    width: 200px;
  }
   .section img:hover {
    width: 201px;
   }
  .underline {
    width: 50%;
    margin-left: 0 !important;
  }
}

</style>