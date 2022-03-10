import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { NotesProvider } from "./contexts/notes-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <StrictMode>
  <NotesProvider>
    <App />
  </NotesProvider>,

  /* </StrictMode>, */

  rootElement
);
