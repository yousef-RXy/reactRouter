// import { fetchEvents } from "../util/HTTP";
// import useFetch from "../hooks/useFetch";
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
	// const {
	// 	isLoading,
	// 	fetchedData: fetchedEvents,
	// 	error,
	// } = useFetch(fetchEvents, []);

	// return (
	// 	<>
	// 		<div style={{ textAlign: "center" }}>
	// 			{isLoading && <p>Loading...</p>}
	// 			{error && <p>{error}</p>}
	// 		</div>
	// 		{!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
	// 	</>
	// );

	const data = useLoaderData();
	const events = data.events;

	return <EventsList events={events} />;
}

export default EventsPage;
