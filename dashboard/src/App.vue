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
          <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Website URL</span>
          </div>
          <input type="text" class="form-control" aria-label="Website URL" aria-describedby="inputGroup-sizing-default" :value="websiteURL" @change="refreshUrl" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="card mt-2">
              <div class="card-header card-outline-success">
                <span>iPhone 6</span>
              </div>
              <div class="card-body">
                <img class="mobile" src="./assets/IPhone6_silver_frontface.png" />
                <img class="screenshot" :src="encodedURL" width="363">
              </div>
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
      title: 'Screenshots Dashboard'
    }
  },
  computed: {
    encodedURL: function () {
      return 'http://localhost:3000/api/screenshot?url=' + encodeURIComponent(this.websiteURL) + '&device=iPhone%206';
    }
  },
  methods : {
    refreshUrl: function (e) {
      console.log(this.websiteURL);
      this.websiteURL = e.target.value
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
