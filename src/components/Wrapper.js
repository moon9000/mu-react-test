export function Wrapper({ children }) {
  return (
    <div style={{ width: "295px", display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  );
}
