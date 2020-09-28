exports.config = {
  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    browserName: "chrome",
  },

  framework: "jasmine",

  specs: ["./tests/specs.js"],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000, // Default time to wait in ms before a test fails.
  },
};
