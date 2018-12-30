<template>
  <div id="app">

    <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" style="">
      <div class="container">
        <a href="../" class="navbar-brand">{{ title }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- <a class="nav-link" href="../help/">Help</a> -->
            </li>
          </ul>

          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://bootswatch.com/slate/" target="_blank">WrapBootstrap</a>
            </li>
          </ul>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="bs-docs-section clearfix">
        <div class="row">
          <div class="col-10">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Website URL</span>
              </div>
              <input type="text" class="form-control" aria-label="Website URL" aria-describedby="inputGroup-sizing-default" :value="websiteURL" @change="refreshUrl" />
            </div>
          </div>
          <div class="col-2">
            <div class="form-check">
              <label class="form-check-label text-white">
                <input class="form-check-input" type="checkbox" value="" v-model=isLandscape>
                Landscape
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <screenshot
          v-for="device in devices" 
          v-bind:key="device.name" 
          v-bind:screenshot="device"
        ></screenshot>
      </div>
    </div>

  </div>

</template>

<script>
import Screenshot from './components/Screenshot.vue'

export default {
  name: 'app',
  components: { Screenshot },
  data () {
    return {
      websiteURL: 'https://www.google.com',
      title: 'Screenshots Dashboard',
      isLandscape: false,
      devices: [
        { name: 'iPhone 6' },
        { name: 'iPhone 8' },
        { name: 'iPad' },
        { name: 'iPad Mini' },
        { name: 'iPad Pro' },
        { name: 'Galaxy S5' },
        { name: 'Nexus 6' },
        { name: 'Pixel 2' },
      ]
    }
  },
  computed: {
    
  },
  methods : {
    refreshUrl: function (e) {
      console.log(this.websiteURL);
      this.websiteURL = e.target.value
    },

  },
}
</script>

<style>
</style>
