const elements = {
  countdownDisplay: document.getElementById("countdown-display"),
  countdownDay: document.getElementById("days-wrapper"),
  countdownHour: document.getElementById("hours-wrapper"),
  countdownMinute: document.getElementById("minutes-wrapper"),
  countdownSecond: document.getElementById("seconds-wrapper")
};

function renderCountdown() {
  const christmasDate = new Date("December 25, 2023 00:00:00").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = christmasDate - now;

    if (timeRemaining <= 0) {
      elements.countdownDisplay.innerHTML = "Merry Christmas!";
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      elements.countdownDay.innerHTML = `${days}d`;
      elements.countdownHour.innerHTML = `${hours}h`;
      elements.countdownMinute.innerHTML = `${minutes}m`;
      elements.countdownSecond.innerHTML = `${seconds}s`;
      elements.countdownDisplay.innerHTML = days;
    }
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

renderCountdown();
