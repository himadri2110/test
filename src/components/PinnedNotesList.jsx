import { Note } from "./Note";
import { useNotes } from "../contexts/notes-context";

const PinnedNotesList = () => {
  const { notes } = useNotes();

  const pinnedNotes = notes.filter((note) => note.isPinned);

  return (
    <div>
      {pinnedNotes.length > 0 ? <h2>Pinned: </h2> : null}

      <div className="notes-wrapper">
        {pinnedNotes
          ? pinnedNotes.map((pinnedNote) => {
              return <Note note={pinnedNote} />;
            })
          : null}
      </div>
    </div>
  );
};

export { PinnedNotesList };
