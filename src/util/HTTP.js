export async function fetchEvents() {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) throw new Error(`Failed to fetch Events`);

	const resData = await response.json();

	return resData.events;
}
