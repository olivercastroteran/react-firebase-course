import { BookForm, BookList } from '../components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';

export default function Home() {
  const { user } = useAuthContext();
  const {
    documents: books,
    isPending,
    error,
  } = useCollection('books', ['uid', '==', user.uid]);

  return (
    <div className="App">
      {isPending && <p className="loading">Loading</p>}
      {error && <p className="error">{error}</p>}
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
