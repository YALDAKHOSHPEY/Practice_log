document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
      alert("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    // ذخیره در localStorage
    localStorage.setItem("user", JSON.stringify({ name, email }));

    // انتقال به صفحه خوش‌آمدگویی
    window.location.href = "welcome.html";
  });
});
