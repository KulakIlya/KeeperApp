import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export function NoteInput({ onAddNewNote }) {
  const [isAddingDescription, setIsAddingDescription] = useState(false);
  const [noteContent, setNoteContent] = useState({
    title: '',
    description: '',
    id: 0,
  });

  function submitHandler(e) {
    e.preventDefault();

    onAddNewNote((currentArray) => [...currentArray, noteContent]);

    setIsAddingDescription((current) => !current);
    setNoteContent((current) => {
      return { ...current, title: '', description: '', id: 0 };
    });
  }

  return (
    <form className="main-form" onSubmit={submitHandler}>
      {isAddingDescription && (
        <input
          required
          type="text"
          placeholder="Title"
          className="main-form__input"
          value={noteContent.title}
          onChange={({ target }) =>
            setNoteContent((current) => {
              return { ...current, title: target.value };
            })
          }
        />
      )}
      <textarea
        required
        className="main-form__input main-form__input--txt-area"
        rows={isAddingDescription ? '3' : '1'}
        placeholder="Take a note..."
        value={noteContent.description}
        onChange={({ target }) => {
          setIsAddingDescription(true);
          setNoteContent((current) => {
            return { ...current, description: target.value, id: Date.now() };
          });
        }}
      ></textarea>
      {isAddingDescription && (
        <button type="submit" className="btn btn--add-note">
          <AddIcon />
        </button>
      )}
    </form>
  );
}
