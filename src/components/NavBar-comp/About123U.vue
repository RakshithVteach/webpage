<template>
    <NavBar/>
    <div>
        <h1 class="about-main">
            Inside Onuco! 
        </h1>
        <p>A look into fresh discover Weekly videos from our Profossors</p>
        <div class="card-container">
            <CardComp
                v-for="person in people"
                :key="person.id"
                :imageSrc="person.imageSrc"
                :name="person.name"
                :designation="person.designation"
            />
        </div>
    </div>

    <Footer123U />
</template>

<script>
import NavBar from '../NavBar.vue'
import Footer123U from '../Footer123U.vue'
import CardComp from "../CardComp.vue"
import styles from "../Styles/About.css"


    export default{
        style : styles,
        name : 'About123U',
        components:{
            NavBar,
            Footer123U,
            CardComp
        },
        data(){
            return{
                people: [
                            {
                                id: 1,
                                name: "John Doe",
                                designation: "Software Engineer",
                                imageSrc:  require('@/assets/person1.jpg'),
                            },
                            {
                                id: 2,
                                name: "Matthew Schnipper",
                                designation: "Managing Editor",
                                imageSrc: require('@/assets/person2.jpg'),
                            },
                            {
                                id: 3,
                                name: "Frankie Cosmos",
                                designation: "Software Developer",
                                imageSrc: require('@/assets/person3.jpg'),
                            },
                            {
                                id: 4,
                                name: "Mitski",
                                designation: "Editer",
                                imageSrc: require('@/assets/person4.jpg'),
                            },
                            {
                                id: 5,
                                name: "Jillian Mapes",
                                designation: "Marketing Engineer",
                                imageSrc: require('@/assets/person1.jpg'),
                            },
                            {
                                id: 6,
                                name: "Kristen Kontrol",
                                designation: "Senior Editor",
                                imageSrc: require('@/assets/person1.jpg'),
                            },


                        ],
                        
            }
        }
    }

</script>