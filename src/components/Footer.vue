<template>
<div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p><strong>Haven</strong> is a developer's project by <a href="https://www.linkedin.com/in/lea-thomas-world/">Lea Thomas, 2020</a>. 
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
  .footer{
    margin-top: 100px;
    /* position: absolute;
    bottom: 0;
    height: 80px;
    width: 100%; */
  }
  .footer .content{
    font-size: .8em;
  }
  .footer{
    padding: 3rem 1.5rem;
  }
</style>