import { useContext, useState } from "react";
import { useGetCreatedInitiatives } from "../../api/Initiative";
import Header from "../../components/Header";
import InitiativeCard from "../../components/Initiatives/InitiativeCard";
import Sidebar from "../../components/Sidebar";
import StoreContext from "../../store";
import { initiative } from "../../store/types/Initiative";

function Created() {
	const { store } = useContext(StoreContext);
	const [sidebarOpen, setSidebarOpen] = useState<any>(false);
	const created = useGetCreatedInitiatives(store.employee.uid);
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
							{/* Page header */}
							<div className="sm:flex sm:justify-between sm:items-center mb-5">
								{/* Left: Title */}
								<div className="mb-4 sm:mb-0">
									<h1 className="text-2xl md:text-3xl text-primary font-bold">
										Your initiatives ✨
									</h1>
								</div>
							</div>
							<div className="grid grid-cols-12 gap-6 w-full">
								{created.data?.data.map((initiative: initiative, i: number) => (
									<InitiativeCard key={i} initiative={initiative} />
								))}
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default Created;
