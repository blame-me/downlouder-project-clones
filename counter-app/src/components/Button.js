export default function Button({
  color = "#fff",
  backgroundColor = "#38f",
  children = "Button",
  onClick,
}) {
  const buttonStyle = {
    color,
    backgroundColor,
    boxShadow: `6px 6px 5px 2px ${"#212529"}`,
  };
  return (
    <button onClick={onClick} style={buttonStyle} className="action-button">
      {children}
    </button>
  );
}
