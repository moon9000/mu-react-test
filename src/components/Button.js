export function Button({ backgroundColor, title, onClick }) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: "white",
        width: "296px",
        height: "48px",
        border: "none",
        cursor: "pointer",
        borderRadius: "3px",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
