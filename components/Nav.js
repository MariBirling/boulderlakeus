"use client";

import { useEffect, useState } from "react";

export default function Nav({ bookingUrl }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={solid ? "nav is-solid" : "nav"}>
      <div className="inner">
        <nav aria-label="Päävalikko">
          <ul>
            <li><a href="#tietoa">Tietoa</a></li>
            <li><a href="#tilat">Tilat</a></li>
            <li><a href="#hinnasto">Hinnasto</a></li>
            <li><a href="#kurssit">Kurssit</a></li>
            <li><a href="#ukk">UKK</a></li>
            <li><a href="#yhteystiedot">Yhteystiedot</a></li>
          </ul>
        </nav>
        <a className="btn btn-hero btn-small" href={bookingUrl} target="_blank" rel="noopener">
          Kirjaudu / rekisteröidy
        </a>
      </div>
    </header>
  );
}
