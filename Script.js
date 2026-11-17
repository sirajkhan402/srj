// Custom cursor for .cursor-dot and .cursor-outline
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

if (dot && outline) {
  let mouseX = 0, mouseY = 0, outX = 0, outY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
    dot.classList.add("active");
    outline.classList.add("active");
  });

  // Outline follows the dot smoothly
  function follow() {
    outX += (mouseX - outX) * 0.15;
    outY += (mouseY - outY) * 0.15;
    outline.style.left = outX + "px";
    outline.style.top = outY + "px";
    requestAnimationFrame(follow);
  }
  follow();

  // Grow outline on hoverable items
  document.querySelectorAll("li, img, a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => outline.classList.add("hover"));
    el.addEventListener("mouseleave", () => outline.classList.remove("hover"));
  });
}