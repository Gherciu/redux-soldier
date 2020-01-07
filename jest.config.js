module.exports = {
  collectCoverageFrom: [
    'packages/**/*.(ts)',
    '!packages/multipack-e2e-tests/**/*.test.(ts)',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testRegex: 'tests/.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/packages/multipack-e2e-tests/'],
  preset: 'ts-jest',
}
