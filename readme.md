# Website Preview Dashboard

This project will easily display how your website is seen on different devices. Either in portrait or landscape mode. Click an image to see it in full a modal.

The project has a backend API to serve website screenshots and a UI dashboard to select the URL you want to show. For details on each sub-project review included readme.md files.

![Website screenshot](sample.png)

## API

Node express project that uses Puppeteer to expose an API to get images from an URL with a given device emulation.

## Dashboard

Vue.js Bootstrap 4 dashboard that creates a grid of devices that will show a how the same website can be rendered on different devices at a glance.

## TODO

- Add parameter to docker args to use sandbox mode only in containers
- Return browser sides and include the ability to scroll pages.

## Dockerfile

To make things even easier it can be run in a Docker container. The dockerfile builds the website application and bundles it with the main server that handles the API.

`docker build -t guillemsola/website-renderer .`

## Technology Stack

<p float="left">
<img title="Puppeteer" src="https://developers.google.com/web/tools/images/puppeteer.png" alt="Puppeteer" width="75" hspace="10"/>
<img title="Vue.js" src="https://vuejs.org/images/logo.png" alt="Vue.js" width="110" hspace="10"/>
<img title="Bootstrap 4" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg" alt="Bootstrap" width="105" hspace="10"/>
<img title="Nodejs" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="Nodejs" width="180"  hspace="10"/>
</p>