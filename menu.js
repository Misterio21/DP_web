// menu.js
export function initMenu() {
  const BASE_URL = "http://[2001:718:1c01:21:250:56ff:fe8e:6246]:3000";
  const current = window.location.pathname.split("/").pop();

  document.querySelectorAll(".menu-item").forEach(item => {
    const link = item.getAttribute("href");
    if (link === current) item.classList.add("active");
  });

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.onclick = async () => {
      try {
        const res = await fetch(`${BASE_URL}/logout`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" }
        });

        if (!res.ok) throw new Error("Odhlášení selhalo na serveru.");

        window.location.href = "index.html";
      } catch (err) {
        alert("Odhlášení selhalo: " + err.message);
      }
    };
  }
}
