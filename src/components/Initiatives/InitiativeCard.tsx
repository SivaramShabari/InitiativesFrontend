import { Link } from "react-router-dom";
import EditMenu from "../DropdownEditMenu";
import { MdOutlineGroupAdd } from "react-icons/md";
import ModalBlank from "../ModalBasic";
import { useEffect, useState } from "react";
import { initiative } from "../../store/types/Initiative";
import { useUpdateInitiative } from "../../api/Initiative";
import moment from "moment";
function InitiativeCard({ initiative }: { initiative: initiative }) {
	const [groupModalOpen, setInitiativeModalOpen] = useState(false);
	const [form, setform] = useState({
		name: initiative.name,
		desc: initiative.description,
		endDate: initiative.endDate,
	});
	const editInitiative = useUpdateInitiative();
	useEffect(() => {
		editInitiative.isSuccess && setInitiativeModalOpen(false);
	}, [editInitiative.isSuccess]);
	const saveChanges = () => {
		const x = {
			...initiative,
			name: form.name,
			description: form.desc,
		};
		editInitiative.mutate(x);
	};
	return (
		<div className="col-span-full lg:col-span-6 md:col-span-6 sm:col-span-6 xl:col-span-4 bg-base-300 shadow-xl rounded">
			<div
				style={{ minWidth: window.innerWidth / 6 }}
				className="flex flex-col h-full"
			>
				{/* Card top */}
				<div className="flex-grow p-5">
					<div className="flex justify-between items-start ">
						{/* Image + name */}
						<header>
							<div className="inline-flex text-primary hover:text-primary-focus">
								<h2 className="text-2xl leading-snug justify-center font-semibold">
									{initiative.name}
								</h2>
							</div>
						</header>

						{/* Menu button */}
						<EditMenu
							align="right"
							className="relative inline-flex flex-shrink-0 "
						>
							<li>
								<button
									className="font-medium text-sm text-primary hover:text-primary-focus flex py-1 px-3 w-48 border-none"
									onClick={(e) => {
										e.stopPropagation();
										setInitiativeModalOpen(true);
									}}
								>
									Edit initiative properties
								</button>
							</li>
							<li>
								<button
									className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3 border-none"
									onClick={() => {}}
								>
									Remove
								</button>
							</li>
						</EditMenu>
					</div>
					{/* Bio */}
					<div className="w-full pb-4 mt-1 ">
						<div className="text-sm text-primary">
							<div className="flex flex-row mt-2 mr-2 text-neutral-content">
								<span>Subscribers 🔔 : </span>
								<span className="text-accent ml-1">20</span>
							</div>
							<div className="flex flex-row mt-2 mr-2 text-neutral-content">
								<span>Applauds 👏 : </span>
								<span className="text-accent ml-1">20</span>
							</div>
							<div className="flex flex-row mt-2 mr-2 text-neutral-content">
								<span>Hours contributed ⌛ : </span>
								<span className="text-accent ml-1">20</span>
							</div>
						</div>
					</div>
					<div className="mt-2">
						<div className="text-sm mb-3">
							<span className="font-bold text-primary mr-2 mb-2">
								Desciption:
							</span>
							{initiative.description}
						</div>
					</div>
				</div>
				{/* Card footer */}
				<div className="border-t border-neutral-content">
					<div className="flex divide-x divide-gray-200r">
						<Link
							className="block flex-1 text-center text-sm text-primary hover:text-primary-focus font-medium px-3 py-4"
							to={"/initiative/" + initiative.id}
						>
							<div className="flex items-center justify-center ">
								<MdOutlineGroupAdd size={24} fill="#999999" />
								<span className="ml-2 text-primary hover:text-primary-focus">
									Manage initiative
								</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<ModalBlank
				id="initiative"
				modalOpen={groupModalOpen}
				setModalOpen={setInitiativeModalOpen}
				title="Edit initiative"
			>
				<div className="px-5 pt-4 pb-1">
					<div className="space-y-2">
						{/* Start */}
						<div className="my-6">
							<label
								className="block text-sm font-medium mb-1"
								htmlFor="default"
							>
								Initiative Name
							</label>
							<input
								id="default"
								className="input input-primary w-full"
								type="text"
								value={form.name}
								onChange={(e) => setform({ ...form, name: e.target.value })}
							/>
						</div>
					</div>
					<div className="space-y-2">
						<div className="my-6">
							<label
								className="block text-sm font-medium mb-1"
								htmlFor="default"
							>
								Initiative Description
							</label>
							<input
								id="default"
								className="input input-ptimary w-full"
								type="text"
								value={form.desc}
								onChange={(e) => {
									setform({ ...form, desc: e.target.value });
								}}
							/>
						</div>
						<div className="space-y-2">
							<div className="my-6">
								<label
									className="block text-sm font-medium mb-1"
									htmlFor="default"
								>
									End date
								</label>
								<input
									id="default"
									className="input input-ptimary w-full"
									type="date"
									value={moment(form.endDate).format("YYYY-MM-DD")}
									onChange={(e) => {
										setform({
											...form,
											endDate: moment(e.target.value).toDate(),
										});
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="px-5 py-4">
					<div className="flex flex-wrap justify-end space-x-2">
						<button
							className="btn-sm btn-outline btn-primary"
							onClick={(e) => {
								e.stopPropagation();
								setInitiativeModalOpen(false);
							}}
						>
							Cancel
						</button>
						<button
							onClick={() => saveChanges()}
							className="btn-sm btn-primary"
						>
							Save changes
						</button>
					</div>
				</div>
			</ModalBlank>
		</div>
	);
}

export default InitiativeCard;
