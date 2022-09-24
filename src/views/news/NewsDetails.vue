<template>
  <div class="main-body">
    <main class="row">
      <div class="news-content">
        <h2 class="news">Past Events</h2>
        <hr class="break" />
        <p class="sub-heading">
          Things to know when moving a website from a shopify to WordPress CMS
        </p>
        <img src="../../assets/office.png" alt="Avatar" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
          ducimus quos, repellat voluptates odio illo perspiciatis debitis error
          neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
          modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
          obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur
          vero quo iure sint qui cupiditate ut molestiae laudantium repudiandae
          debitis? Accusantium possimus, neque omnis facere perspiciatis
          molestiae ut aperiam nesciunt soluta quaerat dolor doloribus, quis
          consequuntur dicta expedita culpa, nostrum amet? Non aspernatur
          dolorem est earum accusamus! Eos adipisci ad iusto laborum laudantium,
          amet quo consequuntur vitae impedit quaerat autem doloremque!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
          ducimus quos, repellat voluptates odio illo perspiciatis debitis error
          neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
          modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
          obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur
          vero quo iure sint qui cupiditate ut molestiae laudantium repudiandae
          debitis? Accusantium possimus, neque omnis facere perspiciatis
          molestiae ut aperiam nesciunt soluta quaerat dolor doloribus, quis
          consequuntur dicta expedita culpa, nostrum amet? Non aspernatur
          dolorem est earum accusamus! Eos adipisci ad iusto laborum laudantium,
          amet quo consequuntur vitae impedit quaerat autem doloremque!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
          ducimus quos, repellat voluptates odio illo perspiciatis debitis error
          neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
          modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
          obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur
          vero quo iure sint qui cupiditate ut molestiae laudantium repudiandae
          debitis? Accusantium possimus, neque omnis facere perspiciatis
          molestiae ut aperiam nesciunt soluta quaerat dolor doloribus, quis
          consequuntur dicta expedita culpa, nostrum amet? Non aspernatur
          dolorem est earum accusamus! Eos adipisci ad iusto laborum laudantium,
          amet quo consequuntur vitae impedit quaerat autem doloremque!
        </p>
        <h2>Conclusion</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
          ducimus quos, repellat voluptates odio illo perspiciatis debitis error
          neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
          modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
          obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur
          vero quo iure sint qui cupiditate ut molestiae laudantium repudiandae
          debitis? Accusantium possimus, neque omnis facere perspiciatis
          molestiae ut aperiam nesciunt soluta quaerat dolor doloribus, quis
          consequuntur dicta expedita culpa, nostrum amet? Non aspernatur
          dolorem est earum accusamus! Eos adipisci ad iusto laborum laudantium,
          amet quo consequuntur vitae impedit quaerat autem doloremque!
        </p>

        <div class="container">
          <h3>Comments</h3>
          <h4>leave a reply</h4>

          <input class="message" type="text" placeholder="Your Reply" /><br />
          <div class="input">
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your email" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi.</p>
          <button>Post Comment</button>
        </div>
      </div>
      <div class="related-news">
        <nav>
          <h3 href="">Latest Events</h3>
          <a href="">CyberSecurity Events</a>
          <hr />
          <a href="">Scratch Events</a>
          <hr />
          <a href="">Programming Events</a>
          <hr />
          <a href="">Comprtitions</a>
          <hr />
          <a href=""> Events</a>
          <hr />
          <h2>Related Events</h2>
          <hr />
          <div class="RN">
            <a href="">
              <img src="../../assets/bd.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
            <a href="">
              <img src="../../assets/bd.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
            <a href="">
              <img src="../../assets/bd.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
            <a href="">
              <img src="../../assets/bd.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
          </div>
        </nav>
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-body {
  padding: 1rem 5rem 5rem 5rem;
}
.row {
  display: flex;
  overflow: hidden;
  justify-content: space-between;
}

.news {
  text-align: left;
  font-size: 35px;
  font-style: italic;
}

.news-content {
  flex-basis: 50%;
  width: 70%;
}
.news-content img {
  height: 50vh;
  width: 100% !important;
  object-fit: cover;
  object-position: center;
}
.related-news {
  text-align: center;
}

nav {
  margin: 9rem 2rem 3rem 5rem;
  background-color: #ececec;
  padding-bottom: 3rem;
}

nav a,
a p {
  margin-top: 2rem;
  color: #652e89;
  font-size: 15px;
  text-align: center;
  display: block;
}
nav h3,
nav h2 {
  background-color: #3c1655;
  color: #ffc527;
  padding: 3px;
}

.related-news a:hover {
  color: #574105;
  text-decoration: none;
}
.related-news img {
  width: 70%;
}
.related-news img:hover {
  width: 71%;
  transition: 0.3s ease-in-out;
}
p {
  margin-top: 10px;
  text-align: left;
}
.sub-heading {
  font-style: italic;
  font-size: 20px;
}

.container {
  display: block;
  padding: 1rem;
}
.message {
  width: 60%;
  height: 60px;
  padding: 0 0 0 10px;
}

input::placeholder {
  font-style: italic;
}
input {
  margin-top: 20px;
  width: 29%;
}
.input {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}

input:nth-child(2) {
  margin-left: 20px !important;
}

button {
  background-color: #652e89;
  color: #ffc527;
  padding: 1rem;
  border-radius: 5px;
  border: none;
}

button:hover {
  background-color: #3c1655;
}

.break {
  border: 1px solid #652e89;
}

@media (max-width: 1310px) {
  .main-body {
    padding: 15rem 5rem 1rem 5rem;
  }
  .row {
    overflow: hidden;
  }
}

@media screen and (max-width: 1002px) {
  .row {
    flex-direction: column;
  }

  .news-content {
    width: 100%;
  }
  .RN {
    display: flex;
  }
}

@media screen and (max-width: 850px) {
  .main-body {
    padding: 15rem 5rem 1rem 5rem;
  }
  .row {
    padding: 1rem 5rem;
  }
  .message {
    width: 80%;
  }
  input {
    width: 39%;
  }
}

@media screen and (max-width: 600px) {
  .row {
    padding: 0 1px 1px 1px;
  }
  p {
    text-align: justify;
  }
  input {
    width: 100%;
  }
  input:nth-child(2) {
    margin-left: 0 !important;
    margin-bottom: 1rem !important;
  }
  .related-news {
    width: 100%;
  }

  nav {
    margin-left: 0;
  }
  nav a p {
    font-size: 12px !important;
  }
  .RN {
    flex-wrap: wrap;
  }
}
</style>