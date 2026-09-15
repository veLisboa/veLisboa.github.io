/* @ds-bundle: {"format":4,"namespace":"ViniciusLisboaDesignSystem_249f05","components":[{"name":"Lockup","sourcePath":"components/brand/Lockup.jsx"},{"name":"Monogram","sourcePath":"components/brand/Monogram.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ArticleHeader","sourcePath":"components/editorial/ArticleHeader.jsx"},{"name":"Byline","sourcePath":"components/editorial/Byline.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"StatBlock","sourcePath":"components/editorial/StatBlock.jsx"}],"sourceHashes":{"components/brand/Lockup.jsx":"4f64e8db6329","components/brand/Monogram.jsx":"f353ddc38a61","components/brand/Wordmark.jsx":"c2742faf4f5a","components/core/Button.jsx":"5c6017da4f0d","components/core/Callout.jsx":"687ee81c57ab","components/core/Rule.jsx":"395260488a41","components/core/Tag.jsx":"e0cd2f50a03d","components/editorial/ArticleHeader.jsx":"3420561c5d99","components/editorial/Byline.jsx":"c4f772f44b14","components/editorial/PullQuote.jsx":"8f4a6a87af38","components/editorial/StatBlock.jsx":"e03d9468b8cc","slides/Slides.jsx":"6e847c166723","ui_kits/linkedin/Banner.jsx":"6f5f12fb6564","ui_kits/linkedin/Carousel.jsx":"c87193a1be97","ui_kits/linkedin/app.jsx":"614ee2cbde07","ui_kits/newsletter/ArticlePage.jsx":"dddd8bb86ae4","ui_kits/newsletter/Masthead.jsx":"f68ad415b838","ui_kits/newsletter/app.jsx":"22a3dd86e624"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ViniciusLisboaDesignSystem_249f05 = window.ViniciusLisboaDesignSystem_249f05 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Monogram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** VL monogram — cursive, a signature shorthand of the name. Petit Formal Script 400. */
function Monogram({
  size = 64,
  variant = "filled",
  tone = "ink",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  const fg = inverse ? "var(--ink-inverse)" : "var(--ink)";
  const bg = inverse ? "var(--paper-inverse)" : "var(--paper)";
  const box = {
    filled: {
      background: inverse ? "var(--paper-inverse)" : "var(--ink)",
      color: inverse ? "var(--ink)" : "var(--ink-inverse)",
      border: "none"
    },
    boxed: {
      background: bg,
      color: fg,
      border: "1px solid var(--rule-strong)"
    },
    plain: {
      background: "transparent",
      color: fg,
      border: "none"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      fontFamily: "var(--font-script)",
      fontWeight: 400,
      fontSize: size * 0.56,
      letterSpacing: "0.01em",
      lineHeight: 1,
      borderRadius: 0,
      ...box,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      transform: "translateY(-4%)"
    }
  }, "VL"));
}
Object.assign(__ds_scope, { Monogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Monogram.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-name wordmark. The default mark. Set in the display serif, never redrawn. */
function Wordmark({
  size = 32,
  tone = "ink",
  weight = 600,
  block = false,
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--ink-inverse)" : tone === "accent" ? "var(--accent)" : "var(--ink)";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: weight,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: "-0.014em",
      color,
      display: block ? "block" : "inline-block",
      whiteSpace: "nowrap",
      ...style
    }
  }), "Vinicius Lisboa");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Lockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal lock-up: wordmark, hairline, role line. For headers and email signatures. */
