document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      password.value.trim() === "" ||
      confirm.value.trim() === ""
    ) {
      alert("Please fill out all fields.");
      return;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.value !== confirm.value) {
      alert("Passwords do not match.");
      return;
    }

    alert(`Welcome, ${name.value}! Your account has been created 🎉`);
    form.reset();
  });
});
