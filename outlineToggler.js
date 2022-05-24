let clicked = false;

export const outlineToggler = () => {
const list = document.getElementsByTagName("*");
if (!clicked) {
  for (let item of list) {
    item.classList.add("outline");
    clicked = true;
  }
} else {
  for (let item of list) {
    item.classList.remove("outline");
    clicked = false;
  }
}
}

