import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchEvents, fetchEvent, sendEvent, deleteEvent } from "./util/HTTP";

import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import EditEventPage from "./pages/EditEvent";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: fetchEvents,
					},
					{ path: "new", element: <NewEventPage />, action: sendEvent },
					{
						path: ":eventId",
						id: "event-detail",
						loader: fetchEvent,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteEvent,
							},
							{ path: "edit", element: <EditEventPage />, action: sendEvent },
						],
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
