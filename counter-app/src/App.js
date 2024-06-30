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
          <Button color="#222" backgroundColor="#FF605C">
            Decrease{" "}
          </Button>
          <Button color="#222" backgroundColor="#ffd43b">
            Reset
          </Button>
          <Button color="#222" backgroundColor="#00CA4E">
            Increase
          </Button>
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
      </div>
    </header>
  );
}

function Footer() {
  return <footer>Count 'em all!</footer>;
}

function Button({
  color = "#fff",
  backgroundColor = "#38f",
  children = "Button",
}) {
  const buttonStyle = {
    color,
    backgroundColor,
    boxShadow: `6px 6px 5px 2px ${"#212529"}`,
  };
  return (
    <button style={buttonStyle} className="action-button">
      {children}
    </button>
  );
}
