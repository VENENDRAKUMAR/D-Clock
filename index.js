function updateClock() {
  const n = new Date();
  const hours = String(n.getHours()).padStart(2, '0');
  const minutes = String(n.getMinutes()).padStart(2, '0');
  const seconds = String(n.getSeconds()).padStart(2, '0');

  const clock = document.getElementById('clock');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
