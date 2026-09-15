/** Pull quote set in the display serif, opened by a 2px rule. No decorative quote marks. */
export interface PullQuoteProps {
  children?: React.ReactNode;
  /** Uppercase source line. */
  attribution?: string;
  style?: React.CSSProperties;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;
