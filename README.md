# Boulder Lakeus

Boulder Lakeus -kiipeilyhallin verkkosivu. Tehty Next.js:llä (App Router) ja käännetään staattiseksi sivuksi hakukonenäkyvyyttä (SEO) ja tekoälyhakuja (AEO) varten.

Rakenne, ilme ja hinnasto seuraavat sisarhalli Boulder Porvoota. Ajanvaraus hoidetaan ulkoisessa varausjärjestelmässä, johon sivulta linkitetään.

## Kehitys

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # staattinen sivu kansioon out/
```

`out/`-kansion voi julkaista mihin tahansa staattiseen hostingiin (esim. Vercel, Netlify, GitHub Pages tai oma palvelin).

## Missä mikäkin on

- `data/site.js`: yhteystiedot, varauslinkki, hinnat ja UKK. Useimmat muutokset tehdään tänne.
- `app/page.js`: etusivun osiot
- `app/layout.js`: hakukoneiden metatiedot ja Open Graph
- `components/JsonLd.js`: rakenteinen data (SportsActivityLocation + FAQPage)
- `app/sitemap.js`, `app/robots.js`: sitemap.xml ja robots.txt
- `public/assets/`: logot ja jakokuva (og.png)

## Täydennettävät tiedot (`data/site.js`)

- Verkkotunnus (oletus `https://boulderlakeus.fi`)
- Varausjärjestelmän osoite
- Katuosoite ja paikkakunta
- Puhelinnumero, sähköposti ja somekanavat
- Paikallisen kiipeilyseuran nimi ja linkki
- Pysäköintiohjeet

## Ilme

RAL 5020 -sininen `#0B4151`, koivuvaneribeige `#E9E1D1`, fontit Montserrat ja Roboto, täysin musta läpinäkyvä logo vasemmassa yläkulmassa, aaltoreunaiset osiot.
