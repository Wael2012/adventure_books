export interface Book {
  id: string;
  title: string;
  author: string;
  summary: string;
  year?: number;
}

export const books: Book[] = [
  {
    id: "broederband-spookgezichten",
    title: "Broederband: De spookgezichten",
    author: "John Flanagan",
    summary: "Na een zware storm spoelen de Reigers aan op een onbekend eiland. Ze moeten een stam beschermen tegen de mysterieuze 'Spookgezichten'.",
    year: 2016,
  },
  {
    id: "stormbreaker",
    title: "Stormbreaker",
    author: "Anthony Horowitz",
    summary: "De 14-jarige Alex Rider wordt gerekruteerd door MI6 om na de dood van zijn oom een gevaarlijk complot te onderzoeken.",
    year: 2000,
  },
  {
    id: "helden-van-olympus",
    title: "Helden van Olympus",
    author: "Rick Riordan",
    summary: "Een groep halfgoden, zowel Grieks als Romeins, moet samenwerken om de ontwakende oergodin Gaea te stoppen en de wereld te redden.",
    year: 2010,
  },
  {
    id: "verloren-bloem-sjamaan",
    title: "De verloren bloem van de sjamaan",
    author: "Davide Morosinotto",
    summary: "Laila, de dochter van een Finse diplomaat in Peru, gaat op zoek naar een legendarische geneeskrachtige bloem in het Amazonegebied om haar eigen ziekte te genezen.",
    year: 2020,
  },
  {
    id: "twaalf-bevroren-bos",
    title: "Twaalf en het bevroren bos",
    author: "Aisling Fowler",
    summary: "Twaalf, een leerling-jager, begint aan een gevaarlijke zoektocht om een ontvoerd meisje uit haar fort te redden.",
    year: 2021,
  },
  {
    id: "vluchteling",
    title: "Vluchteling",
    author: "Alan Gratz",
    summary: "Drie verhalen van kinderen (Josef in het Duitsland van de jaren '30, Isabel in Cuba in de jaren '90 en Mahmoud in Syrië in 2015) die vluchten voor gevaar en op zoek zijn naar veiligheid.",
    year: 2016,
  },
  {
    id: "haaieneiland",
    title: "Haaieneiland",
    author: "Rob Ruggenberg",
    summary: "Roemer belandt tijdens een 18e-eeuwse expeditie op een gevaarlijk eiland in de Stille Zuidzee, vol haaien en vijandige bewoners.",
    year: 2014,
  },
  {
    id: "skandar-eenhoorndief",
    title: "Skandar en de eenhoorndief",
    author: "A.F. Steadman",
    summary: "Skandar droomt ervan een eenhoornrijder te worden, maar eenhoorns zijn gevaarlijke wezens. Hij moet het eiland redden van een duistere vijand.",
    year: 2022,
  },
  {
    id: "verloren-galjoen",
    title: "Het verloren galjoen",
    author: "Johan Vandevelde",
    summary: "Lissanda, een weesmeisje met toverkrachten, en Valdemar, een cadet met geheugenverlies, werken samen tijdens een oorlog tussen twee naties.",
    year: 2012,
  },
  {
    id: "lampje",
    title: "Lampje",
    author: "Annet Schaap",
    summary: "Lampje, de dochter van een vuurtorenwachter, veroorzaakt per ongeluk een schipbreuk en beleeft daarna avonturen in een mysterieus huis.",
    year: 2016,
  },
];
