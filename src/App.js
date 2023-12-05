import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchEvents, fetchEvent } from "./util/HTTP";

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
					{ path: "new", element: <NewEventPage /> },
					{
						path: ":eventId",
						element: <EventDetailPage />,
						loader: fetchEvent,
					},
					{ path: ":eventId/edit", element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
