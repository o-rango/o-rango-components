import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import logo from "./static/logo-orango.svg";

const mkLoader = page => pageLoader(() => import(`../../../components/${page}.md`)); 


const pages = [
  {
    path: "/",
    title: "Getting Started",
    content: pageLoader(() => import(`./intro.md`))
  },
  { 
    title: "UI components",
    pages: [
      { 
        scripts : ['https://unpkg.com/@o-rango/o-alert@0.1.0/dist/o-alert.js'],
        path: "components/o-alert",
        title: "o-alert",
        content:mkLoader("o-alert/docs/catalog")
      },
      {
        scripts : ['https://unpkg.com/@o-rango/o-button@0.0.1-beta.3/dist/o-button.js'],
        path: "components/o-button",
        title: "o-button",
        content:mkLoader("o-button/docs/catalog")
      }
    ]
  }
];

ReactDOM.render(
  <Catalog
    title="Catalog"
    useBrowserHistory
    logoSrc={logo}
    theme={
      {
        brandColor: "#fd2b2b",
        pageHeadingBackground: "#c33",
      }
    }
    pages={pages}
  />,
  document.getElementById("catalog")
);