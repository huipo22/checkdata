<template>
  <div class="hi">
      <span id="spanid" style="display:none">{{$route.params.newsId}}</span>
      {{str}}
      <div class="left">
          <h2>{{arbody.title}}</h2>
          <section>
            <ul>
              <li v-for="item in arbody.original_files">
                <img :src="item" />
              </li>
            </ul>
          </section>
          <article>
            <div v-html=arbody.body></div>
          </article>
      </div>
      <div class="right">
          <iframe :src=arbody.page_url frameborder="0"></iframe>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      arbody: [],
      ac: '',
      str: ''
    }
  },
  created () {
    axios.get('http://localhost:3000')
      .then(response => {
        const ids = document.getElementById('spanid').innerHTML
        for (let [index, elem] of response.data.entries()) {
          if (index === Number(ids)) {
            this.arbody = elem
          }
        }
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
.left{
    width: 50%;
    padding: 0 2%;
    float: left;
    box-sizing: border-box;
    height: 42rem;
    overflow-y: scroll;
}
.right{
    width: 50%;
    float: left;
    height: 42rem;
}
iframe{
    width: 100%;
    height: 100%;
}
article>p{
    text-align: left;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
    display: block;
    margin: 10px 10px;
    float: left;
    width: 28%;
    box-sizing: border-box;
    height: 100px;
    overflow: hidden;
}

li>img{
  width: 100%;
  height: 100px
}

section{
  overflow: hidden
}

</style>
