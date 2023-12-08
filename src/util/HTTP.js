import { json, redirect } from "react-router-dom";

export async function fetchEvents() {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		return json({ message: "Could not fetch events." }, { status: 500 });
	} else {
		return response;
	}
}

export async function fetchEvent({ request, params }) {
	const id = params.eventId;

	const response = await fetch("http://localhost:8080/events/" + id);

	if (!response.ok) {
		throw json(
			{ message: "Could not fetch details for selected event." },
			{ status: 500 }
		);
	} else {
		return response;
	}
}
export async function sendEvent({ request, params }) {
	const method = request.method;

	const fd = await request.formData();
	const data = Object.fromEntries(fd.entries());
	let id;

	let url = "http://localhost:8080/events";

	if (method === "PATCH") {
		id = params.eventId;
		url = "http://localhost:8080/events/" + id;
	} else {
		id = `e${Math.random() * 10}`;
	}
	const event = { id, ...data };

	const response = await fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(event),
	});

	if (response.status === 422) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: "Could not save event." }, { status: 500 });
	} else {
		return redirect(`/events/${id}`);
	}
}

export async function deleteEvent({ request, params }) {
	const eventId = params.eventId;
	const response = await fetch("http://localhost:8080/events/" + eventId, {
		method: request.method,
	});

	if (!response.ok) {
		throw json(
			{ message: "Could not delete event." },
			{
				status: 500,
			}
		);
	}
	return redirect("/events");
}
