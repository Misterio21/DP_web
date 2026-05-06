(() => {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const pwdInput = document.getElementById("password");
  const togglePwdBtn = document.getElementById("togglePassword");
  const serverMessage = document.getElementById("server-message");
  const BASE_URL = "http://[2001:718:1c01:21:250:56ff:fe8e:6246]:3000";

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
      const res = await fetch(`${BASE_URL}/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
  body: JSON.stringify({ email, password })
});


      const data = await res.json();

      if (res.ok) {
        window.location.href = "mainpage.html";
      } else {
        serverMessage.style.color = "var(--danger)";
        serverMessage.textContent = data.message;
      }

    } catch (err) {
      serverMessage.style.color = "var(--danger)";
      serverMessage.textContent = "Chyba serveru.";
      console.error(err);
    }
  });
})();
