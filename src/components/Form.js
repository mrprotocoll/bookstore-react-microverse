import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/BooksThunk';
import { v4 as uuidv4 } from 'uuid';
import styles from 'styles/Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title,
          author,
          category: 'devOps',
        }),
      );

      // reset title and author
      setTitle('');
      setAuthor('');
      setErrorMessage('');
    } else {
      setErrorMessage('Book title and author are required');
    }
  };

  return (
    <div className={`container ${styles.form}`}>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author name" />
        <button
          type="submit"
          aria-label="Add todo item"
          className="btn"
          onClick={handleSubmit}
        >
          ADD BOOK
        </button>
      </form>
      <span className="error">{errorMessage}</span>
    </div>

  );
};

export default Form;
