// Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default function emailValidator(
  candidateEmail: string
): boolean | string {
  if (emailRegex.test(candidateEmail)) {
    return true;
  }

  return 'Enter a valid email address.';
}
