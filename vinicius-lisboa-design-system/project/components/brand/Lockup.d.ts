/**
 * Horizontal wordmark lock-up with a hairline and an uppercase role line.
 * For site headers, newsletter mastheads and email signatures.
 */
export interface LockupProps {
  /** Uppercase role line. Keep under 60 characters; works in PT and EN. */
  role?: string;
  /** Wordmark size in px; the role line is derived at half of it. */
  size?: number;
  tone?: "ink" | "inverse";
  /** row = wordmark | rule | role (default). column = stacked, for narrow columns. */
  align?: "row" | "column";
  style?: React.CSSProperties;
}
export declare function Lockup(props: LockupProps): JSX.Element;
