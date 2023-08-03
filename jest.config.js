// attempting to set up a jest.config.js so that testing will work
module.exports = {
  verbose: true,
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.js',
  ],
  testEnvironment: 'jest-environment-jsdom',
};
