import {ElementalClient} from '../lib/main';

describe('integration tests', () => {
  const test = process.env.ELEMENTAL_CLIENT_INTEGRATION_TESTS_HOST ? it : it.skip;
  const client = new ElementalClient(
    process.env.ELEMENTAL_CLIENT_INTEGRATION_TESTS_HOST || '',
    {},
    null,
    {
      userName: process.env.ELEMENTAL_CLIENT_INTEGRATION_TESTS_USER,
      apiKey: process.env.ELEMENTAL_CLIENT_INTEGRATION_TESTS_API_KEY,
    }
  );

  test(
    'gets device settings via an authenticated request',
    () => client.sendRequest('GET', '/api/settings').
      then((data) => {
        console.log(data);
      }));
});
