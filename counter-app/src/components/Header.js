export default function Header({ totalClicks }) {
  return (
    <header>
      <div className="total-clicks">
        <span>Total clicks: {totalClicks}</span>
      </div>
    </header>
  );
}
