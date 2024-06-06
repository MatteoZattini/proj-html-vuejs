

<script>
import store from '../data/store.js'

export default {
    name: "AppButton",

    components: {

    },

    data() {
        return {
            store,
            isActive: null,
            scTimer: 0,
            scY: 0,
            
            
        }
    },

    methods: {
        Activate() {
            if (window.scrollX > 100) {
                this.isActive = false
                console.log("non si vede")
                
    } else {
        this.isActive = true
        console.log("si vede")
        
    }
        },

        handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },

        
    },

    computed: {

    },

    mounted() {
        this.Activate()
        window.addEventListener('scroll', this.handleScroll)
    }

};

</script>

<template>
    <transition name="fade">
<a @click="toTop" v-show="scY > 300" class="to-top"  href=""><i class="fa-solid fa-chevron-up"></i></a>
    </transition>
</template>

<style scoped>
.to-top {
    background: white;
    position: fixed;
    bottom: 16px;
    right: 32px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    /* opacity: 0; */
    color: black;
    /* pointer-events: none; */
    transition: all .4s;
    z-index: 1000;
}

.fa-solid {
    font-size: 2rem;
    z-index: 1000;
}

.to-top.active {
    pointer-events: auto;
    bottom: 32px;
    /* opacity: 1; */
    z-index: 1000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>