import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="flex flex-col align-middle items-center space-y-4">
			<div className="mt-24 text-center">
				<h1 className="text-7xl my-12 font-extrabold text-primary">
					Welcome to Initiatives
				</h1>
				<h2 className="h2 text-accent my-8">Please signin to continue</h2>
				<Link to="/signin" className="my-5 btn btn-primary w-1/3">
					Signin
				</Link>
			</div>
		</div>
	);
}

export default Home;