function Lockup({
  role = "Data & AI — Governança, Arquitetura, Microsoft Fabric",
  size = 22,
  tone = "ink",
  align = "row",
  style,
  ...rest
}) {
  const secondary = tone === "inverse" ? "var(--ink-secondary-inverse)" : "var(--ink-secondary)";
  const rule = tone === "inverse" ? "var(--rule-inverse)" : "var(--rule)";
  const row = align === "row";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: row ? "row" : "column",
      alignItems: row ? "baseline" : "flex-start",
      gap: row ? "var(--space-5)" : "var(--space-3)",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: size,
    tone: tone
  }), row && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "stretch",
      width: 1,
      background: rule,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: Math.max(11, Math.round(size * 0.5)),
      fontWeight: 500,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: secondary
    }
  }, role));
}
Object.assign(__ds_scope, { Lockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Lockup.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square-cornered editorial button. No shadow, no radius, no gradient. */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  style,
  ...rest
}) {
  const pad = size === "sm" ? "8px 14px" : "12px 22px";
  const fs = size === "sm" ? "var(--step--1)" : "var(--step-0)";
  const base = {
    fontFamily: "var(--font-body)",
    fontSize: fs,
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "0.01em",
    padding: pad,
    borderRadius: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.38 : 1,
    transition: "background var(--dur) var(--ease),color var(--dur) var(--ease),border-color var(--dur) var(--ease)"
  };
  const variants = {
    primary: {
      background: "var(--ink)",
      color: "var(--ink-inverse)",
      border: "1px solid var(--ink)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--rule-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink-secondary)",
      border: "1px solid transparent",
      padding: size === "sm" ? "8px 4px" : "12px 4px"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--accent-ink)",
      border: "1px solid var(--accent)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sidenote / callout: a hairline top rule and a label, no box and no tint. */
function Callout({
  label = "Nota",
  children,
  tone = "default",
  style,
  ...rest
}) {
  const accent = tone === "accent";
  return /*#__PURE__*/React.createElement("aside", _extends({}, rest, {
    style: {
      borderTop: accent ? "var(--rule-medium) solid var(--accent)" : "var(--rule-medium) solid var(--rule-strong)",
      paddingTop: "var(--space-4)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--step--1)",
      fontWeight: 500,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: accent ? "var(--accent)" : "var(--ink-secondary)",
      marginBottom: "var(--space-3)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--step-0)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink)",
      maxWidth: "var(--measure-narrow)"
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal rule at one of three system weights. */
function Rule({
  weight = "hairline",
  tone = "rule",
  inset = 0,
  style,
  ...rest
}) {
  const h = {
    hairline: "var(--rule-hairline)",
    medium: "var(--rule-medium)",
    heavy: "var(--rule-heavy)"
  }[weight];
  const bg = tone === "strong" ? "var(--rule-strong)" : tone === "accent" ? "var(--accent)" : "var(--rule)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "separator",
    style: {
      height: h,
      background: bg,
      marginLeft: inset,
      marginRight: inset,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase metadata tag — hairline box, no fill, no radius. */
function Tag({
  children,
  tone = "default",
  style,
  ...rest
}) {
  const tones = {
    default: {
      color: "var(--ink-secondary)",
      border: "1px solid var(--rule)"
    },
    strong: {
      color: "var(--ink)",
      border: "1px solid var(--rule-strong)"
    },
    accent: {
      color: "var(--accent)",
      border: "1px solid var(--accent)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-body)",
      fontSize: "var(--step--2)",
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      padding: "4px 8px",
      borderRadius: 0,
      ...tones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ArticleHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Article / newsletter opener: heavy rule, eyebrow, display title, standfirst, byline row. */
function ArticleHeader({
  eyebrow,
  title,
  standfirst,
  meta = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--rule-heavy)",
      background: "var(--rule-strong)",
      marginBottom: "var(--space-6)"
    }
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--step--1)",
      fontWeight: 500,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--ink-secondary)",
      marginBottom: "var(--space-5)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--step-4)",
      fontWeight: 600,
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--ink)",
      maxWidth: "24em",
      margin: 0
    }
  }, title), standfirst && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--step-1)",
      lineHeight: 1.5,
      color: "var(--ink-secondary)",
      maxWidth: "var(--measure)",
      marginTop: "var(--space-5)"
    }
  }, standfirst), meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "center",
      marginTop: "var(--space-6)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--rule)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--step--1)",
      color: "var(--ink-tertiary)",
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m))));
}
Object.assign(__ds_scope, { ArticleHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ArticleHeader.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Byline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Author byline: monogram avatar, name, role, optional date. */
function Byline({
  name = "Vinicius Lisboa",
  role = "Data & AI · Curitiba, BR",
  date,
  tone = "ink",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Monogram, {
    size: 40,
    variant: "filled",
    tone: inverse ? "inverse" : "ink"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--step-0)",
      fontWeight: 500,
      color: inverse ? "var(--ink-inverse)" : "var(--ink)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--step--1)",
      color: inverse ? "var(--ink-secondary-inverse)" : "var(--ink-secondary)"
    }
  }, role, date ? " · " + date : "")));
}
Object.assign(__ds_scope, { Byline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Byline.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Display-serif pull quote with a medium rule above. No quotation-mark ornament. */
function PullQuote({
  children,
  attribution,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({}, rest, {
    style: {
      margin: 0,
      borderTop: "var(--rule-medium) solid var(--rule-strong)",
      paddingTop: "var(--space-5)",
      maxWidth: "var(--measure-narrow)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--step-2)",
      lineHeight: 1.28,
      letterSpacing: "-0.01em",
      color: "var(--ink)",
      margin: 0
    }
  }, children), attribution && /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--step--1)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--ink-tertiary)",
      marginTop: "var(--space-4)"
    }
  }, attribution));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Figure + label, separated by a hairline. Used on the speaker one-pager and slides. */
