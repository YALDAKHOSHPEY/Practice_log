// منتظر می‌مونه تا کل صفحه لود بشه
document.addEventListener("DOMContentLoaded", function () {

  // گرفتن فرم، ورودی کار جدید و لیست ul از صفحه
  const form = document.getElementById("todo-form"); // فرم
  const input = document.getElementById("todo-input"); // ورودی متن
  const list = document.getElementById("todo-list"); // لیست نمایش

  // وقتی فرم ارسال میشه (دکمه کلیک یا اینتر)
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // جلوگیری از reload شدن صفحه

    const taskText = input.value.trim(); // گرفتن مقدار ورودی و حذف فاصله‌ها

    if (taskText === "") {
      alert("لطفاً یک کار وارد کنید.");
      return;
    }

    // ساخت عنصر li جدید برای لیست
    const li = document.createElement("li"); // ایجاد تگ <li>
    li.textContent = taskText; // نوشتن متن داخل li

    // ساخت دکمه حذف کنار هر تسک
    const removeBtn = document.createElement("button"); // ساخت دکمه
    removeBtn.textContent = "❌"; // متن دکمه
    removeBtn.style.border = "none"; // استایل ظاهری
    removeBtn.style.background = "transparent";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.fontSize = "18px";

    // اضافه کردن دکمه حذف به li
    li.appendChild(removeBtn); // قرار دادن دکمه داخل li

    // اضافه کردن li به لیست اصلی
    list.appendChild(li); // قرار دادن li در داخل ul

    // پاک کردن ورودی بعد از افزودن
    input.value = ""; // خالی کردن input

    // وقتی روی دکمه ❌ کلیک شد، تسک حذف بشه
    removeBtn.addEventListener("click", function () {
      list.removeChild(li); // حذف li از لیست
    });
  });

});
