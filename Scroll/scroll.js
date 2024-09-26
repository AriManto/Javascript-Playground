let cards = document.querySelectorAll(".card");
let c2 = document.querySelector("#c2");

window.addEventListener("scroll", () => {
  let SCROLL = document.scrollingElement;
  cards.forEach((card) => {
    if (
      card.classList.contains("hiddenLeft") ||
      card.classList.contains("hiddenRight")
    ) {
      if (SCROLL.scrollTop + 400 >= card.offsetTop) {
        card.classList.remove("hiddenLeft");
        card.classList.remove("hiddenRight");
        card.classList.add("shown");
      }
    }
  });
});
