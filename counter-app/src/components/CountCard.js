import Button from "./Button";
export default function CountCard({
  currentClicks,
  onDecrease,
  onReset,
  onIncrease,
}) {
  return (
    <div className="container">
      <div className="count-card">
        <p className="title">Counter App</p>
        <p className="number">{currentClicks}</p>
        <div>
          <Button
            color="#212529"
            backgroundColor="#FF605C"
            onClick={onDecrease}
          >
            Decrease{" "}
          </Button>
          <Button color="#212529" backgroundColor="#ffd43b" onClick={onReset}>
            Reset
          </Button>
          <Button
            color="#212529"
            backgroundColor="#00CA4E"
            onClick={onIncrease}
          >
            Increase
          </Button>
        </div>
      </div>
      ;
    </div>
  );
}
