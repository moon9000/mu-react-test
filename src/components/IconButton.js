export function IconButton({ icon, alt, position, top, right, onClick }) {
  return (
    <button
      style={{
        border: "none",
        cursor: "pointer",
        position: position ? position : undefined,
        top: top ? top : undefined,
        right: right ? right : undefined,
      }}
      onClick={onClick}
    >
      <img src={icon} alt={alt ? alt : "icon"} />
    </button>
  );
}
