const screenshot = require('../services/puppeteer');
const asyncHandler = require('express-async-handler');
const fs = require('fs');

module.exports = function (app) {
    app.get('/api/screenshot', asyncHandler(async (req, res) => {
        var device = req.query.device || 'iPhone 8';
        var url = req.query.url || 'https://www.google.com';
        console.log('Navigating to %s for device %s', url, device);
        const image = await screenshot(url, device);
        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': image.length
        });
        return res.end(image, 'binary')
    }));
};