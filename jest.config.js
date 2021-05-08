module.exports = {
  rootDir: '.',
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/tests/**'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  coveragePathIgnorePatterns: [
    'coverage',
    'src/tests',
    'src/translations',
    'src/constants',
    'src/types',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 72,
      functions: 88,
      lines: 92,
    },
  },
};
