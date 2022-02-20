<template>
    <div class="waxon_tm_about" id="about">
        <div class="container">
            <div class="about_inner">
                <div class="left" v-scroll-reveal="{ delay: 40 }">
                    <img
                        class="thumbnail"
                        src="../../assets/img/about/2.jpg"
                        alt="man with sunglass"
                    />
                </div>
                <!-- End left thumbnail -->
                <div class="right">
                    <div class="name" v-scroll-reveal="{ delay: 40 }">
                        <h3>Scorpion-Tech<span class="bg">Je suis</span></h3>
                        <span class="job"
                            >Agence web &amp; créateur de contenu web</span
                        >
                    </div>
                    <div class="text">
                        <p v-scroll-reveal="{ delay: 60 }">
                            Je m'appelle Vitor Dias, responsable de la société
                            Scorpion Tech.<br />
                            Je suis développeur Web et je suis très passionné et
                            dévoué à mon travail.
                        </p>
                        <p v-scroll-reveal="{ delay: 80 }">
                            Avec 5 ans d'expérience en tant que développeur Web
                            et diplôme d'un BAC +2 en developpement web et
                            mobile, j'ai acquis les compétences et les
                            connaissances nécessaires pour faire de votre projet
                            un succès.<br />
                            J'apprécie chaque étape du processus de conception,
                            de la discussion à la collaboration.
                        </p>
                    </div>
                    <div
                        class="waxon_tm_button"
                        v-scroll-reveal="{ delay: 100 }"
                    >
                        <button class="ib-button" @click="showModal">
                            <span>Mes compétences</span>
                        </button>
                    </div>
                </div>
                <!-- End right content -->
            </div>
        </div>

        <!-- Start Modalbox -->
        <transition name="fade">
            <!-- Modal -->
            <div
                :class="{ 'modal-mask': isActive }"
                id="modal"
                @click="closeModal"
                v-if="isVisible"
            >
                <div
                    class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"
                    @click.stop
                >
                    <div class="modal-content">
                        <div class="waxon_tm_modalbox_about">
                            <div class="close" @click="closeModal">
                                <img
                                    class="svg"
                                    src="../../assets/img/svg/cancel.svg"
                                    alt="cancel-img"
                                />
                            </div>
                            <!-- End .close -->
                            <div class="my_box">
                                <div class="left">
                                    <div class="about_title">
                                        <h3>Dévellopement web & Mobile</h3>
                                    </div>
                                    <!-- End .abut_title -->
                                    <div class="waxon_progress">
                                        <div class="progress_inner">
                                            <span
                                                ><span class="label"
                                                    >Wordpress &amp; PHP</span
                                                ><span class="number"
                                                    >100%</span
                                                ></span
                                            >
                                            <div class="background">
                                                <div class="bar">
                                                    <div
                                                        class="bar_in"
                                                        style="width: 100%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End progress_inner -->
                                        <div class="progress_inner">
                                            <span
                                                ><span class="label"
                                                    >Javascript &amp;
                                                    React</span
                                                ><span class="number"
                                                    >95%</span
                                                ></span
                                            >
                                            <div class="background">
                                                <div class="bar">
                                                    <div
                                                        class="bar_in"
                                                        style="width: 95%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End progress_inner -->
                                        <div class="progress_inner">
                                            <span
                                                ><span class="label"
                                                    >HTML &amp; CSS</span
                                                ><span class="number"
                                                    >90%</span
                                                ></span
                                            >
                                            <div class="background">
                                                <div class="bar">
                                                    <div
                                                        class="bar_in"
                                                        style="width: 90%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress_inner">
                                            <span
                                                ><span class="label"
                                                    >NodeJS &amp; API</span
                                                ><span class="number"
                                                    >90%</span
                                                ></span
                                            >
                                            <div class="background">
                                                <div class="bar">
                                                    <div
                                                        class="bar_in"
                                                        style="width: 90%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End progress_inner -->
                                    </div>

                                    <!-- End .waxon_progress -->
                                </div>
                                <!-- End .left -->
                                <div class="right">
                                    <div class="about_title">
                                        <h3>Langues</h3>
                                    </div>
                                    <div class="waxon_progress">
                                        <div class="progress_inner">
                                            <span
                                                ><span class="label"
                                                    >Français</span
                                                ><span class="number"
                                                    >100%</span
                                                ></span
                                            >
                                            <div class="background">
                                                <div class="bar">
                                                    <div
                                                        class="bar_in"
                                                        style="width: 100%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress_inner">
                                            <span
                                                ><span class="label"
                                                    >Portugais</span
                                                ><span class="number"
                                                    >100%</span
                                                ></span
                                            >
                                            <div class="background">
                                                <div class="bar">
                                                    <div
                                                        class="bar_in"
                                                        style="width: 100%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress_inner">
                                            <span
                                                ><span class="label"
                                                    >Anglais</span
                                                ><span class="number"
                                                    >80%</span
                                                ></span
                                            >
                                            <div class="background">
                                                <div class="bar">
                                                    <div
                                                        class="bar_in"
                                                        style="width: 80%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress_inner">
                                            <span
                                                ><span class="label"
                                                    >Espagnol</span
                                                ><span class="number"
                                                    >70%</span
                                                ></span
                                            >
                                            <div class="background">
                                                <div class="bar">
                                                    <div
                                                        class="bar_in"
                                                        style="width: 70%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End .right -->
                            </div>
                            <div class="counter">
                                <!-- <div class="about_title">
                                    <h3>Fun Facts</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div class="list_inner">
                                            <h3>777+</h3>
                                            <span>Projects Completed</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="list_inner">
                                            <h3>3K</h3>
                                            <span>Happy Clients</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="list_inner">
                                            <h3>9K+</h3>
                                            <span>Lines of Code</span>
                                        </div>
                                    </li>
                                </ul> -->
                                <!-- End ul -->
                            </div>
                            <!-- End .counter -->
                            <div class="partners">
                                <!-- <div class="about_title">
                                    <h3>Our Partners</h3>
                                </div>
                                <Brand /> -->
                            </div>
                            <!-- End .partner -->
                        </div>
                        <!-- End .tokyo_tm_modalbox_about -->
                    </div>
                </div>
            </div>
        </transition>
        <!-- End Modalbox -->
    </div>
    <!-- End about -->
</template>

<script>
// import Brand from "../Brand.vue";
export default {
    // components: {
    //     Brand,
    // },
    data() {
        return {
            isActive: false,
            isVisible: false,
        };
    },
    methods: {
        showModal: function () {
            this.isActive = true;
            this.isVisible = true;
        },
        closeModal: function () {
            this.isActive = false;
            this.isVisible = false;
        },
    },
};
</script>
