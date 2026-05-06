// auth.js
export async function requireLogin() {
  try {
    const BASE_URL = "http://[2001:718:1c01:21:250:56ff:fe8e:6246]:3000";
    const res = await fetch(`${BASE_URL}/auth/check`, {
      credentials: "include"
    });
    if (!res.ok) throw new Error("not logged");
    return await res.json();
  } catch (e) {
    window.location.href = "index.html"; // přesměrování
    return new Promise(() => {}); // nikdy se nevyřeší → zamezí dalšímu vykreslování
  }
}
