/** Uppercase hairline metadata tag: edition numbers, topics, languages, event names. */
export interface TagProps {
  children?: React.ReactNode;
  tone?: "default" | "strong" | "accent";
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
