import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Header } from './components/Header';
import { NoteInput } from './components/NoteInput';

function App() {
  const [notesArray, setNotesArray] = useState([]);

  return (
    <>
      <Header />
      <NoteInput onAddNewNote={setNotesArray} />
      <NoteList
        notesArray={notesArray}
        onAddNewNote={setNotesArray}
        setNotesArray={setNotesArray}
      />
    </>
  );
}

function NoteList({ notesArray, setNotesArray }) {
  return (
    <ul className="note-list">
      {notesArray.map(({ title, description, id }) => (
        <Note
          title={title}
          description={description}
          key={id}
          noteId={id}
          notesArray={notesArray}
          setNotesArray={setNotesArray}
        />
      ))}
    </ul>
  );
}

function Note({ title, description, id, notesArray, setNotesArray }) {
  function onDeleteNote(noteId) {
    const noteToDelete = notesArray.findIndex(({ id }) => id === noteId);

    setNotesArray((current) => {
      const newArr = [...current];
      newArr.splice(noteToDelete, 1);
      return newArr;
    });
  }

  return (
    <li className="note-list__item">
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        type="button"
        className="btn btn--delete"
        onClick={() => onDeleteNote(id)}
      >
        <DeleteIcon />
      </button>
    </li>
  );
}

export default App;
