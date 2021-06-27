const { resolve } = require('path');

module.exports = {
  webpack: {
    alias: {
      src: resolve(__dirname, 'src/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^src$': '<rootDir>/src$1',
      },
    },
  },
};
