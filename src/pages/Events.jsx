import { fetchEvents } from "../util/HTTP";
import EventsList from "../components/EventsList";
import useFetch from "../hooks/useFetch";

function EventsPage() {
	const {
		isLoading,
		fetchedData: fetchedEvents,
		error,
	} = useFetch(fetchEvents, []);

	return (
		<>
			<div style={{ textAlign: "center" }}>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
			</div>
			{!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
		</>
	);
}

export default EventsPage;
