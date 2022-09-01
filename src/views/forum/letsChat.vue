<template>
  <main>
    <div class="mainContent">
      <h2>Let's chat here</h2>
      <p>
        This page lists all available forums where topics are being discussed by
        other users
      </p>
      <hr />
      <div class="content">
        <div><i class="fa fa-star"></i></div>
        <div>
          <h3>Today's Topic</h3>
          <p></p>
        </div>
        <div><p class="topics">0 Topic(s)</p></div>
      </div>
      <div class="content">
        <div><i class="fa fa-comments-o"></i></div>
        <div>
          <h3>Job Opportunities</h3>
        </div>
        <div><p class="topics">2 Topic(s)</p></div>
      </div>
      <div class="content">
        <div><i class="fa fa-comments-o"></i></div>
        <div>
          <h3>Careers in IT</h3>
        </div>
        <div><p class="topics">5 Topic(s)</p></div>
      </div>
      <div class="content">
        <div><i class="fa fa-comments-o"></i></div>
        <div>
          <h3>What's On Your Mind</h3>
        </div>
        <div><p class="topics">4 Topic(s)</p></div>
      </div>
      <div class="content">
        <div><i class="fa fa-comments-o"></i></div>
        <div>
          <h3>Education</h3>
        </div>
        <div><p class="topics">3 Topic(s)</p></div>
      </div>
      <div class="content">
        <div><i class="fa fa-comments-o"></i></div>
        <div>
          <h3>Training Resources</h3>
        </div>
        <div><p class="topics">7 Topic(s)</p></div>
      </div>
      
    </div>
  </main>
</template>

<style scoped>
h3,
a,
i,
p {
  margin: 0;
  padding: 0;
}
main {
  padding: 15rem 10rem 0;
}

.content {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 7rem;
  box-shadow: 2px 2px 5px gray;
}
.content i {
  font-size: 30px;
  color: #652e89;
}
.content .topics {
  font-size: 12px;
  color: #430e66;
}
.content:hover {
  background-color: rgb(238, 238, 238);
}

@media (max-width: 728px) {
  main {
    padding: 15rem 1rem;
  }
  .content {
    padding: 2.5rem 2rem;
  }
}
</style>