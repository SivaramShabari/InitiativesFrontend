import { Link } from "react-router-dom";
function DashboardCard01({
	total,
	issued,
	created,
	revoked,
}: {
	total: number;
	issued: number;
	created: number;
	revoked: number;
}) {
	return (
		<div className="flex flex-col col-span-full lg:col-span-6 bg-base-200 shadow-lg rounded-sm">
			<div className="px-5 pt-5">
				<header className="flex justify-between items-start mb-5 border-b border-base-100">
					<h4 className="h4 font-semibold text-primary mb-2">
						All Initiatives
					</h4>
					<Link
						to="/certificates/list"
						className="text-primary text-sm ml-auto hover:font-bold flex py-1 px-3"
					>
						View All &gt;
					</Link>
				</header>
				<div className="flex flex-row">
					<div>
						<div className="text-xs font-semibold text-base-content uppercase">
							Total
						</div>
						<div className="flex items-start text-primary">
							<div className="text-3xl font-bold  mr-2">
								{total || 0}{" "}
								<span className="text-xs font-medium">total inititives</span>
							</div>
						</div>
						<div className="text-xs font-semibold text-neutral-content uppercase mt-2">
							Upcoming
						</div>
						<div className="flex items-start">
							<div className="text-3xl font-bold text-neutral-content mr-2">
								{created || 0}
							</div>
						</div>
						<div className="text-xs font-semibold text-neutral-content uppercase mt-2">
							Ended
						</div>
						<div className="flex items-start mb-2">
							<div className="text-3xl font-bold mr-2 text-error">
								{revoked || 0}{" "}
							</div>
						</div>
					</div>
					<div className="flex-shrink ml-auto h-full mt-5">
						<div className="font-semibold w-full text-neutral-content text-center my-auto">
							Active
							<div className="">
								<div className="text-4xl font-bold mr-2 text-primary">
									{issued || 0}{" "}
								</div>
								<div className="text-xs text-center mr-2 text-primary">
									currently active initiatives
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardCard01;
