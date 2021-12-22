import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup";
import PageNotFoundHome from "./pages/PageNotFound";
import Initiative from "./pages/Initiative";
import Initiatives from "./pages/Initiatives/index";
import Settings from "./pages/Settings";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useGetEmployee } from "./api/Employee";
import Create from "./pages/Initiatives/Create";
import Created from "./pages/Initiatives/Created";
import ToastHandler from "./components/toast/ToastHandler";
function App() {
	const location = useLocation();
	const auth = getAuth();
	const [employee, setemployee] = useState<any>({ uid: "" });
	const [employeeStatus, setemployeeStatus] = useState<
		"loading" | "no_employee" | "employee_found"
	>("loading");
	const employeeQuery = useGetEmployee(employee.uid);
	useEffect(() => {
		onAuthStateChanged(auth, (employee_obj) => {
			if (employee_obj) {
				setemployee(employee_obj);
				setemployeeStatus("employee_found");
			} else {
				console.log("employee is null");
				setemployeeStatus("no_employee");
			}
		});
	});
	useEffect(() => {
		if (employee.uid) {
			employeeQuery.refetch();
		}
	}, [employeeStatus]);
	return (
		<>
			<ToastHandler />

			{employeeStatus === "employee_found" && (
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="initiative/:initiativeId" element={<Initiative />} />
					<Route path="initiatives" element={<Initiatives />} />
					<Route path="initiatives/created" element={<Created />} />
					<Route path="initiatives/create/new" element={<Create />} />
					<Route path="settings" element={<Settings />} />
					<Route path="signin" element={<Dashboard />} />
					<Route path="signup" element={<Dashboard />} />
					<Route path="*" element={<PageNotFoundHome />} />
				</Routes>
			)}
			{employeeStatus === "no_employee" && (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="signin" element={<Signin />} />
					<Route path="signup" element={<Signup />} />
					<Route path="*" element={<Home />} />
				</Routes>
			)}
			{employeeStatus === "loading" && (
				<div className="h-screen flex flex-col w-screen">
					<h1 className="text-center h1 text-accent items-center my-auto justify-center">
						Loading...
					</h1>
				</div>
			)}
		</>
	);
}

export default App;
