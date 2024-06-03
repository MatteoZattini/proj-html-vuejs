<script>
import store from '../data/store.js'
import AppSubscribe from './AppSubscribe.vue';

export default {
    name: "AppMain",

    components: {
        AppSubscribe
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
<AppSubscribe />
</template>

<style>
</style>