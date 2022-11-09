export function Stack({ children, gap, direction = "column" }) {
  return (
    <div style={{ display: "flex", flexDirection: direction, gap: gap }}>
      {children}
    </div>
  );
}