function StatBlock({
  value,
  label,
  tone = "ink",
  size = "md",
  style,
  ...rest
}) {
  const fs = size === "lg" ? "var(--step-4)" : "var(--step-3)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderTop: "1px solid var(--rule)",
      paddingTop: "var(--space-4)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: fs,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: tone === "accent" ? "var(--accent)" : "var(--ink)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--step--1)",
      lineHeight: "var(--lh-caption)",
      color: "var(--ink-secondary)",
      marginTop: "var(--space-3)",
      maxWidth: "16em"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/StatBlock.jsx", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
const {
  Wordmark,
  Monogram
} = window.ViniciusLisboaDesignSystem_249f05;
const S = {
  width: 1920,
  height: 1080,
  boxSizing: "border-box",
  padding: 96,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  background: "var(--paper)",
  overflow: "hidden"
};
function CornerMark({
  inverse
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 96,
      bottom: 72,
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 22,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: inverse ? "var(--ink-tertiary-inverse)" : "var(--ink-tertiary)"
    }
  }, "viniciuslisboa"), /*#__PURE__*/React.createElement(Monogram, {
    size: 48,
    variant: inverse ? "filled" : "boxed",
    tone: inverse ? "inverse" : "ink"
  }));
}
function SlideNum({
  n,
  inverse
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 96,
      bottom: 72,
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      color: inverse ? "var(--ink-tertiary-inverse)" : "var(--ink-tertiary)"
    }
  }, n);
}
function TitleSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: S
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 14,
      background: "var(--rule-strong)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      fontFamily: "var(--font-body)",
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--ink-secondary)"
    }
  }, "Microsoft Fabric Community Conference \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 132,
      lineHeight: 1.02,
      letterSpacing: "-0.024em",
      color: "var(--ink)",
      marginTop: 72,
      maxWidth: "13em"
    }
  }, "Governance that survives the second year"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 2,
      background: "var(--accent)",
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: 52,
    block: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 26,
      color: "var(--ink-secondary)",
      marginTop: 14
    }
  }, "Head of Operations \xB7 Data & AI \xB7 Microsoft Certified Trainer"))), /*#__PURE__*/React.createElement(CornerMark, null));
}
function DividerSlide({
  n = "02",
  label = "Part two",
  title = "Ownership before tooling"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S,
      background: "var(--paper-inverse)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 28,
      color: "var(--ink-secondary-inverse)",
      letterSpacing: "0.08em"
    }
  }, n, " \u2014 ", label), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 116,
      lineHeight: 1.06,
      letterSpacing: "-0.022em",
      color: "var(--ink-inverse)",
      marginTop: 40,
      maxWidth: "16em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 6,
      background: "var(--accent)",
      marginTop: 56
    }
  }), /*#__PURE__*/React.createElement(CornerMark, {
    inverse: true
  }));
}
function ContentSlide() {
  const rows = [["Domain", "Business responsibility. One named owner."], ["Workspace", "Delivery stage — dev, test, production."], ["Item", "Consumption contract, published with the model."]];
  return /*#__PURE__*/React.createElement("div", {
    style: S
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 2,
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--ink-secondary)"
    }
  }, "The three-level design")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 82,
      lineHeight: 1.1,
      letterSpacing: "-0.018em",
      color: "var(--ink)",
      marginTop: 44,
      maxWidth: "18em"
    }
  }, "Separate responsibility from delivery"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72,
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 48
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: "2px solid var(--rule-strong)",
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 52,
      fontWeight: 600,
      letterSpacing: "-0.016em",
      color: "var(--ink)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 28,
      lineHeight: 1.5,
      color: "var(--ink-secondary)",
      marginTop: 18
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 28,
      lineHeight: 1.5,
      color: "var(--ink-secondary)",
      marginTop: 72,
      maxWidth: "44em"
    }
  }, "Most tenants collapse all three into folders. It holds for three months, then lineage stops closing and the conversation turns political."), /*#__PURE__*/React.createElement(SlideNum, {
    n: "14"
  }), /*#__PURE__*/React.createElement(CornerMark, null));
}
function ClosingSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S,
      background: "var(--paper-inverse)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 104,
      lineHeight: 1.06,
      letterSpacing: "-0.022em",
      color: "var(--ink-inverse)",
      marginTop: 48,
      maxWidth: "15em"
    }
  }, "Governance you cannot operate is documentation."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 48,
      paddingBottom: 40
    }
  }, [["Newsletter", "viniciuslisboa.com/newsletter · PT-BR, weekly"], ["LinkedIn", "/in/viniciuslisboa"], ["Speaking", "vinicius@viniciuslisboa.com"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: "1px solid var(--rule-inverse)",
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 22,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--ink-tertiary-inverse)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 28,
      color: "var(--ink-inverse)",
      marginTop: 14
    }
  }, v)))), /*#__PURE__*/React.createElement(CornerMark, {
    inverse: true
  }));
}
function Fit({
  children,
  w = 1280
}) {
  const s = w / 1920;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: w * 1080 / 1920,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `scale(${s})`,
      transformOrigin: "top left"
    }
  }, children));
}
Object.assign(window, {
  TitleSlide,
  DividerSlide,
  ContentSlide,
  ClosingSlide,
  Fit
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/linkedin/Banner.jsx
try { (() => {
const {
  Wordmark,
  Monogram,
  Tag
} = window.ViniciusLisboaDesignSystem_249f05;

/** 1584 x 396 LinkedIn banner — full wordmark. Rendered at scale via transform. */
function Banner({
  dark = false,
  mono = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": dark ? "dark" : "light",
    "data-direction": mono ? "mono" : undefined,
    style: {
      width: 1584,
      height: 396,
      background: "var(--paper)",
      position: "relative",
      padding: "0 96px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: "border-box",
      border: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 8,
      background: "var(--rule-strong)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--ink-secondary)",
      marginBottom: 28
    }
  }, "Data & AI \xB7 Governan\xE7a \xB7 Arquitetura"), /*#__PURE__*/React.createElement(Wordmark, {
    size: 104,
    block: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 2,
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 24,
      color: "var(--ink-secondary)"
    }
  }, "Microsoft Fabric \xB7 Power BI \xB7 SAP Analytics \xB7 Curitiba, BR")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 96,
      top: 64
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    size: 72,
    variant: "boxed"
  })));
}

