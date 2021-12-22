import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Initiative() {
	const [sidebarOpen, setSidebarOpen] = useState<any>(false);
	return (
		<>
			<div className="flex h-screen overflow-hidden">
				{/* Sidebar */}
				<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

				{/* Content area */}
				<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
					{/*  Site header */}
					<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

					<main>
						<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
							Initiative
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default Initiative;
