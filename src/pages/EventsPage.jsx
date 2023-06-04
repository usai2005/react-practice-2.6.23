import { fetchEvents } from '../services/eventsApi';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul>
        {events.map(({ name, id }) => {
          return (
            <li key={id}>
              <Link to={id}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default EventsPage;
