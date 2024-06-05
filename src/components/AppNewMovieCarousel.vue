<script>
import store from '../data/store.js'
import AppSingleCardMovie from './AppSingleCardMovie.vue';

export default {
    name: "AppNewMovieCarousel",

    components: {
        AppSingleCardMovie,
    },

    data() {
        return {
            store,
            activeImg: 0,
            myprevImg: store.films.length - 1,
            mynextImg: 1, 
        }
    },

    methods: {
        // getActiveImg() {
        //     this.activeImg = index
        //     console.log(this.activeImg)
        // },

        nextImg() {
            if (this.activeImg == store.films.length - 2) {
                this.activeImg = store.films.length - 1
                this.myprevImg = store.films.length - 2
                this.mynextImg = 0
                console.log("porcodio 1")
                
            }
            else if(this.activeImg == store.films.length - 1) {
                this.activeImg = 0
                this.myprevImg = store.films.length - 1
                this.mynextImg = 1
                console.log("porcodio 2")

            } 
            else if (this.activeImg == 0) {
                this.activeImg++ 
                this.mynextImg++
                this.myprevImg = 0
                console.log("porcodio 3")
                
            } else {
                this.activeImg++
                this.mynextImg++
                this.myprevImg++
                console.log("porcodio 4")
            }
        },

        prevImg() {
            if (this.activeImg == store.films.length - 1) {
                this.myprevImg = store.films.length - 3
                this.activeImg = store.films.length - 2
                this.mynextImg = store.films.length - 1
                
                
            } else if (this.activeImg == 1) {
                this.myprevImg = store.films.length - 1
                this.activeImg = 0
                this.mynextImg = 1
                
                
            }else if (this.activeImg == 0){
                this.myprevImg = store.films.length - 2
                this.activeImg = store.films.length - 1
                this.mynextImg = 0
            } else {
                this.activeImg--
                this.mynextImg--
                this.myprevImg--
                
            }
        },


    },

    mounted() {

    }
};

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <div class="my-movie-pl p-1">
                    <h3 class="ms-2">New Movie</h3>
                    <div class="ms-2">Lorem Ipsum is simply dummy text of the printing and typesettin</div>
                </div>
                <div>
                    <button @click="prevImg()">dietro</button>
                    <button @click="nextImg()">avanti</button>
                </div>
            </div>
            <div class="col-12">
                <div class="carousel-container d-flex flex-wrap flex-column justify-content-center position-relative">
                    
                        <div class="test"></div>
                        <div class="test2"></div>
                        <AppSingleCardMovie class="side-card" :card="store.films[myprevImg]" />
                        <AppSingleCardMovie class="middle-card" :card="store.films[activeImg]" />
                        <AppSingleCardMovie class="side-card" :card="store.films[mynextImg]" />
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    color: white;
}

.test {
    width: calc(100% / 3);
    height: 100%;
    z-index: 100;
    background-color: white;
    position: absolute;
    opacity: 0;
}

.test2 {
    width: calc(100% / 3);
    right: 0;
    height: 100%;
    z-index: 100;
    background-color: white;
    position: absolute;
    opacity: 0;
}

.carousel-container {
    width: 100%;
    height: 660px;
}

.middle-card {
    width: calc(100% / 3);
    height: 600px;
    border-radius: 20px;
}

.side-card {
    width: calc(100% / 3);
    height: 550px;
    border-radius: 20px;
    filter: opacity(0.3);
}
</style>