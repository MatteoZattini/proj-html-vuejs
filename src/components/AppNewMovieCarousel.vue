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
            myprevImg: 9,
            mynextImg: 0,
        }
    },

    methods: {
        // getActiveImg() {
        //     this.activeImg = index
        //     console.log(this.activeImg)
        // },

        nextImg() {
            if (this.activeImg == 8) {
                this.activeImg = 0
                console.log(store.films)
            } else {
                this.activeImg++
                console.log(store.films)
            }
        },

        prevImg() {
            if (this.activeImg == 0) {
                this.activeImg = 8
            } else {
                this.activeImg--
            }
        }
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
                <div class="carousel-container d-flex flex-wrap flex-column">
                    <template v-for="movie, i in store.films">
                        <!-- <AppSingleCardMovie style="height: 600px; width: calc(100% / 3); border-radius: 20px;" :card="movie" /> -->
                        <AppSingleCardMovie v-show="myprevImg == activeImg - 1" style="height: 600px; width: calc(100% / 3); border-radius: 20px;" :card="movie" />
                        <AppSingleCardMovie v-show="activeImg == i" style="height: 600px; width: calc(100% / 3); border-radius: 20px;" :card="movie" />
                        <AppSingleCardMovie v-show="mynextImg == activeImg + 1" style="height: 600px; width: calc(100% / 3); border-radius: 20px;" :card="movie" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    color: white;
}

.carousel-container {
    width: 100%;
    height: 660px;
    border: 1px solid white;
    overflow: hidden;
}
</style>