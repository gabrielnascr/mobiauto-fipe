import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    '<rootDir>/src/**/*.test.@(js|jsx|ts|tsx)': {
      lines: 85,
    },
  },
  moduleNameMapper: {
    '^app': '<rootDir>/src/app/',
    '^utils': '<rootDir>/src/utils/',
    '^hooks': '<rootDir>/src/hooks/',
    '^models': '<rootDir>/src/models/',
    '^routes': '<rootDir>/src/routes/',
    '^styles': '<rootDir>/src/styles/',
    '^layouts': '<rootDir>/src/layouts/',
    '^services': '<rootDir>/src/services/',
    '^components': '<rootDir>/src/components/',
    '^globalstore': '<rootDir>/src/globalstore/',
  },
  coveragePathIgnorePatterns: [
    '.presenter.(ts|tsx)$',
    '<rootDir>/src/globalstore',
    '<rootDir>/src/styles/index.ts',
    '<rootDir>/src/styles/assets/index.ts',
    '<rootDir>/src/styles/global-styles.ts',
  ],
};

export default createJestConfig(config);
