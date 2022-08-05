<template>
  <section>
    <div class="container">
      <div class="title">
        <h1>Get in touch with Us!</h1>
        <p>
          We’re very easy to reach and we would love to help you in any way we
          can. <br />
          Don’t hesitate to fill the form below and we’ll get back to you as
          soon as possible.
        </p>
      </div>
      <div class="row2">
        <div class="cln1">
          <form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="Abigail" />
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="Teye" />
            <label for="lname">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="liz@gmail.com"
            />
            <label for="lname">Message</label>
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
  padding-top: 20rem;
  padding-bottom: 8rem;
}

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

@media only screen and (max-width: 600px) {
  section {
    padding-top: 15rem;
    padding-bottom: 0;
    margin: 0 !important;
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
