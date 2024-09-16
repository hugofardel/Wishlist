import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Login from "./views/Login.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

const AppRouter = () => {
	const Home = lazy(() => import("./views/Home.tsx"));
	const Account = lazy(() => import("./views/Account.tsx"));



	return (
		<BrowserRouter>
			<Suspense fallback="Loading...">
				<AuthProvider>
					<>
						<Navbar />
						<Routes>
							<Route path="/login" element={<Login />} />
							<Route element={<PrivateRoute />}>
								<Route path="/" element={<Home />} />
								<Route path="/account" element={<Account />} />
								<Route path="*" element={"Error 404"} />
							</Route>
						</Routes>
					</>
				</AuthProvider>
			</Suspense>
		</BrowserRouter>
	);
};

export default AppRouter;