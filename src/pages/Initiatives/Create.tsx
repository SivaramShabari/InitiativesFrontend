import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useCreateInitiative } from "../../api/Initiative";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Tooltip from "../../components/Tooltip";
import StoreContext from "../../store";
import { initiative } from "../../store/types/Initiative";
function Create() {
	const { store } = useContext(StoreContext);
	const [sidebarOpen, setSidebarOpen] = useState<any>(false);
	const [form, setForm] = useState<initiative>({
		name: "",
		startDate: new Date(),
		endDate: new Date(),
		status: "CREATED",
		applauds: [],
		ownerId: "",
		createdAt: new Date(),
		updatedAt: new Date(),
		description: "",
	});
	const create = useCreateInitiative();
	const submit = () => {
		const initiative: initiative = {
			name: form.name,
			createdAt: new Date(),
			updatedAt: new Date(),
			startDate: form.startDate,
			endDate: form.endDate,
			status: "CREATED",
			applauds: [],
			ownerId: store.employee.uid,
			description: form.description,
		};
		create.mutate(initiative);
	};
	useEffect(() => {
		if (create.isSuccess) window.location.href = "/initiatives/created";
	}, [create.isSuccess]);

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
						<div className="px-4 sm:px-6 lg:px-8 py-8 w-full mx-auto">
							{/* Page header */}
							<div className="sm:flex sm:justify-between sm:items-center mb-5">
								{/* Left: Title */}
								<div className="mb-4 sm:mb-0 w-full">
									<h1 className="h3 md:text-3xl text-primary mb-5">
										Create a new initiative ✨
									</h1>
									<div className="max-w-xl mr-auto">
										<div className="mb-3">
											<label
												className="block text-sm font-medium mb-1"
												htmlFor="default"
											>
												Initiative Name
											</label>
											<input
												id="default"
												onChange={(e) => {
													setForm({ ...form, name: e.target.value });
												}}
												className="input input-primary w-full"
												type="text"
											/>
										</div>
										<div className="mb-3 min-h-16">
											<label
												className="block text-sm font-medium mb-1"
												htmlFor="default"
											>
												Initiative Description
											</label>
											<textarea
												onChange={(e) => {
													setForm({ ...form, description: e.target.value });
												}}
												id="default"
												className="input input-primary w-full "
											/>
										</div>

										<div className="flex flex-row w-full">
											<div className="mr-3 flex-grow">
												<div className="flex items-center justify-between">
													<label
														className="block text-sm font-medium mb-1"
														htmlFor="tooltip"
													>
														Start date
													</label>
													<Tooltip className="ml-2" bg="dark" size="md">
														<div className="text-sm text-gray-200">
															Width of the Initiative in pixels.
														</div>
													</Tooltip>
												</div>
												<input
													id="tooltip"
													className="input input-primary w-full"
													type="date"
													defaultValue={moment(form.startDate).format(
														"YYYY-MM-DD"
													)}
													onChange={(e) => {
														setForm({
															...form,
															startDate: moment(e.target.value).toDate(),
														});
													}}
												/>
											</div>
											<div className="ml-3 flex-grow">
												<div className="flex items-center justify-between">
													<label
														className="block text-sm font-medium mb-1"
														htmlFor="tooltip"
													>
														End date
													</label>
													<Tooltip className="ml-2" bg="dark" size="md">
														<div className="text-sm text-gray-200">
															Height of the Initiative in pixels.
														</div>
													</Tooltip>
												</div>
												<input
													id="tooltip"
													className="input input-primary w-full"
													type="date"
													defaultValue={moment(form.endDate).format(
														"YYYY-MM-DD"
													)}
													onChange={(e) => {
														setForm({
															...form,
															endDate: moment(e.target.value).toDate(),
														});
													}}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<button
								disabled={create.isLoading}
								onClick={(e) => {
									e.preventDefault();
									submit();
								}}
								className={`btn btn-primary ${create.isLoading && "disabled"}`}
							>
								Create New Initiative
							</button>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default Create;
