<template>
    <img class="logo" src="../assets/UNUCO_LOGO.png"/>
    <h1 >Sign Up</h1>

    <div class="register">
        <input type="text" placeholder="Enter your Name"/>
        <input type="text" placeholder="Enter your Email"/>
        <input type="password" placeholder="Enter your Password"/>
        <button @click="signUp">Sign Up</button>

    </div>
</template>

<script>
    export default{
        name: 'SignUp',
        methods: {
                    signUp() {
                    this.$router.push({ name: 'Home123U' });
    }
  }
    }
</script>

<style scoped>

    h1{
        color: #0077FF;
    }
    .logo{
        width: 100px;
        height: 50px;
    }

    .register input{
        width : 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #0077FF;
        border-radius: 5px;
    }

    .register button{
        width: 325px;
        height: 40px;
        border: 1px solid #0077FF;
        background: #0077FF;
        border-radius: 5px;
        cursor: pointer;
    }

    .register button:hover{
        background: lightblue;
    }

</style>

