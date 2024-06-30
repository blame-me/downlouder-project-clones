import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <CountCard />
      <Footer />
    </div>
  );
}

function CountCard() {
  return (
    <div className="container">
      <div className="count-card">
        <span className="title">Counter App</span>
        <span className="number">0</span>
        <div>
          <Button />
          <Button />
          <Button />
        </div>
      </div>
      ;
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="total-clicks">
        <span>Total clicks: X</span>
        <button>
          <svg
            className="hhh"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="5" width="2" height="2" />
            <rect x="3" y="11" width="2" height="2" />
            <rect x="3" y="17" width="2" height="2" />
            <rect x="7" y="5" width="14" height="2" />
            <rect x="7" y="11" width="14" height="2" />
            <rect x="7" y="17" width="14" height="2" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return <footer>footer</footer>;
}

function Button() {
  return <button>My button</button>;
}
