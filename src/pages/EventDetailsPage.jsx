import { useFetchEvent } from '../hooks/useFetchEvent';
// import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  const event = useFetchEvent();
  console.log(event);

  return (
    <>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} />
          <p>{event.classifications[0].genre.name}</p>
          <p>{event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};

export default EventDetailsPage;
