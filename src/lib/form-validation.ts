const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function cleanInput(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value);
}
