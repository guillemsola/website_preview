const apiRoutes = require('./routes');

module.exports = function (app) {
    apiRoutes(app);
    // Other route groups could go here, in the future
};