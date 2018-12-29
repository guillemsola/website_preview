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
              <a class="nav-link" href="../help/">Help</a>
            </li>
          </ul>

          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://wrapbootstrap.com/?ref=bsw" target="_blank">WrapBootstrap</a>
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
        <div class="col-4" v-for="device in devices">
          <div class="card text-white">
            <h3 class="card-header">{{ device.name }}</h3>
            <div class="card-body">
              <img class="screenshot img-fluid" style="width:100%" :src="encodedURL(device.name)" >
              <!-- <img class="mobile img-fluid" src="./assets/IPhone6_silver_frontface.png" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'app',
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
    encodedURL: function (device) {
      const mode = this.isLandscape ? device + ' landscape' : device;
      return 'http://localhost:3000/api/screenshot?url=' + encodeURIComponent(this.websiteURL) + '&device=' + encodeURIComponent(mode);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
