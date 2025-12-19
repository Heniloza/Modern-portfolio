export const createSparkles = (x, y) => {
  const colors = ["#22c55e", "#86efac", "#4ade80", "#a7f3d0"];

  for (let i = 0; i < 18; i++) {
    const sparkle = document.createElement("span");

    sparkle.style.position = "fixed";
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.width = "6px";
    sparkle.style.height = "6px";
    sparkle.style.borderRadius = "50%";
    sparkle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "9999";

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 80 + 30;

    sparkle.animate(
      [
        { transform: "translate(0, 0)", opacity: 1 },
        {
          transform: `translate(${Math.cos(angle) * distance}px, ${
            Math.sin(angle) * -distance
          }px)`,
          opacity: 0,
        },
      ],
      {
        duration: 700,
        easing: "ease-out",
      }
    );

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 700);
  }
};
