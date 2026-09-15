/** A single figure with its label under a hairline. Use in rows of three or four, never alone. */
export interface StatBlockProps {
  value: string;
  label: string;
  tone?: "ink" | "accent";
  size?: "md" | "lg";
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
