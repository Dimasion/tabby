// Create an named instance in one file...
var bs = require("browser-sync").create('127.0.0.1:3000');

// Start the Browsersync server
bs.init({
    server: true
});

// now, retrieve the instance in another file...
var bs = require("browser-sync").get('127.0.0.1:3000');

// and call any methods on it.
bs.watch('**/*.*').on('change', bs.reload);