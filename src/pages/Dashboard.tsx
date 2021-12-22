import { useContext, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WelcomeBanner from "../components/Dashboard/WelcomeBanner";
import StoreContext from "../store";
import DashboardCard01 from "../components/Dashboard/DashboardCard01";
import DashboardCard02 from "../components/Dashboard/DashboardCard02";
import DashboardCard10 from "../components/Dashboard/DashboardCard03";

function Dashboard() {
	const { store, dispatch } = useContext(StoreContext);
	const [sidebarOpen, setSidebarOpen] = useState<any>(false);

	return (
		<>
			<div className="flex h-screen overflow-hidden">
				{/* Sidebar */}
				<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

				{/* Content area */}
				<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
					{/*  Site header */}
					<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

					<main>
						<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
							{/* Welcome banner */}
							<WelcomeBanner />
							<div className="grid grid-cols-12 gap-6">
								<DashboardCard01 total={0} issued={0} created={0} revoked={0} />
								<DashboardCard02 total={0} archived={0} />
								<DashboardCard10 />
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
