<template>
  <main>
    <div class="login">
      <div class="form-body">
        <div class="bg">
          <section class="form">
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Enter password" required />
            <label for="password">Enter password</label>
            <p>Does not have an account? <a href="">Sign Up here</a></p>
          </section>
        </div>
      </div>
      <section class="background">
        <div class="text">
          <h3>Join Us Today</h3>
        </div>
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
  justify-content: space-around;
  flex-basis: 50%;
}
section {
  background-color: white;
}
.form {
  display: block;
}
input {
  display: block;
  margin: 2rem;
  padding: 1rem 3rem;
}
.background {
  width: 50%;
  background-image: url("../../assets/logo.png");
  background-size: 100% 170%;
  background-image: linear-gradient(to right, #652e89, #ffcb51);
  color: white;
}
section {
  padding: 10rem 7rem;
}
.img {
  margin: -10rem 1rem 1rem 75rem;
  width: 200px;
}
img {
  width: 100%;
  border-radius: 5px;
}

@media (max-width: 992px) {
  main {
    padding: 15rem 0 !important;
    background-color: white;
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
  }
  .form h2,
  p {
    color: rgb(211, 204, 204);
  }
}
</style>