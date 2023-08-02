/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  /**
   * Put global jest config here
   */

  preset: 'ts-jest',

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
