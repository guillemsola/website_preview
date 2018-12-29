<template>
    <div class="col-4">
        <div class="card text-white">
            <h3 class="card-header">{{ screenshot.name }}</h3>
            <div class="card-body">
                <vue-load-image>
                    <img v-img slot="image" :src="encodedURL(screenshot.name)" class="screenshot img-fluid" style="width:100%" />
                    <img slot="preloader" src="../assets/spinner.svg"/>
                    <div slot="error">Error loading screnshot</div>
                </vue-load-image>
                <!-- <img v-img class="screenshot img-fluid" src="../assets/spinner.svg" style="width:100%" /> -->
            </div>
        </div>
    </div>
</template>
<script>
import VueLoadImage from 'vue-load-image';

export default {
    components: { VueLoadImage },
    name: 'screenshot',
    props: ['screenshot'],
    data () {
        return {
            showImage: false
        }
    },
    methods: {
        encodedURL: function (device) {
            const mode = this.$parent.isLandscape ? this.screenshot.name + ' landscape' : this.screenshot.name;
            return 'http://localhost:3000/api/screenshot?url=' + encodeURIComponent(this.$parent.websiteURL) + '&device=' + encodeURIComponent(mode);
        },
        imageLoaded: function () {
            console.log('img loaded');
        }
    }
}
</script>
