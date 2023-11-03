import { useParams } from "react-router-dom";

export default function EventDetailPage() {
	const params = useParams();
	return <div>{params.eventId}</div>;
}
