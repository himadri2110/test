import { Note } from "./Note";
import { useNotes } from "../contexts/notes-context";
const NotesList = () => {
  const { note } = useNotes();

  console.log(note, "in noteList comp");
  const unPinnedNotes = note.filter((note) => !note.isPinned);

  const pinnedNotes = note.filter((note) => note.isPinned);

  return (
    <div>
      {unPinnedNotes.length > 0 && pinnedNotes.length > 0 ? (
        <h2>Others: </h2>
      ) : null}

      <div className="notes-wrapper">
        {unPinnedNotes
          ? unPinnedNotes.map((unPinnedNote) => (
              <Note key={unPinnedNote.id} note={unPinnedNote} />
            ))
          : null}
      </div>
    </div>
  );
};

export { NotesList };
