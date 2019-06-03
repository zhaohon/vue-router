
<template>
  <div id="app">
    <div id="nav">
      <ul>
        <router-link tag="li" to="/">Logo</router-link> 
        <router-link tag="li" to="/home">home按钮</router-link>
        <router-link tag="li" to="/chat">chat按钮</router-link>
        <router-link tag="li" to="/text">text按钮</router-link>

      </ul>

     
    </div>
    <router-view />
    <fot></fot>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
#nav{
  width: 100%;
  height: 80px;
  background-color: antiquewhite;
}
#nav ul{
  text-align: center;
}
#nav ul li{
  display: inline-block;
  line-height: 80px;
  width: 200px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
 
}
/* #nav ul li:hover{
  background-color: aqua;
} */

#nav li.router-link-exact-active {
  background-color: aqua;
}
</style>
<script>
import fot from './components/footer/fot.vue'

export default {
  name:"app",
  components: {fot,},
  methods:{
    
  },
  // components:{
  //   "ft":Child
  // }
}

</script>


