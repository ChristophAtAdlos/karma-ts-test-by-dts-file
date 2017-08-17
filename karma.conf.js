// Karma configuration
// Generated on Fri Apr 21 2017 13:13:21 GMT+0200 (Mitteleuropäische Sommerzeit)
const path = require("path");

module.exports = function(config) {
    config.set({



        karmaTypescriptConfig: {
            bundlerOptions: {
                addNodeGlobals: true,
                entrypoints: /\.spec.ts$/,
                exclude: [
                    "node_modules"
                ],  // npm modules excluded from bundle
                ignore: ["ws"],  // ignored (stubbed) npm modules as module.export = {}
                noParse: "jquery",
                resolve: {
                    alias: {},  // module alias
                    extensions: [".js", ".json"],
                    directories: ["node_modules"]
                },
                transforms: [
                    require("karma-typescript-es6-transform")()
                ],
                validateSyntax: true
            },
            compilerDelay: 500,

            compilerOptions: {
                noImplicitAny: false,
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                allowJs: true,
                module: "commonjs",
                sourceMap: true,
                target: "ES5",
                lib: ["es2015", "dom"]
            },
            coverageOptions: {
                instrumentation: true,
                exclude: /\.(d|spec|test)\.ts/i,
            },
            /*
            exclude: [
                "*.d.ts"
            ],
            include: ["*"],
                */
            remapOptions: {
                warn: function (message) {
                    console.log(message);
                }
            },
            reports: {
                "html": "coverage",
                "cobertura": {
                    "directory": "coverage",
                    "filename": "cobertura.xml"
                },
                "lcovonly": {
                    "directory": "coverage",
                    "filename": "report-lcovonly.txt"
                },
                "teamcity": {
                    "directory": "coverage",
                    "filename": "teamcity.txt"
                },
                "text": {
                    "directory": "coverage",
                    "filename": "text.txt"
                },
                "text-summary": {
                    "directory": "coverage",
                    "filename": "text-summary.txt"
                },
            },
            transformPath: function (filepath) {
                filepath = "" + filepath;
                return filepath.replace(/\.d.ts$/, ".js").replace(/\.(ts|tsx)$/, ".js");
            },
            tsconfig: "./tsconfig.json"
        },

        // Plugin specific configuration
        coverageReporter: {
            instrumenterOptions: {
                istanbul: { noCompact: true }
            }
        },

        // reporter options
        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            },
            // showDiff: true,
            divider: ''
        },



        // KARMA CONFIGURATION

        // autoWatch:
        // Enable or disable watching files and executing the tests whenever one of these files changes.
        // Default: false
        autoWatch: true,

        // autoWatchBatchDelay:
        // When Karma is watching the files for changes, it tries to batch multiple changes into a single run so that
        // the test runner doesn't try to start and restart running tests more than it should. The configuration setting
        // tells Karma how long to wait (in milliseconds) after any changes have occurred before starting the test
        // process again.
        // Default: 250
        autoWatchBatchDelay: 250,

        // basePath:
        // The root path location that will be used to resolve all relative paths defined in files and exclude. If the
        // basePath configuration is a relative path then it will be resolved to the __dirname of the configuration file.
        // Default: ""
        basePath: "",

        // beforeMiddleware:
        // This is the same as middleware except that these middleware will be run before karma's own middleware.
        // Default: []
        beforeMiddleware: [],

        // browsers:
        // A list of browsers to launch and capture. When Karma starts up, it will also start up each browser which is
        // placed within this setting. Once Karma is shut down, it will shut down these browsers as well. You can
        // capture any browser manually just by opening the browser and visiting the URL where the Karma web server is
        // listening (by default it is http://localhost:9876/).
        // See config/browsers for more. Additional launchers can be defined through plugins.
        // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // Default: []
        // browsers: ['NodeWebkit', 'PhantomJS],
        browsers: ['Chrome'],

        // browserConsoleLogOptions:
        // Configure how the browser console is logged with the following properties, all of which are optional:
        // {level:  string, format: string, path: string, terminal: boolean}
        // Here the level is the desired log-level, where level log always is logged. The format is a string where %b,
        // %t, %T, and %m are replaced with the browser string, log type in lower-case, log type in uppercase, and log
        // message, respectively. This format will only effect the output file. path is the output-path of the
        // output-file, and terminal indicates if the log should be written in the terminal, or not.
        // Default: {level: "debug", format: "%b %T: %m", terminal: true}
        browserConsoleLogOptions: {level: "debug", format: "%b %T: %m", terminal: true},

        // browserDisconnectTimeout:
        // How long does Karma wait for a browser to reconnect (in ms).
        // With a flaky connection, it is pretty common that the browser disconnects, but the actual test execution is
        // still running without any problems. Karma does not treat a disconnection as an immediate failure and will
        // wait for browserDisconnectTimeout (ms). If the browser reconnects during that time, everything is fine.
        // Default: 2000
        browserDisconnectTimeout: 2000,

        // browserDisconnectTolerance:
        // The number of disconnections tolerated.
        // The disconnectTolerance value represents the maximum number of tries a browser will attempt in the case of a
        // disconnection. Usually, any disconnection is considered a failure, but this option allows you to define a
        // tolerance level when there is a flaky network link between the Karma server and the browsers.
        // Default: 0
        browserDisconnectTolerance: 0,

        // browserNoActivityTimeout:
        // How long will Karma wait for a message from a browser before disconnecting from it (in ms).
        // If, during test execution, Karma does not receive any message from a browser within
        // browserNoActivityTimeout(ms), it will disconnect from the browser.
        // Default: 10000
        browserNoActivityTimeout: 10000,

        // captureTimeout:
        // The captureTimeout value represents the maximum boot-up time allowed for a browser to start and connect to
        // Karma. If any browser does not get captured within the timeout, Karma will kill it and try to launch it again
        // and, after three attempts to capture it, Karma will give up.
        // Default: 60000
        captureTimeout: 60000,

        // client settings:
        client: {
            // When karma run is passed additional arguments on the command-line, they are passed through to the test
            // adapter as karma.config.args (an array of strings). The client.args option allows you to set this value
            // for actions other than run.
            // How this value is used is up to your test adapter - you should check your adapter's documentation to see
            // how (and if) it uses this value.
            args: undefined,

            // Run the tests inside an iFrame or a new window
            // If true, Karma runs the tests inside an iFrame. If false, Karma runs the tests in a new window. Some
            // tests may not run in an iFrame and may need a new window to run.
            useIframe: true,

            // Run the tests on the same window as the client, without using iframe or a new window
            // If true, Karma runs the tests inside the original window without using iframe. It will load the test
            // scripts dynamically.
            runInParent: true,

            // Capture all console output and pipe it to the terminal.
            captureConsole: true,

            // Clear the context window.
            // If true, Karma clears the context window upon the completion of running the tests. If false, Karma does
            // not clear the context window upon the completion of running the tests. Setting this to false is useful
            // when embedding a Jasmine Spec Runner Template.
            clearContext: true,
            mocha: {
                // You can set opts to equal true then plugin will load opts from default location 'test/mocha.opts'
                opts: 'mocha.opts',
                // This will be exposed in a reporter as `result.mocha.body`
                expose: ['body'],
                // change Karma's debug.html to the mocha web reporter
                reporter: 'html',
            }
        },

        // colors:
        // enable / disable colors in the output (reporters and logs)
        // Default: true
        colors: true,

        // Concurrency level:
        // How many browsers Karma launches in parallel.
        // Default: Infinity [type: number]
        concurrency: Infinity,

        // crossOriginAttribute:
        // When true, this will append the crossorigin attribute to generated script tags, which enables better error
        // reporting for JavaScript files served from a different origin. Disable this when you need to load external
        // scripts that are served without the necessary Access-Control-Allow-Origin header.
        // Default: true
        crossOriginAttribute: true,

        // customClientContextFile:
        // If null (default), uses karma's own client_with_context.html file (which is used when client.runInParent
        // set to true).
        // Default: null
        customClientContextFile: null,

        // customContextFile:
        // If null (default), uses karma's own context.html file.
        // Default: null
        customContextFile: null,

        // customDebugFile:
        // If null (default), uses karma's own debug.html file.
        // Default: null
        customDebugFile: null,

        // customHeaders:
        // Custom HTTP headers that will be set upon serving files by Karma's web server. Custom headers are useful,
        // especially with upcoming browser features like Service Workers.
        // Default: undefined [type: Array]
        customHeaders: undefined,

        // detached:
        // When true, this will start the karma server in another process, writing no output to the console.
        // The server can be stopped using the karma stop command.
        // Default: false
        detached: false,

        // List of files/patterns to exclude from loaded files.
        // Default: []
        exclude: [
            "**/*.d.ts",
        ],

        // failOnEmptyTestSuite:
        // Enable or disable failure on running empty test-suites. If disabled the program will return exit-code 0
        // and display a warning.
        // Default: true
        failOnEmptyTestSuite: false,

        // List of files / patterns to load in the browser
        // Default: []
        files: [
            {pattern: "src/*.ts", watched: true, served: true, included: true},
            {pattern: "src/lib/myLib.js", watched: true, served: true, included: true},  // TODO: How can we include the js lib into the package?
            {pattern: "src/*.spec.ts", watched: true, served: true, included: true},
        ],
        // forceJSONP:
        // Force socket.io to use JSONP polling instead of XHR polling.
        // Default: false
        forceJSONP: false,

        // formatError:
        // Format assertion errors and stack traces. Useful for removing vendors and compiled sources.
        // The CLI option should be a path to a file that exports the format function. This can be a function exported
        // at the root of the module or an export named formatError.
        // Arguments: msg - The entire assertion error and stack trace as a string.
        // Returns: A new error message string.
        // Default: undefined
        formatError: undefined,

        // List of frameworks you want to use. Typically, you will set this to ['jasmine'], ['mocha'] or ['qunit']...
        // Please note just about all frameworks in Karma require an additional plugin/framework library to be installed
        // (via NPM). Additional information can be found in plugins.
        // Available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        // Default: []
        // frameworks: ['jasmine','browserify'],
        frameworks: ["qunit", "sinon", "karma-typescript"],

        // Hostname to be used when capturing browsers.
        // Default: "localhost"
        hostname: "localhost",

        // httpModule:
        // Module used for Karma webserver.
        // Uses the provided module instead of node's built in http or https module. The module loaded here must exactly
        // match the interface of node's http module. This can be useful for loading in a module like node-http2 to
        // allow for http2 support. Note: if you're using this to enable http2 you must also set the protocol to https:
        // and specify certificates as http2 can only run of https.
        // Default: undefined
        httpModule: undefined,

        // httpsServerOptions:
        // Options object to be used by Node's https class. Object description can be found in the NodeJS.org API docs.
        // Default: {}
        httpsServerOptions: {},

        // jsVersion:
        // The JavaScript version to use in the Firefox browser.
        // If > 0, Karma will add a JavaScript version tag to the included JavaScript files.
        // Note: This will only be applied to the Firefox browser.
        // Default: 0
        jsVersion: 0,

        // listenAddress:
        // Address that the server will listen on. Change to 'localhost' to only listen to the loopback, or '::' to
        // listen on all IPv6 interfaces
        // Default: '0.0.0.0' or LISTEN_ADDR
        listenAddress: '0.0.0.0',

        // A list of log appenders to be used. See the documentation for log4js for more information.
        // Default: [{type: 'console'}]
        loggers: [{type: 'console'}],

        // Level of logging. Possible values:
        // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // Default: config.LOG_INFO
        logLevel: config.LOG_DEBUG,

        // middleware:
        // List of names of additional middleware you want the karma server to use. Middleware will be used in the order
        // listed. You must have installed the middleware via a plugin/framework (either inline or via NPM). Additional
        // information can be found in plugins. The plugin must provide an express/connect middleware function (details
        // about this can be found in the Express docs).
        // Default: []
        middleware: [],

        // mime:
        // Redefine default mapping from file extensions to MIME-type.
        // Set property name to required MIME, provide Array of extensions (without dots) as it's value.
        // Default: {}
        mime: {
            'text/x-typescript': ['ts'],
            'text/x-javacript': ['js']
        },

        // List of plugins to load. A plugin can be a string (in which case it will be required by Karma) or an inlined
        // plugin - Object. By default, Karma loads all siblink modules, that match karma-*.
        // Please note just about all plugins in Karma require an additional library to be installed (via NPM).
        // Default: ['karma-*']
        plugins: [
            'karma-*'
        ],

        // The port where the webserver will be listening.
        // Default: 9876
        port: 9876,

        // A map of preprocessors to use. (Preprocess matching files before serving them to the browser.)
        // Preprocessors can be loaded through plugins.
        // Please note just about all preprocessors in Karma (other than CoffeeScript and some other defaults) require
        // an additional library to be installed (via NPM).
        // Be aware that preprocessors may be transforming the files and file types that are available at run time.
        // For instance, if you are using the "coverage" preprocessor on your source files, if you then attempt to
        // interactively debug your tests, you'll discover that your expected source code is completely changed from
        // what you expected. Because of that, you'll want to engineer this so that your automated builds use the
        // coverage entry in the "reporters" list, but your interactive debugging does not.
        // Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // Default: {'**/*.coffee': 'coffee'}
        preprocessors: {
            // macht die files für den Browser ausführbar, da zb. require('module_name') im browser nicht geht.
            // '**/*.ts': ['typescript', 'browserify']
            "**/!(*.spec).ts": ["karma-typescript"],
            "**/*.spec.ts": ["karma-typescript"],
        },

        // processKillTimeout:
        // How long will Karma wait for browser process to terminate before sending a SIGKILL signal.
        // If, after test execution or after Karma attempts to kill the browser, browser is not killed within
        // processKillTimeout(ms), Karma will send a SIGKILL signal to attempt to kill the browser forcefully.
        // Default: 2000
        processKillTimeout: 2000,

        // protocol:
        // Protocol used for running the Karma webserver. Determines the use of the Node http or https class.
        // Note: Using 'https:' requires you to specify httpsServerOptions.
        // Default: 'http:'
        protocol: "http",

        // A map of path-proxy pairs.
        // Default: {}
        proxies: {},

        // proxyReq:
        // Called when requesting Proxy.
        // Default: undefined [Type: Function]
        proxyReq: undefined,

        // proxyRes:
        // Called when responsing Proxy.
        // Default: undefined [Type: Function]
        proxyRes: undefined,

        // Whether or not karma or any browsers should raise an error when an inavlid SSL certificate is found.
        // Default: true
        proxyValidateSSL: true,

        // A list of reporters to use (for test results).
        // Possible values: 'dots', 'progress'.
        // Additional reporters, such as growl, junit, teamcity or coverage can be loaded through plugins.
        // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // Please note just about all additional reporters in Karma (other than progress) require an additional library
        // to be installed (via NPM).
        // Default: ['progress']
        // reporters: ['mocha', 'coverage-istanbul'],
        reporters: ["progress", "karma-typescript"],

        // Karma will report all the tests that are slower than given time limit (in ms).
        // This is disabled by default (since the default value is 0).
        // Default: 0
        reportSlowerThan: 0,

        // restartOnFileChange:
        // When Karma is watching the files for changes, it will delay a new run until the current run is finished.
        // Enabling this setting will cancel the current run and start a new run immediately when a change is detected.
        // Default: false
        restartOnFileChange: false,

        // retryLimit:
        // When a browser crashes, karma will try to relaunch. This defines how many times karma should relaunch a
        // browser before giving up.
        // Default: 2
        retryLimit: 2,

        // Continuous Integration mode
        // If true, Karma will start and capture all configured browsers, run tests and then exit with an exit code of
        // 0 or 1 depending on whether all tests passed or any tests failed.
        // Default: false
        singleRun: false,

        // An array of allowed transport methods between the browser and testing server. This configuration setting is
        // handed off to socket.io (which manages the communication between browsers and the testing server).
        // Default: ['polling', 'websocket']
        transports: ['polling', 'websocket'],

        // upstreamProxy:
        // For use when the Karma server needs to be run behind a proxy that changes the base url, etc
        // Properties: {path: string, port: number, hostname: string, protocol: string}
        // Default: undefined [Type: Object]
        upstreamProxy: undefined,

        // The base url, where Karma runs.
        // All the Karma's urls get prefixed with the urlRoot. This is helpful when using proxies, as sometimes you
        // might want to proxy a url that is already taken by Karma.
        // Default: '/'
        urlRoot: "/",

    })
};
