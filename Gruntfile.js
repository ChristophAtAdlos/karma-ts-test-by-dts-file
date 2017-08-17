var path = require("path");

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ["build/", "temp/"],
        },
        copy: {
            options: {
                timestamp: true,
                mode: true,
            },

            build: {
                files: [
                    // copy all web sources
                    {
                        expand: true,
                        cwd: "src/lib/",
                        src: ["*.js"],
                        dest: "build/lib/",
                    },
                    {
                        expand: true,
                        cwd: "temp/",
                        src: ["*.js"],
                        dest: "build/",
                    },
                ]
            }
        },
        ts: {
            default: {
                tsconfig: path.resolve("tsconfig.json"),
                passThrough: true,
            }
        },
        tslint: {
            options: {
                // can be a configuration object or a filepath to tslint.json
                configuration: "tslint.json",
                // If set to true, tslint errors will be reported, but not fail the task
                // If set to false, tslint errors will be reported, and the task will fail
                force: true
            },
            files: {
                src: [
                    "src/*.ts",
                ]
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
            }
        }

    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");

    // Default task(s).
    grunt.registerTask("build", ["clean:build", "ts", "copy:build"]);
    grunt.registerTask("default",["ts"]);
    grunt.registerTask("lint",["tslint"]);
    grunt.registerTask("unitTest",["karma"]);
};
