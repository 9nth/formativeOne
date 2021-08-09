module.exports = function(grunt) {
// CONFIGURE GRUNT
grunt.initConfig({
// get the configuration info from package.json file
// this way we can use things like name and version (pkg.name)
pkg: grunt.file.readJSON('package.json'),

// all of our configuration goes here
uglify: {
// uglify task configuration
options: {},
build: {}
}
});

// log something
grunt.log.write('Hello world! Here is the tutorial to install the grunt on Windows | H2s Media!!\n');

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task(s).
grunt.registerTask('default', ['uglify']);
};