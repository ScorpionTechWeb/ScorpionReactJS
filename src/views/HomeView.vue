<template>
    <div>
        <Header />
        <!-- End Header -->

        <Slider />
        <!-- End Slider -->

        <About />
        <!-- End About -->

        <Service />
        <!-- End Service -->

        <div class="waxon_tm_portoflio" id="portfolio">
            <Portfolio />
        </div>
        <!-- End Portfolio -->

        <Testimonial />
        <!-- End Testimonial -->

        <div class="waxon_tm_news" id="news">
            <div class="container">
                <div class="waxon_tm_main_title">
                    <div class="title">
                        <h3>Dernières articles<span class="bg">News</span></h3>
                    </div>
                </div>
                <News />
            </div>
        </div>
        <!-- End News -->

        <div class="waxon_tm_contact" id="contact">
            <div class="bg_image"></div>
            <div class="container">
                <div class="contact_inner">
                    <div class="waxon_tm_main_title">
                        <div
                            class="title"
                            v-scroll-reveal="{ delay: 20, distance: '20px' }"
                        >
                            <h3>
                                Restons en contact<span class="bg"
                                    >Contact</span
                                >
                            </h3>
                        </div>
                    </div>
                    <div
                        class="desc"
                        v-scroll-reveal="{ delay: 30, distance: '20px' }"
                    >
                        <p>
                            Veuillez remplir le formulaire de cette section pour
                            me contacter.<br />ou Appelez nous entre 10h00 et
                            17h00 du lundi au vendredi
                        </p>
                    </div>
                    <div class="wrapper">
                        <div class="left" v-scroll-reveal="{ delay: 40 }">
                            <Contact />
                        </div>
                        <div class="right" v-scroll-reveal="{ delay: 60 }">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End contact -->

        <Footer />

        <!-- End End Footer -->
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/slider/SliderTwo.vue";
import About from "../components/about/About.vue";
import Service from "../components/services/Service.vue";
import Portfolio from "../components/portfolio/Portfolio.vue";
import Testimonial from "../components/testimonial/Testimonial.vue";
import News from "../components/news/News.vue";
import Contact from "../components/Contact.vue";
import Map from "../components/Map.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
        Header,
        Slider,
        About,
        Service,
        Portfolio,
        Testimonial,
        News,
        Contact,
        Map,
        Footer,
    },
};
</script>

<style lang="scss" scoped></style>
