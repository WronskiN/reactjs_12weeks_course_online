import image from "../components/assets/paella.jpg";
import {
  heart,
  ellipseV,
  angleDown,
  angleUp,
  shareAlt,
} from "../components/assets/Icons";

const data = [
  {
    id: 1,
    image,
    title: "Shrimp and Chorizo Paella",
    alt: "Pallea dish",
    date: new Date().toDateString(),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.quasi, adipisci, dolore rerum, distinctio molestiae repellat solutaarchitecto nostrum facere? Hic quibusdam asperiores aspernatur",
    paragraph: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia utrepellendus reprehenderit eligendi commodi molestias suscipit odit velitex vel",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia utrepellendus reprehenderit eligendi commodi molestias suscipit odit velitex vel",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia utrepellendus reprehenderit eligendi commodi molestias suscipit odit velitex vel",
    ],
    heart,
    ellipseV,
    angleDown,
    angleUp,
    shareAlt,
  },
];

export { data };
