import "./styles.css";
import { Form } from "./components/Form";
import { NotesList } from "./components/NotesList";
import { PinnedNotesList } from "./components/PinnedNotesList";

export default function App() {
  return (
    <div className="App">
      <h1>Notes</h1>
      <Form />
      <PinnedNotesList />
      <NotesList />
    </div>
  );
}
