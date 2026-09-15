/**
 * "VL" monogram — the cursive fallback mark (Petit Formal Script), a signature shorthand of the name, used ONLY where the full wordmark would fall
 * below 96px / 25mm: favicon, avatar, slide corner stamp, carousel stamp.
 */
export interface MonogramProps {
  /** Square edge in px. Never below 20px — the cursive needs the extra room. */
  size?: number;
  /** filled = solid ink square (default, for avatars/favicons); boxed = hairline outline; plain = letters only. */
  variant?: "filled" | "boxed" | "plain";
  tone?: "ink" | "inverse";
  style?: React.CSSProperties;
}
export declare function Monogram(props: MonogramProps): JSX.Element;
