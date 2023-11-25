<script>
import styles from "../components/Styles/NavStyle.css";

export default{
    style : styles,
    methods:{
        about(){
            this.$router.push({ name: 'About123U' });
        },
        contact(){
            this.$router.push({ name: 'Contact123U' });
        }
    }
}

</script>


<template> 
<nav class="div-nav-style">
    <div class="div-nav-logo">
        <span class="logo">
            Onuco
        </span>
    </div>
    
    <ul class="navItems">
      <li class="navSubItems">
        <router-link to="/">HOME</router-link>
      </li>
      <li class="navSubItems">
        <a @click="about">ABOUT</a>
      </li>
      <li class="navSubItems">
        <a @click="contact">CONTACT</a>
      </li>
    </ul>
</nav>
</template>







