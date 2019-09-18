import { identity } from '@/main';

// describe('A test', () => {
  test('Should pass', () => {
    const i = identity(5);
    expect(i).toBe(5);
  });
// });