/** Profile photo treatment: 400x400, monogram fallback or photo crop rules. */
function ProfileTreatment({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    "data-theme": dark ? "dark" : "light",
    style: {
      width: 160,
      height: 160,
      background: "var(--ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontWeight: 400,
      fontSize: 90,
      letterSpacing: "0",
      color: "var(--ink-inverse)",
      lineHeight: 1
    }
  }, "VL")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-secondary)",
      marginTop: 8
    }
  }, "400\xD7400 \xB7 monogram")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 160,
      background: "var(--grey-100)",
      border: "1px solid var(--rule)",
      display: "flex",
      alignItems: "flex-end",
      padding: 12,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ink-tertiary)",
      lineHeight: 1.4
    }
  }, "Foto: retrato B&W, fundo claro liso, enquadramento peito-acima, olhos no ter\xE7o superior.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-secondary)",
      marginTop: 8
    }
  }, "400\xD7400 \xB7 foto (preferida)")));
}
Object.assign(window, {
  Banner,
  ProfileTreatment
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/linkedin/Banner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/linkedin/Carousel.jsx
try { (() => {
const {
  Wordmark,
  Monogram,
  Tag,
  Rule
} = window.ViniciusLisboaDesignSystem_249f05;
const SLIDE = {
  width: 1080,
  height: 1080,
  background: "var(--paper)",
  boxSizing: "border-box",
  padding: 88,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  border: "1px solid var(--rule)"
};
function Stamp({
  n,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 88,
      right: 88,
      bottom: 64,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid var(--rule)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    size: 40,
    variant: "plain"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      color: "var(--ink-tertiary)"
    }
  }, n, "/", total));
}
function CoverSlide({
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": dark ? "dark" : "light",
    style: SLIDE
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 12,
      background: "var(--rule-strong)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--ink-secondary)"
    }
  }, "Governan\xE7a no Fabric"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 124,
      lineHeight: 1.0,
      letterSpacing: "-0.022em",
      marginTop: 56,
      color: "var(--ink)"
    }
  }, "Dom\xEDnios n\xE3o s\xE3o pastas"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 34,
      lineHeight: 1.45,
      color: "var(--ink-secondary)",
      marginTop: 48,
      maxWidth: "22em"
    }
  }, "Tr\xEAs n\xEDveis que sustentam opera\xE7\xE3o \u2014 e o erro que aparece no sexto m\xEAs."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 44,
    block: true
  })), /*#__PURE__*/React.createElement(Stamp, {
    n: 1,
    total: 7
  }));
}
function ContentSlide({
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": dark ? "dark" : "light",
    style: SLIDE
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 2,
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--ink-secondary)"
    }
  }, "O desenho que funciona")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 78,
      lineHeight: 1.1,
      letterSpacing: "-0.018em",
      marginTop: 44,
      color: "var(--ink)"
    }
  }, "Responsabilidade, entrega, consumo"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: "grid",
      gap: 40
    }
  }, [["Domínio", "Área de responsabilidade do negócio. Um dono nomeado."], ["Workspace", "Estágio de entrega: dev, teste, produção."], ["Item", "Contrato de consumo publicado junto do modelo."]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: "1px solid var(--rule)",
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 44,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 30,
      lineHeight: 1.45,
      color: "var(--ink-secondary)",
      marginTop: 12
    }
  }, v)))), /*#__PURE__*/React.createElement(Stamp, {
    n: 4,
    total: 7
  }));
}
function ClosingSlide({
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": dark ? "dark" : "light",
    style: {
      ...SLIDE,
      background: "var(--paper-inverse)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 96,
      lineHeight: 1.06,
      letterSpacing: "-0.022em",
      color: "var(--ink-inverse)",
      marginTop: 40,
      maxWidth: "13em"
    }
  }, "Se a governan\xE7a n\xE3o \xE9 oper\xE1vel, \xE9 documenta\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: "var(--accent)",
      width: 120
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 32,
      lineHeight: 1.4,
      color: "var(--ink-secondary-inverse)",
      maxWidth: "20em",
      margin: 0
    }
  }, "Escrevo sobre Fabric, Power BI e governan\xE7a toda semana. Newsletter no link do perfil."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 88,
      height: 88,
      background: "var(--ink-inverse)",
      color: "var(--paper-inverse)",
      fontFamily: "var(--font-script)",
      fontWeight: 400,
      fontSize: 50,
      letterSpacing: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "VL"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 46,
      letterSpacing: "-0.014em",
      color: "var(--ink-inverse)"
    }
  }, "Vinicius Lisboa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 24,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--ink-tertiary-inverse)",
      marginTop: 8
    }
  }, "Data & AI \xB7 Curitiba, BR")))));
}
Object.assign(window, {
  CoverSlide,
  ContentSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/linkedin/Carousel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/linkedin/app.jsx
try { (() => {
const {
  Button,
  Rule
} = window.ViniciusLisboaDesignSystem_249f05;
function Frame({
  w,
  h,
  scale,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale,
      height: h * scale,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      width: w,
      height: h
    }
  }, children)), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-secondary)",
      marginTop: 8
    }
  }, label));
}
function App() {
  const [tab, setTab] = React.useState("banner");
  const [dark, setDark] = React.useState(false);
  const tabs = [["banner", "Banner + foto"], ["carousel", "Carrossel"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-sunken)",
      minHeight: "100vh",
      padding: "32px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "2px solid var(--rule-strong)",
      paddingBottom: 12,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, tabs.map(([k, l]) => /*#__PURE__*/React.createElement(Button, {
    key: k,
    size: "sm",
    variant: tab === k ? "primary" : "ghost",
    onClick: () => setTab(k)
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => setDark(d => !d)
  }, dark ? "Claro" : "Escuro")), tab === "banner" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    w: 1584,
    h: 396,
    scale: 0.49,
    label: "1584 \xD7 396 \u2014 banner LinkedIn (wordmark completo)"
  }, /*#__PURE__*/React.createElement(Banner, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      display: "block",
      marginBottom: 14
    }
  }, "Foto de perfil"), /*#__PURE__*/React.createElement(ProfileTreatment, {
    dark: dark
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    scale: 0.23,
    label: "Capa"
  }, /*#__PURE__*/React.createElement(CoverSlide, {
    dark: dark
  })), /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    scale: 0.23,
    label: "Conte\xFAdo"
  }, /*#__PURE__*/React.createElement(ContentSlide, {
    dark: dark
  })), /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    scale: 0.23,
    label: "Fechamento"
  }, /*#__PURE__*/React.createElement(ClosingSlide, {
    dark: dark
  })))));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/linkedin/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/ArticlePage.jsx
