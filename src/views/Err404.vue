<template>
    <div class="container">
      <div class="content">
            <div class="text404">404</div>
             <br/>
            <span class="desc404">无此页面，请返回</span>
             <br/>
              <br/>
           <div><van-button type="info" @click="handleReturn()">返回首页</van-button></div>
      </div>
    </div>
    
</template>
<script>
import common_mix from "@/views/mixins/common";
export default {
    name:'err-404',
    mixins:[common_mix],
    methods:{
        handleReturn(){
            this.HandleRedirect('home')
        }
    }
    
}
</script>

<style scoped>
  .container{
     margin: 50px;
  
  }
  .content{
      text-align: center;
      font-size: 16px;
      margin: 50;
  }
  .text404{
      font-size: 25px;
      font-weight: bold;
  }
  .desc404{
      font-size: 12px;
  }
</style>




