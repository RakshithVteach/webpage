<template>
    <NavBar/>
    <div class="home-style">

            <div class="half">
                <div class="left-words">
                    <h1>
                        Hey! this is <span style="color: #0077FF;">ONUCO</span> music platform with your <span style="color: #0077FF;">favorite artists</span>
                    </h1>
                    <p>
                        <img class="heart-logo" src="../assets/heart.png"/>
                    </p>
                    
                    <p>
                        <img class="heart-logo" src="../assets/hearphone.png"/>
                    </p>
                </div>
                    <button @click="scrollToElement" class="downarror">More <span ><img class="arrow" src="../assets/downarrow.png"/></span></button>

                    <p class="taste">Add many generes for every taste. Selected especially for you</p>
                <div class="all-buttons">
                    <button class="fav-1">
                        Favorite Music
                    </button>
                    
                    <button class="fav-2">
                        Every Taste
                    </button>
                    
                    <button class="fav-3">
                        Many Genres
                    </button>
                    
                    <button class="fav-4">
                        Selected tracks
                    </button>
                    
                    <button class="fav-5">
                        Especially for you
                    </button>

                </div>

                <div class="main-card-div">
                    <div class="card-1">
                        <img class="card-1-img" src="../assets/2.png"/>
                    </div>
                    
                    <div class="card-2">
                        <video width="400px" height="400px" controls>
                        <source src="../assets/video (2160p).mp4" type="video/mp4">
                            Video does not support
                        </video>
                    </div>
                    
                   
                </div>

                <div class="main-card-div">

                    <div class="card-3">
                        check
                    </div>

                    <div class="card-4">
                        check
                    </div>

                </div>


            
            </div>
                
            <div class="half">
                <div class="music-right">
                    MUSIC PLATFORM
                </div>

                <div class="right-cards">
                    <div class="right-card1">
                        <div class="g-button-div">
                            <button class="g-button">GIQO</button>
                        </div>
                        <div >
                            <p class="cards-our">
                                Our platform will help you find all your favorite tracks.
                            </p>
                                <p >
                                    You can listen to music online and offline
                                </p>
                                <button  class="music-icon">
                                    <img href="middle" class="music-icon-logo" src="../assets/musical-note.png"/>
                                </button>
                            </div>
                        
                    </div>
                    

                    <div class="right-card2">
                        
                    </div>
                </div>
            </div>
    </div>

    <Footer123U />
</template>

<script>
import NavBar from './NavBar.vue'
import Footer123U from './Footer123U.vue'
import styles from "../components/Styles/HomeStyle.css"


    export default{
        style : styles,
        name : 'Home123U',
        components:{
            NavBar,
            Footer123U
        },
        methods:{
            scrollToElement() {
            const el = this.$refs.scrollToMe;

            if (el) { 
            el.scrollIntoView({behavior: 'smooth'});
    }
  }
        }
    }

</script>

