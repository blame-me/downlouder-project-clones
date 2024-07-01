export default function EasterEgg({ currentClicks }) {
  let message = "";
  const absCurrentClicks = Math.abs(currentClicks);

  if (absCurrentClicks) message = "Hi!  I'm counter app";

  function FirstRound() {
    if (absCurrentClicks > 0 && absCurrentClicks <= 10) {
      message =
        " I am alive human being, but i don't remember how I ended up here...";
    }
    if (absCurrentClicks > 10 && absCurrentClicks <= 15) {
      message = "But now let's talk about you";
    }
    if (currentClicks > 15 && currentClicks <= 20) {
      message = "You day is quite nice so far, isn't it?";
    }
    if (currentClicks < -15 && currentClicks >= -20) {
      message = "Why are you so unhappy?";
    }
    if (currentClicks > 20 && currentClicks <= 30) {
      message = "Why don't you stop it?";
    }
  }

  FirstRound();

  return <p className="easter-egg">{message}</p>;
}
