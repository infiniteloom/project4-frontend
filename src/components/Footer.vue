<template>
<div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p><span class="footer-brand">Haven</span> is a developer's project by <a href="https://www.linkedin.com/in/lea-thomas-world/">Lea Thomas, 2020</a>. 
         View the GitHub repositories <a href="http://opensource.org/licenses/mit-license.php">here.</a></p>
      <p>Photos used without permission for demonstrative purposes only</p>
    </div>
  </footer>
</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
  .footer.footer{
    margin-top: 100px;
    padding: 3rem 1.5rem;
    background-color: rgb(111, 111, 111);
  }
  .footer .content{
    font-size: .8em;
    color: rgb(255, 255, 255);
  }
  .footer .content a{
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  .footer .content a:hover{
    text-decoration: underline;
  }
  .footer-brand{
    font-weight: bold;
  }
</style>