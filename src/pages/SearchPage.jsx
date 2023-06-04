import { fetchEventsByName } from '../services/eventsApi';
import { useState, useEffect } from 'react';
import { useSearchParams, Outlet, Link } from 'react-router-dom';

const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '' || query === null) return;

    fetchEventsByName(query).then(setEvents);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {events && (
        <ul>
          {events.map(({ id, name }) => {
            return (
              <li key={id}>
                <Link to={id}>{name}</Link>
              </li>
            );
          })}
        </ul>
      )}
      <Outlet />
    </>
  );
};

export default SearchPage;