try { (() => {
const {
  ArticleHeader,
  PullQuote,
  Callout,
  Rule,
  Tag,
  Byline
} = window.ViniciusLisboaDesignSystem_249f05;
function P({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--step-0)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink)",
      maxWidth: "var(--measure)",
      marginBottom: "var(--space-6)"
    }
  }, children);
}
function H2({
  children
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--step-3)",
      marginTop: "var(--space-9)",
      marginBottom: "var(--space-5)"
    }
  }, children);
}
function ArticlePage() {
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement(ArticleHeader, {
    eyebrow: "Governan\xE7a \xB7 Microsoft Fabric",
    title: "Dom\xEDnios no Fabric n\xE3o s\xE3o pastas",
    standfirst: "Quase todo tenant que eu audito trata dom\xEDnio como organiza\xE7\xE3o de arquivos. Funciona por tr\xEAs meses \u2014 e o custo aparece no sexto.",
    meta: ["12 mar 2026", "8 min de leitura", "PT-BR"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 260px",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(P, null, "Um dom\xEDnio representa responsabilidade sobre um conjunto de dados: quem aprova mudan\xE7a de modelo, quem responde quando o n\xFAmero do relat\xF3rio n\xE3o fecha, quem decide o que entra em produ\xE7\xE3o. Pasta representa onde o arquivo est\xE1. S\xE3o coisas diferentes, e a confus\xE3o entre as duas \xE9 a causa mais comum de reestrutura\xE7\xE3o de tenant que eu vejo."), /*#__PURE__*/React.createElement(P, null, "Na pr\xE1tica, o desenho que sustenta opera\xE7\xE3o \xE9 simples: dom\xEDnio por \xE1rea de responsabilidade do neg\xF3cio, workspace por est\xE1gio de entrega, item por contrato de consumo. Tr\xEAs n\xEDveis, cada um com um dono nomeado."), /*#__PURE__*/React.createElement(PullQuote, {
    attribution: "Edi\xE7\xE3o 038"
  }, "Governan\xE7a que ningu\xE9m consegue operar \xE9 documenta\xE7\xE3o."), /*#__PURE__*/React.createElement(H2, null, "O que muda na opera\xE7\xE3o"), /*#__PURE__*/React.createElement(P, null, "Quando o dom\xEDnio carrega responsabilidade, a revis\xE3o de acesso deixa de ser um exerc\xEDcio de listar pessoas e passa a ser uma pergunta de neg\xF3cio. A diferen\xE7a \xE9 medida em tempo de resposta a incidente, n\xE3o em n\xFAmero de p\xE1ginas de pol\xEDtica."), /*#__PURE__*/React.createElement("ol", {
    style: {
      paddingLeft: "1.2em",
      margin: "0 0 var(--space-6)",
      maxWidth: "var(--measure)"
    }
  }, ["Nomeie um dono por domínio antes de criar qualquer workspace.", "Separe entrega (dev, teste, produção) de responsabilidade (domínio).", "Publique o contrato de consumo junto do modelo semântico, não num Confluence separado."].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: "var(--step-0)",
      lineHeight: "var(--lh-body)",
      marginBottom: "var(--space-4)"
    }
  }, t))), /*#__PURE__*/React.createElement(Callout, {
    label: "Na pr\xE1tica"
  }, "Capacity F2 n\xE3o sustenta refresh incremental acima de ~50M linhas com modelo em Direct Lake mal particionado. Teste antes de prometer SLA.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    weight: "medium",
    tone: "strong"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      display: "block",
      margin: "var(--space-4) 0 var(--space-4)"
    }
  }, "Nesta edi\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, ["Domínios não são pastas", "Direct Lake e o custo do fallback", "Uma checagem de acesso por trimestre"].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: "1px solid var(--rule)",
      paddingTop: "var(--space-3)",
      fontSize: "var(--step--1)",
      color: "var(--ink-secondary)"
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Fabric"), /*#__PURE__*/React.createElement(Tag, null, "Governan\xE7a"), /*#__PURE__*/React.createElement(Tag, null, "Power BI")), /*#__PURE__*/React.createElement(Byline, {
    date: "12 mar 2026"
  }))));
}
Object.assign(window, {
  ArticlePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/ArticlePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/Masthead.jsx
try { (() => {
const {
  Wordmark,
  Lockup,
  Tag,
  Rule,
  Button
} = window.ViniciusLisboaDesignSystem_249f05;
function Masthead({
  edition = "041",
  date = "12 de março de 2026"
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "var(--rule-heavy) solid var(--rule-strong)",
      paddingBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Newsletter \xB7 Fabric, Power BI e governan\xE7a"), /*#__PURE__*/React.createElement(Wordmark, {
    size: 44,
    block: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Edi\xE7\xE3o ", edition), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--step--1)",
      color: "var(--ink-secondary)"
    }
  }, date))));
}
function MastheadFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: "var(--space-10)",
      borderTop: "var(--rule-medium) solid var(--rule-strong)",
      paddingTop: "var(--space-6)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Lockup, {
    align: "column",
    size: 20,
    role: "Curitiba, BR \xB7 PT-BR e EN"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--step--1)",
      color: "var(--ink-secondary)",
      maxWidth: "18em"
    }
  }, "Recebeu de algu\xE9m? Assine e receba as pr\xF3ximas edi\xE7\xF5es."), /*#__PURE__*/React.createElement(Button, null, "Assinar")));
}
Object.assign(window, {
  Masthead,
  MastheadFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/Masthead.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/app.jsx
try { (() => {
const {
  Button
} = window.ViniciusLisboaDesignSystem_249f05;
function App() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto",
      padding: "var(--space-8) var(--space-8) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setDark(d => !d)
  }, dark ? "Modo claro" : "Modo escuro")), /*#__PURE__*/React.createElement(Masthead, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(ArticlePage, null)), /*#__PURE__*/React.createElement(MastheadFooter, null)));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Lockup = __ds_scope.Lockup;

__ds_ns.Monogram = __ds_scope.Monogram;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ArticleHeader = __ds_scope.ArticleHeader;

__ds_ns.Byline = __ds_scope.Byline;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
