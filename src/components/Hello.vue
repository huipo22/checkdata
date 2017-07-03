<template>
  <div class="hello">
    <ul>
      <h2 v-text="msg"></h2>
      <li v-for="(el,index) in listt2">
        <router-link :to="{name:'hi',params:{newsId:index}}">{{index+1}}. {{el.title}}</router-link>
      </li>
    </ul>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes=pageSizes
        :page-size=pageSize
        layout="total, sizes, prev, pager, next, jumper"
        :total=Totals>
      </el-pagination>
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
      Totals: 0,
      listt2: [],
      pageSize: 50,
      pageSizes: [50, 80, 100],
      curPage: 0,
      pageCount: '',
      rongliang: []
    }
  },
  created () {
    axios.get('http://localhost:3000')
      .then(response => {
        this.datas = response.data
        this.rongliang = response.data
        this.Totals = response.data.length
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问')
      })
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      let curtotal = this.curPage * val
      let tiaoshu = this.curPage * val + val
      this.listt2 = this.rongliang.slice(curtotal, tiaoshu)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      val = --val
      let curtotal = val * this.pageSize
      let tiaoshu = val * this.pageSize + this.pageSize
      this.listt2 = this.rongliang.slice(curtotal, tiaoshu)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[v-cloak] {
  display: none;
}
.block{
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
