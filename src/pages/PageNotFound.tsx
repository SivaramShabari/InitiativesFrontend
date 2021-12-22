import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function PageNotFoundHome() {
	const [sidebarOpen, setSidebarOpen] = useState<any>(false);

	return (
		<div className="flex h-screen overflow-hidden">
			{/* Sidebar */}
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			{/* Content area */}
			<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
				{/*  Site header */}
				<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

				{/*  Page content */}
				<main className="flex-grow">
					<section className="relative">
						<div className="max-w-6xl mx-auto px-4 sm:px-6">
							<div className="pt-32 pb-12 md:pt-40 md:pb-20">
								<div className="max-w-3xl mx-auto text-center">
									{/* 404 content */}
									<h1 className="h1 mb-4">
										Oh, No! You stumbled upon a rarity
									</h1>
									<div className="mt-8">
										<Link to="/" className="btn btn-primary">
											Go back home
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

export default PageNotFoundHome;
