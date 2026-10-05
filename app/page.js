import Nav from "@/components/Nav";
import Wave from "@/components/Wave";
import JsonLd from "@/components/JsonLd";
import { site, prices, priceCards, faq, eur } from "@/data/site";

const Todo = ({ children }) => <span className="todo">{children}</span>;

function Ext({ href = site.bookingUrl, className, children }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

const address = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

export default function Home() {
  return (
    <>
      <JsonLd />

      <a className="logo-tile" href="#top" aria-label="Boulder Lakeus etusivu">
        <img src="/assets/logo.svg" alt="Boulder Lakeus" width="112" height="140" />
      </a>

      <Nav bookingUrl={site.bookingUrl} />

      <main id="top">
        <div className="hero">
          <div className="container">
            <p className="hero__eyebrow">Kiipeilyhalli Lakeudella – tule ylittämään rajasi</p>
            <h1 className="hero__title">Boulder Lakeus</h1>
            <p className="hero__lead">
              Kiipeile milloin haluat <strong>24/7</strong>
            </p>
            <p className="hero__info">
              Rekisteröidy käyttäjäksi ja tallenna webappi puhelimesi kotiruutuun. Se toimii jatkossa
              avaimenasi, ja sieltä ostat pääsyliput ja vuosijäsenyydet.
            </p>
            <div className="hero__ctas">
              <Ext className="btn btn-hero">Tuttu juttu. Suoraan kiipeilemään</Ext>
              <a className="btn btn-hero-outline" href="#tietoa">Eka kerta? Lue lisää</a>
            </div>
          </div>
          <Wave />
        </div>

        <section id="tietoa" className="beige capped">
          <div className="container about-grid">
            <div>
              <div className="section-head">
                <span className="tag">Aloita</span>
                <h2 className="section-title">Boulderointi Lakeudella</h2>
              </div>
              <p className="lead">
                Boulder Lakeus on boulderkiipeilyhalli Lakeudella ja {site.sister.name}n sisarhalli.
                Aloita uusi ja mukaansatempaava harrastus. Voit tulla yksin tai yhdessä kavereiden kanssa.
              </p>
              <p className="mt-1">
                Boulderkiipeily on teknisesti haastava ja mukaansatempaava laji, jonka voi aloittaa milloin
                vain. Se on yksilölaji, jonka sosiaalinen puoli tekee siitä ainutlaatuisen harrastuksen.
              </p>
              <p className="mt-1">
                <strong>Boulder Lakeus on enemmän kuin kiipeilyhalli. Se on yhteisö, joka on aina avoin.</strong>
              </p>
              <p className="mt-1">
                Kiipeily tapahtuu ilman varmistusta, ja turvallisuudesta huolehtivat pehmeät patjat.
                Tarjoamme myös yksityistunteja, tapahtumia ja ohjattuja ryhmäkursseja.
              </p>
            </div>
            <div className="note-card">
              <h3>Ensimmäinen kerta kiipeilemässä?</h3>
              <ol>
                <li>Rekisteröidy käyttäjäksi varausjärjestelmään.</li>
                <li>Tallenna webappi puhelimesi kotiruutuun. Se on avaimesi halliin.</li>
                <li>Osta lippu. Ensikertalaisten kortti sisältää kolme käyntiä ja vuokrakengät.</li>
                <li>Lue hallin turvaohjeet, lämmittele ja aloita helpoimmista reiteistä.</li>
              </ol>
              <p>Alle 14-vuotiaat ovat tervetulleita kiipeilemään aikuisen valvonnassa.</p>
              <Ext className="btn btn-primary btn-small self-start">Rekisteröidy</Ext>
            </div>
          </div>
          <Wave className="cap-white" />
        </section>

        <section id="tilat">
          <div className="container">
            <div className="section-head">
              <span className="tag">Tilat</span>
              <h2 className="section-title">Tule viihtymään</h2>
            </div>
            <div className="cards">
              <article className="card">
                <h3>Kiipeilyä ja oheistreeniä</h3>
                <p>Panostamme reitintekoon, ja uusia reittejä on tarjolla säännöllisesti. Lihaskuntoharjoitteluun löytyy myös perusvälineet.</p>
              </article>
              <article className="card">
                <h3>Shoppi</h3>
                <p>Shopista löytyy kiipeilykenkiä, mankkaa ja muuta tarpeellista.</p>
                <span className="chip">Aukiolo somessa</span>
              </article>
              <article className="card">
                <h3>Ole kuin kotonasi</h3>
                <p>Rentoudu ja lataudu. Ota eväät mukaan: jääkaappi ja mikro ovat käytössäsi, joten sessiota ei tarvitse keskeyttää.</p>
              </article>
              <article className="card">
                <h3>Yhteisö</h3>
                <p>Täällä kiipeilijät kohtaavat, jakavat kokemuksiaan ja kannustavat toisiaan.</p>
                <span className="chip">{site.club.name ?? <Todo>Paikallinen kiipeilyseura</Todo>}</span>
              </article>
            </div>
          </div>
        </section>

        <section id="hinnasto" className="beige">
          <Wave className="wave-top" />
          <div className="container">
            <div className="section-head">
              <span className="tag">Hinnasto</span>
              <h2 className="section-title">Löydä sinulle sopivin tapa kiipeillä</h2>
              <p>Tutustu hinnastoon ja valitse apista sinulle sopivin lipputyyppi.</p>
            </div>
            <div className="price-grid">
              {priceCards.map((card) => (
                <article key={card.title} className={card.featured ? "price-card featured" : "price-card"}>
                  <header>
                    <h3>{card.title}</h3>
                    {card.featured && <span className="chip">Paras valinta</span>}
                  </header>
                  {card.sub && <p className="sub">{card.sub}</p>}
                  {card.rows.map(([label, price]) => (
                    <div className="prow" key={label}>
                      <span>{label}</span>
                      <span className="p">{price ?? <a href="#yhteystiedot">Ota yhteyttä</a>}</span>
                    </div>
                  ))}
                  {card.note && <p className="sub pad">{card.note}</p>}
                </article>
              ))}
            </div>
            <div className="price-notes">
              <p>Alle 7-vuotiaat ilmaiseksi maksavan aikuisen seurassa.</p>
              <p>Hinnat sisältävät alv:n. Varaudu näyttämään alennukseen oikeuttava todistus.</p>
              <div className="links">
                <Ext>Käyttö- ja jäsenehdot</Ext>
                <Ext>Verkkokaupan toimitus- ja maksuehdot</Ext>
              </div>
              <p className="price-cta">
                <Ext className="btn btn-primary">Osta lippu apista</Ext>
              </p>
            </div>
          </div>
        </section>

        <section id="kurssit">
          <div className="container">
            <div className="section-head">
              <span className="tag">Kurssit</span>
              <h2 className="section-title">Tulossa kurssille?</h2>
              <p>Tarkista kurssien hinnat ja ajankohdat. Kurssit varataan varausjärjestelmästä.</p>
            </div>
            <div className="cards">
              <article className="card">
                <span className="chip">Aloittelija</span>
                <h3>Alkeiskurssi</h3>
                <p>Tutustu kiipeilyn perusteisiin ja aloita kiipeilymatkasi turvallisesti ohjatun kurssin avulla. Sisältää sisäänpääsyn, vuokrakengät ja mankan.</p>
                <p className="course-price">{eur(prices.courses.beginner)} <small>sis. alv</small></p>
                <Ext className="btn btn-primary btn-small self-start">Varaa kurssi</Ext>
              </article>
              <article className="card">
                <span className="chip">Keskitaso</span>
                <h3>Tekniikkakurssi</h3>
                <p>Kehitä kiipeilytekniikkaasi 2 × 2 h intensiivikurssilla. Sopii noin 6A–6C-tasolla kiipeilevälle. Pienryhmä, max 8 osallistujaa.</p>
                <p className="course-price">{eur(prices.courses.technique)} <small>sis. alv</small></p>
                <Ext className="btn btn-primary btn-small self-start">Varaa kurssi</Ext>
              </article>
              <article className="card">
                <span className="chip">Junnutreenit</span>
                <h3>Ohjatut treenit</h3>
                <p>Osallistu paikallisen kiipeilyseuran järjestämiin ohjattuihin harrastus- ja kilpatreeneihin.</p>
                <p>
                  {site.club.url ? <Ext href={site.club.url}>{site.club.name}</Ext> : <Todo>Seuran nimi ja linkki</Todo>}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="ukk" className="beige">
          <Wave className="wave-top" />
          <div className="container">
            <div className="section-head">
              <span className="tag">UKK</span>
              <h2 className="section-title">Usein kysyttyä</h2>
            </div>
            <div className="faq">
              {faq.map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="loyda-meidat" className="blue capped">
          <Wave className="wave-top from-beige" />
          <div className="container">
            <div className="section-head">
              <span className="tag">Löydä meidät</span>
              <h2 className="section-title">Näin löydät halliin</h2>
            </div>
            <div className="cards">
              <article className="card">
                <h3>Osoite</h3>
                <p><Todo>{address}</Todo></p>
                <Ext
                  className="btn btn-primary btn-small self-start"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Boulder Lakeus " + address)}`}
                >
                  Avaa kartta
                </Ext>
              </article>
              <article className="card">
                <h3>Pysäköinti</h3>
                <p>{site.parking ?? <Todo>Pysäköintiohjeet</Todo>}</p>
              </article>
              <article className="card">
                <h3>Sisäänkäynti</h3>
                <p>Ovi aukeaa webapilla, kun sinulla on voimassa oleva lippu tai jäsenyys.</p>
              </article>
            </div>
          </div>
          <Wave className="cap-white" />
        </section>

        <section id="yhteystiedot">
          <div className="container">
            <div className="section-head">
              <span className="tag">Yhteystiedot</span>
              <h2 className="section-title">Ota yhteyttä</h2>
            </div>
            <address className="info-grid" style={{ fontStyle: "normal" }}>
              <div className="info"><span className="tag">Sijainti</span><span className="v"><Todo>{address}</Todo></span></div>
              <div className="info"><span className="tag">Aukioloajat</span><span className="v">24/7</span></div>
              <div className="info"><span className="tag">Sähköposti</span><span className="v"><a href={`mailto:${site.email}`}>{site.email}</a></span></div>
              <div className="info">
                <span className="tag">Somessa</span>
                <span className="v">
                  {site.social.length
                    ? site.social.map((u) => <Ext key={u} href={u}>{new URL(u).hostname.replace("www.", "")}</Ext>)
                    : <Todo>Instagram / Facebook</Todo>}
                </span>
              </div>
            </address>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <img src="/assets/logo-negatiivi.svg" alt="Boulder Lakeus" width="96" height="120" />
          <div className="cols">
            <div>
              <h3>Sivusto</h3>
              <ul>
                <li><a href="#tietoa">Tietoa</a></li>
                <li><a href="#hinnasto">Hinnasto</a></li>
                <li><a href="#kurssit">Kurssit</a></li>
                <li><a href="#ukk">UKK</a></li>
                <li><a href="#yhteystiedot">Yhteystiedot</a></li>
              </ul>
            </div>
            <div>
              <h3>Ohjeet ja ehdot</h3>
              <ul>
                <li><Ext>Käyttöohjeet</Ext></li>
                <li><Ext>Käyttö- ja jäsenehdot</Ext></li>
                <li><Ext>Verkkokaupan ehdot</Ext></li>
              </ul>
            </div>
            <div>
              <h3>Sisarhalli</h3>
              <ul>
                <li><Ext href={site.sister.url}>{site.sister.name}</Ext></li>
              </ul>
            </div>
          </div>
          <p className="legal">© {site.name}</p>
        </div>
      </footer>
    </>
  );
}
