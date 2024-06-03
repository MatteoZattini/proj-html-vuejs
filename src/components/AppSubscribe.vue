<script>
import store from '../data/store.js'

export default {
    name: "AppSubscribe",

    components: {

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
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-around">
                <div>
                    <input type="text" placeholder="first Name">
                </div>
                <div>
                    <input type="text" placeholder="Last Name">
                </div>
                <div>
                    <input type="text" placeholder="Email Address">
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <button>Subscribe</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    color: white;
}

.container {
    width: 100%;
    height: 20rem;
    background-color: #13be13;
}

input {
    background: none;
    border: 1px solid white; 
    padding: 0.5rem 1rem;
    border-radius: 25px;
}

::placeholder {
    color: white;
}
</style>