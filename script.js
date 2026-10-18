(() => {
  const root = document.documentElement;
  let savedTheme = "dark";

  try {
    savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  } catch {}

  root.dataset.theme = savedTheme === "light" ? "light" : "dark";

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!toggle) return;

    const applyTheme = (theme) => {
      root.dataset.theme = theme;
      if (themeMeta) themeMeta.content = theme === "dark" ? "#101820" : "#F5F2EC";
      const nextTheme = theme === "dark" ? "light" : "dark";
      toggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
      toggle.title = `Switch to ${nextTheme} mode`;
      try {
        localStorage.setItem("portfolio-theme", theme);
      } catch {}
    };

    applyTheme(root.dataset.theme);
    toggle.addEventListener("click", () => {
      applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }, { once: true });
})();
