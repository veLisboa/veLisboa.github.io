/**
 * Opener for a newsletter edition or article page. Works in Portuguese and English.
 */
export interface ArticleHeaderProps {
  /** Uppercase kicker, e.g. "Edição 041 · Governança". */
  eyebrow?: string;
  title: string;
  /** One-sentence standfirst in secondary ink. */
  standfirst?: string;
  /** Uppercase meta items: date, reading time, language. */
  meta?: string[];
  style?: React.CSSProperties;
}
export declare function ArticleHeader(props: ArticleHeaderProps): JSX.Element;
