import { it, describe, expect } from 'vitest';
import emailValidator from './email.validator';

describe(emailValidator.name, () => {
  it('should return error for invalid email', () => {
    expect(emailValidator('email@')).toContain('valid email address');
  });

  it('should return true for valid email', () => {
    expect(emailValidator('email@example.com')).toBe(true);
  });
});
