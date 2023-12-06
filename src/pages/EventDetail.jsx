import { useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

export default function EventDetailPage() {
	const data = useRouteLoaderData("event-detail");
	return <EventItem event={data.event} />;
}
