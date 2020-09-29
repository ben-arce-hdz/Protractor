exports.config = {
  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:4200/',

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--incognito", "--start-maximized"],
    },
    shardTestFiles: true,
    maxInstances: 3,
  },

  framework: "mocha",

  specs: ["./tests/non_angular_pom_contact_spec.js"],

  // Options to be passed to Jasmine.
  /*
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000, // Default time to wait in ms before a test fails.
  },*/

  mochaOpts: {
    timeout: 100000,
      reporter: 'mochawesome',
     reporterOptions: {
       overwrite: false // THIS MUST BE SET TO FALSE
     }
   }


};
