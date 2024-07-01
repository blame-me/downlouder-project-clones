import "./App.css";
import { useState } from "react";

export default function App() {
  const MAX_ALLOWED_CLICKS = 2;

  const [currentClicks, setCurrentClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  function handleDecrease() {
    setCurrentClicks((clicks) => {
      if (clicks <= -MAX_ALLOWED_CLICKS) return clicks;

      return clicks - 1;
    });
    setTotalClicks((clicks) => clicks + 1);
  }

  function handleReset() {
    setCurrentClicks((clicks) => 0);
    setTotalClicks((clicks) => clicks + 1);
  }

  function handleIncrease() {
    setCurrentClicks((clicks) => {
      if (clicks >= MAX_ALLOWED_CLICKS) return clicks;

      return clicks + 1;
    });
    setTotalClicks((clicks) => clicks + 1);
  }

  return (
    <div>
      <Header totalClicks={totalClicks} />
      <CountCard
        currentClicks={currentClicks}
        onDeacrease={handleDecrease}
        onReset={handleReset}
        onIncrease={handleIncrease}
      />
      <Footer />
    </div>
  );
}

function CountCard({ currentClicks, onDeacrease, onReset, onIncrease }) {
  return (
    <div className="container">
      <div className="count-card">
        <span className="title">Counter App</span>
        <span className="number">{currentClicks}</span>
        <div>
          <Button color="#222" backgroundColor="#FF605C" onClick={onDeacrease}>
            Decrease{" "}
          </Button>
          <Button color="#222" backgroundColor="#ffd43b" onClick={onReset}>
            Reset
          </Button>
          <Button color="#222" backgroundColor="#00CA4E" onClick={onIncrease}>
            Increase
          </Button>
        </div>
      </div>
      ;
    </div>
  );
}

function Header({ totalClicks }) {
  return (
    <header>
      <div className="total-clicks">
        <span>Total clicks: {totalClicks}</span>
      </div>
    </header>
  );
}

function Footer({ children }) {
  return <footer>{children}</footer>;
}

function Button({
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
