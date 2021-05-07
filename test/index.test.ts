import vue from '../src';

describe('Test the main vue', () => {
  test('Example test', () => {
    expect(vue).toBeTruthy();
    expect(vue.$buefy).toBeTruthy();
  })
})