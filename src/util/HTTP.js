export async function fetchEvents() {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		throw { message: "couldn't fetch data" };
	} else {
		return response;
	}
}
