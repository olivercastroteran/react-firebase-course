import { BookForm, BookList } from '../components';
import { useCollection } from '../hooks/useCollection';

export default function Home() {
  const { documents: books, isPending, error } = useCollection('books');

  return (
    <div className="App">
      {isPending && <p className="loading">Loading</p>}
      {error && <p className="error">{error}</p>}
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
