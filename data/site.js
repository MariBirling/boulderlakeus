// Site-wide facts. Fill in the TODO values before launch.
// Prices follow Boulder Porvoo (sister gym) one-to-one.

export const site = {
  name: "Boulder Lakeus",
  url: "https://boulderlakeus.fi", // TODO: confirm the domain
  bookingUrl: "https://VARAUSJARJESTELMA.example", // TODO: booking system link
  email: "info@boulderlakeus.fi", // TODO: confirm
  phone: null, // TODO: "+358 40 000 0000"
  address: {
    street: "Katuosoite 1", // TODO
    postalCode: "00000", // TODO
    city: "Paikkakunta", // TODO
    country: "FI",
  },
  social: [], // TODO: e.g. "https://www.instagram.com/boulderlakeus/"
  club: { name: null, url: null }, // TODO: local climbing club
  parking: null, // TODO: parking instructions
  sister: { name: "Boulder Porvoo", url: "https://boulderporvoo.fi/" },
};

export const prices = {
  singleVisit: {
    adultWithShoes: 16,
    adult: 14,
    discountWithShoes: 14.4,
    discount: 12.6,
    juniorWithShoes: 9,
  },
  annualMembership: { adult: 580, discountGroup: 522, junior: 406 },
  monthlyCard: { adult: 79, discountGroup: 71.1, junior: 63.2 },
  tenVisitCard: {
    adultWithShoes: 135,
    adult: 129,
    discountWithShoes: 121.5,
    discount: 116.1,
    junior: 85,
  },
  firstTimerCard: { adult: 39, discount: 31.5, junior: 24.5 },
  courses: { beginner: 79, technique: 145 },
  other: { shoeRental: 5, chalkBagRental: 2 },
};

export const eur = (n) =>
  new Intl.NumberFormat("fi-FI", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n) + " €";

const DISCOUNT = "Opiskelija, varusmies, eläkeläinen −10 %";

export const priceCards = [
  {
    title: "Kertakäynti",
    rows: [
      ["Aikuinen, sis. kengät", eur(prices.singleVisit.adultWithShoes)],
      ["Aikuinen", eur(prices.singleVisit.adult)],
      [`${DISCOUNT}, sis. kengät`, eur(prices.singleVisit.discountWithShoes)],
      [DISCOUNT, eur(prices.singleVisit.discount)],
      ["Junnut 7–18 v, sis. kengät", eur(prices.singleVisit.juniorWithShoes)],
    ],
  },
  {
    title: "Vuosijäsen",
    featured: true,
    note: "Katso tarkempi hinnoittelu ja maksuvaihtoehdot apista.",
    rows: [
      ["Aikuinen", "alk. " + eur(prices.annualMembership.adult)],
      [DISCOUNT, "alk. " + eur(prices.annualMembership.discountGroup)],
      ["Junnujäsen 7–18 v", "alk. " + eur(prices.annualMembership.junior)],
    ],
  },
  {
    title: "Kuukausikortti",
    rows: [
      ["Aikuinen", eur(prices.monthlyCard.adult)],
      [DISCOUNT, eur(prices.monthlyCard.discountGroup)],
      ["Junnujäsen 7–18 v", eur(prices.monthlyCard.junior)],
    ],
  },
  {
    title: "10x kertakortti",
    rows: [
      ["Aikuinen, sis. kengät", eur(prices.tenVisitCard.adultWithShoes)],
      ["Aikuinen", eur(prices.tenVisitCard.adult)],
      [`${DISCOUNT}, sis. kengät`, eur(prices.tenVisitCard.discountWithShoes)],
      [DISCOUNT, eur(prices.tenVisitCard.discount)],
      ["Junnut 7–18 v", eur(prices.tenVisitCard.junior)],
    ],
  },
  {
    title: "Ensikertalaisten kortti",
    sub: "3 kertaa, sis. kengät",
    rows: [
      ["Aikuinen", eur(prices.firstTimerCard.adult)],
      [DISCOUNT, eur(prices.firstTimerCard.discount)],
      ["Junnut", eur(prices.firstTimerCard.junior)],
    ],
  },
  {
    title: "Muut",
    rows: [
      ["Kenkävuokra", eur(prices.other.shoeRental)],
      ["Mankkapussin vuokra", eur(prices.other.chalkBagRental)],
      ["Yksityistilaisuus: synttärit, TyKy-päivät ja muut", null],
    ],
  },
];

// Shown on the page and emitted as FAQPage structured data (AEO).
export const faq = [
  {
    q: "Milloin Boulder Lakeus on auki?",
    a: "Boulder Lakeus on auki 24/7, vuoden jokaisena päivänä. Ovi aukeaa webapilla, kun sinulla on voimassa oleva lippu tai jäsenyys.",
  },
  {
    q: "Paljonko kertakäynti maksaa?",
    a: `Aikuisen kertakäynti maksaa ${eur(prices.singleVisit.adult)}, kenkävuokran kanssa ${eur(prices.singleVisit.adultWithShoes)}. Opiskelijat, varusmiehet ja eläkeläiset saavat 10 % alennuksen. Junnut 7–18 v kiipeävät ${eur(prices.singleVisit.juniorWithShoes)}, kengät sisältyvät. Alle 7-vuotiaat pääsevät ilmaiseksi maksavan aikuisen seurassa.`,
  },
  {
    q: "Tarvitsenko kokemusta tai omat välineet?",
    a: "Et tarvitse. Boulderointi tapahtuu ilman köysiä ja varmistusta, ja pehmeät patjat huolehtivat turvallisuudesta. Kiipeilykengät ja mankkapussin voi vuokrata hallilta. Ensikertalaisille on oma kolmen käynnin kortti, joka sisältää kengät.",
  },
  {
    q: "Miten ostan lipun?",
    a: "Rekisteröidy käyttäjäksi varausjärjestelmään ja tallenna webappi puhelimesi kotiruutuun. Sieltä ostat pääsyliput, sarjakortit ja jäsenyydet, ja sama sovellus toimii avaimenasi halliin.",
  },
  {
    q: "Voivatko lapset kiipeillä?",
    a: "Voivat. Alle 14-vuotiaat ovat tervetulleita kiipeilemään aikuisen valvonnassa. Alle 7-vuotiaat kiipeävät ilmaiseksi maksavan aikuisen seurassa.",
  },
  {
    q: "Järjestättekö kursseja?",
    a: `Kyllä. Alkeiskurssi (${eur(prices.courses.beginner)}) opettaa turvallisen kiipeilyn ja perustekniikat. Tekniikkakurssi (${eur(prices.courses.technique)}) on noin 6A–6C-tasolla kiipeileville. Kurssit varataan varausjärjestelmästä.`,
  },
];
