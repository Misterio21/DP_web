(() => {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const pwdInput = document.getElementById("password");
  const togglePwdBtn = document.getElementById("togglePassword");
  const serverMessage = document.getElementById("server-message");

  togglePwdBtn.addEventListener("click", () => {
    pwdInput.type = pwdInput.type === "password" ? "text" : "password";
    togglePwdBtn.textContent = pwdInput.type === "text" ? "🙈" : "👁️";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    serverMessage.textContent = "";

    const email = emailInput.value.trim();
    const password = pwdInput.value;

    if (!email || !password) {
      serverMessage.style.color = "var(--danger)";
      serverMessage.textContent = "Vyplňte email a heslo.";
      return;
    }

    try {
  const res = await fetch("${BASE_URL}/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password })
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : {};

  if (res.ok) {
    window.location.href = "mainpage.html";
  } else {
    serverMessage.style.color = "var(--danger)";
    serverMessage.textContent = data.message || "Chyba přihlášení.";
  }

} catch (err) {
  serverMessage.style.color = "var(--danger)";
  serverMessage.textContent = "Chyba serveru.";
  console.error(err);
}

  });
})();
