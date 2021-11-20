import html from "../skills-images/html.png";
import css from "../skills-images/css.png";
import bootstrap from "../skills-images/bootstrap.png";
import tailwind from "../skills-images/tailwind.svg";
import react from "../skills-images/react.png";
import material from "../skills-images/material.svg";
import javascript from "../skills-images/javascript.png";
import jquery from "../skills-images/jquery.png";
import php from "../skills-images/php.png";
import laravel from "../skills-images/laravel.png";
import codeigniter from "../skills-images/codeigniter.png";
import nodejs from "../skills-images/nodejs.png";
import express from "../skills-images/express.png";
import electron from "../skills-images/electron.png";
import python from "../skills-images/python.png";
import java from "../skills-images/java.png";
import mongodb from "../skills-images/mongodb.png";
import git from "../skills-images/git.png";
import github from "../skills-images/github.png";
import postgresql from "../skills-images/postgresql.png";
import mysql from "../skills-images/mysql.png";
import handlebars from "../skills-images/handlebars.png";
import figma from "../skills-images/figma.png";
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
      { img: php, title: "PHP" },
      { img: laravel, title: "Laravel" },
      { img: codeigniter, title: "Codeigniter" },
      { img: nodejs, title: "Nodejs" },
      { img: express, title: "Express" },
      { img: electron, title: "Electron" },
      { img: python, title: "Python" },
      { img: java, title: "Java" },
      { img: handlebars, title: "Handlebars" },

    ],
    label: "Backend",
  },
  {
    icon: [
      { img: mongodb, title: "MongoDB" },
      { img: mysql , title: "MySQL" },
      { img: postgresql, title: "PostgreSQL" },
    ],
    label: "Database",
  },
  {
    icon: [
      { img: git, title: "Git" },
      { img: github, title: "Github" },
      { img: figma, title: "Figma" },
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
