export function Layout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      {children}
    </div>
  );
}
