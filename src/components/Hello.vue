<template>
  <div class="hello">
    <h2 v-text="msg"></h2>
    <ul>
      <li v-for="(el,index) in datas">
        <router-link :to="{name:'hi',params:{newsId:index}}">{{el.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: '数据检查',
      datas: []
    }
  },
  created () {
    axios.get('http://localhost:3000')
      .then(response => {
        console.log(response.data)
        this.datas = response.data
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问')
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center
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
  margin: 15px 10px;
}

a {
  color: #42b983;
}
</style>
