import { useContext, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import logo from "../images/user.jpg";
import StoreContext from "../store";
import { employee } from "../store/types";
function Account() {
	const [sidebarOpen, setSidebarOpen] = useState<any>(false);
	const { store } = useContext(StoreContext);
	const [form, setform] = useState<employee>(store.employee);

	return (
		<div className="flex h-screen overflow-hidden">
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
				<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
				<main>
					<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
						<div className="mb-8">
							<h1 className="text-2xl md:text-3xl  font-bold">
								Account Settings ✨
							</h1>
						</div>
						<div className="bg-base-200 shadow-xl rounded-sm mb-8">
							<div className="flex flex-col md:flex-row md:-mr-px">
								<div className="flex-grow">
									<div className="p-6 space-y-6">
										<h2 className="text-2xl  font-bold mb-5">My Account</h2>
										<section>
											<div className="flex items-center">
												<div className="mr-4">
													<img
														className="w-20 h-20 rounded-full"
														src={logo}
														width="80"
														height="80"
														alt="User upload"
													/>
												</div>
												<button className="ml-3 btn-sm btn-primary">
													Change
												</button>
											</div>
										</section>
										<section className="w-full lg:w-1/3">
											<h2 className="text-xl leading-snug  font-bold mb-1">
												Your Profile
											</h2>
											<div className="text-sm">Your full name.</div>
											<div className="sm:flex space-y-4 mt-5">
												<div className="w-full">
													<label
														className="block text-sm font-medium mb-1"
														htmlFor="name"
													>
														Name
													</label>
													<input
														id="name"
														className="input input-primary w-full"
														type="text"
														defaultValue={store.employee.name}
													/>
												</div>
											</div>
										</section>
										<section className="w-full lg:w-1/3">
											<h2 className="text-xl leading-snug font-bold mb-1">
												Email
											</h2>
											<div className="text-sm">Your company email address.</div>
											<div className="flex mt-5 w-full ">
												<div className="mr-2 flex-grow">
													<label className="sr-only" htmlFor="email">
														Email
													</label>
													<input
														defaultValue={form.email}
														id="email"
														className="flex-grow w-full input input-primary"
														type="email"
														placeholder="email"
													/>
												</div>
												<button className="btn btn-primary">Change</button>
											</div>
										</section>
										<section>
											<h2 className="text-xl leading-snug  font-bold mb-1">
												Password
											</h2>
											<div className="text-sm">
												You cannot set a password if you have signed up using
												Google sign in.
											</div>
											<div className="mt-5">
												<button className="btn btn-primary">
													Set New Password
												</button>
											</div>
										</section>
										<section className="w-full lg:w-1/3">
											<h2 className="text-xl w-full leading-snug  font-bold mb-1">
												Company
											</h2>
											<div className="text-sm">Your company</div>
											<div className="flex flex-wrap mt-5 w-full">
												<div className="mr-2 flex-grow">
													<label className="sr-only" htmlFor="email">
														compant
													</label>
													<input
														defaultValue={form.company}
														id="company"
														className="w-full input input-primary"
														type="text"
														placeholder="company"
													/>
												</div>
												<button className="btn btn-primary">Change</button>
											</div>
										</section>
									</div>
									<footer>
										<div className="flex flex-col px-6 py-5 border-t border-gray-200">
											<div className="ml-auto my-4 flex self-end">
												<button className="btn btn-error">Cancel</button>
												<button
													onClick={() => {
														//update.mutate(form);
													}}
													className="btn btn-primary ml-3"
												>
													Save Changes
												</button>
											</div>
										</div>
									</footer>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Account;
