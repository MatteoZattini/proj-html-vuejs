<script>
import store from '../data/store.js'

export default {
    name: "AppSingleCard",

    components: {

    },

    props: 
        ["card"],
        

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
    <div class="card position-relative">
        <img class="object-fit-cover" src="../assets/img/1-2-300x300.jpg" alt="">
        <span class="position-absolute top-0 end-0">ciao</span>
        <span class="position-absolute top-0 start-0">ciao</span>
        <span class="position-absolute bottom-0 end-0"> ciao</span>
        <span class="position-absolute bottom-0 start-0"> ciao</span>
    </div>
</template>

<style scoped>
*{
    color: white;
}
div {
    border: 1px solid white;
}

.card{
   overflow: hidden;
}

img {
    width: 100%;
    height: 100%;
}

img:hover {
    transform: scale(1.5);
    transition: 400ms;
    
}

.card:hover {
    background: #13be13;
}
</style>