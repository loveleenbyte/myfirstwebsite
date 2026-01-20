const button = document.getElementById("confettiBtn");

button.addEventListener("click", () => {
  for (let i = 0; i < 150; i++) {
    createConfetti();
  }
});

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.width = "8px";
  confetti.style.height = "8px";
  confetti.style.backgroundColor = randomColor();
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.top = "-10px";
  confetti.style.opacity = Math.random();
  confetti.style.borderRadius = "50%";
  confetti.style.pointerEvents = "none";

  document.body.appendChild(confetti);

  const fall = confetti.animate(
    [
      { transform: "translateY(0px)" },
      { transform: `translateY(${window.innerHeight + 20}px)` }
    ],
    {
      duration: Math.random() * 3000 + 2000,
      easing: "ease-out"
    }
  );

  fall.onfinish = () => confetti.remove();
}

function randomColor() {
  const colors = ["#ff5e7e", "#ffd166", "#06d6a0", "#4ea8de", "#c77dff"];
  return colors[Math.floor(Math.random() * colors.length)];
}