import { useRef, useEffect } from "react";
import Transition from "./utils/Transition";

function ModalBig({ children, id, title, modalOpen, setModalOpen }: any) {
	const modalContent = useRef<any>(null);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }: any) => {
			if (!modalOpen || modalContent.current.contains(target)) return;
			setModalOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }: any) => {
			if (!modalOpen || keyCode !== 27) return;
			setModalOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	return (
		<>
			{/* Modal backdrop */}
			<Transition
				appear={undefined}
				className="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
				show={modalOpen}
				enter="transition ease-out duration-200"
				enterStart="opacity-0"
				enterEnd="opacity-100"
				leave="transition ease-out duration-100"
				leaveStart="opacity-100"
				leaveEnd="opacity-0"
				aria-hidden="true"
			/>
			{/* Modal dialog */}
			<Transition
				appear={undefined}
				id={id}
				className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6"
				role="dialog"
				aria-modal="true"
				show={modalOpen}
				enter="transition ease-in-out duration-200"
				enterStart="opacity-0 translate-y-4"
				enterEnd="opacity-100 translate-y-0"
				leave="transition ease-in-out duration-200"
				leaveStart="opacity-100 translate-y-0"
				leaveEnd="opacity-0 translate-y-4"
			>
				<div
					ref={modalContent}
					className="bg-base-300 rounded shadow-lg overflow-auto  w-4/5 max-h-full h-full bg-opacity-90 border border-primary"
				>
					{/* Modal header */}
					<div className="px-5 py-3 border-b border-base-100">
						<div className="flex justify-between items-center">
							<div className="font-semibold text-base-content">{title}</div>
							<button
								className="text-base-content-400"
								onClick={(e) => {
									e.stopPropagation();
									setModalOpen(false);
								}}
							>
								<div className="sr-only">Close</div>
								<svg className="absolute w-4 h-4 fill-current">
									<path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
								</svg>
							</button>
						</div>
					</div>
					{children}
				</div>
			</Transition>
		</>
	);
}

export default ModalBig;
