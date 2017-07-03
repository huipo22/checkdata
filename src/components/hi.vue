<template>
  <div class="hi">
      <span id="spanid" style="display:none">{{$route.params.newsId}}</span>
      {{str}}
      <div class="left">
          <h1 style="color:red">数据库data:</h1>
          <h2>{{arbody.title}}</h2>
          <article>
            <div v-html=arbody.body></div>
          </article>
      </div>
      <div class="right">
          <h1 style="color:red">原网站:</h1>
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
            for (let [ind, item] of elem.original_files.entries()) {
              elem.body = elem.body.replace('IMG_' + ind, `<img src = ${item} />`)
            }
            for (let [ind, item] of elem.video_data.entries()) {
              console.log(ind, item.video_url)
              elem.body = elem.body.replace('VIDEO_' + ind, `<iframe src = ${item.video_url} ></iframe>`)
            }
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
article>p>img{
  width: 100%;
}

section{
  overflow: hidden
}

</style>
