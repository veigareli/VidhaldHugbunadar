// eslint-rules/index.js
import camelCaseFunctions from './camelCaseFunctions.js';
import noMoment from './no-moment.js';
import noConsoleLog from './no-console-log.js';

export default {
  rules: {
    'camel-case-functions': camelCaseFunctions,
    'no-moment': noMoment,
    'no-console-log': noConsoleLog,
  },
};
