import "./App.css";
import { useState } from "react";
import CountCard from "./components/CountCard";
import EasterEgg from "./components/EasterEgg";
import Header from "./components/Header";

export default function App() {
  const MAX_ALLOWED_CLICKS = 50;

  const [currentClicks, setCurrentClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  function handleDecrease() {
    setCurrentClicks((clicks) => {
      if (clicks <= -MAX_ALLOWED_CLICKS) {
        return clicks;
      }
      return clicks - 1;
    });
    setTotalClicks((clicks) => clicks + 1);
  }

  function handleReset() {
    setTotalClicks((clicks) => clicks + 1);
    setCurrentClicks(0);
  }

  function handleIncrease() {
    setCurrentClicks((clicks) => {
      const newClicks = clicks + 1;
      if (newClicks >= MAX_ALLOWED_CLICKS) {
        return clicks;
      }
      return newClicks;
    });
    setTotalClicks((clicks) => clicks + 1);
  }

  return (
    <div>
      <Header totalClicks={totalClicks} />
      <CountCard
        currentClicks={currentClicks}
        onDecrease={handleDecrease}
        onReset={handleReset}
        onIncrease={handleIncrease}
      />
      <EasterEgg currentClicks={currentClicks} />
    </div>
  );
}
