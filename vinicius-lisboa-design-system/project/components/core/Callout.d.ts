/** Sidenote built from a rule and a label instead of a tinted box — the system has no tinted boxes. */
export interface CalloutProps {
  /** Uppercase label, e.g. "Nota", "Na prática", "Aviso". */
  label?: string;
  children?: React.ReactNode;
  tone?: "default" | "accent";
  style?: React.CSSProperties;
}
export declare function Callout(props: CalloutProps): JSX.Element;
