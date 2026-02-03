function setLastUpdated() {
    const el = document.getElementById("last-updated");
    if (!el) return;

    const today = new Date();
    el.textContent = today.toLocaleDateString();
}

function applySavedTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark");
    }
}

function setupThemeToggle() {
    const btn = document.getElementById("theme-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

applySavedTheme();
setLastUpdated();
setupThemeToggle();
