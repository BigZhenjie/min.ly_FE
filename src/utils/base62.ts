/**
 * Checks if a string contains only base62 characters (0-9, a-z, A-Z)
 * @param {string} str
 * @returns {boolean}
 */
export function isBase62(str: string): boolean {
  return /^[0-9a-zA-Z]*$/.test(str);
}


