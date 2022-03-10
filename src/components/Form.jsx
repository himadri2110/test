import { useNotes } from "../contexts/notes-context";

const Form = () => {
  const { input, setInput, setNotes, formInputs, note, dispatch } = useNotes();
  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log(input, "input in form");

    const itemExists = note.find((item) => item.id === input.id);
    console.log(itemExists, "item exists");

    if (itemExists) {
      dispatch({
        type: "EDIT_NOTE",
        payload: { ...itemExists, title: input.title, content: input.content }
      });
    } else {
      dispatch({ type: "ADD_NOTE", payload: { input } });
      console.log(note);
    }

    setInput(formInputs);
  };

  return (
    <div>
      <form className="form-group" onSubmit={formSubmitHandler}>
        <div className="input-group input input-primary">
          <label className="input-label">Title</label>
          <input
            type="text"
            placeholder="Type here..."
            name="title"
            value={input.title}
            onChange={(e) => {
              console.log(input, "here on form input");
              setInput((prev) => ({ ...prev, title: e.target.value }));
            }}
            required
          />
        </div>

        <div className="input-group input input-primary">
          <label className="input-label">Content</label>
          <textarea
            type="text"
            placeholder="Type here..."
            name="content"
            value={input.content}
            onChange={(e) => {
              setInput((prev) => ({ ...prev, content: e.target.value }));
            }}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

export { Form };
