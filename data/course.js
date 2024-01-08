import config from "../course.json";

const DEFAULT_CONFIG = {
  author: {
    name: "ThePrimeagen",
    company: "Netflix",
  },
  title: "JavaScript Performance",
  subtitle: "It's time to go fast",
  frontendMastersLink: "https://frontendmasters.com/courses/blazingly-fast-js",
  description: "",
  keywords: ["ThePrimeagen", "Live Coding", "TypeScript", "JavaScript", "Golang", "RustLang", "Go", "Rust", "TS", "JS"],
  social: {
    twitter: "ThePrimeagen",
    twitch: "ThePrimeagen",
    youtube: "ThePrimeagen",
  },
  productionBaseUrl: "/",
};

export default function getCourseConfig() {
  return Object.assign({}, DEFAULT_CONFIG, config);
}
