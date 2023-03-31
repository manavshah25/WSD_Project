import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Card from "./Component/Card";
import Home2 from "./Component/Home2";
import Postcomplain from "./Component/Postcomplain";
import Admin from "./Component/Admin";
// import Register from "./Component/Auth/Register";
// import Home from "./Component/Home/Home";
// import Complain from "./Component/Complaint/Complain";
// import Admin from "./Component/Admin/index"

function App() {

	return (
		<Routes>
			{/* {user && <Route path="/" exact element={<Home />} />} */}
			
			<Route path="/login" exact element={<Login />} />
			<Route path="/" exact element={<Navigate to="/home"/>} />
			<Route path="/home" exact element={<Home2 />} />
		 <Route path="/register" exact element={<Register />} />
		 <Route path="/card" exact element={<Card/>} />
		 <Route path="/post" exact element={<Postcomplain/>} />
		 <Route path="/admin" exact element={<Admin/>} />
			{/* <Route path="/complain" exact element={<Complain/>} />
			<Route path="/admin" exact element={<Admin/>} />  */}
			</Routes>
	);
}

export default App;