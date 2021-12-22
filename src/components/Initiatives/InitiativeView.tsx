import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useContribute, useSubscribe } from "../../api";
import {
	useGetSubscribedInitiatives,
	useUpdateInitiative,
} from "../../api/Initiative";
import StoreContext, { actions } from "../../store";
import { contribution, employee, subscription } from "../../store/types";
import { initiative } from "../../store/types/Initiative";

function InitiativeView({
	initiative,
	owner,
}: {
	initiative: initiative;
	owner: employee;
}) {
	const update = useUpdateInitiative();
	const { store, dispatch } = useContext(StoreContext);
	const [contributionHours, setContributionHours] = useState(0);
	const [comment, setComment] = useState("");
	const [isContributing, setIsContributing] = useState(false);
	const [isCommenting, setIsCommenting] = useState(false);
	const subscribeApi = useSubscribe();
	const contributeApi = useContribute();
	const subscribed = useGetSubscribedInitiatives(owner?.uid);
	const isSubscribed = !!subscribed.data?.data.find(
		(i: any) => i.id === initiative.id
	);
	const applaud = () => {
		if (!initiative.applauds.includes(store.employee.uid)) {
			update.mutate({
				...initiative,
				applauds: [...initiative.applauds, store.employee.uid],
			});
		} else {
			dispatch(
				actions.toast.addErrorShort("You already applauded this initiative.")
			);
		}
	};

	const contribute = () => {
		const contribution: contribution = {
			initiativeId: initiative.id as string,
			employeeId: owner.uid as string,
			hours: contributionHours,
		};
		contributeApi.mutate(contribution);
	};

	const subscribe = () => {
		if (!isSubscribed) {
			const subscription: subscription = {
				initiativeId: initiative.id as string,
				employeeId: owner.uid as string,
				subscriptionDate: new Date(),
				status: "ACTIVE",
			};
			subscribeApi.mutate(subscription);
		}
	};

	return (
		<>
			<h2 className="h2">{initiative.name}</h2>
			<p className="mt-5">
				<span className="text-lg font-bold text-base-content">
					Created by:{" "}
				</span>
				<span className="ml-2 text-lg font-bold mt-5 inline text-accent">
					{owner?.name}
				</span>
				<span className="text-xs ml-2 font-medium mt-5 inline text-accent">
					{owner?.email}
				</span>
			</p>
			<div className="text-lg font-bold mt-5">
				Applauds:{" "}
				<span className="text-accent ml-2">{initiative.applauds.length}👏</span>
			</div>
			<div className="text-lg font-bold mt-5">
				Total hours of contribution:{" "}
				<span className="text-accent ml-2">{0} hours⌛</span>
			</div>

			<div className="text-lg font-bold mt-5">
				Created at:{" "}
				<span className="text-accent ml-2">{moment().format("lll")}</span>
			</div>
			<div className="text-lg font-bold mt-5">
				Contributions Started at:{" "}
				<span className="text-accent ml-2">{moment().format("lll")}</span>
			</div>
			<div className="text-lg font-bold mt-5">
				End time:{" "}
				<span className="text-accent ml-2">{moment().format("lll")}</span>
			</div>
			<button
				onClick={() => applaud()}
				className="mt-5 border border-accent rounded p-2 text-accent font-bold hover:text-primary hover:border-primary"
			>
				<span className="bg-base-300 text-lg rounded-full">👏</span>{" "}
				<span className="text-sm">Applaud</span>
			</button>
			<button
				onClick={() => {
					setIsCommenting(true);
					setIsContributing(false);
				}}
				className="ml-5 mt-5 border border-accent rounded p-2 text-accent font-bold hover:text-primary hover:border-primary"
			>
				<span className="bg-base-300 text-lg rounded-full">💬</span>{" "}
				<span className="text-sm">Comment</span>
			</button>

			<button
				onClick={() => subscribe()}
				className="ml-5 mt-5 border border-accent rounded p-2 text-accent font-bold hover:text-primary hover:border-primary"
			>
				<span className="bg-base-300 text-lg rounded-full">🔔</span>{" "}
				<span className="text-sm">
					{isSubscribed ? "Unsubscribe" : "Subscribe"}
				</span>
			</button>

			<button
				onClick={() => {
					setIsContributing(true);
					setIsCommenting(false);
				}}
				className="ml-5 mt-5 border border-accent rounded p-2 text-accent font-bold hover:text-primary hover:border-primary"
			>
				<span className="bg-base-300 text-lg rounded-full">✨</span>{" "}
				<span className="text-sm">Contribute</span>
			</button>

			{isCommenting && (
				<>
					<div>
						<div className="mt-5 font-bold text-primary">Comment</div>
						<textarea
							onChange={(e) => setComment(e.target.value)}
							className="textarea mt-2 w-1/3"
							placeholder="Write a comment"
						/>
						<div>
							<button className="block mt-5 btn-sm btn-primary">Comment</button>
							<button
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									setIsCommenting(false);
								}}
								className="block mt-5 btn-sm btn-error ml-2"
							>
								Cancel
							</button>
						</div>
					</div>
				</>
			)}

			{isContributing && (
				<>
					<div className="font-bold mt-5 text-primary">
						How many hours did you contribute?
					</div>
					<input
						type="number"
						onChange={(e) => setContributionHours(parseFloat(e.target.value))}
						placeholder="Number of hours contributed"
						defaultValue={0}
						className="input input-primary mt-2 w-1/3"
					/>
					<div>
						<button className="block mt-5 btn-sm btn-primary">
							Contribute
						</button>
						<button
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								setIsContributing(false);
							}}
							className="block mt-5 btn-sm btn-error ml-2"
						>
							Cancel
						</button>
					</div>
				</>
			)}

			<div className="text-lg font-bold mt-5 rounded">
				<span className="mt-5 mb-5">Contributors</span>
				<table className="table w-1/3 mt-2 text-sm">
					<thead>
						<tr>
							<th>Name</th>
							<th>Hours</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Sivaram</td>
							<td>10</td>
						</tr>
						<tr>
							<td>Shabari</td>
							<td>5</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="text-lg font-bold mt-5 rounded">
				<span className="mt-5 mb-5">Employees</span>
				<table className="table w-1/3 mt-2 text-sm">
					<thead>
						<tr>
							<th>Name</th>
							<th>Joined at</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Sivaram</td>
							<td>{moment().format("lll")}</td>
						</tr>
						<tr>
							<td>Shabari</td>
							<td>{moment().format("lll")}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

export default InitiativeView;
