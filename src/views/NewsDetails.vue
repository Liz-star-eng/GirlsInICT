<template>
  <main class="row">
    <div class="col-sm-8 news-content">
      <h2 class="news">News</h2>
      <hr class="break" />
      <p class="sub-heading">
        Things to know when moving a website from a shopify to WordPress CMS
      </p>
      <img src="../assets/office.png" alt="Avatar" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
        ducimus quos, repellat voluptates odio illo perspiciatis debitis error
        neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
        modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
        obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur
        vero quo iure sint qui cupiditate ut molestiae laudantium repudiandae
        debitis? Accusantium possimus, neque omnis facere perspiciatis molestiae
        ut aperiam nesciunt soluta quaerat dolor doloribus, quis consequuntur
        dicta expedita culpa, nostrum amet? Non aspernatur dolorem est earum
        accusamus! Eos adipisci ad iusto laborum laudantium, amet quo
        consequuntur vitae impedit quaerat autem doloremque!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
        ducimus quos, repellat voluptates odio illo perspiciatis debitis error
        neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
        modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
        obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur
        vero quo iure sint qui cupiditate ut molestiae laudantium repudiandae
        debitis? Accusantium possimus, neque omnis facere perspiciatis molestiae
        ut aperiam nesciunt soluta quaerat dolor doloribus, quis consequuntur
        dicta expedita culpa, nostrum amet? Non aspernatur dolorem est earum
        accusamus! Eos adipisci ad iusto laborum laudantium, amet quo
        consequuntur vitae impedit quaerat autem doloremque!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
        ducimus quos, repellat voluptates odio illo perspiciatis debitis error
        neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
        modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
        obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur
        vero quo iure sint qui cupiditate ut molestiae laudantium repudiandae
        debitis? Accusantium possimus, neque omnis facere perspiciatis molestiae
        ut aperiam nesciunt soluta quaerat dolor doloribus, quis consequuntur
        dicta expedita culpa, nostrum amet? Non aspernatur dolorem est earum
        accusamus! Eos adipisci ad iusto laborum laudantium, amet quo
        consequuntur vitae impedit quaerat autem doloremque!
      </p>
      <h2>Conclusion</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
        ducimus quos, repellat voluptates odio illo perspiciatis debitis error
        neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
        modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
        obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur
        vero quo iure sint qui cupiditate ut molestiae laudantium repudiandae
        debitis? Accusantium possimus, neque omnis facere perspiciatis molestiae
        ut aperiam nesciunt soluta quaerat dolor doloribus, quis consequuntur
        dicta expedita culpa, nostrum amet? Non aspernatur dolorem est earum
        accusamus! Eos adipisci ad iusto laborum laudantium, amet quo
        consequuntur vitae impedit quaerat autem doloremque!
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
    <div class="col-sm-4 related-news">
      <h3>Related news</h3>
      <nav>
        <a href=""><img src="../assets/bd.jpg" alt=""><p>Lorem ipsum dolor sit amet.</p></a>
        <a href=""><img src="../assets/bd.jpg" alt=""><p>Lorem ipsum dolor sit amet.</p></a>
        <a href=""><img src="../assets/bd.jpg" alt=""><p>Lorem ipsum dolor sit amet.</p></a>
        <a href=""><img src="../assets/bd.jpg" alt=""><p>Lorem ipsum dolor sit amet.</p></a>
       
        
      </nav>
    </div>
  </main>
</template>

<style scoped>
.row {
  padding: 1rem 15rem;
  display: flex;
  justify-content: space-between;
}

.news {
  text-align: left;
  font-size: 35px;
  font-style: italic;
}

.news-content img {
  height: 50vh;
  width: 100% !important;
  object-fit: cover;
  object-position: center;
}
.related-news {
  border-left: 1px solid #652e89;
  border-right: 1px solid #652e89;
  border-radius: 10px;
}
.related-news a {
color: #652e89;
font-size: 18px;
margin-right: 0;
}
.related-news a p {
  margin-left: 2.5rem;
}
.related-news a:hover {
  color: #574105;
  text-decoration: none;
}
.related-news img {
  width: 80%;
  padding: 10px 20px;
}
.related-news img:hover{
 width: 81%;
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
}
.message {
  width: 40%;
  height: 60px;
  padding: 0 0 0 10px;
}

input::placeholder {
  font-style: italic;
}
input {
  margin-top: 20px;
  width: 19%;
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
  .row {
    padding: 0 10rem;
  }
 
  .related-news a {
    font-size: 14px;
  }
}

@media screen and (max-width: 1002px) {
  .row {
    flex-direction: column;
  }

  .news-content {
    width: 100%;
  }

  .related-news {
    width:100%;
  }
  .related-news nav{
    display: flex;
     }
}

@media screen and (max-width: 722px) {
 .row  {
  padding: 1rem 5rem;
 }
}

@media screen and (max-width: 600px) {
  .row  {
  margin-top: 20%;
  padding: 1rem;
 }
}

</style>
