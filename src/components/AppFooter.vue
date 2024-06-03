<script>
import store from '../data/store.js'

export default {
    name: "AppFooter",

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
        console.log(this.store.footerLinks)
    }
};

</script>

<template>
<!-- <div v-for="element in store.movies">
    <ul>
        <li v-for="links in element.links">{{ links }}</li>
    </ul>

</div> -->
<!-- FOOTER -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <h4>{{ store.footerLinks[0].titolo }}</h4>
                <p>{{ store.footerLinks[0].description }}</p>
                <div class="d-flex mt-4">
                    <div class="circle" style="background-color: #02b0e8;">
                        <a class="m-0" href=""><i class="fa-brands fa-facebook-f"></i></a>
                    </div>
                    <div class="circle" style="background-color: #02b0e8;">
                        <a class="m-0" href=""><i class="fa-brands fa-twitter"></i></a>
                    </div>
                    <div class="circle" style="background-color: aqua;">
                        <a class="m-0" href=""><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <div class="circle" style="background-color: orangered;">
                        <a class="m-0" href=""><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div class="circle" style="background-color: crimson;">
                        <a class="m-0" href=""><i class="fa-brands fa-pinterest"></i></a>
                    </div>

                </div>
            </div>
            <div class="col-3">
                <h4>{{ store.footerLinks[1].titolo }}</h4>
                <a class="d-block" v-for="links in store.footerLinks[1].links" style="line-height: 2.8rem;">{{ links }}</a>
                <div>
                    
                </div>
            </div>
            <div class="col-3">
                <h4>{{ store.footerLinks[2].titolo }}</h4>
                <a class="d-block" v-for="links in store.footerLinks[2].links" style="line-height: 2.8rem;">{{ links }}</a>
                <div>
                    
                </div>
            </div>
            <div class="col-3">
                <h4>{{ store.footerLinks[3].titolo }}</h4>
                <div v-for="element in store.footerLinks[3].recent" class="d-flex mb-5">
                    <div>
                        <img class="recent-posts-img" src="" alt="">
                    </div>
                    <div class="recent-post-desc">
                        <div>
                            <a href="">{{ element.name }}</a>
                        </div>
                        <div>
                            <span>{{ element.date }}</span>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- <footer>
    <div class="container">
        <div class="row">
            <div v-for="element in store.footerLinks" class="col-3">
                <h4>{{ element.titolo }}</h4>
                <p>{{ element.description }}</p>
                <a class="d-block" v-for="links in element.links" style="line-height: 2.8rem;">{{ links }}</a>
                
            </div>
        </div>
    </div>
</footer> -->

<!-- sezione del copyright -->
<section class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center">
                <div>
                    <a href="">Tram And Conditions</a>
                    <a href="">Policy</a>
                    <a href="">About</a>
                </div>
                <div>
                    <span>© 2020 <a class="footer-link" href="">@Themepul</a> All Rights Reserved.</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
*{
    color: white;
}

footer{
    background-color: black;
    padding: 3rem 0 1rem 0;
}

.recent-posts-img {
    width: 80px;
    height: 80px;
    border: 1px solid white;
}

.recent-post-desc {
    margin-left: 1rem;
}

.circle {
    /* border: 1px solid white; */
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.8rem;

}

.copyright {
    background-color: #060f19;
    padding: 1rem;
}

.footer-link {
    color: #13be13;
    margin: 0;
}

a{
    margin-right: 1.5rem;
    text-decoration: none;
}

a:hover {
    color: #13be13;
    transition: 450ms;
}

.footer-link:hover {
    color: white;
}
</style>