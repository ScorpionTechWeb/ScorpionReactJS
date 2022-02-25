<template>
    <div class="container">
        <div
            class="positon-relative waxon_tm_main_title"
            v-scroll-reveal="{ delay: 40, distance: '30px' }"
        >
            <div class="title">
                <h3>Œuvres en vedette<span class="bg">Portfolio</span></h3>
            </div>
            <!-- End shane_tm_title -->

            <div class="portfolio_filter" :class="{ opened: active }">
                <ul>
                    <li>
                        <a
                            v-on:click="activetab = 1"
                            :class="[activetab === 1 ? 'current' : '']"
                            ><span class="first">Tout</span>
                            <span class="second">Tout</span></a
                        >
                    </li>
                    <!-- End All for tabcontent 1 -->
                    <li>
                        <a
                            v-on:click="activetab = 2"
                            :class="[activetab === 2 ? 'current' : '']"
                            ><span class="first">WebDesign</span>
                            <span class="second">WebDesign</span></a
                        >
                    </li>
                    <!-- End WebDesign tabcontent 2 -->
                    <li>
                        <a
                            v-on:click="activetab = 3"
                            :class="[activetab === 3 ? 'current' : '']"
                            ><span class="first">CMS</span>
                            <span class="second">CMS</span></a
                        >
                    </li>
                    <!-- End .CMS tabcontent 3 -->
                    <li>
                        <a
                            v-on:click="activetab = 4"
                            :class="[activetab === 4 ? 'current' : '']"
                            ><span class="first">Web-Développement</span>
                            <span class="second">Web-Développement</span></a
                        >
                    </li>
                    <!-- End Web développement tabcontent 4 -->
                </ul>
                <div
                    class="wrapper"
                    @click="active = !active"
                    :aria-pressed="active ? 'true' : 'false'"
                >
                    <span class="trigger"></span>
                </div>
            </div>
            <!-- End .portfolio-filter -->
        </div>

        <div v-if="activetab === 1" class="tabcontent">
            <div class="portfolio_inner">
                <ul>
                    <CoolLightBox
                        :items="allItems"
                        :index="index"
                        @close="index = null"
                    >
                    </CoolLightBox>
                    <li
                        v-for="(image, imageIndex) in allItems"
                        :key="imageIndex"
                    >
                        <div class="list_inner">
                            <div class="image" @click="index = imageIndex">
                                <img
                                    src="../../assets/img/thumbs/1-1.jpg"
                                    alt="Portfolio"
                                />
                                <div
                                    class="main"
                                    :style="{
                                        backgroundImage:
                                            'url(' + image.thumb + ')',
                                    }"
                                ></div>
                            </div>
                            <!-- End .image -->
                            <div class="title">
                                <h3 @click="index = imageIndex">
                                    {{ image.portfolioName }}
                                </h3>
                                <span>{{ image.portfolioType }}</span>
                            </div>
                        </div>
                    </li>
                    <!-- End li -->
                </ul>
            </div>

            <!-- End .portfolio_list -->
        </div>
        <!-- End All .tabcontent 1 -->

        <div v-if="activetab === 2" class="tabcontent">
            <div class="portfolio_inner">
                <ul>
                    <CoolLightBox
                        :items="WebDesignItems"
                        :index="index"
                        @close="index = null"
                    >
                    </CoolLightBox>
                    <li
                        v-for="(image, imageIndex) in WebDesignItems"
                        :key="imageIndex"
                    >
                        <div class="list_inner">
                            <div class="image">
                                <img
                                    src="../../assets/img/thumbs/1-1.jpg"
                                    alt="Portfolio"
                                />
                                <div
                                    class="main"
                                    @click="index = imageIndex"
                                    :style="{
                                        backgroundImage:
                                            'url(' + image.thumb + ')',
                                    }"
                                ></div>
                            </div>
                            <!-- End .image -->
                            <div class="title">
                                <h3 @click="index = imageIndex">
                                    {{ image.portfolioName }}
                                </h3>
                                <span>{{ image.portfolioType }}</span>
                            </div>
                        </div>
                    </li>
                    <!-- End li -->
                </ul>
                <!-- End .portfolio_list -->
            </div>
        </div>
        <!-- End WebDesign .tabcontent 2 -->

        <div v-if="activetab === 3" class="tabcontent">
            <div class="portfolio_inner">
                <ul>
                    <CoolLightBox
                        :items="CMSItems"
                        :index="index"
                        @close="index = null"
                    >
                    </CoolLightBox>
                    <li
                        v-for="(image, imageIndex) in CMSItems"
                        :key="imageIndex"
                    >
                        <div class="list_inner">
                            <div class="image">
                                <img
                                    src="../../assets/img/thumbs/1-1.jpg"
                                    alt="Portfolio"
                                />
                                <div
                                    class="main"
                                    @click="index = imageIndex"
                                    :style="{
                                        backgroundImage:
                                            'url(' + image.thumb + ')',
                                    }"
                                ></div>
                            </div>
                            <!-- End .image -->
                            <div class="title">
                                <h3 @click="index = imageIndex">
                                    {{ image.portfolioName }}
                                </h3>
                                <span>{{ image.portfolioType }}</span>
                            </div>
                        </div>
                    </li>
                    <!-- End li -->
                </ul>
                <!-- End .portfolio_list -->
            </div>
        </div>
        <!-- End CMS .tabcontent 3 -->

        <div v-if="activetab === 4" class="tabcontent">
            <div class="portfolio_inner">
                <ul>
                    <CoolLightBox
                        :items="WebdeveloppementItems"
                        :index="index"
                        @close="index = null"
                    >
                    </CoolLightBox>

                    <li
                        v-for="(image, imageIndex) in WebdeveloppementItems"
                        :key="imageIndex"
                    >
                        <div class="list_inner">
                            <div class="image">
                                <img
                                    src="../../assets/img/thumbs/1-1.jpg"
                                    alt="Portfolio"
                                />
                                <div
                                    class="main"
                                    @click="index = imageIndex"
                                    :style="{
                                        backgroundImage:
                                            'url(' + image.thumb + ')',
                                    }"
                                ></div>
                            </div>
                            <!-- End .image -->
                            <div class="title">
                                <h3 @click="index = imageIndex">
                                    {{ image.portfolioName }}
                                </h3>
                                <span>{{ image.portfolioType }}</span>
                            </div>
                        </div>
                    </li>
                    <!-- End li -->
                </ul>
                <!-- End .portfolio_list -->
            </div>
        </div>
        <!-- End Image .tabcontent 4 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            activetab: 1,
            allItems: [
                {
                    src: "https://WebDesign.com/43338103",
                    thumb: require("../../assets/img/portfolio/1.jpg"),
                    portfolioName: "My Song",
                    portfolioType: "WebDesign",
                },
                {
                    src: require("../../assets/img/portfolio/2.jpg"),
                    thumb: require("../../assets/img/portfolio/2.jpg"),
                    portfolioName: "Fashion Memory",
                    portfolioType: "Webdeveloppement",
                },
                {
                    src: require("../..//assets/img/portfolio/3.jpg"),
                    thumb: require("../../assets/img/portfolio/3.jpg"),
                    portfolioName: "Childhood Memory",
                    portfolioType: "Webdeveloppement",
                },
                {
                    src: "https://youtu.be/ZOoVOfieAF8",
                    thumb: require("../../assets/img/portfolio/4.jpg"),
                    portfolioName: "My Hits",
                    portfolioType: "CMS",
                },
                {
                    src: "https://youtu.be/YlBTaj0cXQY",
                    thumb: require("../..//assets/img/portfolio/5.jpg"),
                    portfolioName: "University Life",
                    portfolioType: "CMS",
                },
                {
                    src: require("../..//assets/img/portfolio/6.jpg"),
                    thumb: require("../..//assets/img/portfolio/6.jpg"),
                    portfolioName: "Beautiful Memory",
                    portfolioType: "Webdeveloppement",
                },
            ],
            WebDesignItems: [
                {
                    src: "https://WebDesign.com/43338103",
                    thumb: require("../../assets/img/portfolio/4.jpg"),
                    portfolioName: "My Sound",
                    portfolioType: "WebDesign",
                },
            ],
            CMSItems: [
                {
                    src: "https://youtu.be/YlBTaj0cXQY",
                    thumb: require("../../assets/img/portfolio/2.jpg"),
                    portfolioName: "Behance Design",
                    portfolioType: "CMS",
                },
                {
                    src: "https://youtu.be/ZOoVOfieAF8",
                    thumb: require("../../assets/img/portfolio/4.jpg"),
                    portfolioName: "My Hits",
                    portfolioType: "CMS",
                },
            ],
            WebdeveloppementItems: [
                {
                    src: require("../../assets/img/portfolio/3.jpg"),
                    thumb: require("../../assets/img/portfolio/3.jpg"),
                    portfolioName: "Beautiful Memory",
                    portfolioType: "Webdeveloppement",
                },
                {
                    src: require("../../assets/img/portfolio/4.jpg"),
                    thumb: require("../../assets/img/portfolio/4.jpg"),
                    portfolioName: "Childhood Memory",
                    portfolioType: "Webdeveloppement",
                },
                {
                    src: require("../../assets/img/portfolio/5.jpg"),
                    thumb: require("../../assets/img/portfolio/5.jpg"),
                    portfolioName: "University Lift",
                    portfolioType: "Webdeveloppement",
                },
            ],
            index: null,
        };
    },
};
</script>

<style lang="scss" scoped></style>
