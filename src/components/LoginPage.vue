<template>
<div class="register">
    <img class="logo" src="../assets/image2.jpg" />
    <h1>Login</h1>
    <input
      type="email"
      v-model="email"
      placeholder="Enter your Email....."
      style="padding: 11px 30px"
    />
    <br /><br />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your Password....."
      style="padding: 11px 30px"
    />
    <br /><br />
    <button class="btn" v-on:click="login">Login</button>
    <br><br>
    <button  v-on:click="signup">SignUp</button>
</div>
</template>


<script>
import axios from 'axios'

export default{
    name:"LoginPage",
    data(){
    return{
        email:'',
        password:''
    }
    },
    methods:{
       async login()
       {
           let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`)


if (result.status==200 && result.data.length>0) 
      {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({name:"HomePage"})
      }
    },
        }
    }
</script>
<style>
.register input {
  border: 1px solid orange;
}

</style>