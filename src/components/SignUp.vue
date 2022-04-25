<template>
  <div class="register">
    <img class="logo" src="../assets/image2.jpg" />
    <h1>SignUp</h1>
    <input
      type="text"
      v-model="name"
      placeholder="Enter your Name....."
      style="padding: 11px 30px"
    />
    <br /><br />
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
    <button class="btn" v-on:click="signup">SignIn</button>
    <p><router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() 
  {
    return {
      name: "",
      email: "",
      password: "",
    }
  },

  methods: {
    async signup() 
    {
      let result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        password: this.password,
        name: this.name,
      });

      console.log(result);
      if (result.status==201) 
      {
        alert("signIn");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({name:"HomePage"})
      }
    },
  },
//   mounted()
//   {
//       let user=localStorage.getItem("user-info")
//       if(user){
            
//       }
//   }
};
</script>

<style>
.register {
  margin-left: 0em;
}
.register input {
  border: 1px solid orange;
}
.btn {
  width: 166px;
  height: 40px;
  border: 1px solid orange;
  background-color: orange;
}
.logo {
  width: 87px;
  margin-left: 0em;
}
</style>
