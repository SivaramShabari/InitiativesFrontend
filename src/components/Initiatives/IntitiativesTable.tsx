import { useState, useEffect } from "react";
import Initiative from "./InititaiveTableItem";
import { initiative } from "../../store/types/Initiative";
function InitiativesTable({
	filter,
	query,
	selectedItems,
	initiatives,
}: {
	filter: "all" | "active" | "ended" | "upcoming" | "created";
	query: string;
	selectedItems: any;
	initiatives: initiative[];
}) {
	initiatives = initiatives?.sort((a, b) => {
		if (a.createdAt < b.createdAt) return 1;
		if (a.createdAt > b.createdAt) return -1;
		return 0;
	});
	return (
		<div className="bg-base-300 shadow-lg rounded-sm relative">
			<header className="px-5 py-4">
				<h2 className="font-semibold text-primary">
					Initiatives <span className="text-secondary font-medium">67</span>
				</h2>
			</header>
			<div>
				{/* Table */}
				<div className="overflow-x-auto">
					<table className="table-auto w-full">
						{/* Table header */}
						<thead className="text-xs font-semibold uppercase text-base-content bg-base-200 border-t border-b border-base-100">
							<tr>
								<th className="px-5 mx-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
									<div className="flex items-center">
										<label className="inline-flex">
											<span className="sr-only">Select all</span>
											<input
												className="checkbox"
												type="checkbox"
												//checked={selectAll}
												//onChange={handleSelectAll}
											/>
										</label>
									</div>
								</th>
								<th className="pl-2 pr-5 last:pr-5 py-3 whitespace-nowrap">
									<div className="font-semibold text-left">Name</div>
								</th>
								<th className="pl-2 pr-5 last:pr-5 py-3 whitespace-nowrap">
									<div className="font-semibold text-left">Status</div>
								</th>
								<th className="pl-2 pr-5 last:pr-5 py-3 whitespace-nowrap">
									<div className="font-semibold text-left">Owner</div>
								</th>
								<th className="pl-2 pr-5 last:pr-5 py-3 whitespace-nowrap">
									<div className="font-semibold text-left">Created on</div>
								</th>
								<th className="pl-2 pr-5 last:pr-5 py-3 whitespace-nowrap">
									<div className="font-semibold text-left">Employees</div>
								</th>
								<th className="pl-2 pr-5 last:pr-5 py-3 whitespace-nowrap">
									<div className="font-semibold text-left">Applauds</div>
								</th>
								<th className="pl-2 pr-5 last:pr-5 py-3 whitespace-nowrap">
									<div className="font-semibold text-left">Actions</div>
								</th>
							</tr>
						</thead>
						{/* Table body */}
						<tbody className="text-sm divide-y divide-base-100">
							{initiatives?.map((initiative: initiative) => {
								return (
									<Initiative
										filter={filter}
										query={query}
										key={initiative.id}
										initiative={initiative}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default InitiativesTable;
