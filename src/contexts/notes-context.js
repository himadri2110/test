import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { nanoid } from "nanoid";
import { v4 as uuid } from "uuid";

const NotesContext = createContext();

// const addNote = (newData) => {
//   console.log("triggered");
//   return {
//     id: uuid(),
//     title: newData.title,
//     content: newData.content,
//     isPinned: false,
//     createdTime: new Date().toLocaleString()
//   };
// };

const reducer = (state, { type, payload }) => {
  console.log("Heyyyy");
  switch (type) {
    case "ADD_NOTE":
      console.log("In add note: ", payload);
      const newNote = {
        id: Math.random(),
        title: payload.input.title,
        content: payload.input.content,
        isPinned: false,
        createdTime: new Date().toLocaleString()
      };
      // debugger;
      // const newNote = addNote(payload.input);
      console.log(newNote, "in ADD_NOTE reducer");
      return [
        ...state,
        {
          id: Math.random(),
          title: payload.input.title,
          content: payload.input.content,
          isPinned: false,
          createdTime: new Date().toLocaleString()
        }
      ];
    case "EDIT_NOTE":
      return [...state].map((item) =>
        item.id === payload.id
          ? {
              ...item,
              title: payload.title,
              content: payload.content
            }
          : item
      );
    default:
      return state;
  }
};

const NotesProvider = ({ children }) => {
  const formInputs = {
    title: "",
    content: ""
  };

  const notesObj = {
    id: "",
    title: "",
    content: "",
    initialBgColor: "#f3f3f3",
    isPinned: true,
    createdTime: ""
  };

  // Reducer......
  const [note, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    console.log(note, "in effect");
  }, [note]);
  const [input, setInput] = useState(formInputs);
  const [notes, setNotes] = useState([]);

  const editNote = (toBeEdited) => {
    console.log(toBeEdited, "edit note in context");
    setInput(toBeEdited);
  };

  const changeBgColor = (bgColor, id) => {
    setNotes((prevNote) => {
      return prevNote.map((note) => {
        if (note.id === id) {
          return { ...note, bgColor: bgColor };
        }
        return note;
      });
    });
  };

  const togglePinNote = (note) => {
    if (note.isPinned) {
      setNotes((notes) =>
        notes.map((eachNote) => {
          if (note.id === eachNote.id) return { ...eachNote, isPinned: false };
          return eachNote;
        })
      );
    } else {
      setNotes((notes) =>
        notes.map((eachNote) => {
          if (note.id === eachNote.id) return { ...eachNote, isPinned: true };
          return eachNote;
        })
      );
    }
  };

  const deleteNote = (note) => {
    setNotes((notes) => notes.filter((eachNote) => eachNote !== note));
  };

  return (
    <NotesContext.Provider
      value={{
        changeBgColor,
        editNote,
        togglePinNote,
        deleteNote,
        formInputs,
        notesObj,
        input,
        setInput,
        notes,
        setNotes,
        note,
        dispatch
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
