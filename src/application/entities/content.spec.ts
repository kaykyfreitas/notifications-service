import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    expect(() => new Content('New invite.')).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Ops')).toThrow();
  });

  it('should not be able to create a notification content with more than 255 characters', () => {
    expect(() => new Content('O'.repeat(256))).toThrow();
  });
});
