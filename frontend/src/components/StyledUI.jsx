import * as stylex from "@stylexjs/stylex";

const pulse = stylex.keyframes({
  "0%, 100%": { boxShadow: "0 0 0 0 rgba(34, 211, 238, 0.55)" },
  "50%": { boxShadow: "0 0 0 8px rgba(34, 211, 238, 0)" },
});

const styles = stylex.create({
  chips: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    paddingBlock: 10,
    paddingInline: 18,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: {
      default: "rgba(147, 197, 253, 0.6)",
      ":hover": "rgba(34, 211, 238, 0.9)",
    },
    backgroundColor: "rgba(255, 255, 255, 0.82)",
    color: "#1e3a8a",
    fontSize: 14,
    fontWeight: 600,
    backdropFilter: "blur(8px)",
    boxShadow: {
      default: "0 8px 22px -16px rgba(30, 64, 175, 0.6)",
      ":hover": "0 14px 28px -14px rgba(8, 145, 178, 0.7)",
    },
    transform: {
      default: "translateY(0)",
      ":hover": "translateY(-4px) scale(1.03)",
    },
    transitionProperty: "transform, box-shadow, border-color",
    transitionDuration: "200ms",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#06b6d4",
    animationName: pulse,
    animationDuration: "2.2s",
    animationIterationCount: "infinite",
  },
});

export function ExpertiseChips({ items }) {
  return (
    <ul {...stylex.props(styles.chips)} style={{ listStyle: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li key={item} {...stylex.props(styles.chip)}>
          <span
            aria-hidden="true"
            {...stylex.props(styles.dot)}
            style={{ animationDelay: `${index * 0.3}s` }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
