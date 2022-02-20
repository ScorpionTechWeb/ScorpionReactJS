<template>
    <!-- SERVICES -->
    <div class="waxon_tm_service">
        <div class="container">
            <div class="service_inner">
                <ul>
                    <hooper :settings="hooperSettings">
                        <slide v-for="(service, i) in serviceContent" :key="i">
                            <div class="list_inner">
                                <img
                                    class="svg"
                                    :src="service.imgSrc"
                                    alt="service image"
                                />
                                <div class="details">
                                    <h3>{{ service.title }}</h3>
                                    <p>
                                        {{ service.desc }}
                                    </p>
                                </div>
                            </div>

                            <!-- End item -->
                        </slide>
                    </hooper>
                </ul>
            </div>
        </div>
    </div>
    <!-- /SERVICES -->
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
    components: {
        Hooper,
        Slide,
    },
    data() {
        return {
            serviceContent: [
                {
                    imgSrc: require("../../assets/img/svg/code.svg"),
                    title: "Développement web",
                    desc: ` La conception Web est un processus de création similaire, avec l'intention de la présentation extérieure...`,
                },
                {
                    imgSrc: require("../../assets/img/svg/creativity.svg"),
                    title: "Design créatif",
                    desc: ` La conception Web est un processus de création similaire, avec l'intention de la présentation extérieure...`,
                },
                {
                    imgSrc: require("../../assets/img/svg/telegram.svg"),
                    title: "Brand Identity",
                    desc: ` Web design is a similar process of creation, with the
                  intention of the pre outer presenting...`,
                },
                {
                    imgSrc: require("../../assets/img/svg/photoshop.svg"),
                    title: "Adobe Photoshop",
                    desc: ` Web design is a similar process of creation, with the
                  intention of the pre outer presenting...`,
                },
            ],
            hooperSettings: {
                infiniteScroll: true,
                wheelControl: false,
                autoPlay: false,
                mouseDrag: true,
                transition: 800,
                playSpeed: 1500,
                breakpoints: {
                    1200: {
                        itemsToShow: 3,
                    },
                    576: {
                        itemsToShow: 2,
                    },
                    280: {
                        itemsToShow: 1,
                    },
                },
            },
        };
    },
};
</script>

<style lang="scss">
.service_inner {
    .hooper-slide {
        padding-right: 44px;
    }
}
</style>
