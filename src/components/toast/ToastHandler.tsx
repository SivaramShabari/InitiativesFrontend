import { useContext } from "react";
import StoreProvider from "../../store";
import Toast from "./Toast";
function ToastHandler() {
	const { store } = useContext(StoreProvider);
	const queue = store.toasts;
	return (
		<div
			style={{
				zIndex: 879879796,
				position: "absolute",
				left: 10,
				marginTop: 60,
			}}
		>
			{queue.map((toast, index) => (
				<Toast
					key={index}
					type={toast.type}
					message={toast.message}
					duration={toast.duration}
				/>
			))}
		</div>
	);
}

export default ToastHandler;
