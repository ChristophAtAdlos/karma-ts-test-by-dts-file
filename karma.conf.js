module.exports = function(config) {
    config.set({

        files: [
            { pattern: "src/**/*.+(js|ts)" },
        ],

        frameworks: ["qunit", "karma-typescript"],

        preprocessors: {
            "src/**/*.+(js|ts)": ["karma-typescript"],
        },

        reporters: ["progress", "karma-typescript"],

        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json",
        },

        autoWatch: true,
        browsers: ["Chrome"],
    });
};
