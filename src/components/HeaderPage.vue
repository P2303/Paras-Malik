<template>
    <div class="nav">
        <a href="/">Home</a>
        <a href="/about">AboutUs</a>
        <a href="#">ContactUs</a>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>

export default {
    name:'HeaderPage',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'LoginPage'})
        }
    }
}
    
</script>
<style>
.nav{
    background-color: gray;
    overflow: hidden;
    margin-top: -59px;
    padding: 20px;
}
.nav a{
    padding: 14px 70px;
    text-align: center;
    text-decoration: none;
    color: white;
}
.nav a:hover{
    background-color: #ddd;
    color: #333;
}
</style>
