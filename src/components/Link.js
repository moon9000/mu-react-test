export function Link({ href, children }) {
  return (
    <a
      href={href}
      style={{
        color: "#dcdcda",
        fontSize: "12px",
        fontWeight: "bold",
        marginLeft: "auto",
      }}
    >
      {children}
    </a>
  );
}
