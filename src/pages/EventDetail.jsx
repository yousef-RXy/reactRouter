import { useLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

export default function EventDetailPage() {
	const data = useLoaderData();
	return <EventItem event={data.event} />;
}
