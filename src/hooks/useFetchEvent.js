import { fetchEventById } from '../services/eventsApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const useFetchEvent = () => {
  const { id } = useParams();
  const [event, setEvents] = useState(null);

  useEffect(() => {
    fetchEventById(id).then(setEvents);
  }, [id]);
  return event;
};
