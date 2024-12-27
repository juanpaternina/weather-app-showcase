// jest.setup.ts
jest.mock('@/helpers/config', () => ({
  getAPIKey: () => 'mocked_api_key',
}));
