<script>
import store from '../data/store.js'
import AppSubscribe from './AppSubscribe.vue'
import AppSingleCardMovie from './AppSingleCardMovie.vue'
import AppSingleCardNews from './AppSingleCardNews.vue'
import AppNewMovieCarousel from './AppNewMovieCarousel.vue'

export default {
    name: "AppMain",

    components: {
        AppSingleCardMovie,
        AppSingleCardNews,
        AppSubscribe,
        AppNewMovieCarousel,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
      
    },

    mounted() {

    }
};

</script>

<template>
    <!-- <div class="d-flex flex-wrap">
        <AppSingleCardMovie v-for="movie in store.films" :card="movie" style="width: 23rem; height: 30rem;" />
    </div>
        <AppSingleCardNews v-for="element in store.news" :card="element" style="width: 20rem; height: 20rem;" /> -->
<AppNewMovieCarousel />
<AppSubscribe />
</template>

<style>
</style>