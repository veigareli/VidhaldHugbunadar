import { describe, test } from 'vitest';
import { RuleTester } from 'eslint';
import camelCaseFunctions from '../eslint-rules/camelCaseFunctions.js';
import noMoment from '../eslint-rules/no-moment.js';
import noConsoleLog from '../eslint-rules/no-console-log.js';

describe('Custom ESLint Rules', () => {
  test('camel-case-functions rule should enforce camelCase', () => {
    const ruleTester = new RuleTester({
      languageOptions: { ecmaVersion: 2020 },
    });
    ruleTester.run('camel-case-functions', camelCaseFunctions, {
      valid: [{ code: 'function myFunction() {}' }],
      invalid: [
        {
          code: 'function Myfunction() {}',
          errors: [{ message: 'Function name should be in camelCase.' }],
          output: 'function myfunction() {}', // Added output property to match the fix
        },
      ],
    });
  });

  test('no-moment rule should disallow importing moment', () => {
    const ruleTester = new RuleTester({
      languageOptions: { ecmaVersion: 2020 },
    });
    ruleTester.run('no-moment', noMoment, {
      valid: [{ code: "import dayjs from 'dayjs';" }],
      invalid: [
        {
          code: "import moment from 'moment';",
          errors: [{ message: 'Do not use the moment library.' }],
        },
      ],
    });
  });

  test('no-console-log rule should disallow console.log', () => {
    const ruleTester = new RuleTester({
      languageOptions: { ecmaVersion: 2020 },
    });
    ruleTester.run('no-console-log', noConsoleLog, {
      valid: [{ code: "console.error('error');" }],
      invalid: [
        {
          code: "console.log('log');",
          errors: [{ message: 'Do not use console.log.' }],
        },
      ],
    });
  });
});
