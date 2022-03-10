import { useNotes } from "../contexts/notes-context";

const Note = ({ note }) => {
  const { changeBgColor, editNote, togglePinNote, deleteNote } = useNotes();

  const { id, title, content, createdTime, initialBgColor, isPinned } = note;
  console.log(note, "in note card");
  // console.log(note, "in edit note");
  return (
    <div
      className="card-wrapper  card-w-badge"
      style={{ backgroundColor: initialBgColor }}
    >
      <div>
        <div className="card-heading">{title}</div>

        <button className="card-badge" onClick={() => togglePinNote(note)}>
          <div className="span">{isPinned ? "Pinned" : "Pin"}</div>
        </button>
      </div>

      <div className="card-content">{content}</div>

      <div>{createdTime}</div>

      <div className="card-color">
        <button
          className="btn btn-secondary btn-color"
          onClick={() => changeBgColor(initialBgColor, id)}
        ></button>
        <button
          className="btn btn-primary btn-color"
          onClick={() => changeBgColor("#90def8", id)}
        ></button>
        <button
          className="btn btn-success btn-color"
          onClick={() => changeBgColor("#84f084", id)}
        ></button>
        <button
          className="btn btn-warning btn-color"
          onClick={() => changeBgColor("#ffff82", id)}
        ></button>
        <button
          className="btn btn-danger btn-color"
          onClick={() => changeBgColor("#ffa6b3", id)}
        ></button>
      </div>

      <div className="card-action">
        <button className="btn btn-primary" onClick={() => editNote(note)}>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={() => deleteNote(note)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export { Note };
