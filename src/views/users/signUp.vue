<template>
  <main>
    <div class="login">
      <div class="form-body">
        <div class="bg">
          <section class="form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="confirm password" required />
            <a href=""><button>Sign Up</button></a>
            <p>
              Have an account?
              <a class="acc-link" href="/Users/login">Login here</a>
            </p>
          </section>
        </div>
      </div>
      <section class="background">
        <div class="text">
          <h3>Join Us Today</h3>
        </div>
        <div><img src="../../assets/girlslogo.png" alt="" /></div>
      </section>
    </div>
    <div class="img">
      <img src="../../assets/hon.ursula.png" alt="" />
    </div>
  </main>
</template>
<style scoped>
main {
  padding: 20rem 1rem 5rem 1rem;
  background-color: antiquewhite;
}
.login {
  max-width: 80%;
  margin: auto;
  padding: 1rem 5rem;
  display: flex;
  justify-content: center;
  flex-basis: 50%;
}
section {
  background-color: white;
}
.form {
  display: block;
  font-size: 24px;
}
input {
  display: block;
  margin: 2rem;
  padding: 1rem 2rem;
  background-color: rgb(236, 235, 235);
  border: none;
  border-radius: 5px;
}
.form button {
  border-radius: 10px;
  border: none;
  background-color: rgba(101, 46, 137, 0.9);
  color: #ffcb51;
  padding: 1rem 7rem;
}
.form button,
.form .forgotpsd {
  margin: 1rem 2rem;
}
.form .forgotpsd {
  color: rgb(185, 9, 9);
}

.background {
  width: 50%;
  background-image: url("../../assets/logo.png");
  background-size: 100% 170%;
  background-image: linear-gradient(to right, #652e89, #ffcb51);
  color: white;
}
.background img {
  margin-top: 15rem;
}
section {
  padding: 10rem 7rem;
}
.img {
  margin: -10rem 1rem 1rem 70rem;
  width: 200px;
}
img {
  width: 100%;
  border-radius: 5px;
}

@media (max-width: 992px) {
  main {
    padding: 15rem 0 1rem 0 !important;
    background-color: white;
  }
  .login {
    max-width: 100%;
    padding: 1rem 0;
  }
  input,
  .form button {
    width: 70%;
    padding: 2rem 2rem;
  }
  .background {
    display: none;
  }
  .form {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .form-body {
    background-image: url("../../assets/logo.png");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    box-shadow: 5px 2px 4px rgb(145, 141, 141);
    width: 100%;
    margin: auto;
  }
  .form h2,
  p {
    color: rgb(211, 204, 204);
  }
  .acc-link {
    color: #92a0c7;
    text-decoration: underline;
  }
  .form .forgotpsd {
    color: rgb(255, 255, 255);
    text-decoration: underline;
  }
  .img {
    display: none;
  }
  @media (max-width: 600px) {
    main {
      overflow: hidden;
      padding-bottom: 0 !important;
    }

    .form {
      padding: 1rem !important;
    }
    input {
      margin: 2rem 0 2rem 1.5rem !important;
    }

    input,
    .form button {
      width: 90%;
    }
  }
}
</style>