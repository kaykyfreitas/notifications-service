import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New invite.'),
      category: 'social',
      recipientId: 'test-recipient-id',
    });

    expect(notification).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Ops')).toThrow();
  });

  it('should not be able to create a notification content with more than 255 characters', () => {
    expect(() => new Content('O'.repeat(256))).toThrow();
  });
});
