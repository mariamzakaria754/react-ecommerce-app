const BRAND = "#DB4444";

const keyframes = `
  @keyframes pl-bounce {
    0%, 80%, 100% { transform: scale(0.55); opacity: 0.25; }
    40%            { transform: scale(1);    opacity: 1;    }
  }
  @keyframes pl-fade {
    0%, 100% { opacity: 0.4; }
    50%      { opacity: 1;   }
  }
`;

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    minHeight: "60vh",
    width: "100%",
  },
  dots: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },
  dot: (i) => ({
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    background: BRAND,
    animation: `pl-bounce 1.3s ease-in-out ${i * 0.18}s infinite`,
  }),
  text: {
    fontSize: "13px",
    letterSpacing: "0.08em",
    color: "#aaa",
    textTransform: "uppercase",
    animation: "pl-fade 1.8s ease-in-out infinite",
  },
};

function PageLoader() {
  return (
    <div style={styles.root} role="status" aria-label="Loading page">
      <style>{keyframes}</style>

      <div style={styles.dots}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={styles.dot(i)} />
        ))}
      </div>

      <span style={styles.text}>Loading</span>
    </div>
  );
}
export default PageLoader;
