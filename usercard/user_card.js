// گرفتن دکمه و کارت
const btn = document.getElementById("showCardBtn");
const card = document.getElementById("userCard");

// وقتی روی دکمه کلیک می‌کنی، کارت نمایش داده بشه
btn.addEventListener("click", () => {
  card.classList.toggle("hidden");
});
