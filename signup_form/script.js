document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // بررسی خالی بودن فیلدها
    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      password.value.trim() === "" ||
      confirm.value.trim() === ""
    ) {
      alert("Please fill out all fields.");
      return;
    }

    // بررسی ایمیل معتبر
    if (!email.value.includes("@") || !email.value.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    // بررسی مطابقت رمزها
    if (password.value !== confirm.value) {
      alert("Passwords do not match.");
      return;
    }

    // موفقیت
    alert(`Welcome, ${name.value}! Your account has been created 🎉`);
    form.reset();
  });
});
