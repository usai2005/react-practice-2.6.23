import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage';
import EventsPage from '../pages/EventsPage';
import EventSubPage from './EventSubPage';
import SearchPage from '../pages/SearchPage';
import EventDetailsPage from '../pages/EventDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>

        <Route path="events/:id/details" element={<EventDetailsPage />} />
        <Route path="search/:id/details" element={<EventDetailsPage />} />
      </Route>
    </Routes>
  );
};
