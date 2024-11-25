import { it, describe, expect } from 'vitest';
import passwordValidator from './password.validator';

describe(passwordValidator.name, () => {
  it('should return error for too short password', () => {
    expect(passwordValidator('abcd')).toContain('at least 6');
  });

  it('should return error for passwords without a digit', () => {
    expect(passwordValidator('abcdefgh')).toContain('both letters and digits');
  });

  it('should return error for passwords without a letter', () => {
    expect(passwordValidator('123456789')).toContain('both letters and digits');
  });

  it('should return true for valid passwords', () => {
    expect(passwordValidator('123456789abc')).toBe(true);
  });
});
