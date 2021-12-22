import { useEffect, useState } from "react";
import { toast } from "../../store/types/toast";

function Toast({ message, type }: toast) {
	let text = "",
		border = "";
	switch (type) {
		case "info":
			text = "text-info";
			border = "border-info";
			break;
		case "success":
			text = "text-success";
			border = "border-success";
			break;
		case "warning":
			text = "text-warning";
			border = "border-warning";
			break;
		case "error":
			text = "text-error";
			border = "border-error";
			break;
		default:
			break;
	}
	const [display, setDisplay] = useState(true);
	useEffect(() => {
		const x = setTimeout(() => {
			setDisplay(false);
		}, 3000);
		return () => {
			clearTimeout(x);
		};
	}, []);
	if (display)
		return (
			<div style={{ minWidth: "400px" }} className={`flex p-2`}>
				<div
					className={`w-full bg-neutral bg-opacity-90 px-3 py-2 
                rounded font-bold text-center ${text} border ${border}`}
				>
					{message}
				</div>
			</div>
		);
	else return null;
}

export default Toast;
