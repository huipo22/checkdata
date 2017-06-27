<template>
  <div id="app">
    <h1></h1>
    <h2>目录</h2>
    <ul>
      <li v-for="el in datas">
        <iframe :src=el.page_url></iframe>
        <a :href="el.page_url" target="_blank">{{el.title}}</a>
        <div v-html=el.body></div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      datas: []
    }
  },
  created() {
    axios.get('http://localhost:3000')
      .then(response => {
        console.log(response.data);
        this.datas = response.data
      })
      .catch(error => {
        console.log(error);
        alert('网络错误，不能访问');
      })
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 10px 10px;
}

a {
  color: #42b983;
}

iframe {
  width: 100%;
  height: 500px;
}
</style>
