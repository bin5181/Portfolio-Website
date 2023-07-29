let currDate = new Date();
let year = currDate.getFullYear() - 2020;

const counterItems = [
  {
    icon: "bi bi-globe",
    count: 10,
    duration: 0.5,
    title: "Websites",
  },
  {
    icon: "bi bi-question-circle-fill",
    count: 800,
    duration: 0.5,
    title: "DSA Problems",
  },
  {
    icon: "bi bi-currency-dollar",
    count: 2500,
    duration: 0.5,
    title: "Questions on Chegg",
  },
  {
    icon: "bi bi-lightbulb-fill",
    count: year,
    duration: 0.5,
    title: "Years of Experience",
  },
];

export default counterItems;
