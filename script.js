const getColorScheme = document.getElementById("get-color-scheme");

const colorInput = document.getElementById("color-input");
const colorList = document.getElementById("color-list");

const main = document.querySelectorAll(".main div");
const footer = document.querySelectorAll(".footer div p");

getColorScheme.addEventListener("click", function () {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${
      colorList.value
    }&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      arr = [...data.colors];
      setColor(arr, main, footer);
    });
});

function setColor(colors, sections, footer) {
  let i = 0;
  sections.forEach((section) => {
    section.style.backgroundColor = colors[i].hex.value;
    footer[i].textContent = colors[i].hex.value;
    i += 1;
  });
}
