import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

export default function NewsletterSignup() {
	const fetcher = useFetcher();
	const { data, state } = fetcher;

	useEffect(() => {
		if (state === "idle" && data && data.message) {
			console.log(data.message);
		}
	}, [data, state]);

	return (
		<fetcher.Form
			method="post"
			className={classes.newsletter}
			action="/newsletter"
		>
			<input
				type="email"
				placeholder="Sign up for newsletter..."
				aria-label="Sign up for newsletter"
			/>
			<button>Sign up</button>
		</fetcher.Form>
	);
}
