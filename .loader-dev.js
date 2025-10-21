// ============================
// DEV WELLNESS PLAN DEV LOADER (HTML + CSS + JS)
// ============================

(() => {
  const manualBump = "1"; // bump this if your browser caches aggressively

  const today = new Date();
  const daily =
    today.getFullYear().toString() +
    (today.getMonth() + 1).toString().padStart(2, "0") +
    today.getDate().toString().padStart(2, "0");

  const version = daily + (manualBump ? "-" + manualBump : "");
  const ts = Date.now();

  const base = "https://providers4654.github.io/wellness-plan-assets";

  // === 1. Load HTML shell ===
  fetch(`${base}/wellness-plan.html?v=${version}&t=${ts}`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("wellness-root").innerHTML = html;

      // === 2. Load CSS after HTML ===
      const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = `${base}/wellness-plan.css?v=${version}&t=${ts}`;
      cssLink.crossOrigin = "anonymous";
      cssLink.referrerPolicy = "no-referrer";
      document.head.appendChild(cssLink);

      // === 3. Load JS logic (DEV version) ===
      const jsScript = document.createElement("script");
      jsScript.src = `${base}/wellness-plan-dev.js?v=${version}&t=${ts}`;
      jsScript.crossOrigin = "anonymous";
      jsScript.referrerPolicy = "no-referrer";
      jsScript.onload = () => {
        console.log("[Loader DEV] wellness-plan-dev.js loaded successfully 🚀");
      };
      document.body.appendChild(jsScript);
    })
    .catch(err => console.error("[Wellness DEV Loader] Failed to load HTML", err));

  console.log(`[Wellness Plan DEV Loader] version=${version}, ts=${ts}`);
})();
