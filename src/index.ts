import { App } from "./App.js";
import { render } from "preact";
import html from "./html.js";

render(html`<${App}/>`, document.getElementById("app"));