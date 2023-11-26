export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
    '@assets/(.*)': '<rootDir>/src/assets/$1'
  }
}
