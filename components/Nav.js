"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["#top", "Etusivu"],
  ["#tietoa", "Tietoa"],
  ["#tilat", "Tilat"],
  ["#hinnasto", "Hinnasto"],
  ["#ukk", "UKK"],
  ["#loyda-meidat", "Löydä meidät"],
  ["#yhteystiedot", "Yhteystiedot"],
];

const Sun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);
const Moon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const Burger = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export default function Nav({ bookingUrl }) {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <>
      <header className="nav">
        <nav aria-label="Päävalikko">
          <ul>
            {LINKS.map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="nav-controls">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={dark ? "Vaihda vaaleaan teemaan" : "Vaihda tummaan teemaan"}
        >
          {dark ? <Moon /> : <Sun />}
        </button>
        {bookingUrl && (
          <a className="nav-cta" href={bookingUrl} target="_blank" rel="noopener">
            Kirjaudu sisään<br />/ rekisteröidy
          </a>
        )}
        <button type="button" className="menu-toggle" onClick={() => setOpen(true)} aria-label="Avaa valikko" aria-expanded={open}>
          <Burger />
        </button>
      </div>

      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Valikko">
          <button type="button" className="menu-toggle close" onClick={() => setOpen(false)} aria-label="Sulje valikko">✕</button>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          {bookingUrl && <a href={bookingUrl} target="_blank" rel="noopener">Kirjaudu sisään / rekisteröidy</a>}
        </div>
      )}
    </>
  );
}
