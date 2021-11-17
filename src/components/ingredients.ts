import testimg from "../headerimg.png";
import html from "../skills-images/html.png";
import css from "../skills-images/css.png";
import bootstrap from "../skills-images/bootstrap.png";
import tailwind from "../skills-images/tailwind.svg";
import react from "../skills-images/react.png";
import material from "../skills-images/material.svg";
import javascript from "../skills-images/javascript.png";
import jquery from "../skills-images/jquery.svg";
export interface Ingredient {
  icon: any;
  label: string;
}

export const allIngredients = [
  {
    icon: [
      { img: html, title: "HTML" },
      { img: css, title: "CSS" },
      { img: javascript, title: "Javascript" },
      { img: bootstrap, title: "Bootstrap" },
      { img: tailwind, title: "Tailwind" },
      { img: react, title: "React" },
      { img: material, title: "Material UI" },
      { img: jquery, title: "Jquery" },
    ],
    label: "Frontend",
  },
  {
    icon: [
      { img: html, title: "HTML" },
      { img: css, title: "CSS" },
      { img: bootstrap, title: "Bootstrap" },
      { img: tailwind, title: "Tailwind" },
      { img: react, title: "React" },
      { img: material, title: "Material UI" },
    ],
    label: "Backend",
  },
  {
    icon: [
      { img: html, title: "HTML" },
      { img: css, title: "CSS" },
      { img: bootstrap, title: "Bootstrap" },
      { img: tailwind, title: "Tailwind" },
      { img: react, title: "React" },
      { img: material, title: "Material UI" },
    ],
    label: "Database",
  },
  {
    icon: [
      { img: html, title: "HTML" },
      { img: css, title: "CSS" },
      { img: bootstrap, title: "Bootstrap" },
      { img: tailwind, title: "Tailwind" },
      { img: react, title: "React" },
      { img: material, title: "Material UI" },
    ],
    label: "Tools & Others",
  }
];

const [Frontend,Backend,Database,Tools] = allIngredients;
export const initialTabs = [Frontend,Backend,Database,Tools];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
