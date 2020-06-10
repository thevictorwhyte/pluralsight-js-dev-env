//This file isn't trnaspiled, so must use CommonJs and ES5


// Register babel to tranpsile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
