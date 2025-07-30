// صبر کن تا صفحه کامل بارگذاری بشه
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  // وقتی فرم سابمیت شد
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // جلوگیری از ارسال فرم

    // بررسی اینکه فیلدها خالی نباشند
    if (username.value.trim() === "" || password.value.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      // ذخیره نام کاربر در localStorage برای استفاده در صفحه داشبورد
      localStorage.setItem("loggedUser", username.value.trim());

      // انتقال به صفحه داشبورد
      window.location.href = "dashboard.html";
    }
  });
});
