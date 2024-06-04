<script>
import store from '../data/store.js'
import AppSubscribe from './AppSubscribe.vue'
import AppSingleCardMovie from './AppSingleCardMovie.vue'
import AppSingleCardNews from './AppSingleCardNews.vue'

export default {
    name: "AppMain",

    components: {
        AppSingleCardMovie,
        AppSingleCardNews,
        AppSubscribe,
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
    <!-- <div class="d-flex"> -->
        <AppSingleCardMovie style="width: 23rem; height: 30rem;" />
        <AppSingleCardNews style="width: 23rem; height: 30rem;" />

    <!-- </div> -->
<AppSubscribe />
</template>

<style>
</style>