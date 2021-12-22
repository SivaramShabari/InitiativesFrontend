import { useContext } from "react";
import StoreContext from "../../store";

function WelcomeBanner() {
	const { store } = useContext(StoreContext);
	const time = new Date().getHours();
	return (
		<div className="relative bg-base-300 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
			<div className="relative">
				<h1 className="text-2xl md:text-3xl bg-base-300 font-bold mb-1">
					{time <= 11 && "Good morning"}
					{time >= 12 && time < 17 && "Good afternoon"}
					{time >= 17 && "Good evening"},{" "}
					{store.employee.name || "Employee_name"}. 👋
				</h1>
				<p>
					Here is what's happening with initiatives in{" "}
					<span className="text-primary font-bold">Company name</span> today:
				</p>
			</div>
		</div>
	);
}

export default WelcomeBanner;
