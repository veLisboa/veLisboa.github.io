/**
 * Full-name wordmark "Vinicius Lisboa" — the default brand mark.
 * Use wherever the mark can render at 96px wide / 25mm or more.
 */
export interface WordmarkProps {
  /** Rendered cap-to-descender font size in px. Minimum legible: 14px (=96px total width). */
  size?: number;
  tone?: "ink" | "inverse" | "accent";
  /** 600 default; 400 only at display sizes above 56px. */
  weight?: 400 | 500 | 600;
  block?: boolean;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
