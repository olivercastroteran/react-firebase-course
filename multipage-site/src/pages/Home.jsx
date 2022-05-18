import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Home.css';

const Home = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch('http://localhost:3000/articles');

  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles?.map((article) => (
        <div className="card" key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
