import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllInitiatves } from "../../api/Initiative";
import Header from "../../components/Header";
import DeleteButton from "../../components/Initiatives/DeleteButton";
import InitiativesTable from "../../components/Initiatives/IntitiativesTable";
import SearchForm from "../../components/Initiatives/SearchForm";
import Sidebar from "../../components/Sidebar";
import StoreContext from "../../store";
function Initiatives() {
	const [sidebarOpen, setSidebarOpen] = useState<any>(false);
	const { store } = useContext(StoreContext);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState<
		"all" | "active" | "ended" | "upcoming" | "created"
	>("all");
	const [selectedItems, setSelectedItems] = useState<any>([]);
	const handleSelectedItems = (selectedItems: any) => {
		setSelectedItems([...selectedItems]);
		const data: any = {};
	};
	const initiatives = useGetAllInitiatves();
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
										Initiatives ✨
									</h1>
								</div>

								{/* Right: Actions */}
								<div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
									{/* Search form */}
									<SearchForm
										onChange={(e: any) => {
											setQuery(e.target.value);
										}}
										placeholder="Search initiaives..."
									/>
									{/* Add member button */}
									<Link
										to="/initiatives/create/new"
										className="btn-sm btn-primary"
									>
										<svg
											className="w-4 h-4 fill-current opacity-50 flex-shrink-0"
											viewBox="0 0 16 16"
										>
											<path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
										</svg>
										<span className="hidden xs:block ml-2">
											Create initiative
										</span>
									</Link>
								</div>
							</div>

							{/* More actions */}
							<div className="sm:flex sm:justify-between sm:items-center mb-5">
								{/* Left side */}
								<div className="mb-4 sm:mb-0">
									<ul className="flex flex-wrap -m-1">
										<li className="m-1">
											<button
												onClick={() => setFilter("all")}
												className={`inline-flex items-center justify-center text-sm font-medium 
										leading-5 rounded-full px-3 py-1  
										shadow-sm ${
											filter === "all"
												? `bg-primary text-primary-content border-transparent `
												: `shadow-sm bg-base-300 text-bast-content`
										} duration-150 ease-in-out`}
											>
												All{" "}
												<span
													className={`ml-1 ${
														filter === "all"
															? `text-primary-content`
															: `text-primary`
													}`}
												>
													{initiatives.data?.data.length || 0}
												</span>
											</button>
										</li>
										<li className="m-1">
											<button
												onClick={() => setFilter("active")}
												className={`inline-flex items-center justify-center text-sm font-medium 
										leading-5 rounded-full px-3 py-1  
										shadow-sm ${
											filter === "active"
												? `bg-primary text-primary-content border-transparent `
												: ` shadow-sm bg-base-300 text-bast-content`
										} duration-150 ease-in-out`}
											>
												Subscribed{" "}
												<span
													className={`ml-1 ${
														filter === "active"
															? `text-primary-content`
															: `text-primary`
													}`}
												>
													{0}
												</span>
											</button>
										</li>
										<li className="m-1">
											<button
												onClick={() => setFilter("created")}
												className={`inline-flex items-center justify-center text-sm font-medium 
										leading-5 rounded-full px-3 py-1  
										shadow-sm ${
											filter === "created"
												? `bg-primary text-primary-content border-transparent `
												: `shadow-sm bg-base-300 text-bast-content`
										} duration-150 ease-in-out`}
											>
												Created{" "}
												<span
													className={`ml-1 ${
														filter === "created"
															? `text-primary-content`
															: `text-primary`
													}`}
												>
													{0}
												</span>
											</button>
										</li>
										<li className="m-1">
											<button
												onClick={() => setFilter("ended")}
												className={`inline-flex items-center justify-center text-sm font-medium 
										leading-5 rounded-full px-3 py-1  
										shadow-sm ${
											filter === "ended"
												? `bg-primary text-primary-content border-transparent `
												: `shadow-sm bg-base-300 text-bast-content`
										} duration-150 ease-in-out`}
											>
												Ended{" "}
												<span
													className={`ml-1 ${
														filter === "ended"
															? `text-primary-content`
															: `text-primary`
													}`}
												>
													{0}
												</span>
											</button>
										</li>
									</ul>
								</div>
								{/* Right side */}
								<div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
									{/* Delete button */}
									<DeleteButton selectedItems={selectedItems} />
								</div>
							</div>
							{/* Table */}
							<InitiativesTable
								filter={filter}
								query={query}
								initiatives={initiatives.data?.data || []}
								selectedItems={handleSelectedItems}
							/>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default Initiatives;
