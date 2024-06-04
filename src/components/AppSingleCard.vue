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
        getImagePath: function(img) {
                return new URL(`./assets/img/${img}`, import.meta.url).href;
            }
    },

    mounted() {

    }
};

</script>

<template>
    <div class="card position-relative">
        <!-- <div class="filtro">
        </div> -->
        <img class="object-fit-cover" src="../assets/imgs/1-2-300x300.jpg" alt="">
        <span class="position-absolute top-0 end-0 hidden">ciao</span>
        <span class="position-absolute top-0 start-0">ciao</span>
        <span class="position-absolute bottom-0 end-0"> ciao</span>
        <span class="position-absolute bottom-0 start-0"> ciao</span>
    </div>
</template>

<style scoped>
*{
    color: white;
}

.card{
   overflow: hidden;
   border-radius: 0;
   border: none;
}

img {
    width: 100%;
    height: 100%;
}

img:hover {
    transform: scale(1.5);
    transition: 400ms;   
}

.card:hover .hidden {
    margin-right: -20px;
    transition: all 0.4s ease-in-out;

}

.filtro {
    width: 100%;
    height: 100%;
    position: absolute;
}

.filtro:hover{
    background: linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(125,185,232,0) 100%);
    transition: 400ms;

}

.card:hover {
    background: linear-gradient(to bottom, rgb(104, 240, 51) 0%,rgba(125,185,232,0) 100%);
}

.hidden {
    margin-right: -145px;
    background: #13be13;
    padding: 0.5rem 2rem;
    border-radius: 25px;
}
</style>