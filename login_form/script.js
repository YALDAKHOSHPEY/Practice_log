document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const togglePassword = document.getElementById("toggle-password");

  // نمایش/مخفی‌سازی رمز
  togglePassword.addEventListener("click", function () {
    const isVisible = password.type === "text";
    password.type = isVisible ? "password" : "text";
    togglePassword.textContent = isVisible ? "👁️" : "🙈";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (username.value.trim() === "" || password.value.trim() === "") {
      alert("لطفاً تمام فیلدها را پر کنید.");
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 400);
    } else {
      const loginBtn = form.querySelector("button");
      loginBtn.classList.add("loading");

      setTimeout(() => {
        alert(`ورود موفقیت‌آمیز: ${username.value}`);
        loginBtn.classList.remove("loading");
        form.reset();
      }, 1000);
    }
  });
});
