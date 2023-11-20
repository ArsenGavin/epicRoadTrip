export const API_URL =
  process.env.NODE_ENV === "development" ? process.env.REACT_APP_DEV_API_URL : process.env.REACT_APP_PROD_API_URL;

export const WEB_APP_URL = process.env.NODE_ENV === "development" ? process.env.REACT_APP_DEV_WEB_APP : process.env.REACT_APP_PROD_WEB_APP;

export const forbiddenNames = ["caca", "pipi", "epitech"];

export const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;

export const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;

export const ADD_FAVORI = "ADD";

export const REMOVE_FAVORI = "REMOVE";

export const BUDGETS = [
  {
    value: 100,
    label: "100€"
  },
  {
    value: 250,
  },
  {
    value: 500,
  },
  {
    value: 1000,
    label: "1000€"
  },
];

export const DISTANCES = [
  {
    value: 100,
    label: "100m"
  },
  {
    value: 250,
  },
  {
    value: 500,
  },
  {
    value: 1000,
  },
  {
    value: 2000,
  },
  {
    value: 5000,
    label: "5000m"
  },
];

export const CURRENCIES = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const LANGUAGES = [
  {
    value: "ENG",
    label: "English",
  },
  {
    value: "FRA",
    label: "Français",
  },
];

export const THEMES = [
  {
    value: "DAR",
    label: "Dark",
  },
  {
    value: "LIG",
    label: "Light",
  },
];

export const TOP_CITY_LIST = [
  {
    name: "Paris",
    country: "France",
    image: "https://picsum.photos/id/1026/500/700",
    description: "Paris, capitale de la France, est une grande ville européenne et un centre mondial de...",
    coordinates: {
      latitude: 48.8589507,
      longitude: 2.2770204
    },
    activities: []
  },
  {
    name: "Londres",
    country: "Royaume-Uni",
    image: "https://picsum.photos/id/1031/500/700",
    description: "Londres, la capitale de l'Angleterre et du Royaume-Uni, est une ville moderne dont l'histoire...",
    coordinates: {
      latitude: 51.5287718,
      longitude: -0.2416804
    },
    activities: []
  },
  {
    name: "Berlin",
    country: "Allemagne",
    image: "https://picsum.photos/id/1047/500/700",
    description: "Berlin est née au XIIIe siècle. Les pans restants du mur de Berlin, sur lesquels des graffitis...",
    coordinates: {
      latitude: 52.5069704,
      longitude: 13.2846501
    },
    activities: []
  },
  {
    name: "Lisbonne",
    country: "Portugal",
    image: "https://picsum.photos/id/1005/500/700",
    description: "Lisbonne est la capitale du Portugal, dotée d'une situation côtière et de collines.",
    coordinates: {
      latitude: 38.7436883,
      longitude: -9.1952226
    },
    activities: []
  },
  {
    name: "Stockholm",
    country: "Suède",
    image: "https://picsum.photos/id/10/500/700",
    description: "Stockholm, la capitale de la Suède, est située sur un vaste archipel de la mer Baltique",
    coordinates: {
      latitude: 59.326242,
      longitude: 17.8419717
    },
    activities: []
  },
  {
    name: "Rome",
    country: "Italie",
    image: "https://picsum.photos/id/1013/500/700",
    description: "Ville cosmopolite dont l'art, l'architecture et la culture de presque 3 000 ans rayonnent...",
    coordinates: {
      latitude: 41.9102415,
      longitude: 12.395915
    },
    activities: []
  }
];