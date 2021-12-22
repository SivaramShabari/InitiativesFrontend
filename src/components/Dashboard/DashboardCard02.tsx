import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../images/icon-02.svg";

// Import utilities

function DashboardCard02({
	total,
	archived,
}: {
	total: number;
	archived: number;
}) {
	return (
		<div className="flex flex-col col-span-full lg:col-span-6 bg-base-200 shadow-lg rounded-sm">
			<div className="px-5 pt-5">
				<header className="flex justify-between items-start mb-5 border-b border-base-100">
					<h4 className="h4 font-semibold text-primary mb-2">
						Your Initiatives
					</h4>
					<Link
						to="/templates"
						className="text-primary text-sm text-right ml-auto hover:font-bold flex py-1 px-3"
					>
						Go to Your Initiatives &gt;
					</Link>
				</header>

				<div className="flex flex-row">
					<div>
						<div className="text-xs font-semibold text-base-content  uppercase">
							Total
						</div>
						<div className="flex items-start">
							<div className="text-3xl font-bold text-primary  mr-2">
								{total || 0}{" "}
								<span className="text-xs font-medium  text-primary">
									initiaves created by you
								</span>
							</div>
						</div>
						<div className="text-xs font-semibold text-base-content  uppercase mt-2">
							Ended
						</div>
						<div className="flex items-start">
							<div className="text-3xl font-bold  text-neutral-content mr-2">
								{archived || 0}
							</div>
						</div>
						<div className="text-xs font-semibold text-base-content  uppercase mt-2">
							Recently edited:
						</div>
						<div className="flex items-start">
							<div className="mt-2 text-xs font-bold text-neutral-content mr-2 mb-3">
								&gt; Initiative name1
							</div>
						</div>
					</div>
					<div className="flex-shrink ml-auto h-full mt-5">
						<div className="font-semibold w-full text-base-content  text-center my-auto">
							Active
							<div className="ml-3">
								<div className="text-4xl font-bold mr-2 text-primary ">
									{(total || 0) - (archived || 0)}{" "}
								</div>
								<div className="text-xs text-center mr-2 text-primary ">
									currently active initiatives
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Chart built with Chart.js 3 */}
			<div className="flex-grow">
				{/* Change the height attribute to adjust the chart height */}
			</div>
		</div>
	);
}

export default DashboardCard02;
