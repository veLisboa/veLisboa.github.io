/**
 * Horizontal rule — the system's primary structural device in place of cards, boxes and shadows.
 */
export interface RuleProps {
  /** hairline 1px (default, between items) · medium 2px (section breaks) · heavy 6px (page/slide openers). */
  weight?: "hairline" | "medium" | "heavy";
  tone?: "rule" | "strong" | "accent";
  /** Horizontal inset in px, for rules that stop short of the margin. */
  inset?: number;
  style?: React.CSSProperties;
}
export declare function Rule(props: RuleProps): JSX.Element;
