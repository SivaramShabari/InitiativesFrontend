import moment from "moment";

function DashboardCard10() {
	return (
		<div className="col-span-full bg-base-200 shadow-lg rounded-sm">
			<header className="px-5 py-4 border-b border-base-100">
				<h2 className="font-semibold text-primary">About Intitiatives</h2>
			</header>
			<div className="p-3">
				{/* Card content */}
				{/* "Today" group */}
				<div>
					<header className="text-xs bg-base-300 uppercase rounded-sm font-semibold p-2">
						Active
					</header>
					<ul className="my-1">
						<li className="flex px-2">
							<div className="w-9 h-9 rounded-full flex-shrink-0 bg-primary my-2 mr-3">
								<svg
									className="w-9 h-9 fill-current text-primary-content"
									viewBox="0 0 36 36"
								>
									<path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
								</svg>
							</div>
							<div className="flex-grow flex items-center border-b border-base-100 text-sm py-2">
								<div className="flex-grow flex ">
									<div className="flex justify-evenly mr-2 w-full">
										Initiative 1 created by{" "}
										<span className="ml-1 flex-grow font-bold text-accent hover:text-accent-focus">
											Employee_name.{" "}
										</span>
										<span className="flex-grow ml-4 pl-4">
											Starting at:{" "}
											<span className="text-primary font-bold">
												{moment().format("lll")}
											</span>
										</span>
										<span className="flex-grow ml-4 pl-4">
											Contributed hours:{" "}
											<span className="text-secondary font-bold">{0}</span>
										</span>
									</div>
									<div className="flex-shrink-0 self-end ml-2">
										<a
											className="font-medium text-accent hover:text-accent-focus"
											href="#0"
										>
											View<span className="hidden sm:inline"> &gt;</span>
										</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				{/* Upcomimg group */}
				<div>
					<header className="text-xs uppercase bg-base-300 rounded-sm font-semibold p-2">
						Upcoming
					</header>
					<ul className="my-1">
						{/* Item */}
						<li className="flex px-2">
							<div className="w-9 h-9 rounded-full flex-shrink-0 bg-primary my-2 mr-3">
								<svg
									className="w-9 h-9 fill-current text-primary-content"
									viewBox="0 0 36 36"
								>
									<path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
								</svg>
							</div>
							<div className="flex-grow flex items-center border-b border-base-100 text-sm py-2">
								<div className="flex-grow flex justify-between">
									<div className="flex justify-evenly mr-2 w-full">
										Initiative 2 created by{" "}
										<span className="ml-1 flex-grow font-bold text-accent hover:text-accent-focus">
											Employee_name.{" "}
										</span>
										<span className="flex-grow ml-4 pl-4">
											Ended at:{" "}
											<span className="text-primary font-bold">
												{moment().format("lll")}
											</span>
										</span>
										<span className="flex-grow ml-4 pl-4">
											Subscribed employees:{" "}
											<span className="text-secondary font-bold">{0}</span>
										</span>
									</div>
									<div className="flex-shrink-0 self-end ml-2">
										<a
											className="font-medium text-accent hover:text-accent-focus"
											href="#0"
										>
											View<span className="hidden sm:inline"> &gt;</span>
										</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default DashboardCard10;
