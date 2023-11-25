<template>
    <NavBar/>
    <div class="main-contact-us">
        <div>
            <h2>
                Contact Us
            </h2>
            <p>
                Need to get in touch with us? Either fill out the form with your inquiry or find the <br>department email you would like to contact below. 
            </p>
        </div>
        <div class="contact-us">
            <input type="text" placeholder="Enter your Name"/>
            <input type="email" placeholder="Enter your Email"/>
            <input class="contact-para" type="text" placeholder="What can we help with you?"/>
            <button>Submit</button>
        </div>
    </div>

    <Footer123U />
</template>

<script>
import NavBar from '../NavBar.vue'
import Footer123U from '../Footer123U.vue'


    export default{
        name : 'Contact123U',
        components:{
            NavBar,
            Footer123U
        }
    }

</script>

<style scoped>

.main-contact-us{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10%;
    
}

.contact-us{
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    padding: 2%;
    margin-right: 5%;
}

.contact-us input{
    width: 350px;
    height: 50px;
    border-radius: 5px;
    background-color: lightgray;
    border: none;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}
.contact-para{
    height: 100px;
}

.contact-us button{
    width: 250px;
    height: 50px;
    border-radius: 5px;
    background-color: lightgray;
    border: none;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}


</style>