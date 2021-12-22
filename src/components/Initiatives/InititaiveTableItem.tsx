import moment from "moment";
import { useEffect, useState } from "react";
import { MdOutlineCopyAll } from "react-icons/md";
import { useGetEmployee } from "../../api/Employee";
import { initiative } from "../../store/types/Initiative";
import ModalBasic from "../ModalBasic";
import ModalBig from "../ModalBig";
import InitiativeView from "./InitiativeView";
function InitiativesTableItem({
	initiative,
	filter,
	query,
}: {
	initiative: initiative;
	filter: "all" | "active" | "ended" | "upcoming" | "created";
	query: string;
}) {
	const [basicModalOpen, setBasicModalOpen] = useState<boolean>(false);
	const [enabled, setEnabled] = useState(false);
	const [status, setstatus] = useState<"ACTIVE" | "ENDED" | "UPCOMING">(
		"ACTIVE"
	);
	const owner = useGetEmployee(initiative.ownerId);
	const statusColor = (status: any) => {
		switch (status) {
			case "ACTIVE":
				return "bg-base-100 text-green-500";
			case "UPCOMING":
				return "bg-base-100 text-yellow-500";
			case "ENDED":
				return "bg-base-100 text-red-500";
			default:
				return "bg-gray-100 text-gray-500";
		}
	};

	useEffect(() => {
		if (
			new Date(initiative.startDate) <= new Date() &&
			new Date(initiative.endDate) >= new Date()
		) {
			setstatus("ACTIVE");
		} else if (new Date(initiative.startDate) >= new Date()) {
			setstatus("UPCOMING");
		} else {
			console.log("ended", initiative.endDate, new Date());
			setstatus("ENDED");
		}
	}, [initiative]);

	// TODO copy link of initiative to clipboard on clicking copy icon
	// if (
	// 	(filter === "all" ||
	// 		(filter === "created" &&
	// 			!initiative.endDate &&
	// 			!initiative.isRevoked) ||
	// 		(filter === "issued" && initiative.isIssued && !initiative.isRevoked) ||
	// 		(filter === "revoked" && initiative.isRevoked)) &&
	// 	(recipient?.name.toLowerCase().includes(query.toLowerCase()) ||
	// 		recipient?.email.toLowerCase().includes(query.toLowerCase()) ||
	// 		template.data?.data.name.toLowerCase().includes(query.toLowerCase()) ||
	// 		initiative.id?.toLowerCase().includes(query.toLowerCase()))
	// )
	return (
		<>
			<tr>
				<td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
					<div className="flex items-center">
						<label className="inline-flex">
							<span className="sr-only">Select</span>
							<input
								id={""}
								className="checkbox"
								type="checkbox"
								//onChange={handleClick}
								//checked={isChecked}
							/>
						</label>
					</div>
				</td>
				<td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
					<div className="flex flex-row">
						<button
							onClick={(e) => {
								e.stopPropagation();
								setEnabled(true);
								setBasicModalOpen(true);
							}}
							className="font-bold text-lg text-primary"
						>
							{initiative.name}
						</button>
					</div>
				</td>

				<td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
					<div
						className={`inline-flex text-xs font-medium rounded-full text-center px-2.5 py-0.5 ${statusColor(
							status
						)}`}
					>
						{status}
					</div>
				</td>
				<td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-xs  ">
					<div className="font-bold ">{owner.data?.data.name}</div>
					<div className="font-medium ">{owner.data?.data.email}</div>
				</td>
				<td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-xs">
					<div>
						{status === "UPCOMING" && (
							<span className="text-yellow-500">
								{moment(initiative.createdAt).format("lll")}
							</span>
						)}
						{status === "ACTIVE" && (
							<span className="text-green-600">
								{moment(initiative.createdAt).format("lll")}
							</span>
						)}
						{status === "ENDED" && (
							<span className="text-red-500">
								{moment(initiative.createdAt).format("lll")}
							</span>
						)}
					</div>
				</td>
				<td className="px-2 first:pl-5 last:pr-5 py-3 text-xs whitespace-nowrap text-primary font-bold ">
					<div className="ml-4">10</div>
				</td>
				<td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-sm text-accent font-bold ">
					<div className="flex items-center">
						<div className="ml-3">{initiative.applauds.length} 👏</div>
					</div>
				</td>
				<td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
					<div className="space-x-1">
						<button
							onClick={(e) => {
								e.stopPropagation();
								setBasicModalOpen(true);
							}}
							className="text-neutral-content hover:text-gray-500 rounded-full"
						>
							<span className="sr-only">Edit</span>
							<svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
								<path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
							</svg>
						</button>
					</div>
				</td>
				<ModalBig
					id="basic-modal"
					modalOpen={basicModalOpen}
					setModalOpen={setBasicModalOpen}
					title={"About"}
				>
					<div className="flex flex-col h-full">
						<div className="flex-grow px-5 py-4">
							<InitiativeView
								initiative={initiative}
								owner={owner.data?.data}
							/>
						</div>
						<div className="flex-shrink px-5 py-4">
							<div className="flex flex-wrap justify-end space-x-2">
								<button
									className="btn-sm btn-error"
									onClick={(e) => {
										e.stopPropagation();
										setBasicModalOpen(false);
									}}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</ModalBig>
			</tr>
		</>
	);
	// else return null;
}

export default InitiativesTableItem;
