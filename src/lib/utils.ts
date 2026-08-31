/** Minimal className joiner (no external deps). Falsy values are skipped. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
