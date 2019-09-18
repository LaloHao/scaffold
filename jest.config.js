// leave files as is, they should be processed by webpack+babel
// const { jsWithTs: preset } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
  ],
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests/',
  ],
  testMatch: [
    '<rootDir>/tests/**/*.(spec|test).[tj]s?(x)',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx',
  ],
  globals: {
    'ts-jest': {
      // babel integration not quite ready yet
      babelConfig: false,
      tsConfig: './tsconfig.jest.json',
    },
    window: {},
  },
  moduleNameMapper: {
    // reflect `tsConfig` paths
    '^@/(.*)': '<rootDir>/src/$1',
  },
  verbose: true,
  setupFiles: [
    '<rootDir>/jest.init.ts',
  ],
}
