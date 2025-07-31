const button = document.getElementById("changeColorBtn");
const colorDisplay = document.getElementById("colorCode");

// تابع تولید رنگ تصادفی در فرمت hex
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// وقتی روی دکمه کلیک شد
button.addEventListener("click", () => {
  const newColor = getRandomColor();      // رنگ تصادفی
  document.body.style.backgroundColor = newColor; // اعمال رنگ
  colorDisplay.textContent = newColor;    // نمایش رنگ
});
