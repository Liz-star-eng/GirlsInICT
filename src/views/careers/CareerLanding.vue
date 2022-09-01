<template>
  <main>
    <div class="hero">
      <h2>Career Exploration</h2>
    </div>
    <div class="container">
      <h3>
        Career awareness is an important piece in solving the IT workforce
        shortage.
      </h3>
      <P
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut fugiat
        tempora soluta, cumque consectetur tempore similique eos. Voluptate
        sapiente itaque doloribus ratione amet sint minima dolores eius ullam ex
        eligendi maxime ut voluptatum provident a excepturi repellendus
        aspernatur error pariatur ducimus, fugiat ea. Dolor nostrum quaerat
        nemo. Recusandae, non fuga.</P
      >
    </div>
    <div class="categories">
      <h2>Explore here</h2>
      <div class="cards">
        <div class="card">
          <div class="card-title">
            <a href=""
              ><img src="../../assets/Cybersecurity-Engineer-01.png" alt=""
            /></a>
          </div>
          <div class="card-body">
            <h4>Cyber Security Engineer</h4>
            <div class="field">
              <div class="field-label">Type:</div>
              <div class="field-item">Career</div>
            </div>
            <div class="field">
              <div class="field-label">Degree required:</div>
              <div class="field-item">Bachelor's Degree</div>
            </div>
            <div class="field">
              <div class="field-label">Median Salary:</div>
              <div class="field-item">$00.00</div>
            </div>
            <div class="field">
              <div class="field-label">Job Demand:</div>
              <div class="field-item"></div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <a href=""><img src="../../assets/careers2.png" alt="" /></a>
          </div>
          <div class="card-body">
            <h4>Cyber Security Engineer</h4>
            <div class="field">
              <div class="field-label">Type:</div>
              <div class="field-item">Career</div>
            </div>
            <div class="field">
              <div class="field-label">Degree required:</div>
              <div class="field-item">Bachelor's Degree</div>
            </div>
            <div class="field">
              <div class="field-label">Median Salary:</div>
              <div class="field-item">$00.00</div>
            </div>
            <div class="field">
              <div class="field-label">Job Demand:</div>
              <div class="field-item"></div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <a href=""><img src="../../assets/career3.png" alt="" /></a>
          </div>
          <div class="card-body">
            <h4>Cyber Security Engineer</h4>
            <div class="field">
              <div class="field-label">Type:</div>
              <div class="field-item">Career</div>
            </div>
            <div class="field">
              <div class="field-label">Degree required:</div>
              <div class="field-item">Bachelor's Degree</div>
            </div>
            <div class="field">
              <div class="field-label">Median Salary:</div>
              <div class="field-item">$00.00</div>
            </div>
            <div class="field">
              <div class="field-label">Job Demand:</div>
              <div class="field-item"></div>
            </div>
          </div>
        </div>
      </div>
      <a href="/careers/careers"><button>Browse Career Profiles</button></a>
    </div>
  </main>
</template>
<style scoped>
main {
  padding: 14rem 0 1rem 0;
}
.hero {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4)
    ),
    url("../../assets/bg.avif");
  height: 30vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  color: #f9be2a;
}
.hero h2 {
  padding: 10rem;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  font-size: 40px;
}
.container {
  padding: 5rem 20rem;
  
}
.container h3 {
  padding: 0 0 2rem 0;
}
/* categories styling */
.categories {
  background-color: #652e89;
  padding: 5rem 0;
  text-align: center;
}
.categories h2 {
  color: aliceblue;
}

.categories button {
  margin-top: 20px;
  height: 40px;
  width: 20%;
  border-radius: 20px;
  color: #652e89;
  border: none;
}
.cards {
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.card {
  width: 25%;
  background-color: azure;
  box-shadow: 2px 2px 4px 2px #8140ac;
}
.card img {
  width: 100%;
}
.card-body {
  padding: 3rem 0;
}
.field {
  max-width: 50%;
  display: flex;
  /* justify-content: space-between; */
  margin: auto;
  text-align: left;
}
.field-item {
  color: #2283d2;
  margin-left: 2.5rem;
}
</style>