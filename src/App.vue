<template>
  <div id="app">
    <div style="text-align:center">
      <img src="./assets/cat.jpg" class='imglogo'>
    </div>    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.imglogo{
  width: 147px;
  border-radius: 25px;}
</style>
