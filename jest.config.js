module.exports = {
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    // Note that this comes through the exceljs module
    uuid: require.resolve('uuid'),
    axios: require.resolve('axios'),
  },
  setupFilesAfterEnv: ['./jest/setupAfterEnv.js'],
  transformIgnorePatterns: ['ace-node\\.js'],
  collectCoverage: false,
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
};
