<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Another Page"/>
    <Collapse/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import Collapse from '../components/Collapse.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Collapse
  }
}
</script>
