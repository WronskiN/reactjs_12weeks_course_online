import dennis from "./images/dennis.jpg";
import michael from "./images/michael.jpg";
import scotty from "./images/scotty.jpg";

const data = [
  {
    id: 1,
    name: "Michael Jordan",
    dob: "DOB: 17.02.1968",
    info:
      "Amerykański koszykarz występujący na pozycji rzucającego obrońcy, sześciokrotny mistrz NBA, dwukrotny złoty medalista olimpijski, członek Koszykarskiej Galerii Sław. Od 2006 współwłaściciel klubu Charlotte Hornets.",
    imageURL: `${michael}`,
  },
  {
    id: 2,
    name: "Dennis Keith Rodman",
    dob: "DOB: 13.05.1961",
    info:
      "Amerykański zawodowy koszykarz, grający na pozycji silnego skrzydłowego. Występował w NBA w takich zespołach jak Chicago Bulls, Detroit Pistons, San Antonio Spurs, Los Angeles Lakers oraz Dallas Mavericks[2].",
    imageURL: `${dennis}`,
  },
  {
    id: 3,
    name: "Scotty Maurice Pippen",
    dob: "DOB: 25.09.1965",
    info:
      "Amerykański koszykarz, występujący na pozycji niskiego skrzydłowego, sześciokrotny mistrz National Basketball Association z drużyną Chicago Bulls. W 2010 został włączony do Koszykarskiej Galerii Sław im. Jamesa Naismitha.",
    imageURL: `${scotty}`,
  },
];

export default data;
