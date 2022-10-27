import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="not-found__screen container">
      <h1>¯\_(ツ)_/¯<br/>404. Page not found</h1>
      <Link to="/">Click here to return to the main page</Link>
    </section>
  );
}

export default NotFoundScreen;
