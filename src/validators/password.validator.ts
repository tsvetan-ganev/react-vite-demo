const MIN_LENGTH = 6;

export default function passwordValidator(
  candidatePassword: string
): boolean | string {
  if (
    typeof candidatePassword !== 'string' ||
    candidatePassword.length < MIN_LENGTH
  ) {
    return `The password must be at least ${MIN_LENGTH} characters long.`;
  }

  let hasLetter = false;
  let hasDigit = false;

  for (const symbol of candidatePassword) {
    if (/[0-9]/.test(symbol)) {
      hasDigit = true;
    } else if (/[a-zA-Z]/.test(symbol)) {
      hasLetter = true;
    }

    if (hasDigit && hasLetter) {
      return true;
    }
  }

  return 'The password must contain both letters and digits.';
}
