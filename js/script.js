const UIButtons = Array.from(document.getElementsByClassName("ui-button"));
let UIButtonTimeoutIDs = UIButtons.map(_ => null);

const animateButton = (i) => (e) => {
  clearTimeout(UIButtonTimeoutIDs[i]);

  const rect = e.target.getBoundingClientRect();
  const x = e.x - rect.x;
  const y = e.y - rect.y;

  UIButtons[i].style.setProperty("--circle-pos-x", `${x}px`);
  UIButtons[i].style.setProperty("--circle-pos-y", `${y}px`);

  UIButtons[i].classList.add("clicked");
  UIButtonTimeoutIDs[i] = setTimeout(() => {
    UIButtons[i].classList.remove("clicked");
  }, 500);
};

for (const i in UIButtons) {
  UIButtons[i].addEventListener("mousedown", animateButton(i));
}


