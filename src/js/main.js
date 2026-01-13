import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
  return `
    <a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>
  `;
}

function applyDisclaimer(info) {
  const link = document.querySelector(".disclaimer a");
  if (!link) return;

  link.href = info.url;
  link.textContent = info.fullName;
}

function applyTitle(info) {
  document.title = info.fullName;
}

function applyHeroImage(info) {
  const img = document.querySelector(".hero-banner__image");
  const first = Array.isArray(info.images) ? info.images[0] : null;
  if (!img || !first) return;

  img.src = first.url;
  img.alt = first.altText || `${info.fullName} hero image`;
}

function applyHeroText(info) {
  const container = document.querySelector(".hero-banner__content");
  if (!container) return;

  container.innerHTML = parkInfoTemplate(info);
}

applyDisclaimer(parkData);
applyTitle(parkData);
applyHeroImage(parkData);
applyHeroText(parkData);