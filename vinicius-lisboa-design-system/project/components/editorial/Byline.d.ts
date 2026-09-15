/** Byline row — monogram avatar plus name and role. The one place the monogram appears inline. */
export interface BylineProps {
  name?: string;
  role?: string;
  date?: string;
  tone?: "ink" | "inverse";
  style?: React.CSSProperties;
}
export declare function Byline(props: BylineProps): JSX.Element;
