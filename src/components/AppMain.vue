<script>
import store from '../data/store.js'
import AppSubscribe from './AppSubscribe.vue'
import AppSingleCard from './AppSingleCard.vue'

export default {
    name: "AppMain",

    components: {
        AppSingleCard,
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
        <AppSingleCard v-for="element in store.footerLinks" style="width: 10rem; height: 10rem;" />

    <!-- </div> -->
<AppSubscribe />
</template>

<style>
</style>