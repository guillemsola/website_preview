<template>
    <div class="col-4">
        <div class="card text-white">
            <h3 class="card-header">{{ screenshot.name }}</h3>
            <div class="card-body">
                <img class="screenshot img-fluid" style="width:100%" :src="encodedURL(screenshot.name)" >
                <!-- <img class="mobile img-fluid" src="./assets/IPhone6_silver_frontface.png" /> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'screenshot',
    props: ['screenshot'],
    data () {
        return {

        }
    },
    methods: {
        encodedURL: function (device) {
            const mode = this.$parent.isLandscape ? this.screenshot.name + ' landscape' : this.screenshot.name;
            return 'http://localhost:3000/api/screenshot?url=' + encodeURIComponent(this.$parent.websiteURL) + '&device=' + encodeURIComponent(mode);
        }
    }
}
</script>
