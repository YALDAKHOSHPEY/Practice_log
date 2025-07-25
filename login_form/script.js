document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const username = document.querySelector("input[type='text']");
  const password = document.querySelector("input[type='password']");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // جلوی ارسال پیش‌فرض فرم رو می‌گیریم

    if (username.value.trim() === "" || password.value.trim() === "") {
      alert("لطفاً تمام فیلدها را پر کنید.");
    } else {
      alert(`ورود موفقیت‌آمیز: ${username.value}`);
      // در آینده: ارسال اطلاعات به بک‌اند یا رفتن به داشبورد
    }
  });
});
