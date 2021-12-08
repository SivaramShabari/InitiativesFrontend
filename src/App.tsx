import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="signin" element={<Signin />} />
				<Route path="signup" element={<Signup />} />
				<Route path="*" element={<h1>Page Not Found</h1>} />
			</Routes>
		</>
	);
}

export default App;
