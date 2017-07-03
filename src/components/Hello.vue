<template>
  <div class="hello">
    <ul>
      <h2 v-text="msg"></h2>
      <li v-for="(el,index) in listt2">
        <router-link :to="{name:'hi',params:{newsId:index}}">{{index+1}}. {{el.title}}</router-link>
      </li>
    </ul>
    <div class="pages" v-show="onn">                        
     <button class="previem" @click="page('last')" v-show='curPage>0'>上一页</button>
     <button class="next" @click="page('!last')" v-show="curPage<pageCount-1">下一页</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: '数据检查',
      datas: [],
      listt2: [],
      pageSize: 80,
      curPage: 0,
      pageCount: '',
      onn: true,
      rongliang: []
    }
  },
  created () {
    axios.get('http://localhost:3000')
      .then(response => {
        console.log(response.data)
        this.datas = response.data
        this.rongliang = response.data
        this.fenye()
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问')
      })
  },
  methods: {
    page: function (el) {
      el === 'last' ? this.curPage -- : this.curPage++
      let curtotal = this.curPage * this.pageSize
      let tiaoshu = this.curPage * this.pageSize + this.pageSize
      this.listt2 = this.rongliang.slice(curtotal, tiaoshu)
    },
    fenye: function () {
      var _this = this
      _this.listt2 = []
      if (_this.rongliang) {
        _this.pageCount = Math.ceil(_this.rongliang.length / _this.pageSize)
        for (var i = 0; i < _this.pageSize; i++) {
          if (_this.rongliang[i]) {
            _this.listt2.push(_this.rongliang[i])
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[v-cloak] {
  display: none;
}
.pages{
    position: fixed;
    bottom: 5%;
    right: 5%;
}
.hello{
  display: flex;
  justify-content: center;
  align-items: center;
}
h1,
h2 {
  font-weight: normal;
  text-align: center;
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
